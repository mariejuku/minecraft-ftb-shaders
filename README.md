# minecraft-ftb-shaders
Minecraft shader properties for FTB

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

# Supporting a new shader:
To support a new shader, place a javascript file under the 'shadermappings' folder in the repository. Title it by an id of your shader (no spaces). The file should export a json object with one key, with the same name. 
As a developer of the shader, your block.properties file will likely have a list of block ids. In the file, associate these block ids with shader groups, and any blocks entered into those groups will be displayed as if they were that block id. Check the example file.
