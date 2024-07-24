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
  event.remove({ type: 'gtceu:assembler', input: 'susy:hull.mv' && '#forge:frames/steel' && 'susy:circuit.good_integrated' && 'susy:electric.motor.mv' && 'susy:electric.pump.mv' && '#forge:gears/vanadium_steel' && 'susy:circuit.integrated'})

  event.recipes.susy.recipemap('mixer')('vofrzx0gp2w1xm') // remapped from original line 226
    .inputFluids(safeFluidOf('gtceu:coal_tar', 1000))
    .itemInputs('4x #forge:dusts/coke')
    .itemOutputs(metaitem('pitch_binder') * 4)
    .EUt(30)
    .duration(200)

  event.recipes.susy.recipemap('extruder')('tz79kjqvr9hhl4') // remapped from original line 234
    .notConsumable(metaitem('shape.extruder.rod'))
    .itemInputs(metaitem('pitch_binder'))
    .itemOutputs(metaitem('raw_electrode'))
    .EUt(30)
    .duration(200)

  event.recipes.susy.recipemap('sintering_oven')('dqj2xfkrpvlou4') // remapped from original line 242
    .itemInputs(metaitem('raw_electrode'))
    .inputFluids(safeFluidOf('susy:syngas', 100))
    .inputFluids(safeFluidOf('gtceu:air', 100))
    .itemOutputs(metaitem('graphite_electrode'))
    .outputFluids(safeFluidOf('gtceu:carbon_dioxide', 50))
    .EUt(30)
    .duration(150)

  event.recipes.susy.recipemap('sintering_oven')('nzp7mmyw7ir40t') // remapped from original line 252
    .itemInputs(metaitem('raw_electrode'))
    .inputFluids(safeFluidOf('gtceu:methane', 100))
    .inputFluids(safeFluidOf('gtceu:air', 100))
    .itemOutputs(metaitem('graphite_electrode'))
    .outputFluids(safeFluidOf('gtceu:carbon_dioxide', 50))
    .EUt(30)
    .duration(150)

  event.recipes.susy.recipemap('sintering_oven')('py1zpvo0h22bob') // remapped from original line 262
    .itemInputs(metaitem('raw_electrode'))
    .inputFluids(safeFluidOf('susy:syngas', 100))
    .inputFluids(safeFluidOf('gtceu:oxygen', 80))
    .itemOutputs(metaitem('graphite_electrode'))
    .outputFluids(safeFluidOf('gtceu:carbon_dioxide', 50))
    .EUt(30)
    .duration(150)

  event.recipes.susy.recipemap('sintering_oven')('pxu0fmhhi1io6u') // remapped from original line 272
    .itemInputs(metaitem('raw_electrode'))
    .inputFluids(safeFluidOf('gtceu:methane', 100))
    .inputFluids(safeFluidOf('gtceu:oxygen', 80))
    .itemOutputs(metaitem('graphite_electrode'))
    .outputFluids(safeFluidOf('gtceu:carbon_dioxide', 50))
    .EUt(30)
    .duration(150)

  event.recipes.susy.recipemap('assembler')('2tnrkqqpj985f9') // remapped from original line 561
    .circuit(6)
    .itemInputs('6x #forge:plates/silicon_carbide')
    .itemInputs(safeItemId('5x gregtech:metal_casing', ')))
    .itemOutputs(safeItemId('2x susy:susy_multiblock_casing'))
    .EUt(16)
    .duration(50)

  event.recipes.susy.recipemap('assembler')('g4jk7btr5dvzcs') // remapped from original line 572
    .itemInputs(metaitem('transformer.lv'))
    .itemInputs(metaitem('energy_hatch.output.lv'))
    .itemInputs(metaitem('voltage_coil.lv'))
    .itemInputs('2x #forge:wires/gt_quadruple_tin')
    .itemOutputs(metaitem('energy_hatch.output_4a.lv'))
    .EUt(7)
    .duration(100)

  event.recipes.susy.recipemap('assembler')('psj2sih7vmwfrc') // remapped from original line 582
    .itemInputs(metaitem('transformer.adjustable.lv'))
    .itemInputs(metaitem('energy_hatch.output_4a.lv'))
    .itemInputs(metaitem('voltage_coil.lv'))
    .itemInputs('2x #forge:wires/gt_octal_tin')
    .itemOutputs(metaitem('energy_hatch.output_16a.lv'))
    .EUt(7)
    .duration(200)

  event.recipes.susy.recipemap('assembler')('2lzay1wokas6o8') // remapped from original line 592
    .itemInputs(metaitem('transformer.mv'))
    .itemInputs(metaitem('energy_hatch.output.mv'))
    .itemInputs(metaitem('plate.ultra_low_power_integrated_circuit'))
    .itemInputs(metaitem('voltage_coil.mv'))
    .itemInputs('2x #forge:wires/gt_quadruple_copper')
    .itemOutputs(metaitem('energy_hatch.output_4a.mv'))
    .EUt(30)
    .duration(100)

  event.recipes.susy.recipemap('assembler')('g1e6ocdnntekk0') // remapped from original line 603
    .itemInputs(metaitem('transformer.adjustable.mv'))
    .itemInputs(metaitem('energy_hatch.output_4a.mv'))
    .itemInputs(metaitem('plate.ultra_low_power_integrated_circuit') * 2)
    .itemInputs(metaitem('voltage_coil.mv'))
    .itemInputs('2x #forge:wires/gt_octal_copper')
    .itemOutputs(metaitem('energy_hatch.output_16a.mv'))
    .EUt(30)
    .duration(200)

  event.recipes.susy.recipemap('assembler')('4wvgd6ugy5ih3d') // remapped from original line 614
    .itemInputs(metaitem('transformer.hv'))
    .itemInputs(metaitem('energy_hatch.output.hv'))
    .itemInputs(metaitem('plate.low_power_integrated_circuit'))
    .itemInputs(metaitem('voltage_coil.hv'))
    .itemInputs('2x #forge:wires/gt_quadruple_gold')
    .itemOutputs(metaitem('energy_hatch.output_4a.hv'))
    .EUt(120)
    .duration(100)

  event.recipes.susy.recipemap('assembler')('nuyta2swzegjim') // remapped from original line 625
    .itemInputs(metaitem('transformer.adjustable.hv'))
    .itemInputs(metaitem('energy_hatch.output_4a.hv'))
    .itemInputs(metaitem('plate.low_power_integrated_circuit') * 2)
    .itemInputs(metaitem('voltage_coil.hv'))
    .itemInputs('2x #forge:wires/gt_octal_gold')
    .itemOutputs(metaitem('energy_hatch.output_16a.hv'))
    .EUt(120)
    .duration(200)

  event.recipes.susy.recipemap('assembler')('rhfahjwatgpv1c') // remapped from original line 636
    .itemInputs(metaitem('transformer.adjustable.ev'))
    .itemInputs(metaitem('energy_hatch.output_4a.ev'))
    .itemInputs(metaitem('plate.power_integrated_circuit') * 2)
    .itemInputs(metaitem('voltage_coil.ev'))
    .itemInputs('2x #forge:wires/gt_octal_aluminium')
    .itemOutputs(metaitem('energy_hatch.output_16a.ev'))
    .EUt(480)
    .duration(200)

  event.recipes.susy.recipemap('assembler')('upqihshuuhjdog') // remapped from original line 952
    .itemInputs(metaitem('hull.lv'))
    .itemInputs('4x #forge:frames/steel')
    .itemInputs('4x #forge:circuits/lv')
    .itemInputs(metaitem('electric.pump.lv') * 4)
    .itemInputs(metaitem('electric.motor.lv') * 4)
    .itemInputs('4x #forge:gears/steel')
    .circuit(2)
    .itemOutputs(metaitem('fluid_drilling_rig.mv'))
    .EUt(30)
    .duration(600)

  event.recipes.susy.recipemap('assembler')('wmh74kfa4hikma') // remapped from original line 967
    .itemInputs(metaitem('hull.ev'))
    .itemInputs('4x #forge:frames/titanium')
    .itemInputs(metaitem('electric.pump.ev') * 2)
    .itemInputs('1x #forge:pipes/huge_fluid_titanium')
    .itemInputs('1x #forge:rotors/titanium')
    .itemInputs('1x #forge:circuits/ev')
    .itemOutputs(metaitem('catalytic_reformer'))
    .circuit(3)
    .EUt(480)
    .duration(600)

  event.recipes.susy.recipemap('assembler')('z0wlct7kvqlxse') // remapped from original line 981
    .itemInputs('2x #forge:gears/small_steel')
    .itemInputs('2x #forge:bolts/steel')
    .itemInputs(metaitem('electric.motor.lv') * 2)
    .itemInputs('1x #forge:batterys/lv')
    .itemOutputs(metaitem('power_unit.lv'))
    .EUt(30)
    .duration(150)

  event.recipes.susy.recipemap('assembler')('kqye75c56xmxvs') // remapped from original line 991
    .itemInputs('2x #forge:gears/small_aluminium')
    .itemInputs('2x #forge:bolts/aluminium')
    .itemInputs(metaitem('electric.motor.mv') * 2)
    .itemInputs('1x #forge:batterys/mv')
    .itemOutputs(metaitem('power_unit.mv'))
    .EUt(120)
    .duration(150)

  event.recipes.susy.recipemap('assembler')('juh8yzslrolqjp') // remapped from original line 1001
    .itemInputs('2x #forge:gears/small_stainless_steel')
    .itemInputs('2x #forge:bolts/stainless_steel')
    .itemInputs(metaitem('electric.motor.hv') * 2)
    .itemInputs('1x #forge:batterys/hv')
    .itemOutputs(metaitem('power_unit.hv'))
    .EUt(480)
    .duration(150)

  event.recipes.susy.recipemap('assembler')('fjdgfwpvrc5clm') // remapped from original line 1011
    .itemInputs('2x #forge:gears/small_titanium')
    .itemInputs('2x #forge:bolts/titanium')
    .itemInputs(metaitem('electric.motor.ev') * 2)
    .itemInputs('1x #forge:batterys/ev')
    .itemOutputs(metaitem('power_unit.ev'))
    .EUt(1920)
    .duration(150)

  event.recipes.susy.recipemap('assembler')('c9mzb778wukidd') // remapped from original line 1021
    .itemInputs('2x #forge:gears/small_tungsten_steel')
    .itemInputs('2x #forge:bolts/tungsten_steel')
    .itemInputs(metaitem('electric.motor.iv') * 2)
    .itemInputs('1x #forge:batterys/iv')
    .itemOutputs(metaitem('power_unit.iv'))
    .EUt(7680)
    .duration(150)

  event.recipes.susy.recipemap('assembler')('wgoapokihhup8u') // remapped from original line 1033
    .circuit(2)
    .itemInputs(metaitem('hull.Hv'))
    .itemInputs('3x #forge:frames/aluminium')
    .itemInputs('4x #forge:circuits/hv')
    .itemInputs(metaitem('electric.pump.hv') * 4)
    .itemInputs('4x #forge:plates/aluminium')
    .itemInputs(metaitem('mineral_wool') * 64)
    .inputFluids(safeFluidOf('susy:cryogenic_solder', 1296))
    .itemOutputs(metaitem('single_column_cryogenic_distillation_plant'))
    .EUt(30)
    .duration(600)

  event.recipes.susy.recipemap('assembler')('wipa8dqrzgktsm') // remapped from original line 1047
    .circuit(3)
    .itemInputs(metaitem('hull.Hv'))
    .itemInputs('3x #forge:frames/aluminium')
    .itemInputs('2x #forge:circuits/hv')
    .itemInputs(metaitem('electric.pump.hv') * 4)
    .itemInputs('4x #forge:plates/aluminium')
    .itemInputs(safeItemId('6x susy:serpentine'))
    .itemInputs(metaitem('mineral_wool') * 64)
    .inputFluids(safeFluidOf('susy:cryogenic_solder', 1296))
    .itemOutputs(metaitem('low_pressure_cryogenic_distillation_plant'))
    .EUt(30)
    .duration(600)

  event.recipes.susy.recipemap('assembler')('g7huozigb4uv7y') // remapped from original line 1062
    .circuit(4)
    .itemInputs(metaitem('hull.Hv'))
    .itemInputs('12x #forge:frames/aluminium')
    .itemInputs('6x #forge:circuits/hv')
    .itemInputs(metaitem('electric.pump.hv') * 8)
    .itemInputs('4x #forge:plates/aluminium')
    .itemInputs(metaitem('mineral_wool') * 64)
    .inputFluids(safeFluidOf('susy:cryogenic_solder', 1296))
    .itemOutputs(metaitem('high_pressure_cryogenic_distillation_plant'))
    .EUt(30)
    .duration(600)

  event.recipes.susy.recipemap('assembler')('hl3wmytblhdi30') // remapped from original line 1076
    .circuit(3)
    .itemInputs(metaitem('hull.Hv'))
    .itemInputs('1x #forge:frames/stainless_steel')
    .itemInputs('4x #forge:plates/polytetrafluoroethylene')
    .itemInputs('2x #forge:circuits/hv')
    .itemInputs(metaitem('electric.motor.hv'))
    .itemInputs(metaitem('electric.pump.hv') * 4)
    .itemOutputs(metaitem('blender'))
    .EUt(30)
    .duration(600)

 // The following forLoops couldn't be parsed, they were added to the forLoopBuffers
  // for (name in name_removals) {
  // 	crafting.remove(name)
  // }

  // for (i = 1; i <= 8; i++) {
  // 	crafting.addShaped("gregtech:roaster." + Globals.voltageTiers[i], metaitem('roaster.' + Globals.voltageTiers[i]), [
  // 		[circuits[i], rotors[i], circuits[i]],
  // 		[tieredWires[i], hulls[i], tieredWires[i]],
  // 		[tieredCables[i], tieredWires[i], tieredCables[i]]
  // 	])
  // }

  // for (i = 1; i <= 4; i++) {
  // 	crafting.addShaped("gregtech:latex_collector." + Globals.voltageTiers[i], metaitem('latex_collector.' + Globals.voltageTiers[i]), [
  // 		[circuits[i], ore('toolHeadDrillSteel'), circuits[i]],
  // 		[ore('blockGlass'), pumps[i], ore('blockGlass')],
  // 		[tieredCables[i], hulls[i], tieredCables[i]]
  // 	])
  // }

  // for (i = 1; i <= 8; i++) {
  // 	crafting.remove('gregtech:gregtech.machine.arc_furnace.' + Globals.voltageTiers[i])
  // 
  // 	crafting.addShaped("gregtech:arc_furnace." + Globals.voltageTiers[i], metaitem('arc_furnace.' + Globals.voltageTiers[i]), [
  // 			[tieredQuadCables[i], metaitem('graphite_electrode'), tieredQuadCables[i]],
  // 			[circuits[i], hulls[i], circuits[i]],
  // 			[tieredPlates[i], tieredPlates[i], tieredPlates[i]]
  // 	])
  // }

  // for (i = 1; i <= 8; i++) {
  // 	crafting.remove('gregtech:gregtech.machine.chemical_reactor.' + Globals.voltageTiers[i])
  // 
  // 	crafting.addShaped("gregtech:continuous_stirred_tank_reactor." + Globals.voltageTiers[i], metaitem('continuous_stirred_tank_reactor.' + Globals.voltageTiers[i]), [
  // 			[chemicalReactorParts[i], rotors[i], chemicalReactorParts[i]],
  // 			[tieredCables[i], motors[i], tieredCables[i]],
  // 			[circuits[i], hulls[i], circuits[i]]
  // 	])
  // 
  // 	crafting.addShaped("gregtech:batch_reactor." + Globals.voltageTiers[i], metaitem('batch_reactor.' + Globals.voltageTiers[i]), [
  // 			[tieredCables[i], pumps[i], tieredCables[i]],
  // 			[chemicalReactorParts[i], hulls[i], chemicalReactorParts[i]],
  // 			[circuits[i], tieredCables[i], circuits[i]]
  // 	])
  // 
  // 	crafting.addShaped("gregtech:bubble_column_reactor." + Globals.voltageTiers[i], metaitem('bubble_column_reactor.' + Globals.voltageTiers[i]), [
  // 			[chemicalReactorParts[i], tieredPipes[i], chemicalReactorParts[i]],
  // 			[tieredCables[i], pumps[i], tieredCables[i]],
  // 			[circuits[i], hulls[i], circuits[i]]
  // 	])
  // 
  // 	crafting.addShaped("gregtech:fixed_bed_reactor." + Globals.voltageTiers[i], metaitem('fixed_bed_reactor.' + Globals.voltageTiers[i]), [
  // 			[null, circuits[i], null],
  // 			[tieredPipes[i], pumps[i], tieredPipes[i]],
  // 			[tieredCables[i], hulls[i], tieredCables[i]]
  // 	])
  // 
  // 	crafting.addShaped("gregtech:crystallizer." + Globals.voltageTiers[i], metaitem('crystallizer.' + Globals.voltageTiers[i]), [
  // 			[tieredPlates[i], tieredGlass[i], tieredPlates[i]],
  // 			[chemicalReactorParts[i], hulls[i], chemicalReactorParts[i]],
  // 			[circuits[i], pumps[i], circuits[i]]
  // 	])
  // 
  // 	crafting.addShaped("gregtech:trickle_bed_reactor." + Globals.voltageTiers[i], metaitem('trickle_bed_reactor.' + Globals.voltageTiers[i]), [
  // 			[tieredCables[i], pumps[i], tieredCables[i]],
  // 			[tieredPipes[i], hulls[i], tieredPipes[i]],
  // 			[circuits[i], pumps[i], circuits[i]]
  // 	])
  // }

  // for (i = 1; i <= 8; i++) {
  // 	crafting.addShaped("gregtech:dryer." + Globals.voltageTiers[i], metaitem('dryer.' + Globals.voltageTiers[i]), [
  // 			[tieredCables[i], circuits[i], tieredCables[i]],
  // 			[tieredSprings[i], hulls[i], tieredSprings[i]],
  // 			[tieredCables[i], circuits[i], tieredCables[i]]
  // 	])
  // }

  // for (def i = 1; i < 8; i++) {
  // 	crafting.addShaped("gregtech:weapons_factory." + i, metaitem('weapons_factory.' + Globals.voltageTiers[i]), [
  // 			[circuits[i], robotArms[i], circuits[i]],
  // 			[conveyors[i], hulls[i], conveyors[i]],
  // 			[tieredCables[i], circuits[i], tieredCables[i]]
  // 	])
  // }

  // for (def i = 1; i < 8; i++) {
  // 	crafting.addShaped("gregtech:fluid_decompressor." + i, metaitem('fluid_decompressor.' + Globals.voltageTiers[i]), [
  // 			[tieredGlass[i], pistons[i], tieredGlass[i]],
  // 			[pumps[i], hulls[i], tieredPipes[i]],
  // 			[circuits[i], tieredCables[i], circuits[i]]
  // 	])
  // 
  // 	crafting.addShaped("gregtech:fluid_compressor." + i, metaitem('fluid_compressor.' + Globals.voltageTiers[i]), [
  // 			[tieredGlass[i], pistons[i], tieredGlass[i]],
  // 			[tieredPipes[i], hulls[i], pumps[i]],
  // 			[circuits[i], tieredCables[i], circuits[i]]
  // 	])
  // }

  // for (i = 1; i <= 8; i++) {
  // 	crafting.replaceShaped("gregtech:gregtech.machine.polarizer." + Globals.voltageTiers[i], metaitem('polarizer.' + Globals.voltageTiers[i]), [
  // 			[tieredWires[i], tieredMagnets[i], tieredWires[i]],
  // 			[tieredCables[i], hulls[i], tieredCables[i]],
  // 			[tieredWires[i], tieredMagnets[i], tieredWires[i]]
  // 	])
  // 
  // 	crafting.replaceShaped("gregtech:gregtech.machine.electromagnetic_separator." + Globals.voltageTiers[i], metaitem('electromagnetic_separator.' + Globals.voltageTiers[i]), [
  // 			[conveyors[i], tieredCables[i], tieredWires[i]],
  // 			[tieredCables[i], hulls[i], tieredMagnets[i]],
  // 			[circuits[i], tieredCables[i], tieredWires[i]]
  // 	])
  // }

  // for (i = 1; i <= 8; i++) {
  // 	crafting.replaceShaped("gregtech:gregtech.machine.electrostatic_separator." + Globals.voltageTiers[i], metaitem('electrostatic_separator.' + Globals.voltageTiers[i]), [
  // 			[tieredWires[i], tieredElectrodes[i], tieredWires[i]],
  // 			[tieredCables[i], hulls[i], tieredCables[i]],
  // 			[tieredWires[i], tieredElectrodes[i], tieredWires[i]]
  // 	])
  // }

  // for (def i = 1; i < 8; i++) {
  // 	crafting.addShaped("gregtech:vacuum_chamber." + i, metaitem('vacuum_chamber.' + Globals.voltageTiers[i]), [
  // 			[tieredPlates[i], tieredPlates[i], tieredPlates[i]],
  // 			[pumps[i], hulls[i], pumps[i]],
  // 			[tieredCables[i], circuits[i], tieredCables[i]]
  // 	])
  // }

  // for (i = 1; i <= 8; i++) {
  // 	crafting.replaceShaped("gregtech:gregtech.machine.laser_engraver." + Globals.voltageTiers[i], metaitem('laser_engraver.' + Globals.voltageTiers[i]), [
  // 			[pistons[i], metaitem('wireFineTungsten'), pistons[i]],
  // 			[circuits[i], hulls[i], circuits[i]],
  // 			[tieredCables[i], circuits[i], tieredCables[i]]
  // 	])
  // }

  // for (i = 1; i <= 8; i++) {
  // 	crafting.remove("gregtech:gregtech.machine.fermenter." + Globals.voltageTiers[i])
  // }

  // for (i = 1; i <= 8; i++) {
  // 	crafting.addShaped("gregtech:uv_light_box." + Globals.voltageTiers[i], metaitem('uv_light_box.'  + Globals.voltageTiers[i]), [
  // 			[tieredCables[i], metaitem('carbon_arc_lamp'), tieredCables[i]],
  // 			[circuits[i], hulls[i], circuits[i]],
  // 			[tieredPlates[i], tieredPlates[i], tieredPlates[i]]
  // 	])
  // }

  // for (i = 1; i <= 8; i++) {
  // 	crafting.addShaped("gregtech:ion_implanter." + Globals.voltageTiers[i], metaitem('ion_implanter.'  + Globals.voltageTiers[i]), [
  // 			[circuits[i], tieredGlass[i], circuits[i]],
  // 			[tieredMagnets[i], hulls[i], tieredMagnets[i]],
  // 			[tieredCables[i], tieredSprings[i], tieredCables[i]]
  // 	])
  // }

  // for (i = 1; i <= 8; i++) {
  // 	crafting.addShaped("gregtech:ion_exchange_column." + Globals.voltageTiers[i], metaitem('ion_exchange_column.'  + Globals.voltageTiers[i]), [
  // 			[null, pumps[i], null],
  // 			[tieredGlass[i], tieredPipes[i], tieredGlass[i]],
  // 			[circuits[i], hulls[i], circuits[i]]
  // 	])
  // }

  // for (i = 1; i <= 8; i++) {
  // 	crafting.addShaped("gregtech:cvd." + Globals.voltageTiers[i], metaitem('cvd.'  + Globals.voltageTiers[i]), [
  // 			[pumps[i], tieredGlass[i], tieredGlass[i]],
  // 			[hulls[i], tieredSprings[i], tieredPipes[i]],
  // 			[circuits[i], tieredCables[i], tieredCables[i]]
  // 	])
  // }

  // for (i = 1; i <= 8; i++) {
  // 	crafting.addShaped("gregtech:zone_refiner." + Globals.voltageTiers[i], metaitem('zone_refiner.'  + Globals.voltageTiers[i]), [
  // 			[tieredSprings[i], tieredPipes[i], tieredSprings[i]],
  // 			[tieredQuadCables[i], hulls[i], tieredQuadCables[i]],
  // 			[circuits[i], conveyors[i], circuits[i]]
  // 	])
  // }

  // for (i = 1; i <= 8; i++) {
  // 	crafting.addShaped("gregtech:tube_furnace." + Globals.voltageTiers[i], metaitem('tube_furnace.'  + Globals.voltageTiers[i]), [
  // 			[circuits[i], tieredGlass[i], tieredGlass[i]],
  // 			[hulls[i], tieredSprings[i], tieredPipes[i]],
  // 			[tieredCables[i], conveyors[i], tieredCables[i]]
  // 	])
  // }

  // for (i = 1; i <= 8; i++) {
  // 	crafting.addShaped("gregtech:polishing_machine." + Globals.voltageTiers[i], metaitem('polishing_machine.'  + Globals.voltageTiers[i]), [
  // 			[robotArms[i], circuits[i], pumps[i]],
  // 			[tieredGlass[i], hulls[i], tieredGlass[i]],
  // 			[tieredCables[i], motors[i], tieredCables[i]]
  // 	])
  // }

  // for (i = 1; i <= 8; i++) {
  // 	crafting.addShaped("gregtech:textile_spinner." + Globals.voltageTiers[i], metaitem('textile_spinner.'  + Globals.voltageTiers[i]), [
  // 			[circuits[i], tieredCables[i], circuits[i]],
  // 			[pumps[i], hulls[i], motors[i]],
  // 			[tieredCables[i], motors[i], motors[i]]
  // 	])
  // }

 // The following entries are unknown or couldn't be parsed, you should rewrite them manually.
  // import globals.Globals
  // import static gregtech.api.unification.material.Materials.*;
  // import gregtech.api.unification.material.MarkerMaterials;
  // def name_removals = [
  // 		'gregtech:steam_turbine_mv',
  // 		'gregtech:steam_turbine_hv',
  // 		'gregtech:gas_turbine_lv',
  // 		'gregtech:gas_turbine_mv',
  // 		'gregtech:gas_turbine_hv',
  // 		'gregtech:diesel_generator_lv',
  // 		'gregtech:diesel_generator_mv',
  // 		'gregtech:diesel_generator_hv',
  // 		'gcym:steam_engine'
  // ]
  // def circuits = [ore('circuitUlv'), ore('circuitLv'), ore('circuitMv'),
  // 									ore('circuitHv'), ore('circuitEv'), ore('circuitIv'),
  // 									ore('circuitLuv'), ore('circuitZpm'), ore('circuitUv'),
  // 									ore('circuitUhv'), ore('circuitUev'), ore('circuitUiv'),
  // 									ore('circuitUxv'), ore('circuitOpv')];
  // def conveyors = [null, metaitem('conveyor.module.lv'), metaitem('conveyor.module.mv'), metaitem('conveyor.module.hv'),
  // 									 metaitem('conveyor.module.ev'), metaitem('conveyor.module.iv'), metaitem('conveyor.module.luv'),
  // 									 metaitem('conveyor.module.zpm'), metaitem('conveyor.module.uv'), metaitem('conveyor.module.uhv'),
  // 									 metaitem('conveyor.module.uev'), metaitem('conveyor.module.uiv'), metaitem('conveyor.module.opv'),
  // 									 metaitem('conveyor.module.uxv')];
  // def pumps = [null, metaitem('electric.pump.lv'), metaitem('electric.pump.mv'), metaitem('electric.pump.hv'),
  // 								 metaitem('electric.pump.ev'), metaitem('electric.pump.iv'), metaitem('electric.pump.luv'),
  // 								 metaitem('electric.pump.zpm'), metaitem('electric.pump.uv'), metaitem('electric.pump.uhv'),
  // 								 metaitem('electric.pump.uev'), metaitem('electric.pump.uiv'), metaitem('electric.pump.uxv'),
  // 								 metaitem('electric.pump.opv')];
  // 		 metaitem('fluid.regulator.ev'), metaitem('fluid.regulator.iv'), metaitem('fluid.regulator.luv'),
  // 		 metaitem('fluid.regulator.zpm'), metaitem('fluid.regulator.uv'), metaitem('fluid.regulator.uhv'),
  // 		 metaitem('fluid.regulator.uev'), metaitem('fluid.regulator.uiv'), metaitem('fluid.regulator.uxv'),
  // 		 metaitem('fluid.regulator.opv')];*/
  // def field_generators = [null, metaitem('field.generator.lv'), metaitem('field.generator.mv'), metaitem('field.generator.hv'),
  // 										   metaitem('field.generator.ev'), metaitem('field.generator.iv'), metaitem('field.generator.luv'),
  // 										   metaitem('field.generator.zpm'), metaitem('field.generator.uv'), metaitem('field.generator.uhv'),
  // 										   metaitem('field.generator.uev'), metaitem('field.generator.uiv'), metaitem('field.generator.uxv'),
  // 										   metaitem('field.generator.opv')];
  // def emitters = [null, metaitem('emitter.lv'), metaitem('emitter.mv'), metaitem('emitter.hv'),
  // 									metaitem('emitter.ev'), metaitem('emitter.iv'), metaitem('emitter.luv'),
  // 									metaitem('emitter.zpm'), metaitem('emitter.uv'), metaitem('emitter.uhv'),
  // 									metaitem('emitter.uev'), metaitem('emitter.uiv'), metaitem('emitter.uxv'),
  // 									metaitem('emitter.opv')];
  // def sensors = [null, metaitem('sensor.lv'), metaitem('sensor.mv'), metaitem('sensor.hv'),
  // 								   metaitem('sensor.ev'), metaitem('sensor.iv'), metaitem('sensor.luv'),
  // 								   metaitem('sensor.zpm'), metaitem('sensor.uv'), metaitem('sensor.uhv'),
  // 								   metaitem('sensor.uev'), metaitem('sensor.uiv'), metaitem('sensor.uxv'),
  // 								   metaitem('sensor.opv')];
  // def motors = [null, metaitem('electric.motor.lv'), metaitem('electric.motor.mv'), metaitem('electric.motor.hv'),
  // 								  metaitem('electric.motor.ev'), metaitem('electric.motor.iv'), metaitem('electric.motor.luv'),
  // 								  metaitem('electric.motor.zpm'), metaitem('electric.motor.uv'), metaitem('electric.motor.uhv'),
  // 								  metaitem('electric.motor.uev'), metaitem('electric.motor.uiv'), metaitem('electric.motor.uxv'),
  // 								  metaitem('electric.motor.opv')];
  // def pistons = [null, metaitem('electric.piston.lv'), metaitem('electric.piston.mv'), metaitem('electric.piston.hv'),
  // 								   metaitem('electric.piston.ev'), metaitem('electric.piston.iv'), metaitem('electric.piston.luv'),
  // 								   metaitem('electric.piston.zpm'), metaitem('electric.piston.uv'), metaitem('electric.piston.uhv'),
  // 								   metaitem('electric.piston.uev'), metaitem('electric.piston.uiv'), metaitem('electric.piston.uxv'),
  // 								   metaitem('electric.piston.opv')];
  // def robotArms = [null, metaitem('robot.arm.lv'), metaitem('robot.arm.mv'), metaitem('robot.arm.hv'),
  // 									 metaitem('robot.arm.ev'), metaitem('robot.arm.iv'), metaitem('robot.arm.luv'),
  // 									 metaitem('robot.arm.zpm'), metaitem('robot.arm.uv'), metaitem('robot.arm.uhv'),
  // 									 metaitem('robot.arm.uev'), metaitem('robot.arm.uiv'), metaitem('robot.arm.uxv'),
  // 									 metaitem('robot.arm.opv')];
  // def hulls = [metaitem('hull.ulv'), metaitem('hull.lv'), metaitem('hull.mv'), metaitem('hull.hv'),
  // 								 metaitem('hull.ev'), metaitem('hull.iv'), metaitem('hull.luv'),
  // 								 metaitem('hull.zpm'), metaitem('hull.uv'), metaitem('hull.uhv'),
  // 								 metaitem('hull.uev'), metaitem('hull.uiv'), metaitem('hull.uxv'),
  // 								 metaitem('hull.opv')];
  // def tieredWires = [ore('wireGtQuadrupleRedAlloy'), ore('wireGtQuadrupleCopper'), ore('wireGtQuadrupleCupronickel'), ore('wireGtQuadrupleKanthal'),
  // 									   ore('wireGtQuadrupleNichrome'), ore('wireGtQuadrupleTungstenSteel'), ore('wireGtQuadrupleHssg'),
  // 									   ore('wireGtQuadrupleNaquadah'), ore('wireGtQuadrupleNaquadahAlloy')];
  // def tieredPlates = [ore('plateWroughtIron'), ore('plateSteel'), ore('plateAluminium'), ore('plateStainlessSteel'),
  // 										ore('plateTitanium'), ore('plateTungstenSteel'), ore('plateRhodiumPlatedPalladium'),
  // 										ore('plateNaquadahAlloy'), ore('plateDarmstadtium')];
  // def tieredSticks = [ore('stickWroughtIron'), ore('stickIron'), ore('stickSteel'), ore('stickSteel'),
  // 										ore('stickNeodymiumAlloy'), ore('stickVanadiumGallium'), ore('stickVanadiumGallium'),
  // 										ore('stickVanadiumGallium'), ore('stickVanadiumGallium')];
  // def tieredGlass = [ore('blockGlass'), ore('blockGlass'), ore('blockGlass'), item('gregtech:transparent_casing:0'),
  // 				   item('gregtech:transparent_casing:0'), item('gregtech:transparent_casing:2'), item('gregtech:transparent_casing:2'),
  // 				   item('gregtech:transparent_casing:1'), item('gregtech:transparent_casing:1')];
  // def tieredCables = [ore('cableGtSingleRedAlloy'), ore('cableGtSingleTin'), ore('cableGtSingleCopper'), ore('cableGtSingleGold'),
  // 										ore('cableGtSingleAluminium'), ore('cableGtSinglePlatinum'), ore('cableGtSingleNiobiumTitanium'),
  // 										ore('cableGtSingleVanadiumGallium'), ore('cableGtSingleYttriumBariumCuprate')]
  // def tieredQuadCables = [ore('cableGtQuadrupleRedAlloy'), ore('cableGtQuadrupleTin'), ore('cableGtQuadrupleCopper'), ore('cableGtQuadrupleGold'),
  // 					ore('cableGtQuadrupleAluminium'), ore('cableGtQuadruplePlatinum'), ore('cableGtQuadrupleNiobiumTitanium'),
  // 					ore('cableGtQuadrupleVanadiumGallium'), ore('cableGtQuadrupleYttriumBariumCuprate')]
  // def tieredSprings = [metaitem('springIron'), metaitem('springCopper'), metaitem('springCupronickel'), metaitem('springKanthal'),
  // 					 metaitem('springNichrome'), metaitem('springTungstenSteel'), metaitem('springHssg'),
  // 					 metaitem('springNaquadah'), metaitem('springNaquadahAlloy')]
  // def rotors = [
  // 	ore('rotorBronze'),
  // 	ore('rotorTin'), 
  // 	ore('rotorBronze'), 
  // 	ore('rotorSteel'),
  // 	ore('rotorStainlessSteel'),
  // 	ore('rotorTungstenSteel'),
  // 	ore('rotorRhodiumPlatedPalladium'),
  // 	ore('rotorNaquadahAlloy'),
  // 	ore('rotorDarmstadtium')
  // ]
  // def chemicalReactorParts = [ore('blockGlass'), ore('blockGlass'), ore('blockGlass'), metaitem('pipeNormalFluidPlastic'), metaitem('pipeLargeFluidPlastic'),
  // 							metaitem('pipeHugeFluidPlastic'), metaitem('pipeNormalFluidPolytetrafluoroethylene'), metaitem('pipeLargeFluidPolytetrafluoroethylene'),
  // 							metaitem('pipeHugeFluidPolytetrafluoroethylene')]
  // def tieredPipes = [metaitem('pipeLargeFluidSteel'), metaitem('pipeLargeFluidSteel'), metaitem('pipeLargeFluidAluminium'), metaitem('pipeLargeFluidStainlessSteel'),
  // 				   metaitem('pipeLargeFluidTitanium'), metaitem('pipeLargeFluidTungstenCarbide'), metaitem('pipeLargeFluidNiobiumTitanium'),
  // 				   metaitem('pipeLargeFluidNaquadah'), metaitem('pipeLargeFluidDuranium')]
  // def tieredMagnets = [metaitem('stickIronMagnetic'), metaitem('stickIronMagnetic'), metaitem('stickSteelMagnetic'), metaitem('stickSteelMagnetic'),
  // 					 metaitem('stickNeodymiumAlloyMagnetic'), metaitem('stickNeodymiumAlloyMagnetic'), metaitem('stickSamariumAlloyMagnetic'),
  // 					 metaitem('stickSamariumAlloyMagnetic'), metaitem('stickSamariumAlloyMagnetic')];
  // log.infoMC("Adding Vulcanizing Press Craft")
  // crafting.addShaped("gregtech:vulcanizing_press.ulv", metaitem('vulcanizing_press.bronze'), [
  // 	[ore('springSmallSteel'), ore('stickSteel'), ore('springSmallSteel')],
  // 	[ore('pipeSmallFluidBronze'), ore('plateSteel'), ore('pipeSmallFluidBronze')],
  // 	[ore('pipeSmallFluidBronze'), item('gregtech:steam_casing', 1), ore('pipeSmallFluidBronze')]
  // ])
  // crafting.addShaped("gregtech:vulcanizing_press.lv", metaitem('vulcanizing_press.lv'), [
  // 	[ore('cableGtSingleTin'), metaitem('electric.piston.lv'), ore('cableGtSingleTin')],
  // 	[ore('wireGtQuadrupleCopper'), metaitem('hull.lv'), ore('wireGtQuadrupleCopper')],
  // 	[ore('cableGtSingleTin'), ore('circuitLv'), ore('cableGtSingleTin')]
  // ])
  // crafting.addShaped("gregtech:vulcanizing_press.mv", metaitem('vulcanizing_press.mv'), [
  // 	[ore('cableGtSingleCopper'), metaitem('electric.piston.mv'), ore('cableGtSingleCopper')],
  // 	[ore('wireGtQuadrupleCupronickel'), metaitem('hull.mv'), ore('wireGtQuadrupleCupronickel')],
  // 	[ore('cableGtSingleCopper'), ore('circuitMv'), ore('cableGtSingleCopper')]
  // ])
  // crafting.addShaped("gregtech:vulcanizing_press.hv", metaitem('vulcanizing_press.hv'), [
  // 	[ore('cableGtSingleGold'), metaitem('electric.piston.hv'), ore('cableGtSingleGold')],
  // 	[ore('wireGtQuadrupleKanthal'), metaitem('hull.hv'), ore('wireGtQuadrupleKanthal')],
  // 	[ore('cableGtSingleGold'), ore('circuitHv'), ore('cableGtSingleGold')]
  // ])
  // crafting.addShaped("gregtech:vulcanizing_press.ev", metaitem('vulcanizing_press.ev'), [
  // 	[ore('cableGtSingleAluminium'), metaitem('electric.piston.ev'), ore('cableGtSingleAluminium')],
  // 	[ore('wireGtQuadrupleNichrome'), metaitem('hull.ev'), ore('wireGtQuadrupleNichrome')],
  // 	[ore('cableGtSingleAluminium'), ore('circuitEv'), ore('cableGtSingleAluminium')]
  // ])
  // log.infoMC("Adding Roaster Craft")
  // crafting.addShaped("gregtech:roaster.ulv", metaitem('roaster.bronze'), [
  // 	[ore('pipeSmallFluidBronze'), ore('rotorBronze'), ore('pipeSmallFluidBronze')],
  // 	[ore('pipeSmallFluidBronze'), item('gregtech:steam_casing', 1), ore('pipeSmallFluidBronze')],
  // 	[ore('pipeSmallFluidBronze'), ore('craftingFurnace'), ore('pipeSmallFluidBronze')]
  // ])
  // log.infoMC("Adding Latex Collector Craft")
  // crafting.addShaped("gregtech:latex_collector.ulv", metaitem('latex_collector.bronze'), [
  // 	[null, ore('toolHeadDrillSteel'), null],
  // 	[ore('blockGlass'), ore('rotorSteel'), ore('blockGlass')],
  // 	[ore('pipeSmallFluidBronze'), item('gregtech:steam_casing'), ore('pipeSmallFluidBronze')]
  // ])
  // log.infoMC("Adding Steam Mixer Craft")
  // crafting.addShaped("gregtech:mixer.ulv", metaitem('mixer.bronze'), [
  // 	[ore('blockGlass'), ore('rotorBronze'), ore('blockGlass')],
  // 	[ore('blockGlass'), ore('stickBronze'), ore('blockGlass')],
  // 	[ore('pipeSmallFluidBronze'), item('gregtech:steam_casing'), ore('pipeSmallFluidBronze')]
  // ])
  // log.infoMC("Adding Coagulation Tank Craft")
  // crafting.addShaped("gregtech:coagulation_tank", metaitem('coagulation_tank'), [
  // 	[ore('plankTreatedWood'), ore('rotorSteel'), ore('plankTreatedWood')],
  // 	[ore('craftingToolSaw'), ore('pipeLargeFluidTreatedWood'), ore('craftingToolHardHammer')],
  // 	[ore('plankTreatedWood'), ore('boltSteel'), ore('plankTreatedWood')]
  // ])
  // crafting.addShaped("gregtech:coagulation_tank_wall", item('susy:coagulation_tank_wall'), [
  // 	[ore('plankTreatedWood'), ore('boltSteel'), ore('plankTreatedWood')],
  // 	[ore('craftingToolSaw'), ore('frameGtTreatedWood'), ore('craftingToolHardHammer')],
  // 	[ore('plankTreatedWood'), ore('boltSteel'), ore('plankTreatedWood')]
  // ])
  // crafting.addShaped("gregtech:polymerization_tank", metaitem('polymerization_tank'), [
  // 		[tieredCables[1], motors[1], tieredCables[1]],
  // 		[pumps[1], rotors[1], pumps[1]],
  // 		[circuits[1], hulls[1], circuits[1]]
  // ])
  // crafting.addShaped("gregtech:fluidized_bed_reactor", metaitem('fluidized_bed_reactor'), [
  // 		[tieredCables[3], pumps[3], tieredCables[3]],
  // 		[metaitem('pipeLargeFluidPolytetrafluoroethylene'), hulls[3], metaitem('pipeLargeFluidPolytetrafluoroethylene')],
  // 		[circuits[3], motors[3], circuits[3]]
  // ])
  // def tieredElectrodes = [ore('wireFineRedAlloy'), ore('wireFineSteel'), metaitem('graphite_electrode'), ore('wireFinePlatinum'), ore('wireFineTitanium'),
  // 					ore('wireFineTungsten'), ore('wireFineOsmiridium'), ore('wireFineNiobiumTitanium'),
  // 					ore('wireFineNaquadah'), ore('wireFineNaquadahAlloy')];
  // crafting.addShaped("gregtech:vulcanizing_press.steel", metaitem('vulcanizing_press.steel'), [
  // 		[metaitem('plateSteel'), metaitem('plateSteel'), metaitem('plateSteel')],
  // 		[metaitem('pipeSmallFluidTinAlloy'), metaitem('vulcanizing_press.bronze'), metaitem('pipeSmallFluidTinAlloy')],
  // 		[metaitem('plateWroughtIron'), metaitem('plateWroughtIron'), metaitem('plateWroughtIron')]
  // ])
  // crafting.addShaped("gregtech:mixer.steel", metaitem('mixer.steel'), [
  // 		[metaitem('pipeSmallFluidTinAlloy'), metaitem('plateSteel'), metaitem('pipeSmallFluidTinAlloy')],
  // 		[metaitem('plateWroughtIron'), metaitem('mixer.bronze'), metaitem('plateWroughtIron')],
  // 		[metaitem('pipeSmallFluidTinAlloy'), metaitem('pipeSmallFluidTinAlloy'), metaitem('pipeSmallFluidTinAlloy')]
  // ])
  // crafting.addShaped("gregtech:vacuum_chamber.steel", metaitem('vacuum_chamber.steel'), [
  // 		[metaitem('plateSteel'), metaitem('pipeSmallFluidTinAlloy'), metaitem('plateSteel')],
  // 		[metaitem('pipeSmallFluidTinAlloy'), metaitem('vacuum_chamber.bronze'), metaitem('pipeSmallFluidTinAlloy')],
  // 		[metaitem('plateWroughtIron'), metaitem('pipeSmallFluidTinAlloy'), metaitem('plateWroughtIron')]
  // ])
  // crafting.addShaped("gregtech:roaster.steel", metaitem('roaster.steel'), [
  // 		[metaitem('plateWroughtIron'), metaitem('plateWroughtIron'), metaitem('plateWroughtIron')],
  // 		[metaitem('plateSteel'), metaitem('roaster.bronze'), metaitem('plateSteel')],
  // 		[metaitem('pipeSmallFluidTinAlloy'), metaitem('pipeSmallFluidTinAlloy'), metaitem('pipeSmallFluidTinAlloy')]
  // ])
  // crafting.addShaped("gregtech:brick_sintering_block", item('susy:sintering_brick'), [
  // 		[null, ore('craftingToolHardHammer'), null],
  // 		[metaitem('foilSteel'), item('gregtech:metal_casing', 1), metaitem('foilSteel')],
  // 		[null, null, null]
  // ])
  // crafting.replaceShaped("gregtech:sintering_oven", metaitem('sintering_oven'), [
  // 		[motors[1], rotors[1], metaitem('wireGtQuadrupleCupronickel')],
  // 		[circuits[1], item('gregtech:metal_casing', 1), circuits[1]],
  // 		[pumps[1], metaitem('wireGtQuadrupleCupronickel'), pumps[1]]
  // ])
  // crafting.replaceShaped("gregtech:pyrolyse_oven", metaitem('pyrolyse_oven'), [
  // 		[pistons[1], circuits[1], metaitem('wireGtQuadrupleCupronickel')],
  // 		[circuits[1], hulls[1], circuits[1]],
  // 		[pistons[1], pumps[1], metaitem('wireGtQuadrupleCupronickel')]
  // ])
  // crafting.addShaped("gregtech:fermentation_vat", metaitem('fermentation_vat'), [
  // 		[tieredCables[1], pumps[1], tieredCables[1]],
  // 		[ore('blockGlass'), hulls[1], ore('blockGlass')],
  // 		[tieredCables[1], circuits[1], tieredCables[1]]
  // ])
  // crafting.addShaped("gregtech:pressure_swing_adsorber", metaitem('pressure_swing_adsorber'), [
  // 		[metaitem('pipeLargeFluidAluminium'), motors[2], metaitem('pipeLargeFluidAluminium')],
  // 		[pumps[2], metaitem('hull.mv'), pumps[2]],
  // 		[circuits[2], metaitem('pipeLargeFluidAluminium'), circuits[2]]
  // ])
  // crafting.addShaped("alternator_coil", item('susy:alternator_coil'), [
  // 		[ore('craftingToolHardHammer'), metaitem('electric.motor.lv'), ore('craftingToolScrewdriver')],
  // 		[metaitem('electric.motor.lv'), ore('plateSteel'),             metaitem('electric.motor.lv')],
  // 		[ore('circuitLv'),              metaitem('cableGtSingleTin'),  ore('circuitLv')]
  // ])
  // crafting.addShaped("steel_turbine_rotor", item('susy:turbine_rotor'), [
  // 		[ore('plateSteel'),             ore('screwSteel'),     ore('plateSteel')],
  // 		[ore('craftingToolHardHammer'), ore('stickLongSteel'), ore('craftingToolScrewdriver')],
  // 		[ore('plateSteel'),             ore('rotorSteel'),     ore('plateSteel')]
  // ])
  // crafting.addShaped("steel_turbine_controller", metaitem('basic_steam_turbine'), [
  // 		[ore('plateSteel'),            metaitem('cableGtSingleTin'),       ore('plateSteel')],
  // 		[ore('circuitLv'),             metaitem('hull.lv'), ore('circuitLv')],
  // 		[metaitem('cableGtSingleTin'), ore('circuitLv'),                   metaitem('cableGtSingleTin')]
  // ])
  // crafting.replaceShaped("gregtech:casing_steel_turbine_casing", item('gregtech:turbine_casing', 5) * 4, [
  // 		[metaitem('plateSteel'), ore('craftingToolHardHammer'), metaitem('plateSteel')],
  // 		[metaitem('stickLongSteel'), item('gregtech:stone_smooth', 4), metaitem('stickLongSteel')],
  // 		[metaitem('plateSteel'), ore('craftingToolWrench'), metaitem('plateSteel')]
  // ])
  // crafting.addShaped("gas_turbine_controller", metaitem('basic_gas_turbine'), [
  // 		[ore('plateSteel'),               metaitem('cableGtSingleCopper'),    ore('plateSteel')],
  // 		[ore('circuitMv'),                metaitem('hull.mv'),                ore('circuitMv')],
  // 		[metaitem('cableGtSingleCopper'), ore('circuitMv'),                   metaitem('cableGtSingleCopper')]
  // ])
  // crafting.addShaped("silicon_carbide_casing", item('susy:susy_multiblock_casing') * 2, [
  // 		[metaitem('plateSiliconCarbide'), ore('craftingToolHardHammer'), metaitem('plateSiliconCarbide')],
  // 		[metaitem('plateSiliconCarbide'), item('gregtech:metal_casing', 5), metaitem('plateSiliconCarbide')],
  // 		[metaitem('plateSiliconCarbide'), ore('craftingToolWrench'), metaitem('plateSiliconCarbide')]
  // ])
  // crafting.addShaped("gregtech:ore_sorter", metaitem('ore_sorter'), [
  // 		[robotArms[1], circuits[2], robotArms[1]],
  // 		[pumps[1], hulls[1], pumps[1]],
  // 		[robotArms[1], circuits[2], robotArms[1]]
  // ]);
  // crafting.addShaped("gregtech:primitive_mud_pump", metaitem('primitive_mud_pump'), [
  // 		[metaitem('ringBronze'), metaitem('pipeNormalFluidTreatedWood'), metaitem('screwBronze')],
  // 		[metaitem('rotorBronze'), item('gregtech:steam_casing'), ore('craftingToolScrewdriver')],
  // 		[item('minecraft:stone_slab', 4), metaitem('pipeLargeFluidWood'), item('minecraft:stone_slab', 4)]
  // ]);
  // crafting.addShaped("gregtech:railroad_engineering_station", metaitem('railroad_engineering_station'), [
  // 		[robotArms[1], null, robotArms[1]],
  // 		[conveyors[1], hulls[1], conveyors[1]],
  // 		[metaitem('plateSteel'), circuits[1], metaitem('plateSteel')]
  // ]);
  // crafting.addShaped("gregtech:condenser", metaitem('condenser'), [
  // 		[null, metaitem('electric.pump.lv'), null],
  // 		[metaitem('frameSteel'), item('gregtech:boiler_casing', 1), metaitem('frameSteel')],
  // 		[null, metaitem('electric.pump.lv'), null]
  // ]);
  // crafting.addShaped("gregtech:heat_exchanger", metaitem('heat_exchanger'), [
  // 		[null, metaitem('frameSteel'), null],
  // 		[metaitem('electric.pump.lv'), item('gregtech:boiler_casing', 1), metaitem('electric.pump.lv')],
  // 		[null, metaitem('frameSteel'), null]
  // ]);
  // crafting.addShaped("gregtech:mining_drill", metaitem('mining_drill'), [
  // 		[circuits[1], motors[1], circuits[1]],
  // 		[conveyors[1], hulls[1], conveyors[1]],
  // 		[tieredCables[1], motors[1], tieredCables[1]]
  // ]);
  // crafting.replaceShaped("gregtech:casing_grate_casing", item('gregtech:multiblock_casing', 2) * 2, [
  // 		[item('minecraft:iron_bars'), metaitem('rotorSteel'), item('minecraft:iron_bars')],
  // 		[item('minecraft:iron_bars'), metaitem('frameSteel'), item('minecraft:iron_bars')],
  // 		[item('minecraft:iron_bars'), metaitem('electric.motor.lv'), item('minecraft:iron_bars')]
  // ])
  // crafting.addShaped("gregtech:steel_drill_head", item('susy:drill_head'), [
  // 		[pumps[1], conveyors[1], pumps[1]],
  // 		[metaitem('component.grinder.diamond'), item('gregtech:metal_casing', 4), metaitem('component.grinder.diamond')],
  // 		[null, metaitem('component.grinder.diamond'), null]
  // ]);
  // crafting.addShaped("gregtech:heat_radiator", metaitem('heat_radiator'), [
  // 		[metaitem('frameSteel'), metaitem('pipeLargeFluidSteel'), metaitem('frameSteel')],
  // 		[metaitem('electric.pump.lv'), hulls[1], metaitem('electric.pump.lv')],
  // 		[metaitem('frameSteel'), metaitem('pipeLargeFluidSteel'), metaitem('frameSteel')]
  // ]);
  // crafting.addShaped("gregtech:large_weapons_factory", metaitem('large_weapons_factory'), [
  // 		[sensors[1], robotArms[1], emitters[1]],
  // 		[conveyors[1], hulls[1], conveyors[1]],
  // 		[circuits[1], robotArms[1], circuits[1]]
  // ]);
  // crafting.addShaped("gregtech:gravity_separator", metaitem('gravity_separator'), [
  // 		[metaitem('component.grinder.diamond'), circuits[2], metaitem('component.grinder.diamond')],
  // 		[conveyors[2], hulls[2], conveyors[2]],
  // 		[circuits[2], tieredCables[2], circuits[2]]
  // ]);
  // crafting.addShaped("gregtech:reaction_furnace", metaitem('reaction_furnace'), [
  // 		[tieredQuadCables[2], tieredSprings[2], tieredQuadCables[2]],
  // 		[circuits[2], hulls[2], circuits[2]],
  // 		[tieredPlates[2], tieredPlates[2], tieredPlates[2]]
  // ]);
  // crafting.addShaped("gregtech:advanced_arc_furnace", metaitem('advanced_arc_furnace'), [
  // 		[metaitem('cableGtHexTin'), item('susy:electrode_assembly'), metaitem('cableGtHexTin')],
  // 		[circuits[1], hulls[1], circuits[1]],
  // 		[tieredPlates[1], tieredPlates[1], tieredPlates[1]]
  // ]);
  // crafting.addShaped("gregtech:electrode_assembly", item('susy:electrode_assembly'), [
  // 		[metaitem('plateSteel'), metaitem('cableGtSingleCopper'), metaitem('plateSteel')],
  // 		[metaitem('graphite_electrode'), metaitem('frameSteel'), metaitem('graphite_electrode')],
  // 		[metaitem('plateSteel'), metaitem('cableGtSingleCopper'), metaitem('plateSteel')]
  // ]);
  // crafting.addShaped("gregtech:evaporation_pool", metaitem('evaporation_pool'), [
  // 		[item('gregtech:stone_smooth', 4), metaitem('pipeHugeFluidAluminium'), item('gregtech:stone_smooth', 4)],
  // 		[pumps[2], hulls[2], pumps[2]],
  // 		[item('gregtech:stone_smooth', 4), metaitem('pipeHugeFluidAluminium'), item('gregtech:stone_smooth', 4)]
  // ]);
  // crafting.addShaped("gregtech:evaporation_bed", item('susy:evaporation_bed') * 8, [
  // 		[item('minecraft:sand'), item('minecraft:dirt'), item('minecraft:sand')],
  // 		[item('minecraft:dirt'), item('minecraft:gravel'), item('minecraft:dirt')],
  // 		[item('minecraft:sand'), item('minecraft:dirt'), item('minecraft:sand')]
  // 		]);
  // crafting.addShaped("gregtech:clarifier", metaitem('clarifier'), [
  // 		[tieredCables[2], metaitem('rotorSteel'), tieredCables[2]],
  // 		[pumps[2], hulls[2], pumps[2]],
  // 		[circuits[2], motors[2], circuits[2]]
  // ]);
  // crafting.addShaped("gregtech:clarifier_vat", item('susy:multiblock_tank') * 9, [
  // 		[null, null, null],
  // 		[metaitem('plateSteel'), item('minecraft:cauldron'), metaitem('plateSteel')],
  // 		[metaitem('pipeSmallFluidSteel'), metaitem('pipeSmallFluidSteel'), metaitem('pipeSmallFluidSteel')]
  // ]);
  // crafting.addShaped("gregtech:multi_stage_flash_distillater", metaitem('multi_stage_flash_distiller'), [
  // 		[metaitem('plateStainlessSteel'), tieredCables[3], metaitem('plateStainlessSteel')],
  // 		[pumps[3], hulls[3], pumps[3]],
  // 		[circuits[3], tieredSprings[3], circuits[3]]
  // ]);
  // crafting.addShaped("gregtech:smoke_stack", metaitem('smoke_stack'), [
  // 		[null, metaitem('rotorSteel'), null],
  // 		[metaitem('pipeSmallFluidSteel'), hulls[1], metaitem('pipeSmallFluidSteel')],
  // 		[null, metaitem('rotorSteel'), null],
  // ]);
  // crafting.addShaped("gregtech:flare_stack", metaitem('flare_stack'), [
  // 		[null, metaitem('rotorSteel'), null],
  // 		[metaitem('stickSteel'), hulls[1], metaitem('stickSteel')],
  // 		[null, metaitem('rotorSteel'), null],
  // ]);
  // crafting.addShaped("gregtech:froth_flotation_tank", metaitem('froth_flotation_tank'), [
  // 		[tieredCables[3], metaitem('rotorStainlessSteel'), tieredCables[3]],
  // 		[pumps[3], hulls[3], pumps[3]],
  // 		[circuits[3], motors[3], circuits[3]]
  // ]);
  // crafting.addShaped("gregtech:froth_flotation_vat", item('susy:multiblock_tank', 1) * 4, [
  // 		[null, null, null],
  // 		[metaitem('plateStainlessSteel'), item('minecraft:cauldron'), metaitem('plateStainlessSteel')],
  // 		[metaitem('pipeSmallFluidStainlessSteel'), metaitem('pipeSmallFluidStainlessSteel'), metaitem('pipeSmallFluidStainlessSteel')]
  // ]);
  // crafting.addShaped("gregtech:vacuum_distillation_tower", metaitem('vacuum_distillation_tower'), [
  // 		[metaitem('rotorSteel'), circuits[2], metaitem('rotorSteel')],
  // 		[pumps[2], metaitem('hull.mv'), pumps[2]],
  // 		[metaitem('pipeHugeFluidSteel'), circuits[2], metaitem('pipeHugeFluidSteel')]
  // ])
  // crafting.replaceShaped("gregtech:vacuum_freezer", metaitem('vacuum_freezer'), [
  // 		[pumps[3], pumps[3], pumps[3]],
  // 		[circuits[3], item('gregtech:metal_casing', 3), circuits[3]],
  // 		[metaitem('cableGtSingleGold'), circuits[3], metaitem('cableGtSingleGold')]
  // ])
  // crafting.addShaped("gregtech:cooling_unit", metaitem('cooling_unit'), [
  // 		[metaitem('rotorStainlessSteel'), metaitem('rotorStainlessSteel'), metaitem('rotorStainlessSteel')],
  // 		[motors[3], metaitem('hull.hv'), motors[3]],
  // 		[pumps[3], circuits[3], pumps[3]]
  // ])
  // crafting.addShaped("gregtech:quencher", metaitem('quencher'), [
  // 		[pumps[3], metaitem('robot.arm.hv'), pumps[3]],
  // 		[circuits[3], item('gregtech:metal_casing', 5), circuits[3]],
  // 		[metaitem('pipeLargeFluidStainlessSteel'), circuits[3], metaitem('pipeLargeFluidStainlessSteel')]
  // ])
  // crafting.addShaped("gregtech:dumper", metaitem('dumper'), [
  // 		[metaitem('plateSteel'), metaitem('plateSteel'), metaitem('plateSteel')],
  // 		[metaitem('electric.pump.lv'), metaitem('hull.lv'), metaitem('pipeLargeFluidSteel')],
  // 		[metaitem('plateSteel'), metaitem('plateSteel'), metaitem('plateSteel')]
  // ])
  // crafting.addShaped("gregtech:ocean_pumper", metaitem('ocean_pumper'), [
  // 		[metaitem('stickLongAluminium'), metaitem('electric.pump.mv'), metaitem('stickLongAluminium')],
  // 		[ore('circuitMv'), metaitem('hull.mv'), ore('circuitMv')],
  // 		[metaitem('cableGtSingleCopper'), metaitem('electric.pump.mv'), metaitem('cableGtSingleCopper')]
  // ])
  // crafting.addShaped("gregtech:coking_tower", metaitem('coking_tower'), [
  // 		[metaitem('pipeHugeFluidSteel'), pumps[3], metaitem('pipeHugeFluidSteel')],
  // 		[circuits[3], hulls[3], circuits[3]],
  // 		[metaitem('pipeHugeFluidSteel'), pumps[3], metaitem('pipeHugeFluidSteel')]
  // ]);
  // crafting.addShaped("gregtech:rotary_kiln", metaitem('rotary_kiln'), [
  // 		[circuits[2], null, tieredCables[2]],
  // 		[metaitem('pipeHugeFluidSteel'), hulls[2], metaitem('pipeHugeFluidSteel')],
  // 		[circuits[2], motors[2], tieredCables[2]]
  // ]);
  // crafting.addShaped("gregtech:high_temperature_distillation_tower", metaitem('high_temperature_distillation_tower'), [
  // 		[circuits[3], item('gregtech:wire_coil'), circuits[3]],
  // 		[pumps[3], hulls[3], pumps[3]],
  // 		[circuits[3], item('gregtech:wire_coil'), circuits[3]]
  // ]);
  // crafting.addShaped("gregtech:bath_condenser", metaitem('bath_condenser'), [
  // 	[metaitem('pipeSmallFluidStainlessSteel'), metaitem('pipeSmallFluidStainlessSteel'), metaitem('pipeSmallFluidStainlessSteel')],
  // 	[metaitem('pipeSmallFluidStainlessSteel'), metaitem('hull.hv'), metaitem('pipeSmallFluidStainlessSteel')],
  // 	[metaitem('pipeSmallFluidStainlessSteel'), metaitem('pipeSmallFluidStainlessSteel'), metaitem('pipeSmallFluidStainlessSteel')]
  // ])
  // crafting.addShaped("gregtech:phase_separator", metaitem('phase_separator'), [
  // 	[metaitem('frameStainlessSteel'), metaitem('drum.stainless_steel'), metaitem('pipeSmallFluidStainlessSteel')],
  // 	[metaitem('pipeSmallFluidStainlessSteel'), metaitem('hull.hv'), metaitem('pipeSmallFluidStainlessSteel')],
  // 	[null, null, null]
  // ])
  // crafting.addShaped("multiblocked:ore_sorter", item('multiblocked:ore_sorter'), [
  // 		[robotArms[1], circuits[2], robotArms[1]],
  // 		[pumps[1], hulls[1], pumps[1]],
  // 		[robotArms[1], circuits[2], robotArms[1]]
  // ]);
  //  */
});