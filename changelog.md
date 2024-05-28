## 1.0.0.alpha-phase2-8

**changes**
- Update Recipe for Slugslime
- Rename **low energy slug slime** to **slug slime**
- Rename **tinplate** to **tin plate**
- Update building costs for slug hatching
- **WIP:** Farming MAM tree changes und removing gates. Note: There are many Notes with missing recipes and not changed costs!

**recipes**
- Sorter: Quartz Crystal
    - output:
        - Gangue 4 > Sand 8
- High Pressure Diamond
    - Manufacturing Duration: 240 > 120
    - input:
        - Carbon Powder 100 > 50
    - output:
        - Diamon 10 > 5
- Solar Cell
    - input:
        - Zinc Plates 8 > 5
- Sorter: Salt
    - output:
        - Sand 8 > 16
- Crushed Silica
    - Manufacturing Duration: 16 > 15
    - input:
        - Kyalite 3 > 20
    - output:
        - Silica 3 > 9
        - Sand 3 > 8
- Versatile Framework 
    - input:
        - Bronze Frame 2 > 4
        - Steel Rods 25 > 60
    - output:
        - Framework 3 > 6
- Heavy Modular Frame 
    - Manuel Manufacturing Multiplier: 2 > 2.5
    - input:
        - Modular Frame 15 > 8
        - Encased Industrial Beam 12 > 16
        - Brass Pipe 25 > 30
- Motor 
    - Manufacturing Duration: 24 > 48
    - input:
        - Rotor 6 > 12
        - Stator 6 > 12
        - Iron Sheet 10 > 20
        - Steel Bolt 60 > 120
    - output:
        - Motor 4 > 8
- Washed Iron 
    - input:
        - Crushed Siterite 8 > Siterite Ore 8
        - Water 4000 > 5000
- Washed Copper 
    - input:
        - Crushed Callanite 8 > Callanite Ore 8
        - Water 10000 > 8000
- Molten Copper 
    - Manufacturing Duration: 10 > 12
    - input:
        - Crushed Copper 20 > 24
    - output:
        - Molten Copper 10000 > 12000
- Molten Iron
    - Manufacturing Duration: 12 > 24
- Molten Brass 
    - Manufacturing Duration: 20 > 12
    - input:
        - Crushed Zinc 10 > 6
        - Molten Copper 15000 > 8000
    - output:
        - Molten Brass 20000 > 16000
        - Molten Slag 10000 > 6000
- Cast Iron Ingot 
    - input:
        - Molten Iron 12000 > 9000
    - output:
        - Iron Ingot 27 > 18
        - Hot Steam 5000 > 4000
- Cast Copper Ingot 
    - Manufacturing Duration: 24 > 12
    - input:
        - Molten Copper 12000 > 8000
        - Water 4000 > 6000
    - output:
        - Copper Ingot 27 > 16
        - Hot Steam 5000 > 6000
- Steel Bolt
    - Manufacturing Duration: 12 > 24
    - input:
        - Steel Beam 3 > 5
    - output:
        - Steel Bolt 9 > 15
- Steel Beam
    - Manufacturing Duration: 16 > 24
    - input:
        - Steel Ingot 16 > 24
        - Zinc Ingot 4 > 8
    - output:
        - Steel Beam 6 > 9
- Fan Blades
    - Manufacturing Duration: 24 > 40
    - input:
        - Brass Plates 5 > 8
        - Iron Rod 5 > 15
    - output:
        - Fan Blades 3 > 5
- Drum Drive Mk.2
    - input:
        - Stator 5 > 4
        - Molten Brass 16000 > 10000
        - Air 25000 > 20000
- Zinc Ingot
    - output:
        - Zinc Ingot 15 > 10
- Sorter: Crushed Copper
    - output:
        - Magnesium Granules 8 > 10
- Magnesium Granules
    - Manufacturing Duration: 10 > 15
- Bronze Pipe
    - input:
        - Tin Ingot 6 > 15
- Bronze Ingot
    - input:
        - Copper Ingot 10 > 12
- Bronze Frame
    - Manufacturing Duration: 24 > 120
    - input:
        - Bronze Beam 5 > 20
        - Bronze Pipe 9 > 36
    - output:
        - Bronze Frame 1 > 5
- Bronze Beam
    - Manufacturing Duration: 20 > 24
    - output:
        - Bronze Beam 5 > 3
- Modular Frame
    - Manufacturing Duration: 40 > 80
    - input:
        - Bronze Beam 20 > 15
        - Reinforced Iron Plate 4 > 10
    - output:
        - Modular Frame 2 > 4
- Smart Platings
    - Manufacturing Duration: 120 > 80
    - input:
        Rotor: 10 > 5
        Bronze Plates: 30 > 48
    - output:
        Smart Plating: 5 > 3
- Impure Iron Ingot
    - Manufacturing Duration: 30 > 20
    - input
        - Stiratite Ore 20 > 10
    - output
        - Iron Ingot 20 > 10
- Impure Copper Ingot
    - input
        - Callanite Ore 12 > 10
    - output
        - Copper Ingot 12 > 8
- Impure Tin Ingot
    - Manufacturing Duration: 16 > 24
    - input
        - Siterite Ore 24 > 12
    - output
        - Copper Ingot 12 > 6
- Tin Ingot
    - Manufacturing Duration: 4 > 3
    - input
        - Crushed Tin 3 > 1
    - output
        - Copper Ingot 3 > 1
- Copper Busbar
    - Manufacturing Duration: 8 > 20
    - input
        - Copper Rods 4 > 8
    - output
        - Copper Busbar 2 > 5
- Caterium Sheet
    - Manufacturing Duration: 16 > 15
- Hoverpack
    - input:
       - Motor 4 > 15
       - Modular Frame 8 > 10
       - Fan Blade 8 > 16
       - Brass Plate 20 > 40
       - Steel Bolt 75 > 150

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