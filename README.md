# What is this? 
So I was playing FTB-Direwolf, and I added a shader pack to my minecraft install. The shader's visuals did not apply to the modded blocks -- But by modifying the shader's *block.properties* file, we can support the new blocks. I began making a macro to automate the process... one week later, *this* had happened.

### [mariejuku.github.io/minecraft-ftb-shaders](https://mariejuku.github.io/minecraft-ftb-shaders/)

On this site is a tool that makes it easier to update the *block.properties* file of a Minecraft shader pack, in order to support mods and mod packs in a reusable way. It's rough around the edges but it does the job.
There are many shader packs for Minecraft, and they typically apply visual changes only to vanilla Minecraft blocks. We can change this though.

| *Mod* |↔| *mapping table* |↔| *Shader*|
|--|--|--|--|--|
| ↑Add mods↑ | | | | ↑add shaders↑ |

The tool links maps and shaders such that any supported mod will work with any supported shader.
It can then make a block.properties file that can replace the original shader's block.properties and thereby add all of the mod's new blocks.

# How to use the tool:
### Players: 
At the top of the page, select the shader and mods that you are a using. A block.properties file will show up in the box. The text of this can replace that shader's file to apply it's effects to blocks from that mod.
### Mod/Shader devs:
The other fields on the page allow you to quickly generate block strings appropriate for a properties file. This is faster than writing by hand, I find.

# Supporting new mods or shaders:
Mods and shaders both leverage a table of **Shader groups**. A given mod will assign it's blocks to any of these groups, and a given shader will assign those groups to it's block.##### ID numbers. There is an exhausting list of default groups, but additional groups can be added and the tool should pick them up just fine.
Once a new mod or shader has been supported, it's name should be added to the <modstring> or <shaderstring> object on the HTML page of the website in order for it to show up.

# Supporting a new shader:
To support a new shader, place a javascript file under the 'shadermappings' folder in the repository. Title it by an id of your shader (no spaces). The file should export a json object with one key, with the same name. 
As a developer of the shader, your block.properties file will likely have a list of block ids. In the file, associate these block ids with shader groups, and any blocks entered into those groups will be displayed as if they were that block id. Check the example file.
If you're not the shader author, you can still use the original block.properties to determine the appropriate blockid for a group.
![image](https://github.com/mariejuku/minecraft-ftb-shaders/assets/15624495/94923f51-4df4-4646-9a2d-a5efec493f47)

# Supporting a new modpack:
In the context of this tool, 'modpacks' are just an instruction to enable a particular set of mods. To add a new list, please modify the 'instances.js' file.


# Supporting a new mod: 
To support a new mod, place a javascript file under the 'modmappings' folder in the repository.  Title it by the id of your mod -- the string that comes before the : when your mod's items appear in game. Everywhere you reference you mod, please use this same id, because the tool is not smart enough to adapt for different spellings or case. 
The file should export a json object taking the following format:
```
export default {
    blocks: {},
    forms: {}
}
```

The keys and values within *blocks* associate shader groups with blocks your mod has added. The group you choose instructs a shader on how that block should be displayed. Block names are seperated by spaces within the string. It's the block internal name, as displayed by debug mode.
Example:
```
export default {
    blocks: {
        rawstone: "create:asurine create:cut_asurine",
        lapislazuli: "create:polished_cut_asurine create:polished_cut_asurine_slab",
    }
}
```
The above mapping will tell a shader that it should treat the modded block just like it treats the default lapis lazuli block.

When adding a mod's additional content, you only need to include blocks, not entities or items. You also do not need to be exhaustive if you aren't feeling like it; You can probably get away with only adding the most common or easily-visible blocks from the mod. The others will simply render without effects.
An example file is included.
### Macros
You can use the other fields on the tool website to make this process easier. It can generate strings of several block variations at once that can be directly copied into the mapping file.
The rules that govern these text macros are per-mod, and are defined in the *forms: {}* object.
```
forms: {
  group1: {
    base:true,
    prefix: ["small","large"], //adds: small_block, large_block to the string
    suffix: ["slab","bricks","stairs"], //adds: block_slab, block_bricks, block_stairs to the string
    infix: [["smooth","slab"],["chiseled","slab"]] //array of arrays. adds: smooth_block_slab, chiseled_block_slab to the string
  },
  group2: {
    prefix: ["small","large"],
    suffix: ["slab"]
    //above: you don't need to include forms you don't use.
  }
}
```

Every 'group' in forms will show up as a category in the resulting text output. **Mods that use the same groups will have their outputs combined**, which can make things more convenient.
Base: If present and true, the unchanged block name will appear in the string. Good for blocks that are not vanilla variations.
prefix: inserts texts before the block name.
suffix: inserts texts after the block name.
infix: places the block name between texts.

Selecting mods at the top of the page will enable or disable their specific macros or groups from being used in the resulting string.
You can freely add new categories.
You may refer to the example file, but the mapping of the 'create' mod is also an illustrative example of how this works, since it adds new variations for stone-type blocks.

## Name  Macros
This section just contains useful variations for specific blocks, such as the default minecraft colors. These are currently hardcoded within generator.js, but should be moved eventually.

## Default Shader Groups
The shader groups represent the communication between a mod and a shader. Mods and Shaders can both add or request new custom groups, but there's a chance of miscommunication if both sides are not aware of the custom group. 
Below are the default groups that everyone should agree on. This is a reference -- if you are looking for a template to develop on, please copy the shadergroups.js file, which is formatted  much more helpfully for coding than the below list (it is already a json object).

Your shader does not  have to be this specific. A broad shading can be applied to many groups at once within the shadermapping.
```
Waving blocks:
wave //large wave, fixed on bottom. default for grass, fern
smallwave //small wave, fixed on bottom. crops, dead bush, saplings
hangingwave //fixed on top. hanging roots
verticalwave //some shaders implement this as a seamless repeating wave for hanging objects. 
tallgrasslow, tallgrasshigh //top and bottom block of tall plants. Some shaders combine tallgrasshigh and verticalwave.
treeleaves //tree leaves can be made to wave in many shaders.

Wood-type blocks:
oakwood,sprucewood,birchwood,junglewood,acaciawood,darkwood,mangrovewood,crimsonwood,warpedwood,cherrywood,
oakplanks,spruceplanks,birchplanks,jungleplanks,acaciaplanks,darkplanks,mangroveplanks,crimsonplanks,warpedplanks,cherryplanks,
oakdoor,sprucedoor,birchdoor,jungledoor,acaciadoor,darkdoor,mangrovedoor,crimsondoor,warpeddoor,bamboodoor,cherrydoor,

Plant-type blocks:
treeleaves, reeds, vines, dripleaf, waterlily,
underwater  //for underwater plants and seaweeds
seapickle,sealantern,coral,coralblock, //more specific than above
grass, dirt, hay
snowplant  //used for snowy grass, snowy podzol, snow mycelium block
wetsoil //used for watered farmland
bluenylium,rednylium,mushroombrown,mushroomred,mushroomstem,glowlichen,shroomlight,twistingvines,
pumpkin,pumpkinlit,melon,chorusplant,cactus,bamboo,bambooblock,driedkelpblock,honeycomb,
chorusflower, //levels 0-4
chorusflowerfull, //level 5
turtleegg,dragonegg,
cavevinesplant, //no berries
cavevinesplantfruit, //has berries
flowerpot, //flower and sapling
flowerpotmushroom, //azalea, and when containing large models
torchflower,torchflowerpot,funguspot //warped and crimson plants
froglightochre,froglightverdant,froglightpearl,

Stone-type blocks:
rawstone,rawgranite,rawdiorite,rawandesite,rawdeepslate,rawcalcite
smoothstone,smoothgranite,smoothdiorite,smoothandesite,smoothdeepslate
cobblestone,dripstone,
reinforceddeepslate,

Brick blocks:
stonebrick,netherbrick,rednetherbrick,

Other terrain blocks:
sand,sandstone,redsand,redsandstone,blackstone,gildedblackstone,
netherite,netherrack,soulsand,glowstone,boneblock,observer,
terracotta,terracottaglazed,prismarine,prismarinedark,
basalt,ancientdebris,endstone,bedrock,endportalempty,endportalsocketed,
water, lava, fire, soulfire, magma,
snow,ice,packedice,blueice,
concrete,concretepowder,gravel,tuff,clay, //soft clay
chain,cobweb,slime,honey,

Ore-type blocks:
ironbars,irondoor,
ironore,copperore,goldore,diamondore,emeraldore,lapisore,quartzore,
irondeepore,copperdeepore,golddeepore,goldnetherore,diamonddeepore,emeralddeepore,lapisdeepore,
ironraw,copperraw,goldraw,
ironblock,copperblock,goldblock,diamondblock,emeraldblock,lapisblock,quartzblock,amethystblock,redstoneblock,
redstonewireon,redstonewireoff,redstoneoreon,redstoneoreoff,redstonedeeporeoff,redstonedeeporeon,
amethystbud,
obsidian,cryingobsidian,purpur,
azalea,

Contraption-type blocks:
cauldron, watercauldron, snowcauldron, lavacauldron, //cauldron when empty and when containing liquids
brewingstand, anvil, lectern,enchantingtable,chest,endchest,shulkerbox,conduit,beacon,
rail //minecart rail blocks
lever,torch,soultorch,redstonetorch,endrod,lantern,soullantern,campfire,campfirelit,soulcampfirelit,ladder,sign, //placed sign with writing
redstonecomponent,redstonelampon,redstonelampoff,
litfurnace,litblastfurnace,litsmoker,litcandle,
structureblock,noteblock,carpet,bed,command,spawner,
respawnanchorempty, //0 charges
respawnanchor, //1+ charges
sculk,sculkshrieker,
sculksensoroff, //cooldown phase and calibrated inactive
sculksensoron, //uncalibrated active
sculksensoroncalibrated, //calibrated active
portal,endportal,
glass,//clear glass block
glasspane, //clear glass pane
stainedglass, //stained glass block (colored shadow) full block, not a 'pane'
stainedglasspane, //stained glass pane (colored shadow)
tintedglass, //tinted glass (dark shadow)

layertranslucent //used for all blocks identified with 'layer.translucent:block' line within the file
```
