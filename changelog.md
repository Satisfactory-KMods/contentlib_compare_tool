## 1.0.0.alpha-phase2-9

**note:**
- This Patch has no Tier 5 content yet we are working on it.

**changes**
- Smelter Module can now attach to the miner for smelting dirt to gangue

**recipes**
- Add Recipes for Molten Tin
- Add 7 alternative recipes
- Impure Copper Ingot
    - input:
        - Crushed Callanite 10 > 8
- Crushed Siterite
    - output: 
        - Gungue 6 > 5
- Modular Heavy Frame
    - input:
        - Steel Beams 16 > 12
- Steel Rods
    - output:
        - Steam: 20m³ > 16m³
        - Cold Slag: 2 > 3
- Carbon Powder:
    - Manufactoring Duration: 6s > 3s
- Molten Brass:
    - Manufactoring Duration: 12s > 10s
    - input:
        - Molten Copper 8m³ > 10m³
        - Crushed Zinc 6 > 5
    - output:
        - Molten Brass 16m³ > 20m³
        - Molten Slag 4m³ > REMOVED
- Molten Copper:
    - Manufactoring Duration: 12s > 10s
    - input:
        - Crushed Copper 24 > 20
    - output:
        - Molten Copper 12m³ > 10m³
        - Molten Slag 4m³ > REMOVED
- Molten Iron:
    - Manufactoring Duration: 24s > 12s
    - output:
        - Molten Slag 4m³ > REMOVED
- Molten Steel:
    - input:
        - Carbon Dust 8 > 4
        - Molten Iron 9m³ > 8m³
        - Steam 8m³ > 12m³
    - output:
        - Molten Slag 5m³ > Flue Gas 5m³
- Cast: Iron Ingot
    - input:
        - Molten Iron 9m³ > 10m³
        - Water 4m³ > 8m³
    - output:
        - Iron Ingot 18 > 24
        - Steam 4m³ > 8m³
- Cast: Copper Ingot
    - Manufactoring Duration: 12s > 15s
    - input:
        - Molten Copper 8m³ > 10m³
        - Water 6m³ > 5m³
    - output:
        - Copper Ingot 16 > 24
        - Steam 6m³ > 5m³
- Cast: Brass Ingot
    - output:
        - Steam 4m³ > 3m³

**bugfixes**
- Potential fix for power fuse trigger when connection a module to the miner
- fix steel pipe recipe 

Generel Information: the renamed items will disappear from the game also related recipes like crushing recipes need to set again
___

## Full Changelog

Huge Rebalance, Faxit improvements, features and a lot of bug fixes.

**Faxit**

- Network Core
    - Renamed to: Storage Network Storage Processor
    - Has now a "new" model
    - Output was removed
    - Is not modular anymore
- FaxIT Input/Output Processor 
    - Is now standalone buildings
    - Has now a "new" model
    - Old buildings were removed (Modular attachments)
    - New mechanic: You can connect multiple buildings to one network but only 8 of them can be active at the same time
- Telecom Tower was added
    - Is the "Power Tower" for the Faxit
- New Cable System
    - You can now connect any building with a input/output to a Faxit network
    - This will unlocked in the late game of SF+ (Tier 9)
    - Please note this is a WIP feature and can be buggy

**Buildings**

- Water Extractor
    - Added a new Mk.2 Water Extractor that extracts 120m³ of water per minute
    - The old Mk.1 Water Extractor is now the new Mk.2 Water Extractor 
    - Update the model of the Mk.1 Water Extractor (By Fluid Extras)
- Air Collector
    - New Resource nodes was added to the world (Toxic Air)
    - They can be extracted with the Air Collector by Placing the building near the node
    - Added the ability to scan for the new resource nodes
    - This nodes can be found where toxic pillars are located

**Items**

Note: All items where renamed will disappear from the game.

- Rename **Stiratite** to **Siterite**
- Rename **Saphirite** to **Callanite**
- Rename **Rubyte** to **Larrussite**
- Rename **Converyor items** to **Belt Drive Mk.X**
- Rename **Satmonium** to **Aurovite**
- Rename **Cryolite** to **Kyalite**
- Rename **Dirty Water** to **Tailings Slurry**
- Rename **Crushed Stone** to **Gangue**
- Rename **Bio Water** to **Algal Mass**
- Rename **CO2** to **Flue Gas**
- Rename **Simple Photovoltaic Cell** to **Solar Cell**
- Update many item descriptions
- Update many item icons
- Update many item meshes
- **Copper Pipes** where removed from the game
- Rename different items references to match there new names (informations for devs)

**Buildings**

- Rename **Bio Water Extractor** to **Algal Mass Extractor**
- Rename **Solidifier and Cooler** to **Reformer**
- Rename **Fluid Conditioner** to **Filtrator**
- Rename **Ore Washer** to **Wet Washer**
- Rename **Boiler Mk.1** to **Steam Boiler Mk.1**
- Rename **CO2 Cooler** to **Flue Gas Stack**
- Rename **Steam Cooler** to **Steam Stack**
- Rename **Boiler Mk.1** to **Steam Boiler Mk.1**
- Rename **Biomass Heater** to **Solid Biomass Heater**
- Update names of mining heads
- Update many building descriptions#
- Water Extractor Mk.1
    - Replaced with mini extractor by Fluid Extras
    - Extracts now 75m³ of water per minute

**Tier 0 (Tutorial)**

- Has 6 Milestones
- Fix order of the milestones

**Tier 1**

- Has 6 Milestones
- Fix order of the milestones

**Tier 2**

- Has 7 Milestones
- Fix order of the milestones

**Tier 3**

- Has 7 Milestones
- Fix order of the milestones

**Tier 4**

- Has 7 Milestones
- Fix order of the milestones

**Tier 5**

- Comming soon

**Tier 6**

- Comming soon

**Tier 7**

- Comming soon

**Tier 8**

- Comming soon

**Tier 9**

- Comming soon
- Is for now the last tier and will be extended in the future there are only some milestones for example the new cable system unlock

**Alternate Recipes**

- Comming soon

**Awsome Shop**

- Is aviable in the game but has currently no dependencies to schematics / unlocks and will be added in the future (maybe with a schematic reset of these)

**MAM**

- Is heavily WIP and will be updated SOON

**Bugfixes**

- Fix Input/Outputs of different buildings to be more consistent (From right to left)
- Fix a bug where the game crash if you go back to the main menu
- Remove one broken Algal Mass node

**Web Wiki**

- Will be updated as soon as Tier 4 is released and the game is more stable
- The wiki page for the beta phase of SF+ 1.0.0 will be: https://dev-wiki.kmods.space/