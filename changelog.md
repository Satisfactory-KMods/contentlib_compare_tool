---
## 1.0.0.alpha-phase2-4

**Progression**
- Added Tier 4

**Schematics**
- Update costs for:
    - Slug Hatchery
    - Slug Breeding

**Dedicated Server**
- Added a new dedicated server version
- Note: we havn't work a lot on Multiplayer fixes yet. Loot chests are not synced and some other things are not working as expected.

**Items**
- Rename "Simple Photovoltaic Cell" to "Solar Cell"

**Changes**
- Caterium Heat Sink is now sinkable
- Add missing Slag Cement recipe to the milestone "Modular Miner: Smelting Module" 
- Update diverse building descriptions and costs
- Update diverse item descriptions
- Filtrator:
    - Liquid Slag output of Cold Slag has been changed:
        - 2.4 seconds > 4 seconds
        - 2 per cycle > 3 per cycle
- Brass Pipes:
    - input:
        - Wire 8 > 6
- Modular Frame:
    - Manual Manufacturing Multiplier: 1 > 1.5
- Smart Plating 
    - Manufacturing Duration: 120
    - input:
        - Bronze Plates 16 > 30
        - Rotor 4 > 10
    - output:
        - Smart Plating 2 > 5
- Slag Concrete:
    - input:
        - Cold Slag 10 > 9
- Steel Ingots
    - Manufacturing Duration: 32
    - input:
        - Molten Steel 20m³ > 16m³
        - Magnesium 12 > Crushed Gangue 16m³
    - output:
        - Cold Slag > 6
        - Steel Ingots 60 > 48
        - Flue Gas 20m³ > 16m³
- Automated Wiring
    - input:
        - Cable 27 > 66
- Belt Drive Mk.2
    - input:
        - Molten Brass 15m³ > 16m³
    - output:
        - Cold Slag removed
- Fan Blades
    - input:
        - Brass Plates 12 > 6
- Stator:
    - input:
        - Steel Pipe 2 > 3
        - Tinned Wire 3 > 6
- Molten Brass
    - input:
        - Crushed Zinc 8 > 10
- Molten Steel 
    - input:
        - Hot Steam 6m³ > 8m³
        - Carbon Dust 3 > 8
- Washed Copper
    - output:
        - Slag 5m³ > 4m³
- Washed Iron
    - output:
        - Slag 2m³ > 3m³
- Steel Pipes
    - Manufacturing Duration: 20
    - input:
        - Steel Ingots 15 > 10
        - Silica 6 > Sand 8
    - output:
        - Steel Pipes 10 > 15
- Brass Pipes
    - Manufacturing Duration: 20
    - input:
        - Copper Wire 8 > 12

**Bugfixes**
- Fix naming for washing copper
- Remove one broken Algal Mass node

Generel Information: the renamed items will disappear from the game also related recipes like crushing recipes need to set again
---

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

- Comming soon

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