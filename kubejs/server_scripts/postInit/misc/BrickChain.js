ServerEvents.recipes(event => {
        event.smelting('1x susy:limestone', '1x susy:limestone_dust')
        event.shapeless('1x minecraft:sand', [
            'susy:sand_dust',
            'susy:sand_dust',
            'susy:sand_dust',
            'susy:sand_dust',
        ]
        )

        event.shaped('1x minecraft:sand', [
            'AA ', 
            'AA ', 
            '   '  
        ], {
            A: 'susy:sand_dust'
        }
        )
 // The following forLoops couldn't be parsed, they were added to the forLoopBuffers
  // for (name in name_removals) {
  //     crafting.remove(name)
  // }

 // The following entries are unknown or couldn't be parsed, you should rewrite them manually.
  // import globals.Globals
  // import gregtech.api.recipes.ModHandler;
  // import gregtech.api.unification.material.Materials;
  // import gregtech.api.unification.ore.OrePrefix;
  // import gregtech.api.unification.stack.UnificationEntry;
  // def name_removals = [
  //     'gregtech:fireclay_dust',
  //     'gregtechfoodoption:mud_bricks1',
  //     'gregtechfoodoption:mud_bricks2',
  //     'gregtechfoodoption:mud_bricks3',
  //     'gregtechfoodoption:mud_bricks4',
  //     'gregtech:casing_primitive_bricks'
  // ]
  // def CompressBrickRecipes(brick_mix, compressed_brick) {
  //     crafting.addShapeless('Compress' + brick_mix + '_1',metaitem(compressed_brick), [metaitem('wooden_form.brick'), metaitem(brick_mix)]) 
  //     crafting.addShaped('Compress' + brick_mix + '_8',metaitem(compressed_brick) * 8, [
  //         [metaitem(brick_mix),metaitem(brick_mix),metaitem(brick_mix)],
  //         [metaitem(brick_mix),metaitem('wooden_form.brick'), metaitem(brick_mix)],
  //         [metaitem(brick_mix),metaitem(brick_mix),metaitem(brick_mix)]
  //     ])
  // }
  // def fireclay_ingredients = [
  //     metaitem('dustCalciumHydroxide'),
  //     metaitem("sand.dust"),
  //     metaitem('dustFlint'),
  //     metaitem('dustClay')
  // ]
  // def compressed_fireclay_ingredients = [
  //     [metaitem('dustFireclay'),metaitem('dustFireclay'),metaitem('dustFireclay')],
  //     [metaitem('dustFireclay'),metaitem('wooden_form.brick'), metaitem('dustFireclay')],
  //     [metaitem('dustFireclay'),metaitem('dustFireclay'),metaitem('dustFireclay')]
  // ]
  // crafting.addShapeless('ManualFireclay',metaitem('dustFireclay') * 2, fireclay_ingredients) 
  // crafting.addShaped('pfb_casing_firebricks', item('gregtech:metal_casing', 1), [
  //     [metaitem('brick.fireclay'),metaitem('brick.fireclay')],
  //     [metaitem('brick.fireclay'),metaitem('brick.fireclay')]
  // ])
  // crafting.addShaped('slaked_lime_manual', metaitem('dustCalciumHydroxide') * 8, [
  //     [metaitem('dustQuicklime'),metaitem('dustQuicklime'),metaitem('dustQuicklime')],
  //     [metaitem('dustQuicklime'),fluid('water') * 1000, metaitem('dustQuicklime')],
  //     [metaitem('dustQuicklime'),metaitem('dustQuicklime'),metaitem('dustQuicklime')]])
  // CompressBrickRecipes('dustFireclay', 'compressed.fireclay')
  // def mudbrick_mix_ingredients = [
  //     item('biomesoplenty:mudball'),
  //     metaitem("sand.dust"),
  //     metaitem('straw'),
  //     item('minecraft:clay_ball')
  // ]
  // crafting.addShapeless('ManualMudbrickMix',metaitem('mudbrick_mix') * 2, mudbrick_mix_ingredients)
  // crafting.addShapeless('StrawCutting',metaitem('straw') * 2, [ore('toolKnife'), item('notreepunching:grass_fiber')])
  // def damage = { 
  //     stack -> 
  //         stack.setItemDamage(stack.getItemDamage() + 1)
  //         if (stack.getItemDamage() <= stack.getMaxDamage()) {
  //             stack.copy()
  //         }
  // }
  // CompressBrickRecipes('mudbrick_mix', 'gregtechfoodoption:brick.adobe')
});