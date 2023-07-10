import {bink} from "./shadermappings/bink.js";
console.log(bink);
    //make page
    mods = $("modstring").html().split(',');
    mods.forEach(element => {
        $("#modtoggles").append(
            `<div class="col-auto px-1"><label for="mod_toggle_${element}"><input type="checkbox" checked class="modtoggle" id="mod_toggle_${element}"/> ${element}</label></div>`
        );
    });

    shadergroup = function (id, name) {
        group = {
            _id: `block.${id}`,
            _name: name
        }
        shadergroups[name] = group;
    };

    //extremely specific shader groupings
    //only support >=11300 for now
    shadergroups = {
        wave: [], //waves more intensely than above. default for grass, fern
        smallwave: [], //crops, dead bush, saplings
        hangingwave: [], //fixed on top. hanging roots
        verticalwave: [],//seamlessly repeated wave for hanging objects. Is actually the same as tallgrasshigh and the arrays get combined
        tallgrasslow: [],
        tallgrasshigh: [],
        dripleaf: [], //dripleaf, lilypad
        vines: [],
        underwater: [],
        treeleaves: [],
        reeds: [],
        brewingstand: [],
        hay: [],
        stonebrick: [],
        anvil: [],
        rail: [],
        cauldron: [],
        watercauldron: [],
        snowcauldron: [],
        lavacauldron: [],
        lever: [],
        lectern: [],
        lava: [],
        fire: [],
        soulfire: [],
        rawstone: [],
        rawgranite: [],
        rawdiorite: [],
        rawandesite: [],
        rawdeepslate: [],
        rawcalcite: [],
        smoothstone: [],
        smoothgranite: [],
        smoothdiorite: [],
        smoothandesite: [],
        smoothdeepslate: [],
        dripstone: [],
        grass: [],
        dirt: [],
        snowplant: [], //used for snowy grass, snowy podzol, snow mycelium block
        wetsoil: [], //used in Complementary's for moist farmland
        netherrack: [],
        bluenylium: [],
        rednylium: [],
        cobblestone: [],
        oakwood: [],
        sprucewood: [],
        birchwood: [],
        junglewood: [],
        acaciawood: [],
        darkwood: [],
        mangrovewood: [],
        crimsonwood: [],
        warpedwood: [],
        cherrywood: [],
        oakplanks: [],
        spruceplanks: [],
        birchplanks: [],
        jungleplanks: [],
        acaciaplanks: [],
        darkplanks: [],
        mangroveplanks: [],
        crimsonplanks: [],
        warpedplanks: [],
        cherryplanks: [],
        bedrock: [],
        sand: [],
        redsand: [],
        sandstone: [],
        redsandstone: [],
        netherite: [],
        ancientdebris: [],
        ironbars: [],
        irondoor: [],
        ironblock: [],
        ironraw: [],
        ironore: [],
        irondeepore: [],
        copperblock: [],
        copperraw: [],
        copperore: [],
        copperdeepore: [],
        goldblock: [],
        goldraw: [],
        goldore: [],
        golddeepore: [],
        goldnetherore: [],
        diamondblock: [],
        diamondore: [],
        diamonddeepore: [],
        amethystblock: [],
        amethystbud: [],
        emeraldblock: [],
        emeraldore: [],
        emeralddeepore: [],
        azalea: [],
        lapisblock: [],
        lapisore: [],
        lapisdeepore: [],
        quartzblock: [],
        quartzore: [],
        obsidian: [],
        purpur: [],
        snow: [],
        packedice: [],
        blueice: [],
        pumpkin: [],
        pumpkinlit: [],
        soulsand: [],
        basalt: [],
        glowstone: [],
        netherbrick: [],
        rednetherbrick: [],
        melon: [],
        endstone: [],
        terracotta: [],
        terracottaglazed: [],
        prismarine: [],
        prismarinedark: [],
        seapickle: [],
        sealantern: [],
        magma: [],
        command: [],
        concrete: [],
        concretepowder: [],
        coral: [],
        coralblock: [],
        cryingobsidian: [],
        blackstone: [],
        gildedblackstone: [],
        waterlily: [],
        torch: [],
        endrod: [],
        chorusplant: [],
        chorusflower: [], //levels 0-4
        chorusflowerfull: [], //level 5
        litfurnace: [],
        cactus: [],
        noteblock: [],
        soultorch: [],
        mushroombrown: [],
        mushroomred: [],
        mushroomstem: [],
        glowlichen: [],
        enchantingtable: [],
        endportalempty: [],
        endportalsocketed: [],
        lantern: [],
        soullantern: [],
        turtleegg: [],
        dragonegg: [],
        litsmoker: [],
        litblastfurnace: [],
        litcandle: [],
        respawnanchorempty: [], //0 charges
        respawnanchor: [], //1+ charges
        redstonewireon: [],
        redstonewireoff: [],
        redstonetorch: [],
        redstoneblock: [],
        redstoneoreoff: [],
        redstoneoreon: [],
        redstonedeeporeoff: [],
        redstonedeeporeon: [],
        cavevinesplant: [], //no berries
        cavevinesplantfruit: [], //has berries
        redstonelampon: [],
        redstonelampoff: [],
        redstonecomponent: [],
        shroomlight: [],
        campfirelit: [],
        soulcampfirelit: [],
        campfire: [],
        observer: [],
        carpet: [],
        boneblock: [],
        honeycomb: [],
        froglightochre: [],
        froglightverdant: [],
        froglightpearl: [],
        reinforceddeepslate: [],
        sculk: [],
        sculkshrieker: [],
        sculksensoroff: [], //cooldown phase and calibrated inactive
        sculksensoron: [], //uncalibrated active
        sculksensoroncalibrated: [], //calibrated active
        spawner: [],
        tuff: [],
        clay: [], //soft clay
        ladder: [], //wood ladder
        gravel: [],
        flowerpot: [], //flower and sapling
        flowerpotmushroom: [], //azalea, 3d model
        structureblock: [],
        chain: [],
        cobweb: [],
        driedkelpblock: [],
        bamboo: [],
        bambooblock: [], //bamboo and scaffolding
        torchflower: [],
        torchflowerpot: [],
        twistingvines: [],
        funguspot: [], //warped and crimson plants
        oakdoor: [],
        sprucedoor: [],
        birchdoor: [],
        jungledoor: [],
        acaciadoor: [],
        darkdoor: [],
        mangrovedoor: [],
        crimsondoor: [],
        warpeddoor: [],
        bamboodoor: [],
        cherrydoor: [],
        stainedglass: [], //stained glass block (colored shadow) full block, not a 'pane'
        stainedglasspane: [], //stained glass pane (colored shadow)
        tintedglass: [], //tinted glass (dark shadow)
        slime: [],
        honey: [],
        portal: [], //nether portal
        endportal: [],
        water: [],
        ice: [],
        glass: [],//clear glass block
        glasspane: [], //clear glass pane
        beacon: [],
        sign: [], //placed sign with writing
        chest: [],
        endchest: [],
        shulkerbox: [],
        conduit: [],
        layertranslucent: []
    }

    shadermapping = {
        complementaryreimagined: {
            "block.10000": "dripleaf",
            "block.10004": "wave smallwave tallgrasslow",
            "block.10008": "treeleaves",
            "block.10012": "vines",
            "block.10016": "reeds",
            "block.10020": "tallgrasshigh verticalwave",
            "block.10024": "brewingstand",
            "block.10028": "hay",
            "block.10032": "stonebrick",
            "block.10036": "anvil",
            "block.10040": "rail",
            "block.10044": "cauldron",
            "block.10048": "watercauldron",
            "block.10052": "snowcauldron",
            "block.10056": "lavacauldron",
            "block.10060": "lever",
            "block.10064": "lectern",
            "block.10068": "lava",
            "block.10072": "fire",
            "block.10076": "soulfire",
            "block.10080": "rawstone smoothstone",
            "block.10084": "rawgranite",
            "block.10088": "rawdiorite",
            "block.10092": "rawandesite",
            "block.10096": "smoothgranite",
            "block.10100": "smoothdiorite",
            "block.10104": "smoothandesite",
            "block.10108": "rawdeepslate",
            "block.10112": "smoothdeepslate",
            "block.10116": "rawcalcite",
            "block.10120": "dripstone",
            "block.10124": "snowplant",
            "block.10128": "dirt",
            "block.10132": "grass",
            "block.10136": "wetsoil",
            "block.10140": "netherrack",
            "block.10144": "bluenylium",
            "block.10148": "rednylium",
            "block.10152": "cobblestone",
            "block.10156": "oakplanks",
            "block.10160": "oakwood",
            "block.10164": "spruceplanks",
            "block.10168": "sprucewood",
            "block.10172": "birchplanks",
            "block.10176": "birchwood",
            "block.10180": "jungleplanks",
            "block.10184": "junglewood",
            "block.10188": "acaciaplanks",
            "block.10192": "acaciawood",
            "block.10196": "darkplanks",
            "block.10200": "darkwood",
            "block.10204": "mangroveplanks",
            "block.10208": "mangrovewood",
            "block.10212": "crimsonplanks",
            "block.10216": "crimsonwood",
            "block.10220": "warpedplanks",
            "block.10224": "warpedwood",
            "block.10228": "bedrock",
            "block.10232": "sand",
            "block.10236": "redsand",
            "block.10240": "sandstone",
            "block.10244": "redsandstone",
            "block.10248": "netherite",
            "block.10252": "ancientdebris",
            "block.10256": "ironbars",
            "block.10260": "irondoor",
            "block.10264": "ironblock",
            "block.10268": "ironraw",
            "block.10272": "ironore",
            "block.10276": "irondeepore",
            "block.10280": "copperraw",
            "block.10284": "copperore",
            "block.10288": "copperdeepore",
            "block.10292": "copperblock",
            "block.10296": "goldraw",
            "block.10300": "goldore",
            "block.10304": "golddeepore",
            "block.10308": "goldnetherore",
            "block.10312": "goldblock",
            "block.10316": "diamondblock",
            "block.10320": "diamondore",
            "block.10324": "diamonddeepore",
            "block.10328": "amethystblock",
            "block.10332": "amethystbud",
            "block.10336": "emeraldblock",
            "block.10340": "emeraldore",
            "block.10344": "emeralddeepore",
            "block.10348": "azalea",
            "block.10352": "lapisblock",
            "block.10356": "lapisore",
            "block.10360": "lapisdeepore",
            "block.10364": "quartzblock",
            "block.10368": "quartzore",
            "block.10372": "obsidian",
            "block.10376": "purpur",
            "block.10380": "snow",
            "block.10384": "packedice",
            "block.10388": "blueice",
            "block.10392": "pumpkin",
            "block.10396": "pumpkinlit",
            "block.10400": "seapickle",
            "block.10404": "soulsand",
            "block.10408": "basalt",
            "block.10412": "glowstone",
            "block.10416": "netherbrick",
            "block.10420": "rednetherbrick",
            "block.10424": "melon",
            "block.10428": "endstone",
            "block.10432": "terracotta",
            "block.10436": "terracottaglazed",
            "block.10440": "prismarine",
            "block.10444": "prismarinedark",
            "block.10448": "sealantern",
            "block.10452": "magma",
            "block.10456": "command",
            "block.10460": "concrete",
            "block.10464": "concretepowder",
            "block.10468": "coralblock",
            "block.10472": "coral",
            "block.10476": "cryingobsidian",
            "block.10480": "blackstone",
            "block.10484": "gildedblackstone",
            "block.10488": "waterlily",
            "block.10496": "torch",
            "block.10500": "endrod",
            "block.10504": "chorusplant",
            "block.10508": "chorusflower",
            "block.10512": "chorusflowerfull",
            "block.10516": "litfurnace",
            "block.10520": "cactus",
            "block.10524": "noteblock",
            "block.10528": "soultorch",
            "block.10532": "mushroombrown",
            "block.10536": "mushroomred",
            "block.10540": "mushroomstem",
            "block.10544": "glowlichen",
            "block.10548": "enchantingtable",
            "block.10552": "endportalempty",
            "block.10556": "endportalsocketed",
            "block.10560": "lantern",
            "block.10564": "soullantern",
            "block.10568": "turtleegg",
            "block.10572": "dragonegg",
            "block.10576": "litsmoker",
            "block.10580": "litblastfurnace",
            "block.10584": "litcandle",
            "block.10588": "respawnanchorempty",
            "block.10592": "respawnanchor",
            "block.10596": "redstonewireon",
            "block.10600": "redstonewireoff",
            "block.10604": "redstonetorch",
            "block.10608": "redstoneblock",
            "block.10612": "redstoneoreoff",
            "block.10616": "redstoneoreon",
            "block.10620": "redstonedeeporeoff",
            "block.10624": "redstonedeeporeon",
            "block.10628": "cavevinesplant",
            "block.10632": "cavevinesplantfruit",
            "block.10636": "redstonelampoff",
            "block.10640": "redstonelampon",
            "block.10644": "redstonecomponent",
            "block.10648": "shroomlight",
            "block.10652": "campfirelit",
            "block.10656": "soulcampfirelit",
            "block.10660": "campfire",
            "block.10664": "observer",
            "block.10668": "carpet",
            "block.10672": "boneblock",
            "block.10676": "honeycomb",
            "block.10680": "froglightochre",
            "block.10684": "froglightverdant",
            "block.10688": "froglightpearl",
            "block.10692": "reinforceddeepslate",
            "block.10696": "sculk",
            "block.10700": "sculkshrieker",
            "block.10704": "sculksensoron",
            "block.10708": "spawner",
            "block.10712": "tuff",
            "block.10716": "clay",
            "block.10720": "ladder",
            "block.10724": "gravel",
            "block.10728": "flowerpotmushroom",
            "block.10732": "flowerpot",
            "block.10736": "structureblock",
            "block.10740": "chain",
            "block.10744": "cobweb",
            "block.10748": "driedkelpblock",
            "block.10752": "bamboo",
            "block.10756": "bambooblock",
            "block.10760": "cherryplanks",
            "block.10764": "cherrywood",
            "block.10768": "torchflower",
            "block.10772": "torchflowerpot",
            "block.10776": "twistingvines",
            "block.10780": "funguspot",
            "block.10784": "sculksensoroff",
            "block.10788": "sculksensoroncalibrated",
            "block.10792": "oakdoor",
            "block.10796": "sprucedoor",
            "block.10800": "birchdoor",
            "block.10804": "jungledoor",
            "block.10808": "acaciadoor",
            "block.10812": "darkdoor",
            "block.10816": "mangrovedoor",
            "block.10820": "crimsondoor",
            "block.10824": "warpeddoor",
            "block.10828": "bamboodoor",
            "block.10832": "cherrydoor",
            "block.30000": "stainedglass",
            "block.30004": "stainedglasspane",
            "block.30008": "tintedglass",
            "block.30012": "slime",
            "block.30016": "honey",
            "block.30020": "portal",
            "block.31000": "water",
            "block.31004": "ice",
            "block.31016": "beacon",
            "block.60000": "endportal",
            "block.60004": "sign",
            "block.60008": "chest",
            "block.60012": "endchest",
            "block.60016": "shulkerbox",
            "block.60020": "conduit",
            "layer.translucent": "glass glasspane beacon"
        }
    }

    modmapping = {
        minecraft: {
            dripleaf: "big_dripleaf_stem big_dripleaf small_dripleaf",
            wave: "grass fern",
            smallwave: "oak_sapling spruce_sapling birch_sapling jungle_sapling acacia_sapling dark_oak_sapling bamboo_sapling cherry_sapling dead_bush dandelion poppy blue_orchid allium azure_bluet red_tulip orange_tulip white_tulip pink_tulip oxeye_daisy cornflower lily_of_the_valley wither_rose sweet_berry_bush wheat carrots potatoes beetroots pumpkin_stem melon_stem nether_sprouts warped_roots crimson_roots torchflower_crop",
            tallgrasslow: "sunflower:half=lower lilac:half=lower rose_bush:half=lower peony:half=lower tall_grass:half=lower large_fern:half=lower",
            tallgrasshigh: "double_plant:half=upper sunflower:half=upper lilac:half=upper rose_bush:half=upper peony:half=upper tall_grass:half=upper large_fern:half=upper",
            verticalwave: "",
            hangingwave: "",
            treeleaves: "leaves leaves2 oak_leaves spruce_leaves birch_leaves jungle_leaves acacia_leaves dark_oak_leaves azalea_leaves flowering_azalea_leaves mangrove_leaves cherry_leaves",
            vines: "vine",
            reeds: "reeds attached_pumpkin_stem attached_melon_stem mangrove_propagule seagrass tall_seagrass kelp_plant kelp hanging_roots sugar_cane spore_blossom pink_petals pitcher_plant",
            brewingstand: "brewing_stand",
            hay: "hay_block",
            stonebrick: "stonebrick stone_slab:variant=stone_brick monster_egg:variant=stone_brick monster_egg:variant=mossy_brick monster_egg:variant=cracked_brick monster_egg:variant=chiseled_brick stone_bricks mossy_stone_bricks cracked_stone_bricks chiseled_stone_bricks stone_brick_stairs mossy_stone_brick_wall stone_brick_wall mossy_stone_brick_stairs mossy_stone_brick_slab infested_chiseled_stone_bricks infested_cracked_stone_bricks infested_mossy_stone_bricks infested_stone_bricks stone_brick_slab",
            anvil: "anvil chipped_anvil damaged_anvil",
            rail: "golden_rail powered_rail detector_rail rail activator_rail",
            cauldron: "cauldron hopper",
            watercauldron: "water_cauldron",
            snowcauldron: "powder_snow_cauldron",
            lavacauldron: "lava_cauldron",
            hopper: "hopper",
            lever: "lever",
            lectern: "lectern",
            lava: "lava flowing_lava",
            fire: "fire",
            soulfire: "soul_fire",
            rawstone: "stone stone_slab infested_stone stone_stairs stone_pressure_plate stone_button coal_ore smooth_stone smooth_stone_slab grindstone stonecutter",
            rawgranite: "stone:variant=granite granite granite_wall granite_stairs granite_slab",
            rawdiorite: "stone:variant=diorite diorite diorite_wall diorite_stairs diorite_slab",
            rawandesite: "stone:variant=andesite andesite andesite_wall andesite_stairs andesite_slab",
            rawdeepslate: "deepslate cobbled_deepslate infested_deepslate cobbled_deepslate_wall cobbled_deepslate_stairs cobbled_deepslate_slab deepslate_coal_ore",
            rawcalcite: "calcite",
            smoothstone: "",
            smoothgranite: "stone:variant=smooth_granite polished_granite polished_granite_stairs polished_granite_slab",
            smoothdiorite: "stone:variant=smooth_diorite polished_diorite polished_diorite_stairs polished_diorite_slab",
            smoothandesite: "stone:variant=smooth_andesite polished_andesite polished_andesite_stairs polished_andesite_slab packed_mud mud_bricks mud_brick_stairs mud_brick_slab mud_brick_wall bricks brick_slab brick_stairs brick_wall",
            smoothdeepslate: "polished_deepslate deepslate_bricks cracked_deepslate_bricks deepslate_tiles cracked_deepslate_tiles chiseled_deepslate polished_deepslate_wall deepslate_brick_wall deepslate_tile_wall polished_deepslate_stairs deepslate_brick_stairs deepslate_tile_stairs polished_deepslate_slab deepslate_brick_slab deepslate_tile_slab mud muddy_mangrove_roots mangrove_roots",
            dripstone: "dripstone_block pointed_dripstone daylight_detector",
            snowplant: "grass_block:snowy=true podzol:snowy=true mycelium:snowy=true",
            dirt: "dirt coarse_dirt rooted_dirt podzol:snowy=false mycelium:snowy=false dirt_path grass_path farmland:moisture=0 farmland:moisture=1 farmland:moisture=2 farmland:moisture=3 farmland:moisture=4 farmland:moisture=5 farmland:moisture=6",
            grass: "grass_block:snowy=false",
            wetsoil: "farmland:moisture=7",
            netherrack: "netherrack",
            bluenylium: "warped_nylium warped_wart_block",
            rednylium: "crimson_nylium nether_wart_block",
            cobblestone: "cobblestone stone_slab:variant=cobblestone stone_stairs monster_egg:variant=cobblestone cobblestone_wall cobblestone_slab mossy_cobblestone cobblestone_stairs infested_cobblestone cobblestone_wall mossy_cobblestone_wall mossy_cobblestone_stairs mossy_cobblestone_slab moss_block moss_carpet furnace:lit=false smoker:lit=false blast_furnace:lit=false lodestone piston sticky_piston piston_head dispenser dropper",
            oakwood: "log:variant=oak oak_log oak_wood",
            sprucewood: "log:variant=spruce spruce_log spruce_wood",
            birchwood: "log:variant=birch birch_log birch_wood",
            junglewood: "log:variant=jungle jungle_log jungle_wood",
            acaciawood: "log2:variant=acacia acacia_log acacia_wood",
            darkwood: "log2:variant=dark_oak dark_oak_log dark_oak_wood",
            mangrovewood: "mangrove_log mangrove_wood",
            crimsonwood: "crimson_stem crimson_hyphae",
            warpedwood: "warped_stem warped_hyphae",
            cherrywood: "cherry_log cherry_wood",
            oakplanks: "planks:variant=oak wooden_slab:variant=oak trapdoor fence fence_gate oak_planks stripped_oak_log stripped_oak_wood oak_slab petrified_oak_slab oak_fence oak_stairs oak_button oak_pressure_plate oak_trapdoor oak_fence_gate bookshelf crafting_table tripwire_hook",
            spruceplanks: "planks:variant=spruce wooden_slab:variant=spruce spruce_planks stripped_spruce_log stripped_spruce_wood spruce_slab spruce_fence spruce_stairs spruce_button spruce_pressure_plate spruce_trapdoor spruce_fence_gate",
            birchplanks: "planks:variant=birch wooden_slab:variant=birch birch_planks stripped_birch_log stripped_birch_wood birch_slab birch_fence birch_stairs birch_button birch_pressure_plate birch_trapdoor birch_fence_gate loom chiseled_bookshelf",
            jungleplanks: "planks:variant=jungle wooden_slab:variant=jungle jungle_planks stripped_jungle_log stripped_jungle_wood jungle_slab jungle_fence jungle_stairs jungle_button jungle_pressure_plate jungle_trapdoor jungle_fence_gate composter",
            acaciaplanks: "planks:variant=acacia wooden_slab:variant=acacia acacia_planks stripped_acacia_log stripped_acacia_wood acacia_slab acacia_fence acacia_stairs acacia_button acacia_pressure_plate acacia_trapdoor acacia_fence_gate",
            darkplanks: "planks:variant=dark_oak wooden_slab:variant=dark_oak dark_oak_planks stripped_dark_oak_log stripped_dark_oak_wood dark_oak_slab dark_oak_fence dark_oak_stairs dark_oak_button dark_oak_pressure_plate dark_oak_trapdoor dark_oak_fence_gate",
            mangroveplanks: "mangrove_planks stripped_mangrove_log stripped_mangrove_wood mangrove_slab mangrove_fence mangrove_stairs mangrove_button mangrove_pressure_plate mangrove_trapdoor mangrove_fence_gate",
            crimsonplanks: "crimson_planks stripped_crimson_stem stripped_crimson_hyphae crimson_slab crimson_fence crimson_stairs crimson_button crimson_pressure_plate crimson_trapdoor crimson_fence_gate",
            warpedplanks: "warped_planks stripped_warped_stem stripped_warped_hyphae warped_slab warped_fence warped_stairs warped_button warped_pressure_plate warped_trapdoor warped_fence_gate",
            cherryplanks: "cherry_planks cherry_stairs cherry_slab stripped_cherry_log stripped_cherry_wood cherry_fence cherry_fence_gate cherry_trapdoor cherry_pressure_plate cherry_button",
            bedrock: "bedrock",
            sand: "sand suspicious_sand",
            redsand: "red_sand",
            sandstone: "stone_slab:variant=sandstone sandstone chiseled_sandstone cut_sandstone sandstone_slab cut_sandstone_slab smooth_sandstone sandstone_stairs sandstone_wall smooth_sandstone_stairs smooth_sandstone_slab",
            redsandstone: "stone_slab2 red_sandstone red_sandstone_slab cut_red_sandstone_slab smooth_red_sandstone red_sandstone_wall chiseled_red_sandstone cut_red_sandstone red_sandstone_stairs smooth_red_sandstone_stairs smooth_red_sandstone_slab",
            netherite: "netherite_block",
            ancientdebris: "ancient_debris",
            ironbars: "iron_bars",
            irondoor: "iron_door",
            ironblock: "iron_block iron_trapdoor heavy_weighted_pressure_plate immersiveengineering:sheetmetal_iron ",
            ironraw: "raw_iron_block",
            ironore: "iron_ore",
            irondeepore: "deepslate_iron_ore",
            copperblock: "copper_block exposed_copper weathered_copper oxidized_copper cut_copper exposed_cut_copper weathered_cut_copper oxidized_cut_copper cut_copper_stairs exposed_cut_copper_stairs weathered_cut_copper_stairs oxidized_cut_copper_stairs cut_copper_slab exposed_cut_copper_slab weathered_cut_copper_slab oxidized_cut_copper_slab waxed_copper_block waxed_exposed_copper waxed_weathered_copper waxed_oxidized_copper waxed_cut_copper waxed_exposed_cut_copper waxed_weathered_cut_copper waxed_oxidized_cut_copper waxed_cut_copper_stairs waxed_exposed_cut_copper_stairs waxed_weathered_cut_copper_stairs waxed_oxidized_cut_copper_stairs waxed_cut_copper_slab waxed_exposed_cut_copper_slab waxed_weathered_cut_copper_slab waxed_oxidized_cut_copper_slab lightning_rod",
            copperraw: "raw_copper_block",
            copperore: "copper_ore",
            copperdeepore: "deepslate_copper_ore",
            goldblock: "gold_block light_weighted_pressure_plate",
            goldraw: "raw_gold_block",
            goldore: "gold_ore",
            golddeepore: "deepslate_gold_ore",
            goldnetherore: "nether_gold_ore",
            diamondblock: "diamond_block",
            diamondore: "diamond_ore",
            diamonddeepore: "deepslate_diamond_ore",
            amethystblock: "amethyst_block budding_amethyst",
            amethystbud: "small_amethyst_bud medium_amethyst_bud large_amethyst_bud amethyst_cluster",
            emeraldblock: "emerald_block",
            emeraldore: "emerald_ore",
            emeralddeepore: "deepslate_emerald_ore",
            azalea: "azalea flowering_azalea",
            lapisblock: "lapis_block",
            lapisore: "lapis_ore",
            lapisdeepore: "deepslate_lapis_ore",
            quartzblock: "stone_slab:variant=quartz quartz_block chiseled_quartz_block smooth_quartz quartz_slab quartz_bricks quartz_pillar quartz_stairs smooth_quartz_stairs smooth_quartz_slab",
            quartzore: "quartz_ore nether_quartz_ore",
            obsidian: "obsidian",
            purpur: "purpur_block purpur_pillar purpur_stairs purpur_slab",
            snow: "snow_layer snow_block snow powder_snow",
            packedice: "packed_ice",
            blueice: "blue_ice",
            pumpkin: "pumpkin carved_pumpkin",
            pumpkinlit: "lit_pumpkin jack_o_lantern",
            seapickle: "sea_pickle",
            soulsand: "soul_sand soul_soil",
            basalt: "basalt polished_basalt smooth_basalt",
            glowstone: "glowstone",
            netherbrick: "nether_brick stone_slab:variant=nether_brick nether_bricks nether_brick_slab cracked_nether_bricks chiseled_nether_bricks nether_brick_fence nether_brick_stairs nether_brick_wall",
            rednetherbrick: "red_nether_bricks red_nether_brick_slab red_nether_brick_stairs red_nether_brick_wall",
            melon: "melon_block melon",
            endstone: "end_stone end_bricks end_stone_bricks end_stone_brick_wall end_stone_brick_stairs end_stone_brick_slab",
            terracotta: "hardened_clay stained_hardened_clay terracotta white_terracotta orange_terracotta magenta_terracotta light_blue_terracotta yellow_terracotta lime_terracotta pink_terracotta gray_terracotta light_gray_terracotta cyan_terracotta purple_terracotta blue_terracotta brown_terracotta green_terracotta red_terracotta black_terracotta",
            terracottaglazed: "white_glazed_terracotta orange_glazed_terracotta magenta_glazed_terracotta light_blue_glazed_terracotta yellow_glazed_terracotta lime_glazed_terracotta pink_glazed_terracotta gray_glazed_terracotta light_gray_glazed_terracotta cyan_glazed_terracotta purple_glazed_terracotta blue_glazed_terracotta brown_glazed_terracotta green_glazed_terracotta red_glazed_terracotta black_glazed_terracotta",
            prismarine: "prismarine prismarine_slab prismarine_stairs prismarine_bricks prismarine_brick_slab prismarine_brick_stairs prismarine_wall",
            prismarinedark: "dark_prismarine dark_prismarine_stairs dark_prismarine_slab",
            sealantern: "sea_lantern",
            magma: "magma magma_block",
            command: "command_block chain_command_block repeating_command_block",
            concrete: "concrete white_concrete orange_concrete magenta_concrete light_blue_concrete yellow_concrete lime_concrete pink_concrete gray_concrete light_gray_concrete cyan_concrete purple_concrete blue_concrete brown_concrete green_concrete red_concrete black_concrete",
            concretepowder: "concrete_powder white_concrete_powder orange_concrete_powder magenta_concrete_powder light_blue_concrete_powder yellow_concrete_powder lime_concrete_powder pink_concrete_powder gray_concrete_powder light_gray_concrete_powder cyan_concrete_powder purple_concrete_powder blue_concrete_powder brown_concrete_powder green_concrete_powder red_concrete_powder black_concrete_powder",
            coralblock: "tube_coral_block brain_coral_block bubble_coral_block fire_coral_block horn_coral_block dead_tube_coral_block dead_brain_coral_block dead_bubble_coral_block dead_fire_coral_block dead_horn_coral_block",
            coral: "tube_coral brain_coral bubble_coral fire_coral horn_coral tube_coral_fan brain_coral_fan bubble_coral_fan fire_coral_fan horn_coral_fan dead_tube_coral dead_brain_coral dead_bubble_coral dead_fire_coral dead_horn_coral dead_tube_coral_fan dead_brain_coral_fan dead_bubble_coral_fan dead_fire_coral_fan dead_horn_coral_fan tube_coral_wall_fan brain_coral_wall_fan bubble_coral_wall_fan fire_coral_wall_fan horn_coral_wall_fan dead_tube_coral_wall_fan dead_brain_coral_wall_fan dead_bubble_coral_wall_fan dead_fire_coral_wall_fan dead_horn_coral_wall_fan",
            cryingobsidian: "crying_obsidian",
            blackstone: "blackstone blackstone_slab blackstone_stairs polished_blackstone polished_blackstone_slab polished_blackstone_stairs chiseled_polished_blackstone polished_blackstone_bricks polished_blackstone_brick_slab polished_blackstone_brick_stairs cracked_polished_blackstone_bricks polished_blackstone_pressure_plate polished_blackstone_button polished_blackstone_brick_wall polished_blackstone_wall blackstone_wall",
            gildedblackstone: "gilded_blackstone",
            waterlily: "waterlily lily_pad",
            torch: "torch wall_torch",
            endrod: "end_rod",
            chorusplant: "chorus_plant",
            chorusflower: "chorus_flower:age=0 chorus_flower:age=1 chorus_flower:age=2 chorus_flower:age=3 chorus_flower:age=4",
            chorusflowerfull: "chorus_flower:age=5",
            litfurnace: "lit_furnace furnace:lit=true",
            cactus: "cactus",
            noteblock: "noteblock note_block jukebox",
            soultorch: "soul_torch soul_wall_torch",
            mushroombrown: "brown_mushroom_block",
            mushroomred: "red_mushroom_block",
            mushroomstem: "mushroom_stem",
            glowlichen: "glow_lichen",
            enchantingtable: "enchanting_table",
            endportalempty: "end_portal_frame:eye=false",
            endportalsocketed: "end_portal_frame:eye=true",
            lantern: "lantern",
            soullantern: "soul_lantern",
            turtleegg: "turtle_egg sniffer_egg",
            dragonegg: "dragon_egg",
            litsmoker: "smoker:lit=true",
            litblastfurnace: "blast_furnace:lit=true",
            litcandle: "candle:lit=true white_candle:lit=true orange_candle:lit=true magenta_candle:lit=true light_blue_candle:lit=true yellow_candle:lit=true lime_candle:lit=true pink_candle:lit=true gray_candle:lit=true light_gray_candle:lit=true cyan_candle:lit=true purple_candle:lit=true blue_candle:lit=true brown_candle:lit=true green_candle:lit=true red_candle:lit=true black_candle:lit=true",
            respawnanchorempty: "respawn_anchor:charges=0",
            respawnanchor: "respawn_anchor:charges=1 respawn_anchor:charges=2 respawn_anchor:charges=3 respawn_anchor:charges=4",
            redstonewireon: "redstone_wire:power=1 redstone_wire:power=2 redstone_wire:power=3 redstone_wire:power=4 redstone_wire:power=5 redstone_wire:power=6 redstone_wire:power=7 redstone_wire:power=8 redstone_wire:power=9 redstone_wire:power=10 redstone_wire:power=11 redstone_wire:power=12 redstone_wire:power=13 redstone_wire:power=14 redstone_wire:power=15",
            redstonewireoff: "redstone_wire:power=0",
            redstonetorch: "redstone_torch redstone_wall_torch",
            redstoneblock: "redstone_block",
            redstoneoreoff: "redstone_ore:lit=false",
            redstoneoreon: "redstone_ore:lit=true",
            redstonedeeporeoff: "deepslate_redstone_ore:lit=false",
            redstonedeeporeon: "deepslate_redstone_ore:lit=true",
            cavevinesplant: "cave_vines_plant:berries=false cave_vines:berries=false",
            cavevinesplantfruit: "cave_vines_plant:berries=true cave_vines:berries=true",
            redstonelampoff: "redstone_lamp:lit=false",
            redstonelampon: "redstone_lamp:lit=true",
            redstonecomponent: "powered_repeater unpowered_repeater powered_comparator unpowered_comparator repeater comparator",
            shroomlight: "shroomlight",
            campfirelit: "campfire:lit=true",
            soulcampfirelit: "soul_campfire:lit=true",
            campfire: "campfire:lit=false soul_campfire:lit=false",
            observer: "observer",
            carpet: "carpet wool white_carpet orange_carpet magenta_carpet light_blue_carpet yellow_carpet lime_carpet pink_carpet gray_carpet light_gray_carpet cyan_carpet purple_carpet blue_carpet brown_carpet green_carpet red_carpet black_carpet white_wool orange_wool magenta_wool light_blue_wool yellow_wool lime_wool pink_wool gray_wool light_gray_wool cyan_wool purple_wool blue_wool brown_wool green_wool red_wool black_wool",
            boneblock: "bone_block",
            honeycomb: "barrel beehive bee_nest honeycomb_block",
            froglightochre: "ochre_froglight",
            froglightverdant: "verdant_froglight",
            froglightpearl: "pearlescent_froglight",
            reinforceddeepslate: "reinforced_deepslate",
            sculk: "sculk sculk_catalyst sculk_vein sculk_sensor:sculk_sensor_phase=inactive sculk_sensor:sculk_sensor_phase=cooldown",
            sculkshrieker: "sculk_shrieker",
            sculksensoron: "sculk_sensor:sculk_sensor_phase=active",
            sculksensoroncalibrated: "calibrated_sculk_sensor:sculk_sensor_phase=active",
            sculksensoroff: "calibrated_sculk_sensor:sculk_sensor_phase=inactive calibrated_sculk_sensor:sculk_sensor_phase=cooldown",
            spawner: "mob_spawner spawner",
            tuff: "tuff",
            clay: "clay",
            ladder: "ladder",
            gravel: "gravel suspicious_gravel",
            flowerpotmushroom: "flower_pot potted_red_mushroom potted_brown_mushroom potted_cactus potted_bamboo potted_flowering_azalea_bush potted_azalea_bush",
            flowerpot: "potted_dandelion potted_poppy potted_blue_orchid potted_allium potted_azure_bluet potted_red_tulip potted_orange_tulip potted_white_tulip potted_pink_tulip potted_oxeye_daisy potted_cornflower potted_lily_of_the_valley potted_wither_rose potted_oak_sapling potted_spruce_sapling potted_birch_sapling potted_jungle_sapling potted_acacia_sapling potted_dark_oak_sapling potted_mangrove_propagule potted_fern potted_dead_bush potted_crimson_roots potted_warped_roots pitcher_crop potted_cherry_sapling",
            structureblock: "structure_block jigsaw",
            chain: "chain",
            cobweb: "cobweb",
            driedkelpblock: "dried_kelp_block",
            bamboo: "bamboo",
            bambooblock: "bamboo_block stripped_bamboo_block bamboo_planks bamboo_mosaic bamboo_stairs bamboo_mosaic_stairs bamboo_slab bamboo_mosaic_slab bamboo_fence bamboo_fence_gate bamboo_trapdoor bamboo_pressure_plate bamboo_button scaffolding",
            torchflower: "torchflower",
            torchflowerpot: "potted_torchflower",
            twistingvines: "twisting_vines_plant twisting_vines weeping_vines weeping_vines_plant warped_fungus crimson_fungus",
            funguspot: "potted_crimson_fungus potted_warped_fungus",
            oakdoor: "wooden_door oak_door",
            sprucedoor: "spruce_door",
            birchdoor: "birch_door",
            jungledoor: "jungle_door",
            acaciadoor: "acacia_door",
            darkdoor: "dark_oak_door",
            mangrovedoor: "mangrove_door",
            crimsondoor: "crimson_door",
            warpeddoor: "warped_door",
            bamboodoor: "bamboo_door",
            cherrydoor: "cherry_door",
            stainedglass: "stained_glass white_stained_glass orange_stained_glass magenta_stained_glass light_blue_stained_glass yellow_stained_glass lime_stained_glass pink_stained_glass gray_stained_glass light_gray_stained_glass cyan_stained_glass purple_stained_glass blue_stained_glass brown_stained_glass green_stained_glass red_stained_glass black_stained_glass",
            stainedglasspane: "stained_glass_pane white_stained_glass_pane orange_stained_glass_pane magenta_stained_glass_pane light_blue_stained_glass_pane yellow_stained_glass_pane lime_stained_glass_pane pink_stained_glass_pane gray_stained_glass_pane light_gray_stained_glass_pane cyan_stained_glass_pane purple_stained_glass_pane blue_stained_glass_pane brown_stained_glass_pane green_stained_glass_pane red_stained_glass_pane black_stained_glass_pane",
            tintedglass: "tinted_glass",
            stainedglasspane: "stained_glass_pane white_stained_glass_pane orange_stained_glass_pane magenta_stained_glass_pane light_blue_stained_glass_pane yellow_stained_glass_pane lime_stained_glass_pane pink_stained_glass_pane gray_stained_glass_pane light_gray_stained_glass_pane cyan_stained_glass_pane purple_stained_glass_pane blue_stained_glass_pane brown_stained_glass_pane green_stained_glass_pane red_stained_glass_pane black_stained_glass_pane",
            tintedglass: "tinted_glass",
            slime: "slime slime_block",
            honey: "honey_block",
            portal: "portal nether_portal",
            endportal: "end_portal end_gateway",
            water: "water flowing_water",
            ice: "ice frosted_ice",
            glass: "glass",
            glasspane: "glass_pane",
            beacon: "beacon",
            sign: "oak_sign spruce_sign birch_sign jungle_sign acacia_sign dark_oak_sign oak_wall_sign spruce_wall_sign birch_wall_sign jungle_wall_sign acacia_wall_sign dark_oak_wall_sign crimson_sign crimson_wall_sign warped_sign warped_wall_sign mangrove_sign mangrove_wall_sign bamboo_sign bamboo_wall_sign oak_hanging_sign spruce_hanging_sign birch_hanging_sign jungle_hanging_sign acacia_hanging_sign dark_oak_hanging_sign oak_wall_hanging_sign spruce_wall_hanging_sign birch_wall_hanging_sign jungle_wall_hanging_sign acacia_wall_hanging_sign dark_oak_wall_hanging_sign crimson_hanging_sign crimson_wall_hanging_sign warped_hanging_sign warped_wall_hanging_sign mangrove_hanging_sign mangrove_wall_hanging_sign bamboo_hanging_sign bamboo_wall_hanging_sign cherry_sign cherry_wall_sign cherry_hanging_sign cherry_wall_hanging_sign",
            chest: "chest trapped_chest",
            endchest: "ender_chest",
            shulkerbox: "shulker_box white_shulker_box orange_shulker_box magenta_shulker_box light_blue_shulker_box yellow_shulker_box lime_shulker_box pink_shulker_box gray_shulker_box light_gray_shulker_box cyan_shulker_box purple_shulker_box blue_shulker_box brown_shulker_box green_shulker_box red_shulker_box black_shulker_box skeleton_skull wither_skeleton_skull player_head zombie_head creeper_head dragon_head white_banner orange_banner magenta_banner light_blue_banner yellow_banner lime_banner pink_banner gray_banner light_gray_banner cyan_banner purple_banner blue_banner brown_banner green_banner red_banner black_banner white_wall_banner orange_wall_banner magenta_wall_banner light_blue_wall_banner yellow_wall_banner lime_wall_banner pink_wall_banner gray_wall_banner light_gray_wall_banner cyan_wall_banner purple_wall_banner blue_wall_banner brown_wall_banner green_wall_banner red_wall_banner black_wall_banner white_bed orange_bed magenta_bed light_blue_bed yellow_bed lime_bed pink_bed gray_bed light_gray_bed cyan_bed purple_bed blue_bed brown_bed green_bed red_bed black_bed",
            conduit: "conduit",
            layertranslucent: "glass glass_pane beacon",
        },
        ad_astra: {}, advancedperipherals: {}, angelblockrenewed: {}, antiblocksrechiseled: {}, apotheosis: {}, ae2: {}, ars_creo: {}, ars_instrumentum: {}, ars_elemental: {}, ars_nouveau: {}, artifacts: {}, bambooeverything: {}, bno: {}, botania: {}, buildinggadgets: {}, bygonenether: {}, computercraft: {}, cobblefordays: {}, comforts: {}, compactmachines: {},
        connectedglass: {
            stainedglass: "connectedglass:borderless_glass_white connectedglass:borderless_glass_orange connectedglass:borderless_glass_magenta connectedglass:borderless_glass_light_blue connectedglass:borderless_glass_yellow connectedglass:borderless_glass_lime connectedglass:borderless_glass_pink connectedglass:borderless_glass_gray connectedglass:borderless_glass_light_gray connectedglass:borderless_glass_cyan connectedglass:borderless_glass_purple connectedglass:borderless_glass_blue connectedglass:borderless_glass_brown connectedglass:borderless_glass_green connectedglass:borderless_glass_red connectedglass:borderless_glass_black connectedglass:clear_glass_white connectedglass:clear_glass_orange connectedglass:clear_glass_magenta connectedglass:clear_glass_light_blue connectedglass:clear_glass_yellow connectedglass:clear_glass_lime connectedglass:clear_glass_pink connectedglass:clear_glass_gray connectedglass:clear_glass_light_gray connectedglass:clear_glass_cyan connectedglass:clear_glass_purple connectedglass:clear_glass_blue connectedglass:clear_glass_brown connectedglass:clear_glass_green connectedglass:clear_glass_red connectedglass:clear_glass_black connectedglass:scratched_glass_white connectedglass:scratched_glass_orange connectedglass:scratched_glass_magenta connectedglass:scratched_glass_light_blue connectedglass:scratched_glass_yellow connectedglass:scratched_glass_lime connectedglass:scratched_glass_pink connectedglass:scratched_glass_gray connectedglass:scratched_glass_light_gray connectedglass:scratched_glass_cyan connectedglass:scratched_glass_purple connectedglass:scratched_glass_blue connectedglass:scratched_glass_brown connectedglass:scratched_glass_green connectedglass:scratched_glass_red connectedglass:scratched_glass_black",
            stainedglasspane: "connectedglass:borderless_glass_white_pane connectedglass:borderless_glass_orange_pane connectedglass:borderless_glass_magenta_pane connectedglass:borderless_glass_light_blue_pane connectedglass:borderless_glass_yellow_pane connectedglass:borderless_glass_lime_pane connectedglass:borderless_glass_pink_pane connectedglass:borderless_glass_gray_pane connectedglass:borderless_glass_light_gray_pane connectedglass:borderless_glass_cyan_pane connectedglass:borderless_glass_purple_pane connectedglass:borderless_glass_blue_pane connectedglass:borderless_glass_brown_pane connectedglass:borderless_glass_green_pane connectedglass:borderless_glass_red_pane connectedglass:borderless_glass_black_pane connectedglass:clear_glass_white_pane connectedglass:clear_glass_orange_pane connectedglass:clear_glass_magenta_pane connectedglass:clear_glass_light_blue_pane connectedglass:clear_glass_yellow_pane connectedglass:clear_glass_lime_pane connectedglass:clear_glass_pink_pane connectedglass:clear_glass_gray_pane connectedglass:clear_glass_light_gray_pane connectedglass:clear_glass_cyan_pane connectedglass:clear_glass_purple_pane connectedglass:clear_glass_blue_pane connectedglass:clear_glass_brown_pane connectedglass:clear_glass_green_pane connectedglass:clear_glass_red_pane connectedglass:clear_glass_black_pane connectedglass:scratched_glass_white_pane connectedglass:scratched_glass_orange_pane connectedglass:scratched_glass_magenta_pane connectedglass:scratched_glass_light_blue_pane connectedglass:scratched_glass_yellow_pane connectedglass:scratched_glass_lime_pane connectedglass:scratched_glass_pink_pane connectedglass:scratched_glass_gray_pane connectedglass:scratched_glass_light_gray_pane connectedglass:scratched_glass_cyan_pane connectedglass:scratched_glass_purple_pane connectedglass:scratched_glass_blue_pane connectedglass:scratched_glass_brown_pane connectedglass:scratched_glass_green_pane connectedglass:scratched_glass_red_pane connectedglass:scratched_glass_black_pane",
            tintedglass: "connectedglass:tinted_borderless_glass connectedglass:tinted_borderless_glass_white connectedglass:tinted_borderless_glass_orange connectedglass:tinted_borderless_glass_magenta connectedglass:tinted_borderless_glass_light_blue connectedglass:tinted_borderless_glass_yellow connectedglass:tinted_borderless_glass_lime connectedglass:tinted_borderless_glass_pink connectedglass:tinted_borderless_glass_gray connectedglass:tinted_borderless_glass_light_gray connectedglass:tinted_borderless_glass_cyan connectedglass:tinted_borderless_glass_purple connectedglass:tinted_borderless_glass_blue connectedglass:tinted_borderless_glass_brown connectedglass:tinted_borderless_glass_green connectedglass:tinted_borderless_glass_red connectedglass:tinted_borderless_glass_black"
        },
        cookingforblockheads: {},
        create: {
            rawgranite: "create:limestone create:cut_limestone create:cut_limestone_stairs create:cut_limestone_slab create:cut_limestone_wall create:cut_limestone_bricks create:cut_limestone_brick_stairs create:cut_limestone_brick_slab create:cut_limestone_brick_wall create:small_limestone_bricks create:small_limestone_brick_stairs create:small_limestone_brick_slab create:small_limestone_brick_wall create:layered_limestone create:limestone_pillar",
            rawcalcite: "create:cut_calcite create:calcite_pillar create:cut_calcite_brick_stairs",
            smoothgranite: "create:polished_cut_limestone create:polished_cut_limestone_stairs create:polished_cut_limestone_slab create:polished_cut_limestone_wall",
            ironbars: "create:fluid_tank",
        },
        createaddition: {}, cyclic: {}, darkutils: {}, deepresonance: {}, delightful: {}, domum_ornamentum: {}, elevatorid: {}, enderstorage: {}, engineersdecor: {}, entangled: {}, extrastorage: {}, extremereactors: {}, farmersdelight: {}, fluxnetworks: {}, forcecraft: {}, framedblocks: {}, functionalstorage: {}, glassential: {}, gobber2: {}, hexcasting: {}, hexerei: {}, immersiveengineering: {}, industrialforegoing: {}, integrateddynamics: {}, integratedterminals: {}, ironchest: {}, jaopca: {}, laserio: {}, littlecontraptions: {}, littlelogistics: {}, merequester: {}, lootr: {}, megacells: {}, mahoutsukai: {}, mekanism: {}, mekanismadditions: {}, mekanismgenerators: {}, mekanismtools: {}, minecolonies: {}, colony4cc: {}, mininggadgets: {}, mob_grinding_utils: {}, naturalist: {}, naturesaura: {}, occultism: {}, byg: {}, packingtape: {}, pipez: {}, playerplates: {}, pneumaticcraft: {}, powah: {},
        quark: {
            rawgranite: "quark:limestone quark:limestone_slab quark:limestone_stairs quark:limestone_bricks quark:limestone_vertical_slab quark:limestone_wall",
            smoothgranite: "quark:polished_limestone quark:polished_limestone_slab quark:chiseled_limestone_bricks quark:polished_limestone_vertical_slab quark:limestone_bricks quark:limestone_bricks_slab quark:limestone_bricks_stairs quark:limestone_pillar quark:limestone_bricks_vertical_slab quark:limestone_bricks_wall",
            stainedglass: "quark:white_framed_glass quark:orange_framed_glass quark:magenta_framed_glass quark:light_blue_framed_glass quark:yellow_framed_glass quark:lime_framed_glass quark:pink_framed_glass quark:gray_framed_glass quark:light_gray_framed_glass quark:cyan_framed_glass quark:purple_framed_glass quark:blue_framed_glass quark:brown_framed_glass quark:green_framed_glass quark:red_framed_glass quark:black_framed_glass",
            stainedglasspane: "quark:white_framed_glass_pane quark:orange_framed_glass_pane quark:magenta_framed_glass_pane quark:light_blue_framed_glass_pane quark:yellow_framed_glass_pane quark:lime_framed_glass_pane quark:pink_framed_glass_pane quark:gray_framed_glass_pane quark:light_gray_framed_glass_pane quark:cyan_framed_glass_pane quark:purple_framed_glass_pane quark:blue_framed_glass_pane quark:brown_framed_glass_pane quark:green_framed_glass_pane quark:red_framed_glass_pane quark:black_framed_glass_pane",
            tintedglass: "quark:dirty_glass quark:dirty_glass_pane",

        },
        rftoolsbase: {}, rftoolsbuilder: {}, rftoolsdim: {}, rftoolspower: {}, rftoolsutility: {}, rsrequestify: {}, rebornstorage: {}, redstonepen: {}, refinedcooking: {}, refinedstorage: {}, silentcompat: {}, silentgear: {}, simplylight: {}, sophisticatedbackpacks: {}, sophisticatedstorage: {}, spirit: {}, statues: {}, sfm: {}, supplementaries: {}, technobauble: {}, twilightforest: {}, thermal: {}, torchmaster: {}, trashcans: {}, travelanchors: {}, unusualend: {}, viescraftmachines: {}, vitalize: {}, waystones: {}, whisperwoods: {}, wirelesschargers: {}, xnet: {}, xycraft_override: {}, xycraft_world: {}, cfm: {}, pfm: {}, mcwfurnitures: {}, another_furniture: {},
        handcrafted: {
            smoothgranite: "handcrafted:limestone_pillar_trim handcrafted:limestone_corner_trim",
        },
        mcwbridges: {}, mcwfences: {}, mcwpaths: {}, giacomos_bookshelf: {},
        horizontal_glass_panes: {
            stainedglasspane: "horizontal_glass_panes:pane_white horizontal_glass_panes:pane_orange horizontal_glass_panes:pane_magenta horizontal_glass_panes:pane_light_blue horizontal_glass_panes:pane_yellow horizontal_glass_panes:pane_lime horizontal_glass_panes:pane_pink horizontal_glass_panes:pane_gray horizontal_glass_panes:pane_light_gray horizontal_glass_panes:pane_cyan horizontal_glass_panes:pane_purple horizontal_glass_panes:pane_blue horizontal_glass_panes:pane_brown horizontal_glass_panes:pane_green horizontal_glass_panes:pane_red horizontal_glass_panes:pane_black"
        }
    }

    

    //properties maker below
    mapmod = function (modname) {
        console.log(modname);
        selectedmap = modmapping[modname];
        console.log(selectedmap);
        for (const [key, value] of Object.entries(shadergroups)) {
            if (key in selectedmap) {
                blocks = selectedmap[key].split(" ");
                blocks.forEach(element => {
                    shadergroups[key].push(element);
                });
            }
        }
    }
    mapshader = function (shadername) {
        selectedshader = shadermapping[shadername];
        blockproperties = {};   
        for (const [key, value] of Object.entries(selectedshader)) {
            groups = value.split(" ");
            blockproperties[key] = [];
            groups.forEach(element => {
                //console.log(element);
                //console.log(shadergroups[element]);
                shadergroups[element].forEach(e => {
                    blockproperties[key].push(e);
                }); 
            });
        }

        message = "";
        for (const [key, value] of Object.entries(blockproperties)) {
            message += `${key}=`;
            i = 0;
            value.forEach(element => {
                if (i != 0) {message += " ";}
                message += `${element}`
                i++;
            });
            message += "\n";
        }
        
        document.getElementById('propertiesoutput').value = message;

        for (const [key, value] of Object.entries(shadergroups)) {
            if (value.length == 0) {
                console.log(`group "${key}" is missing from the result.`);
            }
        }
    }
    
    mapmod("minecraft");
    mods.forEach(mod => {
        mapmod(mod);
    });

    mapshader("complementaryreimagined");


    

    //console.log(shadergroups);
    //macro maker below
    outputgroups = [];
    currentnamespace = "";
    current = ""; //current name
    currentgroup = "";
    block = "";
    macro1 = ""; macro2 = "";

    namespace = function () { return currentnamespace != "minecraft" ? currentnamespace + ":" : ""; }
    nl = function () { if (current != "") { current = current + " "; } }
    base = function () {
        nl();
        current = current + (namespace() + block);
    }
    suffix = function (array) {
        array.forEach(element => {
            suffixone(element);
        });
    }
    suffixone = function (string) {
        nl();
        current = current + (namespace() + block + "_" + string);
    }
    prefix = function (array) {
        array.forEach(element => {
            prefixone(element);
        });
    }
    prefixone = function (string) {
        nl();
        current = current + (namespace() + string + "_" + block);
    }
    infix = function (array) {
        array.forEach(element => {
            infixone(element);
        });
    }
    infixone = function (array) {
        nl();
        current = current + (namespace() + array[0] + "_" + block + "_" + array[1]);
    }

    readfromoutputgroups = function () {
        o = "";
        outputgroups.forEach(element => {
            if (o != "") { o = o + "\n"; }
            o = o + element;
        });
        return o;
    }

    startNewGroup = function (newGroup, newNamespace) {
        if (newNamespace != null) {
            setNamespace(newNamespace);
        }
        if (current != "") {
            //finalised and save old group
            outputgroups.push(currentgroup);
            outputgroups.push(current);
            outputgroups.push(" ");
        }
        current = "";
        currentgroup = newGroup;
    }
    setNamespace = function (newNamespace) {
        currentnamespace = newNamespace;
    }

    document.getElementById('entry').addEventListener("input", function (event) {
        block = event.target.value;
        outputgroups = [];
        setNamespace("minecraft");
        startNewGroup("stone raw forms")
        base();
        setNamespace("create");
        prefix(["cut"])
        infix([["cut", "stairs"], ["cut", "slab"], ["cut", "wall"],
        ["cut", "bricks"], ["cut", "brick_stairs"], ["cut", "brick_slab"], ["cut", "brick_wall"],
        ["small", "bricks"], ["small", "brick_stairs"], ["small", "brick_slab"], ["small", "brick_wall"]]);
        prefix(["layered"]);
        suffix(["pillar"]);
        setNamespace("quark");
        suffix(["slab", "stairs", "bricks", "vertical_slab", "wall"]);

        startNewGroup("stone polished forms", "create")
        prefix(["polished_cut"])
        infix([["polished_cut", "stairs"],
        ["polished_cut", "slab"],
        ["polished_cut", "wall"],]);
        setNamespace("quark");
        prefix(["polished"]);
        infix([["polished", "slab"], ["chiseled", "bricks"], ["polished", "vertical_slab"]]);
        suffix(["bricks", "bricks_slab", "bricks_stairs", "pillar", "bricks_vertical_slab", "bricks_wall"]);
        setNamespace("handcrafted");
        suffix(["pillar_trim", "corner_trim"]);

        startNewGroup("wood forms (log)");
        setNamespace("minecraft");
        suffix(["log", "wood"])

        startNewGroup("wood forms (processed)");
        setNamespace("minecraft");
        suffix(["planks", "slab", "stairs", "fence", "sign", "button", "pressure_plate"]);
        infix([["stripped", "log"], ["stripped", "wood"]],);

        startNewGroup("")
        suffix(["sapling"]);
        startNewGroup("")
        suffix(["leaves"]);

        startNewGroup("")
        document.getElementById('out').value = readfromoutputgroups();
    });

    macros = function (name1, name2) {
        colors = ["white", "orange", "magenta", "light_blue", "yellow", "lime", "pink", "gray", "light_gray", "cyan", "purple", "blue", "brown", "green", "red", "black"];
        macroout = "colors:\n";
        colors.forEach(element => {
            s = macro1;
            if (s != "" && s.substring(s.length - 1) != ":") { s += "_"; }
            s += element;
            if (macro2 != "") {
                s += "_" + macro2;
            }
            s += " ";
            macroout += s;
        });
        document.getElementById('macro_out').value = macroout;
    }

    document.getElementById('macro1_entry').addEventListener("input", function (event) {
        macro1 = event.target.value;
        macros();
    });
    document.getElementById('macro2_entry').addEventListener("input", function (event) {
        macro2 = event.target.value;
        macros();
    });



    window.onload = function () {
        document.getElementById('entry').focus();
    };