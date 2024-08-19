import globals.Globals

ServerEvents.recipes(event => {

  event.recipes.gtceu.alloy_smelter('0fx9mxgthhnqqp') // remapped from original line 7
    .itemInputs('6x #forge:dusts/bismuth')
    .itemInputs('4x #forge:dusts/tin')
    .itemOutputs('10x #forge:ingots/lead_free_solder')
    .duration(120)
    .EUt(voltAmps[2])

  event.recipes.gtceu.alloy_smelter('6jkfutyfadhbdx') // remapped from original line 15
    .itemInputs('6x #forge:dusts/bismuth')
    .itemInputs('4x #forge:ingots/tin')
    .itemOutputs('10x #forge:ingots/lead_free_solder')
    .duration(120)
    .EUt(voltAmps[2])

  event.recipes.gtceu.alloy_smelter('xss25m98xzc5mp') // remapped from original line 23
    .itemInputs('6x #forge:ingots/bismuth')
    .itemInputs('4x #forge:dusts/tin')
    .itemOutputs('10x #forge:ingots/lead_free_solder')
    .duration(120)
    .EUt(voltAmps[2])

  event.recipes.gtceu.alloy_smelter('setmrhq4liahnk') // remapped from original line 31
    .itemInputs('6x #forge:ingots/bismuth')
    .itemInputs('4x #forge:ingots/tin')
    .itemOutputs('10x #forge:ingots/lead_free_solder')
    .duration(120)
    .EUt(voltAmps[2])

  event.recipes.gtceu.mixer('b7g9lcjugwjos5') // remapped from original line 39
    .itemInputs('3x #forge:dusts/indium')
    .itemInputs('1x #forge:dusts/tiny_silver')
    .itemOutputs('3x #forge:dusts/cryogenic_solder')
    .duration(120)
    .EUt(voltAmps[2])

 // The following forLoops couldn't be parsed, they were added to the forLoopBuffers
 // The following entries are unknown or couldn't be parsed, you should rewrite them manually.
  // EBF = recipemap('electric_blast_furnace')
  // MIXER = recipemap('mixer')
  // ALLOY_SMELTER = recipemap('alloy_smelter')
  // crafting.addShaped("susy:cryogenic_solder", metaitem('dustCryogenicSolder') * 3, [
  //         [ore('dustIndium'), ore('dustIndium'), ore('dustIndium')],
  //         [ore('dustTinySilver'), null, null],
  //         [null, null, null]
  // ])
});