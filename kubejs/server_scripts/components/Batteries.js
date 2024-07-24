const voltageTiers = ["ulv", "lv", "mv", "hv", "ev", "iv", "luv", "zpm", "uv", "uhv", "uev", "uiv", "uxv", "opv", "max"];
const voltageTiersInt = [8, 32, 128, 512, 2048, 8192, 32768, 131072, 524288, 2097152, 8388608, 33554432, 134217728, 536870912, 2147483647];
const voltAmps = [7, 30, 120, 480, 1920, 7680, 30720, 122880, 491520, 1966080, 7864320, 31457280, 125829120, 503316480, 2013265920];

function safeFluidOf(fluidId, amount) {
    if (Fluid.exists(fluidId)) {
        return Fluid.of(fluidId, amount);
    }
    throw new Error(`Fluid ${fluidId} does not exist.`);
}
function safeItemId(itemIdWithQuantifier) {
    const itemId = itemIdWithQuantifier.split(" ")[1];
    if (Item.exists(itemId)) {
        return itemIdWithQuantifier;
    }
    throw new Error(`ItemId ${itemId} does not exist.`);
}

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

  event.recipes.susy.mods.gregtech.assembler('vlg5ducz9x0x7o') // remapped from original line 71
    .itemInputs(metaitem('battery.hull.lv'))
    .itemInputs('2x #forge:plates/lead')
    .inputFluids(safeFluidOf('gtceu:sulfuric_acid', 1000))
    .itemOutputs(metaitem('battery.lead_acid'))
    .duration(100)
    .EUt(16)

  event.recipes.susy.mods.gregtech.assembler('5isdrkyeuijfzc') // remapped from original line 80
    .itemInputs('2x #forge:rods/long_lead')
    .itemInputs('4x #forge:plates/lead')
    .itemOutputs(metaitem('drum.lead'))
    .duration(200)
    .EUt(16)
    .circuit(2)

  event.recipes.susy.MIXER_RECIPES('spbzye1nnznun8') // remapped from original line 89
    .inputFluids(Materials.SulfurTrioxide.getFluid(1000))
    .inputFluids(Materials.Water.getFluid(1000))
    .outputFluids(Materials.SulfuricAcid.getFluid(1000))
    .EUt(7)
    .duration(40)

  event.recipes.susy.mods.gregtech.electric_blast_furnace('3lw7mabhowakbx') // remapped from original line 97
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

  event.recipes.susy.MIXER_RECIPES('4hr4bq8ovteqsg') // remapped from original line 145
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

  event.recipes.susy.mods.gregtech.assembler('plxybtptzdejol') // remapped from original line 189
    .itemInputs(metaitem('battery.hull.lv'))
    .itemInputs('1x #forge:dusts/carbon')
    .itemInputs('1x #forge:dusts/sodium_cathode_alloy')
    .inputFluids(safeFluidOf('susy:dimethyl_carbonate', 100))
    .itemOutputs(metaitem('battery.re.lv.sodium'))
    .duration(100)
    .EUt(16)

  event.recipes.susy.mods.gregtech.assembler('bfsrgyyi9d2xuo') // remapped from original line 199
    .itemInputs(metaitem('battery.hull.mv'))
    .itemInputs('2x #forge:dusts/carbon')
    .itemInputs('2x #forge:dusts/sodium_cathode_alloy')
    .inputFluids(safeFluidOf('susy:dimethyl_carbonate', 200))
    .itemOutputs(metaitem('battery.re.mv.sodium'))
    .duration(200)
    .EUt(16)

  event.recipes.susy.mods.gregtech.assembler('rdezxvcw9maes8') // remapped from original line 209
    .itemInputs(metaitem('battery.hull.hv'))
    .itemInputs('4x #forge:dusts/carbon')
    .itemInputs('4x #forge:dusts/sodium_cathode_alloy')
    .inputFluids(safeFluidOf('susy:dimethyl_carbonate', 500))
    .itemOutputs(metaitem('battery.re.hv.sodium'))
    .duration(400)
    .EUt(16)

  event.recipes.susy.mods.gregtech.assembler('jau2rcjl7bihbe') // remapped from original line 219
    .itemInputs(metaitem('battery.hull.lv'))
    .itemInputs('1x #forge:dusts/graphite')
    .itemInputs('1x #forge:dusts/lithium_cobalt_oxide')
    .inputFluids(safeFluidOf('susy:lithium_hexafluorophosphate_electrolyte', 100))
    .itemOutputs(metaitem('battery.re.lv.lithium'))
    .duration(100)
    .EUt(16)

  event.recipes.susy.mods.gregtech.assembler('b6vjmwtns4c3bw') // remapped from original line 229
    .itemInputs(metaitem('battery.hull.mv'))
    .itemInputs('2x #forge:dusts/graphite')
    .itemInputs('2x #forge:dusts/lithium_cobalt_oxide')
    .inputFluids(safeFluidOf('susy:lithium_hexafluorophosphate_electrolyte', 200))
    .itemOutputs(metaitem('battery.re.mv.lithium'))
    .duration(200)
    .EUt(16)

  event.recipes.susy.mods.gregtech.assembler('fnhzkyzraoaqqr') // remapped from original line 239
    .itemInputs(metaitem('battery.hull.hv'))
    .itemInputs('4x #forge:dusts/graphite')
    .itemInputs('4x #forge:dusts/lithium_cobalt_oxide')
    .inputFluids(safeFluidOf('susy:lithium_hexafluorophosphate_electrolyte', 500))
    .itemOutputs(metaitem('battery.re.hv.lithium'))
    .duration(400)
    .EUt(16)

  event.recipes.susy.mods.gregtech.assembler('aamc7y9xw74k85') // remapped from original line 249
    .itemInputs(metaitem('battery.hull.lv'))
    .itemInputs('1x #forge:dusts/cadmium')
    .itemInputs('1x #forge:dusts/nickel_oxide_hydroxide')
    .inputFluids(safeFluidOf('susy:potassium_hydroxide_solution', 100))
    .itemOutputs(metaitem('battery.re.lv.cadmium'))
    .duration(100)
    .EUt(16)

  event.recipes.susy.mods.gregtech.assembler('excxonfefaizyy') // remapped from original line 259
    .itemInputs(metaitem('battery.hull.mv'))
    .itemInputs('2x #forge:dusts/cadmium')
    .itemInputs('2x #forge:dusts/nickel_oxide_hydroxide')
    .inputFluids(safeFluidOf('susy:potassium_hydroxide_solution', 200))
    .itemOutputs(metaitem('battery.re.mv.cadmium'))
    .duration(200)
    .EUt(16)

  event.recipes.susy.mods.gregtech.assembler('nbvf9w0h1bcl6e') // remapped from original line 269
    .itemInputs(metaitem('battery.hull.hv'))
    .itemInputs('4x #forge:dusts/cadmium')
    .itemInputs('4x #forge:dusts/nickel_oxide_hydroxide')
    .inputFluids(safeFluidOf('susy:potassium_hydroxide_solution', 500))
    .itemOutputs(metaitem('battery.re.hv.cadmium'))
    .duration(400)
    .EUt(16)

 // The following forLoops couldn't be parsed, they were added to the forLoopBuffers
 // The following entries are unknown or couldn't be parsed, you should rewrite them manually.
  // import globals.Globals
  // import gregtech.api.recipes.recipeproperties.RecipeProperty;
  // import gregtech.api.recipes.RecipeBuilder;
  // import static gregtech.api.recipes.RecipeMaps.*;
  // import gregtech.api.unification.material.Materials.*;
  // import gregtech.api.recipes.ModHandler;
  // import gregtech.api.unification.material.Materials;
  // import gregtech.api.unification.ore.OrePrefix;
  // import gregtech.api.unification.stack.UnificationEntry;
  // CSTR = recipemap('continuous_stirred_tank_reactor')
  // ROASTER = recipemap('roaster')
  // BR = recipemap('batch_reactor')
  // BCR = recipemap('bubble_column_reactor')
  // crafting.addShaped("battery_lead_acid", metaitem('battery.lead_acid'), [
  //         [metaitem('plateBatteryAlloy'), metaitem('cableGtSingleTin'), metaitem('plateBatteryAlloy')],
  //         [metaitem('cathode.lead'),fluid('sulfuric_acid') * 1000, metaitem('anode.lead')],
  //         [metaitem('plateBatteryAlloy'), metaitem('plateBatteryAlloy'), metaitem('plateBatteryAlloy')]
  // ]);
  // crafting.addShaped("cathode_lead", metaitem('cathode.lead'), [
  //         [null,null,null],
  //         [metaitem('cableGtSingleTin'), metaitem('plateLead'),null],
  //         [null,null,null]
  // ]);
  // crafting.addShaped("anode_lead", metaitem('anode.lead'), [
  //         [null,null,null],
  //         [null,metaitem('plateLead'),metaitem('cableGtSingleTin')],
  //         [null,null,null]
  // ]);
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