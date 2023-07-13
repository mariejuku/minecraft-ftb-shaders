# minecraft-ftb-shaders
Minecraft shader properties for FTB

# What is this? 
So I was playing FTB-Direwolf, and I added a shader pack to my minecraft install. The shader's visuals did not apply to the modded blocks -- But by modifying the shader's *block.properties* file, you can support the new blocks. I began making a macro to automate the process... one week later, *this* had happened.

On this site is a tool that makes it easier to update the *block.properties* file of a Minecraft shader pack, in order to support mods and mod packs in a reusable way.
There are many shader packs for Minecraft, and they typically apply visual changes only to vanilla Minecraft blocks. We can change this though.

| *Mod* |↔| *mapping table* |↔| *Shader*|
|--|--|--|--|--|
| ↑Add mods↑ | | | | ↑add shaders↑ |

The tool links maps and shaders such that any supported mod will work with any supported shader.
It can then make a block.properties file that can replace the original shader's block.properties and thereby add all of the mod's new blocks.

