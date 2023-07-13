export default {
    blocks: {
        rawgranite: "quark:limestone quark:limestone_slab quark:limestone_stairs quark:limestone_bricks quark:limestone_vertical_slab quark:limestone_wall",
        smoothgranite: "quark:polished_limestone quark:polished_limestone_slab quark:chiseled_limestone_bricks quark:polished_limestone_vertical_slab quark:limestone_bricks quark:limestone_bricks_slab quark:limestone_bricks_stairs quark:limestone_pillar quark:limestone_bricks_vertical_slab quark:limestone_bricks_wall",
        stainedglass: "quark:white_framed_glass quark:orange_framed_glass quark:magenta_framed_glass quark:light_blue_framed_glass quark:yellow_framed_glass quark:lime_framed_glass quark:pink_framed_glass quark:gray_framed_glass quark:light_gray_framed_glass quark:cyan_framed_glass quark:purple_framed_glass quark:blue_framed_glass quark:brown_framed_glass quark:green_framed_glass quark:red_framed_glass quark:black_framed_glass",
        stainedglasspane: "quark:white_framed_glass_pane quark:orange_framed_glass_pane quark:magenta_framed_glass_pane quark:light_blue_framed_glass_pane quark:yellow_framed_glass_pane quark:lime_framed_glass_pane quark:pink_framed_glass_pane quark:gray_framed_glass_pane quark:light_gray_framed_glass_pane quark:cyan_framed_glass_pane quark:purple_framed_glass_pane quark:blue_framed_glass_pane quark:brown_framed_glass_pane quark:green_framed_glass_pane quark:red_framed_glass_pane quark:black_framed_glass_pane",
        tintedglass: "quark:dirty_glass quark:dirty_glass_pane"
    },
    forms: { //form groups
        stoneraw: {
            suffix: ["slab", "stairs", "bricks", "vertical_slab", "wall"],
        },
        stonepolished: {
            prefix: ["polished"],
            suffix: ["bricks", "bricks_slab", "bricks_stairs", "pillar", "bricks_vertical_slab", "bricks_wall"],
            infix: [["polished", "slab"], ["chiseled", "bricks"], ["polished", "vertical_slab"]]
        }
    }
}