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
  event.remove({ type: 'gtceu:chemical_bath', input: '#forge:ingots/hot_kanthal' && safeFluidOf('minecraft:water')})
  event.remove({ type: 'gtceu:chemical_bath', input: '#forge:ingots/hot_kanthal' && safeFluidOf('gtceu:distilled_water')})

  event.recipes.susy.recipemap('radiator')('ccfsololl3nd4q') // remapped from original line 168
    .inputFluids(safeFluidOf('susy:hot_air', 1000))
    .outputFluids(liquid('air') * 1000)
    .duration(100)

  event.recipes.susy.recipemap('cooling_unit')('wfwib1qtbiqovp') // remapped from original line 174
    .inputFluids(safeFluidOf('susy:hot_air', 1000))
    .outputFluids(liquid('air') * 1000)
    .duration(50)
    .EUt(480)

 // The following forLoops couldn't be parsed, they were added to the forLoopBuffers
  // for (fluid in IQuenchingFluid.quenching_fluids) {
  //         recipemap('chemical_bath').recipeBuilder()
  //                 .inputs(ore('ingotHotKanthal'))
  //                 .fluidInputs(liquid(fluid.getColdFluid()) * fluid.amount)
  //                 .outputs(metaitem('ingotKanthal'))
  //                 .fluidOutputs(liquid(fluid.getHotFluid()) * fluid.amount)
  //                 .duration((int) fluid.getDuration() * 4)
  //                 .EUt(120)
  //                 .buildAndRegister();
  // }

  // for (entry in ingotMap) {
  //     for (fluid in IQuenchingFluid.quenching_fluids) {
  //         recipemap('quencher').recipeBuilder()
  //                 .inputs(ore('ingotHot' + entry.key))
  //                 .fluidInputs(liquid(fluid.getColdFluid()) * fluid.amount)
  //                 .outputs(metaitem('ingot' + entry.key))
  //                 .fluidOutputs(liquid(fluid.getHotFluid()) * fluid.amount)
  //                 .duration((int) (fluid.getDuration() * (float) (entry.value / 2000)))
  //                 .EUt(120)
  //                 .buildAndRegister();
  //     }
  // }

  // for (entry in fluidMap) {
  //     for (fluid in IQuenchingFluid.quenching_fluids) {
  //         recipemap('quencher').recipeBuilder()
  //                 .notConsumable(metaitem('shape.mold.ingot'))
  //                 .fluidInputs(liquid(entry.key) * 144)
  //                 .fluidInputs(liquid(fluid.getColdFluid()) * fluid.amount)
  //                 .outputs(metaitem('ingot' + entry.value))
  //                 .fluidOutputs(liquid(fluid.getHotFluid()) * fluid.amount)
  //                 .duration((int) ((int) fluid.getDuration() * (int) 2))
  //                 .EUt(120)
  //                 .buildAndRegister();
  //     }
  // }

 // The following entries are unknown or couldn't be parsed, you should rewrite them manually.
  // import gregtech.loaders.recipe.handlers.OreRecipeHandler;
  // import gregtech.api.unification.ore.OrePrefix;
  // import gregtech.api.unification.material.Material;
  // import classes.*;
  // import gregtech.api.unification.material.properties.PropertyKey;
  // import gregtech.api.unification.material.properties.IngotProperty;
  // import gregtech.api.unification.ore.OrePrefix;
  // IQuenchingFluid Water = new IQuenchingFluid("water", 'warm_water', 1000, 100.0, false);
  // IQuenchingFluid Air = new IQuenchingFluid('air', 'hot_air', 10000, 1000.0, false);
  // IQuenchingFluid CompressedAir = new IQuenchingFluid('hp_air', 'hot_hp_air', 5000, 500.0, false);
  // IQuenchingFluid Nitrogen = new IQuenchingFluid('nitrogen', 'hot_nitrogen', 10000, 500.0, true);
  // IQuenchingFluid CompressedNitrogen = new IQuenchingFluid('hp_nitrogen', 'hot_hp_nitrogen', 5000, 500.0, true);
  // IQuenchingFluid SaltWater = new IQuenchingFluid('salt_water', 'warm_salt_water', 1000, 150.0, false);
  // IQuenchingFluid Brine = new IQuenchingFluid('brine', 'warm_brine', 1000, 150.0, false);
  // def ingotMap = [
  //         'Europium':6000,
  //         'Iridium':4500,
  //         'Molybdenum':2890,
  //         'Niobium':2750,
  //         'Osmium':4500,
  //         'Palladium':1828,
  //         'Platinum':2045,
  //         'Rhodium':2237,
  //         'Ruthenium':2607,
  //         'Samarium':5400,
  //         'Tantalum':3293,
  //         'Thorium':2028,
  //         'Titanium':2141,
  //         'Tungsten':3600,
  //         'Vanadium':2183,
  //         'Yttrium':1799,
  //         'Naquadah':5000,
  //         'NaquadahEnriched':7000,
  //         'Naquadria':9000,
  //         'Trinium':7200,
  //         'Kanthal':1800,
  //         'Nichrome':2700,
  //         'NiobiumNitride':2846,
  //         'NiobiumTitanium':4500,
  //         'BlackBronze':2000,
  //         'Ruridit':4500,
  //         'Ultimet':2700,
  //         'VanadiumGallium':4500,
  //         'YttriumBariumCuprate':4500,
  //         'Osmiridium':4500,
  //         'TungstenCarbide':3068,
  //         'MagnesiumDiboride':2500,
  //         'MercuryBariumCalciumCuprate':3300,
  //         'UraniumTriplatinum':4400,
  //         'SamariumIronArsenicOxide':5200,
  //         'IndiumTinBariumTitaniumCuprate':6000,
  //         'UraniumRhodiumDinaquadide':9000,
  //         'EnrichedNaquadahTriniumEuropiumDuranide':9900,
  //         'RutheniumTriniumAmericiumNeutronate':10800,
  //         'TungstenSteel':3000,
  //         'RtmAlloy': 3200,
  //         'NaquadahAlloy':7200,
  //         'RhodiumPlatedPalladium':4500,
  //         'Hssg':4200,
  //         'Hsse':5000,
  //         'Hsss':5000,
  //         'Stellite100':3790,
  //         'WatertightSteel':3850,
  //         'MaragingSteel300':4000,
  //         'HastelloyC276':4625,
  //         'HastelloyX':4200,
  //         'Trinaquadalloy':8747,
  //         'Zeron100':3693,
  //         'TitaniumCarbide':3430,
  //         'TantalumCarbide':4120,
  //         'MolybdenumDisilicide':2300,
  //         'TitaniumTungstenCarbide':3800,
  //         'IncoloyMa956':3625
  // ]
  // def fluidMap = [
  //         'molten.kanthal':'Kanthal',
  //         'molten.nichrome':'Nichrome',
  //         'molten.niobium_nitride':'NiobiumNitride',
  //         'molten.niobium_titanium':'NiobiumTitanium',
  //         'molten.black_bronze':'BlackBronze',
  //         'molten.ruridit':'Ruridit',
  //         'molten.ultimet':'Ultimet',
  //         'molten.vanadium_gallium':'VanadiumGallium',
  //         'molten.yttrium_barium_cuprate':'YttriumBariumCuprate',
  //         'molten.osmiridium':'Osmiridium',
  //         'molten.tungsten_carbide':'TungstenCarbide',
  //         'molten.magnesium_diboride':'MagnesiumDiboride',
  //         'molten.mercury_barium_calcium_cuprate':'MercuryBariumCalciumCuprate',
  //         'molten.uranium_triplatinum':'UraniumTriplatinum',
  //         'molten.samarium_iron_arsenic_oxide':'SamariumIronArsenicOxide',
  //         'molten.indium_tin_barium_titanium_cuprate':'IndiumTinBariumTitaniumCuprate',
  //         'molten.uranium_rhodium_dinaquadide':'UraniumRhodiumDinaquadide',
  //         'molten.enriched_naquadah_trinium_europium_duranide':'EnrichedNaquadahTriniumEuropiumDuranide',
  //         'molten.ruthenium_trinium_americium_neutronate':'RutheniumTriniumAmericiumNeutronate',
  //         'molten.tungsten_steel':'TungstenSteel',
  //         'molten.naquadah_alloy':'NaquadahAlloy',
  //         'molten.rhodium_plated_palladium':'RhodiumPlatedPalladium',
  //         'molten.hssg':'Hssg',
  //         'molten.hsse':'Hsse',
  //         'molten.hsss':'Hsss',
  //         'molten.stellite_100':'Stellite100',
  //         'molten.watertight_steel':'WatertightSteel',
  //         'molten.maraging_steel_300':'MaragingSteel300',
  //         'molten.hastelloy_c_276':'HastelloyC276',
  //         'molten.hastelloy_x':'HastelloyX',
  //         'molten.trinaquadalloy':'Trinaquadalloy',
  //         'molten.zeron_100':'Zeron100',
  //         'molten.titanium_carbide':'TitaniumCarbide',
  //         'molten.tantalum_carbide':'TantalumCarbide',
  //         'molten.molybdenum_disilicide':'MolybdenumDisilicide',
  //         'molten.titanium_tungsten_carbide':'TitaniumTungstenCarbide',
  //         'molten.incoloy_ma_956':'IncoloyMa956'
  // ]
});