export default {
    blocks: {
        rawgranite: "newmod:fancy_granite newmod:fancier_granite newmod:fanciest_granite",
        smoothgranite: "newmod:fancy_granite_smooth", //categorise fancygranite as a smoothgranite type block within the shader
        ironblock: "newmod:iron_container",
        goldblock: "newmod:gold_container",
        bed: "newmod:black_couch newmod:white_couch"
    },
    forms: { //form groups
        stoneraw: {
            base: true, //results in: "newmod:block"
            prefix: ["cut","layered"], //results in: "newmod:cut_block newmod:layered_block"
            suffix: ["pillar"], //results in: "newmod:block_pillar"
            infix: [["cut", "stairs"], ["cut", "slab"], ["cut", "wall"],
            ["cut", "bricks"], ["cut", "brick_stairs"], ["cut", "brick_slab"], ["cut", "brick_wall"],
            ["small", "bricks"], ["small", "brick_stairs"], ["small", "brick_slab"], ["small", "brick_wall"]]
        },
        stonepolished: {
            prefix: ["polished_cut"],
            infix: [["polished_cut", "stairs"], ["polished_cut", "slab"], ["polished_cut", "wall"]] //results in: "newmod:polished_cut_block_stairs newmod:polished_cut_block_slab newmod:polished_cut_block_wall"
        }
    }
}