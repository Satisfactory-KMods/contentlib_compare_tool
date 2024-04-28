import  fs  from 'fs/promises';
import  fss  from 'fs';
import {glob} from 'glob'
import path, { join } from 'path';
import isEqual from 'lodash/isEqual';
import json5 from "json5";

const source = await glob('old/**/*.json');
const target = await glob('new/**/*.json');
const differenceDir = 'difference';

const meta: {
    file: string;
    action: 'add' | 'remove' | 'change';
}[] = [];

if(fss.existsSync(join(process.cwd(), differenceDir))) {
    await fs.rm(join(process.cwd(), differenceDir), {recursive: true});
}

function clearJson(content: string) {
    return content.split('\n').map((line) => line.trim()).filter(line => !line.startsWith("//")).join('\n');
}

for(const file of source) {
    const exists = target.includes(file.replace('old', 'new'));

    const fileDir = file.replace('new', differenceDir).split(path.win32.sep).join(path.posix.sep).split('/').slice(0, -1).join('/');

    if(!exists) {
        meta.push({file, action: 'remove'});

        if(!fss.existsSync(fileDir)) {
            await fs.mkdir(fileDir, {recursive: true});
        }
        const json = json5.parse(clearJson(await fs.readFile(file, 'utf-8')));
        delete json.$schema;
        json.$comment = 'This file has been removed, no new version exists';

        await fs.writeFile(file.replace('new', differenceDir), JSON.stringify(json, null, 4));
        console.log('[!!!FILE REMOVED!!!]',fileDir, file.replace('new', differenceDir).split(path.win32.sep).join(path.posix.sep))
    }
} 

for(const file of target) {
    const exists = source.includes(file.replace('new', 'old'));

    const fileDir = file.replace('new', differenceDir).split(path.win32.sep).join(path.posix.sep).split('/').slice(0, -1).join('/');

    if(!exists) {
        meta.push({file, action: 'add'});
        if(!fss.existsSync(fileDir)) {
            await fs.mkdir(fileDir, {recursive: true});
        }
        let json;
        try {
            json = json5.parse(clearJson(await fs.readFile(file, 'utf-8')));
        } catch (error) { 
            console.error(clearJson(await fs.readFile(file, 'utf-8')));
            process.exit(1);
        }
        delete json.$schema;
        json.$comment = 'This is a new file, no old version exists';

        console.log('[NEW FILE FOUND]',fileDir, file.replace('new', differenceDir).split(path.win32.sep).join(path.posix.sep))
        await fs.writeFile(file.replace('new', differenceDir), JSON.stringify(json, null, 4));
        continue;
    }

    const oldContent = json5.parse(clearJson(await fs.readFile(file.replace('new', 'old'), 'utf-8')));
    const newContent = json5.parse(clearJson(await fs.readFile(file, 'utf-8')));


    if(!isEqual(oldContent, newContent)) {
        meta.push({file, action: 'change'});

        const changedFields: {
            old: Record<string, any>,
            demitter1: string;
            new: Record<string, any>,
            $comment: string;
            demitter2: string;
            original: Record<string, any>,
        } = {
            $comment: 'This file has been changed',
            old: {},
            demitter1: '-----------------------------------------------------------------------------------',
            new: {},
            demitter2: '-----------------------------------------------------------------------------------',
            original: oldContent
        };

        const keys = Object.keys({...oldContent, ...newContent});

        for(const key of keys) {
            if(!isEqual(oldContent[key], newContent[key])) {
                changedFields.new[key] = newContent[key];
                changedFields.old[key] = oldContent[key];
            }
        }

        if(!fss.existsSync(fileDir)) {
            await fs.mkdir(fileDir, {recursive: true});
        }
        await fs.writeFile(file.replace('new', differenceDir), JSON.stringify(changedFields, null, 4));
        console.log('[FILE CHANGED]',fileDir, file.replace('new', differenceDir).split(path.win32.sep).join(path.posix.sep))
    }
} 

await fs.writeFile(join(differenceDir, 'meta.json'), JSON.stringify(meta, null, 4));