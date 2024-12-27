import fss from "fs";
import path, { join } from "path";
import fs from "fs/promises";
import { glob } from "glob";
import json5 from "json5";
import { first } from "lodash";
import cloneDeep from "lodash/cloneDeep";
import isEqual from "lodash/isEqual";

const source = await glob("old/**/*.json");
const target = await glob("new/**/*.json");
const differenceDir = "difference";

const meta: {
	file: string;
	action: "add" | "remove" | "change";
}[] = [];

if (fss.existsSync(join(process.cwd(), differenceDir))) {
	await fs.rm(join(process.cwd(), differenceDir), { recursive: true });
}
await fs.mkdir(join(process.cwd(), differenceDir), { recursive: true });

function clearJson(content: string) {
	return content
		.split("\n")
		.map((line) => line.trim())
		.filter((line) => !line.startsWith("//"))
		.join("\n");
}

function getFirstLine(content: string) {
	return content.split("\n").find((line) => line.trim() !== "");
}

for (const file of source) {
	const exists = target.includes(file.replace("old", "new"));

	const fileDir = file
		.replace("new", differenceDir)
		.split(path.win32.sep)
		.join(path.posix.sep)
		.split("/")
		.slice(0, -1)
		.join("/");

	if (!exists) {
		meta.push({ file, action: "remove" });

		if (!fss.existsSync(fileDir)) {
			await fs.mkdir(fileDir, { recursive: true });
		}
		const json = json5.parse(clearJson(await fs.readFile(file, "utf-8")));
		delete json.$schema;
		json.$comment = "This file has been removed, no new version exists";

		await fs.writeFile(
			file.replace("new", differenceDir),
			JSON.stringify(json, null, 4),
		);
		console.log(
			"[!!!FILE REMOVED!!!]",
			fileDir,
			file
				.replace("new", differenceDir)
				.split(path.win32.sep)
				.join(path.posix.sep),
		);
	}
}

for (const file of target) {
	const exists = source.includes(file.replace("new", "old"));

	const fileDir = file
		.replace("new", differenceDir)
		.split(path.win32.sep)
		.join(path.posix.sep)
		.split("/")
		.slice(0, -1)
		.join("/");

	let firstLine;
	if (!exists) {
		meta.push({ file, action: "add" });
		if (!fss.existsSync(fileDir)) {
			await fs.mkdir(fileDir, { recursive: true });
		}
		let json;
		try {
			const c = await fs.readFile(file, "utf-8");
			json = json5.parse(clearJson(c));
			firstLine = json.Class ?? getFirstLine(c);
		} catch (error) {
			console.error(clearJson(await fs.readFile(file, "utf-8")));
			process.exit(1);
		}
		delete json.$schema;
		json.$comment = "This is a new file, no old version exists";

		json.Class = firstLine;
		console.log(
			"[NEW FILE FOUND]",
			fileDir,
			file
				.replace("new", differenceDir)
				.split(path.win32.sep)
				.join(path.posix.sep),
		);
		await fs.writeFile(
			file.replace("new", differenceDir),
			JSON.stringify(json, null, 4),
		);
		continue;
	}

	let oldContent = null as any;
	let newContent = null as any;
	try {
		oldContent = json5.parse(
			clearJson(await fs.readFile(file.replace("new", "old"), "utf-8")),
		);
		const c = await fs.readFile(file, "utf-8");
		newContent = json5.parse(clearJson(c));
		firstLine = newContent.Class ?? getFirstLine(c);
	} catch (error) {
		console.error("[ERR]", file);
		throw error;
	}

	if (!isEqual(oldContent, newContent)) {
		meta.push({ file, action: "change" });

		const changedFields: {
			Class: string | undefined;
			new: Record<string, any>;
			$comment: string;
			demitter1: string;
			old: Record<string, any>;
			demitter2: string;
			original: Record<string, any>;
		} = {
			Class: firstLine,
			$comment: "This file has been changed",
			new: {},
			demitter2:
				"-----------------------------------------------------------------------------------",
			old: {},
			demitter1:
				"-----------------------------------------------------------------------------------",
			original: newContent,
		};

		const keys = Object.keys({ ...oldContent, ...newContent });

		for (const key of keys) {
			// todo make it simpler
			if (!isEqual(oldContent[key], newContent[key])) {
				if (Array.isArray(oldContent[key]) && Array.isArray(newContent[key])) {
					for (const [index, value] of oldContent[key].entries()) {
						if (!isEqual(value, newContent[key][index])) {
							if (typeof newContent[key][index] === "object") {
								if (Array.isArray(newContent[key][index])) {
									for (const [index2, value2] of newContent[key][
										index
									].entries()) {
										if (
											typeof value2 === "object" &&
											!isEqual(value2, oldContent[key][index][index2])
										) {
											value2.$comment = "THIS OBJECT HAS BEEN CHANGED";
										}
									}
								} else {
									newContent[key][index].$comment =
										"THIS OBJECT HAS BEEN CHANGED";
									for (const [key2, value2] of Object.entries(
										newContent[key][index],
									)) {
										if (
											!isEqual(value2, oldContent[key][index][key2]) &&
											Array.isArray(value2) &&
											Array.isArray(oldContent[key][index][key2])
										) {
											for (const [index2, value3] of value2.entries()) {
												if (
													typeof value3 === "object" &&
													!isEqual(value3, oldContent[key][index][key2][index2])
												) {
													value3.$comment = "THIS OBJECT HAS BEEN CHANGED";
												}
											}
										}
									}
								}
							}
						}
					}
				}
				changedFields.new[key] = newContent[key];
				changedFields.old[key] = oldContent[key];
			}
		}

		if (!fss.existsSync(fileDir)) {
			await fs.mkdir(fileDir, { recursive: true });
		}
		changedFields.Class = firstLine;
		await fs.writeFile(
			file.replace("new", differenceDir),
			JSON.stringify(changedFields, null, 4),
		);
		console.log(
			"[FILE CHANGED]",
			fileDir,
			file
				.replace("new", differenceDir)
				.split(path.win32.sep)
				.join(path.posix.sep),
		);
	}
}

await fs.writeFile(
	join(differenceDir, "meta.json"),
	JSON.stringify(meta, null, 4),
);
