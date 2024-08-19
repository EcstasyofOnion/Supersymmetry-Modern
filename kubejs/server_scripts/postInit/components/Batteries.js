import globals.Globals
import gregtech.api.recipes.recipeproperties.RecipeProperty;
import gregtech.api.recipes.RecipeBuilder;
import static gregtech.api.recipes.RecipeMaps.*;
import gregtech.api.unification.material.Materials.*;
import gregtech.api.recipes.ModHandler;
import gregtech.api.unification.material.Materials;
import gregtech.api.unification.ore.OrePrefix;
import gregtech.api.unification.stack.UnificationEntry;

ServerEvents.recipes(event => {
  event.remove({ type: 'gtceu:canner', input: 'susy:battery.hull.lv' && '#forge:dusts/sodium'})
  event.remove({ type: 'gtceu:canner', input: 'susy:battery.hull.mv' && '#forge:dusts/sodium'})
  event.remove({ type: 'gtceu:canner', input: 'susy:battery.hull.hv' && '#forge:dusts/sodium'})
  event.remove({ type: 'gtceu:canner', input: 'susy:battery.hull.lv' && '#forge:dusts/lithium'})
  event.remove({ type: 'gtceu:canner', input: 'susy:battery.hull.mv' && '#forge:dusts/lithium'})
  event.remove({ type: 'gtceu:canner', input: 'susy:battery.hull.hv' && '#forge:dusts/lithium'})
  event.remove({ type: 'gtceu:canner', input: 'susy:battery.hull.lv' && '#forge:dusts/cadmium'})
  event.remove({ type: 'gtceu:canner', input: 'susy:battery.hull.mv' && '#forge:dusts/cadmium'})
  event.remove({ type: 'gtceu:canner', input: 'susy:battery.hull.hv' && '#forge:dusts/cadmium'})
  event.remove({ type: 'gtceu:autoclave', input: 'susy:energium_dust' && safeFluidOf('minecraft:water')})
  event.remove({ type: 'gtceu:autoclave', input: 'susy:energium_dust' && safeFluidOf('gtceu:distilled_water')})
  event.remove({ type: 'gtceu:autoclave', input: 'susy:energium_dust' && safeFluidOf('gtceu:black_steel')})
  event.remove({ type: 'gtceu:autoclave', input: 'susy:energium_dust' && safeFluidOf('gtceu:blue_steel')})
  event.remove({ type: 'gtceu:autoclave', input: '#forge:dusts/lapotron' && safeFluidOf('minecraft:water')})
  event.remove({ type: 'gtceu:autoclave', input: '#forge:dusts/lapotron' && safeFluidOf('gtceu:distilled_water')})
  event.remove({ type: 'gtceu:autoclave', input: '#forge:dusts/lapotron' && safeFluidOf('gtceu:blue_steel')})
  event.remove({ type: 'gtceu:autoclave', input: '#forge:dusts/lapotron' && safeFluidOf('gtceu:red_steel')})

  event.recipes.gtceu.assembler('vlg5ducz9x0x7o') // remapped from original line 71
    .itemInputs('gtceu:lv_battery_hull')
    .itemInputs('2x #forge:plates/lead')
    .inputFluids(safeFluidOf('gtceu:sulfuric_acid', 1000))
    .itemOutputs('susy:battery.lead_acid')
    .duration(100)
    .EUt(16)

/*event.recipes.gtceu.assembler('5isdrkyeuijfzc') // remapped from original line 80
    .itemInputs('2x #forge:rods/long_lead')
    .itemInputs('4x #forge:plates/lead')
    .itemOutputs(metaitem('drum.lead'))
    .duration(200)
    .EUt(16)
    .circuit(2)
*/

  event.recipes.gtceu.mixer('spbzye1nnznun8') // remapped from original line 89
    .inputFluids(safeFluidOf('gtceu:sulfur_trioxide', 1000))
    .inputFluids(safeFluidOf('minecraft:water', 1000))
    .outputFluids(safeFluidOf('gtceu:sulfuric_acid', 1000))
    .EUt(7)
    .duration(40)

  event.recipes.gtceu.electric_blast_furnace('3lw7mabhowakbx') // remapped from original line 97
    .itemInputs('4x #forge:dusts/sodium')
    .itemInputs('3x #forge:dusts/iron')
    .itemInputs('3x #forge:dusts/manganese')
    .inputFluids(safeFluidOf('gtceu:oxygen', 12000))
    .itemOutputs('10x #forge:dusts/sodium_cathode_alloy')
    .blastFurnaceTemp(1250)
    .duration(300)
    .EUt(30)

  event.recipes.susy.continuous_stirred_tank_reactor('xe9l8bvutxgb0f') // remapped from original line 108
    .inputFluids(safeFluidOf('susy:phosgene', 50))
    .inputFluids(safeFluidOf('gtceu:methanol', 100))
    .outputFluids(safeFluidOf('susy:dimethyl_carbonate', 50))
    .outputFluids(safeFluidOf('susy:hydrogen_chloride', 100))
    .duration(1)
    .EUt(30)

  event.recipes.susy.roaster('nmnzpaov8rnky0') // remapped from original line 117
    .itemInputs('6x #forge:dusts/lithium_carbonate')
    .inputFluids(safeFluidOf('susy:hydrogen_fluoride', 2000))
    .outputFluids(safeFluidOf('susy:dense_steam', 1000))
    .outputFluids(safeFluidOf('gtceu:carbon_dioxide', 1000))
    .itemOutputs('4x #forge:dusts/lithium_fluoride')
    .duration(140)
    .EUt(30)

  event.recipes.susy.batch_reactor('qnn1bw67uchojh') // remapped from original line 127
    .itemInputs('2x #forge:dusts/lithium_fluoride')
    .itemInputs('6x #forge:dusts/phosphorus_pentachloride')
    .inputFluids(safeFluidOf('susy:hydrogen_fluoride', 5000))
    .outputFluids(safeFluidOf('susy:hydrogen_chloride', 5000))
    .itemOutputs('8x #forge:dusts/lithium_hexafluorophosphate')
    .duration(140)
    .EUt(30)

  event.recipes.susy.bubble_column_reactor('u33e4eyovopqot') // remapped from original line 137
    .inputFluids(safeFluidOf('susy:ethylene_oxide', 50))
    .inputFluids(safeFluidOf('gtceu:carbon_dioxide', 50))
    .outputFluids(safeFluidOf('susy:ethylene_carbonate', 50))
    .duration(5)
    .EUt(30)

  event.recipes.gtceu.mixer('4hr4bq8ovteqsg') // remapped from original line 145
    .itemInputs('8x #forge:dusts/lithium_hexafluorophosphate')
    .inputFluids(safeFluidOf('susy:ethylene_carbonate', 1000))
    .outputFluids(safeFluidOf('susy:lithium_hexafluorophosphate_electrolyte', 1000))
    .duration(400)
    .EUt(30)

  event.recipes.susy.roaster('k3ao24k514dqfw') // remapped from original line 153
    .itemInputs('6x #forge:dusts/lithium_carbonate')
    .itemInputs('4x #forge:dusts/cobalt_oxide')
    .outputFluids(safeFluidOf('gtceu:carbon_monoxide', 1000))
    .itemOutputs('8x #forge:dusts/lithium_cobalt_oxide')
    .duration(140)
    .EUt(30)

  event.recipes.susy.roaster('tw9t593qvp2ooh') // remapped from original line 162
    .itemInputs('1x #forge:dusts/nickel')
    .inputFluids(safeFluidOf('gtceu:chlorine', 2000))
    .itemOutputs('3x #forge:dusts/nickel_chloride')
    .duration(100)
    .EUt(30)

  event.recipes.susy.batch_reactor('jwhqtgmtymqs1h') // remapped from original line 170
    .itemInputs('3x #forge:dusts/nickel_chloride')
    .inputFluids(safeFluidOf('susy:potassium_hydroxide_solution', 2000))
    .itemOutputs('5x #forge:dusts/nickel_hydroxide')
    .outputFluids(safeFluidOf('susy:potassium_chloride_solution', 2000))
    .duration(100)
    .EUt(30)

  event.recipes.susy.batch_reactor('fwx2mzpi9imqjo') // remapped from original line 179
    .itemInputs('10x #forge:dusts/nickel_hydroxide')
    .inputFluids(safeFluidOf('susy:potassium_hydroxide_solution', 2000))
    .inputFluids(safeFluidOf('gtceu:chlorine', 2000))
    .itemOutputs('8x #forge:dusts/nickel_oxide_hydroxide')
    .outputFluids(safeFluidOf('susy:diluted_rock_salt_solution', 4000))
    .duration(100)
    .EUt(30)

  event.recipes.gtceu.assembler('plxybtptzdejol') // remapped from original line 189
    .itemInputs('gtceu:lv_battery_hull')
    .itemInputs('1x #forge:dusts/carbon')
    .itemInputs('1x #forge:dusts/sodium_cathode_alloy')
    .inputFluids(safeFluidOf('susy:dimethyl_carbonate', 100))
    .itemOutputs('gtceu:lv_sodium_battery')
    .duration(100)
    .EUt(16)

  event.recipes.gtceu.assembler('bfsrgyyi9d2xuo') // remapped from original line 199
    .itemInputs('gtceu:mv_battery_hull')
    .itemInputs('2x #forge:dusts/carbon')
    .itemInputs('2x #forge:dusts/sodium_cathode_alloy')
    .inputFluids(safeFluidOf('susy:dimethyl_carbonate', 200))
    .itemOutputs('gtceu:mv_sodium_battery')  
    .duration(200)
    .EUt(16)

  event.recipes.gtceu.assembler('rdezxvcw9maes8') // remapped from original line 209
    .itemInputs('gtceu:hv_battery_hull')
    .itemInputs('4x #forge:dusts/carbon')
    .itemInputs('4x #forge:dusts/sodium_cathode_alloy')
    .inputFluids(safeFluidOf('susy:dimethyl_carbonate', 500))
    .itemOutputs('gtceu:hv_sodium_battery')  
    .duration(400)
    .EUt(16)

  event.recipes.gtceu.assembler('jau2rcjl7bihbe') // remapped from original line 219
    .itemInputs('gtceu:lv_battery_hull')
    .itemInputs('1x #forge:dusts/graphite')
    .itemInputs('1x #forge:dusts/lithium_cobalt_oxide')
    .inputFluids(safeFluidOf('susy:lithium_hexafluorophosphate_electrolyte', 100))
    .itemOutputs('gtceu:lv_lithium_battery')  
    .duration(100)
    .EUt(16)

  event.recipes.gtceu.assembler('b6vjmwtns4c3bw') // remapped from original line 229
    .itemInputs('gtceu:mv_battery_hull')
    .itemInputs('2x #forge:dusts/graphite')
    .itemInputs('2x #forge:dusts/lithium_cobalt_oxide')
    .inputFluids(safeFluidOf('susy:lithium_hexafluorophosphate_electrolyte', 200))
    .itemOutputs('gtceu:mv_lithium_battery')
    .duration(200)
    .EUt(16)

  event.recipes.gtceu.assembler('fnhzkyzraoaqqr') // remapped from original line 239
    .itemInputs('gtceu:hv_battery_hull')
    .itemInputs('4x #forge:dusts/graphite')
    .itemInputs('4x #forge:dusts/lithium_cobalt_oxide')
    .inputFluids(safeFluidOf('susy:lithium_hexafluorophosphate_electrolyte', 500))
    .itemOutputs('gtceu:hv_lithium_battery')
    .duration(400)
    .EUt(16)

  event.recipes.gtceu.assembler('aamc7y9xw74k85') // remapped from original line 249
    .itemInputs('gtceu:lv_battery_hull')
    .itemInputs('1x #forge:dusts/cadmium')
    .itemInputs('1x #forge:dusts/nickel_oxide_hydroxide')
    .inputFluids(safeFluidOf('susy:potassium_hydroxide_solution', 100))
    .itemOutputs('gtceu:lv_cadmium_battery')
    .duration(100)
    .EUt(16)

  event.recipes.gtceu.assembler('excxonfefaizyy') // remapped from original line 259
    .itemInputs('gtceu:mv_battery_hull')
    .itemInputs('2x #forge:dusts/cadmium')
    .itemInputs('2x #forge:dusts/nickel_oxide_hydroxide')
    .inputFluids(safeFluidOf('susy:potassium_hydroxide_solution', 200))
    .itemOutputs('gtceu:mv_cadmium_battery')
    .duration(200)
    .EUt(16)

  event.recipes.gtceu.assembler('nbvf9w0h1bcl6e') // remapped from original line 269
    .itemInputs('gtceu:hv_battery_hull')
    .itemInputs('4x #forge:dusts/cadmium')
    .itemInputs('4x #forge:dusts/nickel_oxide_hydroxide')
    .inputFluids(safeFluidOf('susy:potassium_hydroxide_solution', 500))
    .itemOutputs('gtceu:hv_cadmium_battery')
    .duration(400)
    .EUt(16)

    event.shaped('susy:anode.lead', [
      '   ',
      ' AB',
      '   '
    ], {
      A: 'gtceu:lead_plate',
      B: 'gtceu:tin_single_cable'
    }
    )

    event.shaped('susy:cathode.lead', [
      '   ',
      'BA ',
      '   '
    ], {
      A: 'gtceu:lead_plate',
      B: 'gtceu:tin_single_cable'
    }
    )

    event.shaped('susy:battery.lead_acid', [
      'AEA',
      'DCB',
      'AAA'
    ], {
      A: 'gtceu:lead_plate',
      B: 'susy:anode.lead',
      C: 'gtceu:sulfuric_acid_bucket',
      D: 'susy:cathode.lead',
      E: 'gtceu:tin_single_cable'
    }
    )

 // The following forLoops couldn't be parsed, they were added to the forLoopBuffers
 // The following entries are unknown or couldn't be parsed, you should rewrite them manually.
  // CSTR = recipemap('continuous_stirred_tank_reactor')
  // ROASTER = recipemap('roaster')
  // BR = recipemap('batch_reactor')
  // BCR = recipemap('bubble_column_reactor')
  // crafting.addShaped("drum_lead", metaitem('drum.lead'), [
  //         [null,ore('craftingToolHardHammer'),null],
  //         [metaitem('plateLead'),metaitem('stickLongLead'),metaitem('plateLead')],
  //         [metaitem('plateLead'),metaitem('stickLongLead'),metaitem('plateLead')]
  // ]);
  // crafting.addShapeless("drum_nbt_lead", metaitem('drum.lead'), [
  //         metaitem('drum.lead').noreturn()
  // ]);
  // crafting.addShapeless("drum_nbt_brass", metaitem('drum.brass'), [
  //         metaitem('drum.brass').noreturn()
  // ]);
  // mods.jei.ingredient.removeAndHide(metaitem('energy_crystal'));
  // mods.jei.ingredient.removeAndHide(metaitem('lapotron_crystal'));
  // mods.jei.ingredient.removeAndHide(metaitem('energy.lapotronic_orb'));
  // mods.jei.ingredient.removeAndHide(metaitem('energy.lapotronic_orb_cluster'));
  // mods.jei.ingredient.removeAndHide(metaitem('energy.module'));
  // mods.jei.ingredient.removeAndHide(metaitem('energy.cluster'));
  // mods.jei.ingredient.removeAndHide(metaitem('max.battery'));
});