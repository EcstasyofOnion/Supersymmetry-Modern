ServerEvents.recipes(event => {
        [
             'gtceu:shaped/electric_motor_ev',
             'gtceu:shaped/electric_motor_iv',
             'gtceu:shaped/ev_electromagnetic_separator',
             'gtceu:shaped/iv_electromagnetic_separator',
             'gtceu:shaped/ev_polarizer',
             'gtceu:shaped/iv_polarizer'

        ].forEach((recipeID) => event.remove({id: recipeID}));

  event.remove({ type: 'gtceu:assembler', input: '#forge:cables/gt_double_tungsten' && '#forge:rods/tungsten_steel' && '#forge:rods/neodymium_magnetic' && '#forge:wires/gt_double_graphene'})
  event.remove({ type: 'gtceu:assembler', input: '#forge:cables/gt_double_aluminium' && '#forge:rods/titanium' && '#forge:rods/neodymium_magnetic' && '#forge:wires/gt_double_kanthal'})
  event.remove({ type: 'gtceu:assembler', input: '#forge:rods/neodymium_magnetic' && '#forge:wires/fine_tungsten_steel' && 'susy:circuit.integrated'})
  event.remove({ type: 'gtceu:assembler', input: '#forge:rods/neodymium_magnetic' && '#forge:wires/fine_iridium' && 'susy:circuit.integrated'})
  event.remove({ type: 'gtceu:assembler', input: '#forge:rods/samarium_magnetic' && '#forge:wires/fine_osmiridium' && 'susy:circuit.integrated'})
  event.remove({ type: 'gtceu:assembler', input: '#forge:rods/samarium_magnetic' && '#forge:wires/fine_europium' && 'susy:circuit.integrated'})
  event.remove({ type: 'gtceu:assembler', input: '#forge:rods/samarium_magnetic' && '#forge:wires/fine_tritanium' && 'susy:circuit.integrated'})
  event.remove({ type: 'gtceu:assembly_line', input: '#forge:rods/long_samarium_magnetic' && '#forge:rods/long_hsss' && '#forge:rings/hsss' && '#forge:rounds/hsss' && '#forge:wires/fine_ruridit' && '#forge:cables/gt_single_niobium_titanium' && safeFluidOf('gtceu:soldering_alloy') && safeFluidOf('gtceu:lubricant')})
  event.remove({ type: 'gtceu:assembly_line', input: '#forge:rods/long_samarium_magnetic' && '#forge:rods/long_osmiridium' && '#forge:rings/osmiridium' && '#forge:rounds/osmiridium' && '#forge:wires/fine_europium' && '#forge:wires/fine_europium' && '#forge:cables/gt_single_vanadium_gallium' && safeFluidOf('gtceu:soldering_alloy') && safeFluidOf('gtceu:lubricant')})
  event.remove({ type: 'gtceu:assembly_line', input: '#forge:rods/long_samarium_magnetic' && '#forge:rods/long_tritanium' && '#forge:rings/tritanium' && '#forge:rounds/tritanium' && '#forge:wires/fine_americium' && '#forge:wires/fine_americium' && '#forge:cables/gt_single_yttrium_barium_cuprate' && safeFluidOf('gtceu:soldering_alloy') && safeFluidOf('gtceu:lubricant') && safeFluidOf('gtceu:naquadria')})
  
  event.recipes.gtceu.mixer('apctje3apgdnkt') // remapped from original line 9
    .itemInputs('2x #forge:dusts/neodymium')
    .itemInputs('14x #forge:dusts/iron')
    .itemInputs('1x #forge:dusts/boron')
    .itemOutputs('17x #forge:dusts/neodymium_alloy')
    .duration(400)
    .EUt(256)

  event.recipes.gtceu.electrolyzer('moekqyym1cresh') // remapped from original line 18
    .inputFluids(safeFluidOf('gtceu:sulfuric_acid', 100))
    .itemInputs('1x #forge:ingots/neodymium_alloy')
    .itemInputs('1x #forge:dusts/small_nickel')
    .itemInputs('1x #forge:dusts/tiny_boric_acid')
    .itemOutputs('1x #forge:ingots/treated_neodymium_alloy')
    .duration(120)
    .EUt(256)

  event.recipes.gtceu.electrolyzer('qn5wf7j3lxijds') // remapped from original line 28
    .inputFluids(safeFluidOf('gtceu:sulfuric_acid', 100))
    .itemInputs('1x #forge:plates/neodymium_alloy')
    .itemInputs('1x #forge:dusts/small_nickel')
    .itemInputs('1x #forge:dusts/tiny_boric_acid')
    .itemOutputs('1x #forge:plates/treated_neodymium_alloy')
    .duration(120)
    .EUt(256)

  event.recipes.gtceu.electrolyzer('j4n2sg2rhofl6f') // remapped from original line 38
    .inputFluids(safeFluidOf('gtceu:sulfuric_acid', 100))
    .itemInputs('1x #forge:rods/neodymium_alloy')
    .itemInputs('1x #forge:dusts/small_nickel')
    .itemInputs('1x #forge:dusts/tiny_boric_acid')
    .itemOutputs('1x #forge:rods/treated_neodymium_alloy')
    .duration(120)
    .EUt(256)

  event.recipes.gtceu.electrolyzer('x4pbfgic06sdho') // remapped from original line 48
    .inputFluids(safeFluidOf('gtceu:sulfuric_acid', 100))
    .itemInputs('1x #forge:rods/long_neodymium_alloy')
    .itemInputs('1x #forge:dusts/small_nickel')
    .itemInputs('1x #forge:dusts/tiny_boric_acid')
    .itemOutputs('1x susy:long_treated_neodymium_alloy_rod')
    .duration(120)
    .EUt(256)

  event.recipes.gtceu.electrolyzer('nigap7srqwuilr') // remapped from original line 58
    .inputFluids(safeFluidOf('gtceu:sulfuric_acid', 100))
    .itemInputs('1x #forge:rings/neodymium_alloy')
    .itemInputs('1x #forge:dusts/small_nickel')
    .itemInputs('1x #forge:dusts/tiny_boric_acid')
    .itemOutputs('1x #forge:rings/treated_neodymium_alloy')
    .duration(120)
    .EUt(256)

  event.recipes.gtceu.alloy_blast_smelter('j7u7beks7wpbeu') // remapped from original line 70
    .itemInputs('1x #forge:dusts/samarium')
    .itemInputs('5x #forge:dusts/cobalt')
    .inputFluids(safeFluidOf('gtceu:argon', 300))
    .outputFluids(safeFluidOf('susy:samarium_alloy', 864))
    .blastFurnaceTemp(1800)
    .duration(300)
    .EUt(1920)

  event.recipes.gtceu.forming_press('atpfrh33npvlek') // remapped from original line 80
    .notConsumable(safeItemId('1x susy:shape.mold.long_rod'))
    .itemInputs('1x #forge:dusts/samarium_alloy')
    .itemOutputs('1x susy:long_samarium_alloy_rod')
    .duration(200)
    .EUt(240)

  event.recipes.gtceu.forming_press('5qosj8e7doqwpa') // remapped from original line 88
    .notConsumable(safeItemId('1x susy:shape.mold.ring'))
    .itemInputs('1x #forge:dusts/samarium_alloy')
    .itemOutputs('4x #forge:rings/samarium_alloy')
    .duration(200)
    .EUt(240)

  event.recipes.gtceu.forming_press('llfwwpjis08zej') // remapped from original line 96
    .notConsumable(safeItemId('1x susy:shape.mold.rod'))
    .itemInputs('1x #forge:dusts/samarium_alloy')
    .itemOutputs('2x #forge:rods/samarium_alloy')
    .duration(200)
    .EUt(240)

  event.recipes.gtceu.forming_press('kwtphdccginoe6') // remapped from original line 104
    .notConsumable(safeItemId('1x gtceu:plate_casting_mold'))
    .itemInputs('1x #forge:dusts/samarium_alloy')
    .itemOutputs('1x #forge:plates/samarium_alloy')
    .duration(200)
    .EUt(240)

  event.recipes.gtceu.forming_press('ps2no7bbpdcysz') // remapped from original line 112
    .notConsumable(safeItemId('1x gtceu:ingot_casting_mold'))
    .itemInputs('1x #forge:dusts/samarium_alloy')
    .itemOutputs('1x #forge:ingots/samarium_alloy')
    .duration(200)
    .EUt(240)

  event.recipes.gtceu.electrolyzer('2ggy3uvn1sgkrf') // remapped from original line 120
    .inputFluids(safeFluidOf('gtceu:sulfuric_acid', 100))
    .itemInputs('1x #forge:ingots/samarium_alloy')
    .itemInputs('1x #forge:dusts/small_nickel')
    .itemInputs('1x #forge:dusts/tiny_boric_acid')
    .itemOutputs('1x #forge:ingots/treated_samarium_alloy')
    .duration(120)
    .EUt(256)

  event.recipes.gtceu.electrolyzer('lcrecemi1xnpfy') // remapped from original line 130
    .inputFluids(safeFluidOf('gtceu:sulfuric_acid', 100))
    .itemInputs('1x #forge:plates/samarium_alloy')
    .itemInputs('1x #forge:dusts/small_nickel')
    .itemInputs('1x #forge:dusts/tiny_boric_acid')
    .itemOutputs('1x #forge:plates/treated_samarium_alloy')
    .duration(120)
    .EUt(256)

  event.recipes.gtceu.electrolyzer('ell35ia5i4njma') // remapped from original line 140
    .inputFluids(safeFluidOf('gtceu:sulfuric_acid', 100))
    .itemInputs('1x #forge:rods/samarium_alloy')
    .itemInputs('1x #forge:dusts/small_nickel')
    .itemInputs('1x #forge:dusts/tiny_boric_acid')
    .itemOutputs('1x #forge:rods/treated_samarium_alloy')
    .duration(120)
    .EUt(256)

  event.recipes.gtceu.electrolyzer('fuwskioebr3hps') // remapped from original line 150
    .inputFluids(safeFluidOf('gtceu:sulfuric_acid', 100))
    .itemInputs('1x #forge:rods/long_samarium_alloy')
    .itemInputs('1x #forge:dusts/small_nickel')
    .itemInputs('1x #forge:dusts/tiny_boric_acid')
    .itemOutputs('1x susy:long_treated_samarium_alloy_rod')
    .duration(120)
    .EUt(256)

  event.recipes.gtceu.electrolyzer('aruopl3mo6hd2t') // remapped from original line 160
    .inputFluids(safeFluidOf('gtceu:sulfuric_acid', 100))
    .itemInputs('1x #forge:rings/samarium_alloy')
    .itemInputs('1x #forge:dusts/small_nickel')
    .itemInputs('1x #forge:dusts/tiny_boric_acid')
    .itemOutputs('1x #forge:rings/treated_samarium_alloy')
    .duration(120)
    .EUt(256)

  event.recipes.gtceu.assembler('uwm5ri1pehz1ay') // remapped from original line 253
    .itemInputs('2x #forge:cables/gt_double_aluminium')
    .itemInputs('2x #forge:rods/titanium')
    .itemInputs('1x #forge:rods/steel_magnetic')
    .itemInputs('4x #forge:wires/gt_double_kanthal')
    .itemOutputs(safeItemId('1x gtceu:ev_electric_motor'))
    .duration(100)
    .EUt(30)

  event.recipes.gtceu.assembler('zd55uukmlzfcvs') // remapped from original line 263
    .itemInputs('2x #forge:cables/gt_double_tungsten')
    .itemInputs('2x #forge:rods/tungsten_steel')
    .itemInputs('1x #forge:rods/neodymium_alloy_magnetic')
    .itemInputs('4x #forge:wires/gt_double_graphene')
    .itemOutputs(safeItemId('1x gtceu:iv_electric_motor'))
    .duration(100)
    .EUt(30)

  event.recipes.gtceu.assembler('lwnhbuvt9ada71') // remapped from original line 273
    .itemInputs('1x #forge:rods/steel_magnetic')
    .itemInputs('16x #forge:wires/fine_tungsten_steel')
    .itemOutputs(safeItemId('1x gtceu:ev_voltage_coil'))
    .duration(200)
    .EUt(1920)

  event.recipes.gtceu.assembler('zygp8n3xz7tsfn') // remapped from original line 281
    .itemInputs('1x #forge:rods/neodymium_alloy_magnetic')
    .itemInputs('16x #forge:wires/fine_iridium')
    .itemOutputs(safeItemId('1x gtceu:iv_voltage_coil'))
    .duration(200)
    .EUt(7680)

  event.recipes.gtceu.assembler('ncozmqa5isx7rv') // remapped from original line 289
    .itemInputs('1x #forge:rods/samarium_alloy_magnetic')
    .itemInputs('16x #forge:wires/fine_osmiridium')
    .itemOutputs(safeItemId('1x gtceu:luv_voltage_coil'))
    .duration(200)
    .EUt(30720)

  event.recipes.gtceu.assembler('esk2zkedzf9h7j') // remapped from original line 297
    .itemInputs('1x #forge:rods/samarium_alloy_magnetic')
    .itemInputs('16x #forge:wires/fine_europium')
    .itemOutputs(safeItemId('1x gtceu:zpm_voltage_coil'))
    .duration(200)
    .EUt(122880)

  event.recipes.gtceu.assembler('nynswyjkivqolt') // remapped from original line 305
    .itemInputs('1x #forge:rods/samarium_alloy_magnetic')
    .itemInputs('16x #forge:wires/fine_tritanium')
    .itemOutputs(safeItemId('1x gtceu:uv_voltage_coil'))
    .duration(200)
    .EUt(491520)

  event.recipes.gtceu.assembly_line('qc9gcwfpn3h9l9') // remapped from original line 313
    .itemInputs('1x #forge:rods/long_samarium_alloy_magnetic')
    .itemInputs('2x #forge:rods/long_hsss')
    .itemInputs('2x #forge:rings/hsss')
    .itemInputs('4x #forge:rounds/hsss')
    .itemInputs('64x #forge:wires/fine_ruridit')
    .itemInputs('2x #forge:cables/gt_single_niobium_titanium')
    .inputFluids(safeFluidOf('gtceu:soldering_alloy', 144))
    .inputFluids(safeFluidOf('gtceu:lubricant', 250))
    .itemOutputs(safeItemId('1x gtceu:luv_electric_motor'))
    .duration(600)
    .EUt(6000)

  event.recipes.gtceu.assembly_line('wj2zibins5xddq') // remapped from original line 327
    .itemInputs('1x #forge:rods/long_samarium_alloy_magnetic')
    .itemInputs('4x #forge:rods/long_osmiridium')
    .itemInputs('4x #forge:rings/osmiridium')
    .itemInputs('8x #forge:rounds/osmiridium')
    .itemInputs('64x #forge:wires/fine_europium')
    .itemInputs('32x #forge:wires/fine_europium')
    .itemInputs('2x #forge:cables/gt_single_vanadium_gallium')
    .inputFluids(safeFluidOf('gtceu:soldering_alloy', 288))
    .inputFluids(safeFluidOf('gtceu:lubricant', 500))
    .itemOutputs(safeItemId('1x gtceu:zpm_electric_motor'))
    .duration(600)
    .EUt(24000)

  event.recipes.gtceu.assembly_line('7d7hj0rnlywxlc') // remapped from original line 342
    .itemInputs('1x #forge:rods/long_samarium_alloy_magnetic')
    .itemInputs('4x #forge:rods/long_tritanium')
    .itemInputs('4x #forge:rings/tritanium')
    .itemInputs('8x #forge:rounds/tritanium')
    .itemInputs('64x #forge:wires/fine_americium')
    .itemInputs('64x #forge:wires/fine_americium')
    .itemInputs('2x #forge:cables/gt_single_yttrium_barium_cuprate')
    .inputFluids(safeFluidOf('gtceu:soldering_alloy', 576))
    .inputFluids(safeFluidOf('gtceu:lubricant', 1000))
    .inputFluids(safeFluidOf('gtceu:naquadria', 576))
    .itemOutputs(safeItemId('1x gtceu:uv_electric_motor'))
    .duration(600)
    .EUt(100000)

  event.recipes.gtceu.polarizer('5zagqus5xnl3sm') // remapped from original line 358
    .itemInputs('1x #forge:rods/long_treated_samarium_alloy')
    .itemOutputs('1x susy:long_samarium_alloy_magnetic_rod')
    .duration(150)
    .EUt(240)

  event.recipes.gtceu.polarizer('bf5qkxriyglys0') // remapped from original line 365
    .itemInputs('1x #forge:rods/treated_samarium_alloy')
    .itemOutputs('1x susy:samarium_alloy_magnetic_rod')
    .duration(75)
    .EUt(240)

  event.recipes.gtceu.polarizer('i3chgrr98co5mi') // remapped from original line 372
    .itemInputs('1x #forge:rings/treated_samarium_alloy')
    .itemOutputs('1x #forge:rings/samarium_alloy_magnetic')
    .duration(40)
    .EUt(240)

  event.recipes.gtceu.polarizer('2quhnggda8mhcg') // remapped from original line 379
    .itemInputs('1x #forge:ingots/treated_samarium_alloy')
    .itemOutputs('1x #forge:ingots/samarium_alloy_magnetic')
    .duration(150)
    .EUt(240)

  event.recipes.gtceu.polarizer('usgutg8kn2hbac') // remapped from original line 386
    .itemInputs('1x #forge:plates/treated_samarium_alloy')
    .itemOutputs('1x #forge:plates/samarium_alloy_magnetic')
    .duration(150)
    .EUt(240)

  event.recipes.gtceu.polarizer('9xwv0d0r4segqv') // remapped from original line 393
    .itemInputs('1x #forge:rods/long_treated_neodymium_alloy')
    .itemOutputs('1x susy:long_neodymium_alloy_magnetic_rod')
    .duration(150)
    .EUt(240)

  event.recipes.gtceu.polarizer('rxous8zjsyrfnh') // remapped from original line 400
    .itemInputs('1x #forge:rods/treated_neodymium_alloy')
    .itemOutputs('1x susy:neodymium_alloy_magnetic_rod')
    .duration(75)
    .EUt(240)

  event.recipes.gtceu.polarizer('6wsyzcc5hfx0wi') // remapped from original line 407
    .itemInputs('1x #forge:rings/treated_neodymium_alloy')
    .itemOutputs('1x #forge:rings/neodymium_alloy_magnetic')
    .duration(40)
    .EUt(240)

  event.recipes.gtceu.polarizer('lxalvb0pujdzmn') // remapped from original line 414
    .itemInputs('1x #forge:ingots/treated_neodymium_alloy')
    .itemOutputs('1x #forge:ingots/neodymium_alloy_magnetic')
    .duration(150)
    .EUt(240)

  event.recipes.gtceu.polarizer('nucduprgm6njmh') // remapped from original line 421
    .itemInputs('1x #forge:plates/treated_neodymium_alloy')
    .itemOutputs('1x #forge:plates/neodymium_alloy_magnetic')
    .duration(150)
    .EUt(240)

    event.shaped('gtceu:ev_electric_motor', [
      'ABC',
      'BDB',
      'CBA'
    ], {
      A: 'gtceu:aluminium_double_cable',
      B: 'gtceu:kanthal_double_wire',
      C: 'gtceu:titanium_rod',
      D: 'gtceu:magnetic_steel_rod'
    }
    )

    event.shaped('gtceu:iv_electric_motor', [
      'ABC',
      'BDB',
      'CBA'
    ], {
      A: 'gtceu:tungsten_double_cable',
      B: 'gtceu:graphene_double_wire',
      C: 'gtceu:tungsten_steel_rod',
      D: 'gtceu:magnetic_steel_rod'
    }
    )

    event.shaped('gtceu:ev_electromagnetic_separator', [
      'ABC',
      'BEF',
      'DBC'
    ], {
      A: 'gtceu:ev_conveyor_module',
      B: 'gtceu:aluminium_single_cable',
      C: 'gtceu:steel_quadruple_wire',
      D: '#gtceu:circuits/ev',
      E: 'gtceu:ev_machine_hull',
      F: 'gtceu:magnetic_steel_rod'
    }
    )

    event.shaped('gtceu:iv_electromagnetic_separator', [
      'ABC',
      'BEF',
      'DBC'
    ], {
      A: 'gtceu:iv_conveyor_module',
      B: 'gtceu:platinum_single_cable',
      C: 'gtceu:steel_quadruple_wire',
      D: '#gtceu:circuits/iv',
      E: 'gtceu:iv_machine_hull',
      F: 'gtceu:magnetic_steel_rod'
    }
    )

    event.shaped('gtceu:ev_polarizer', [
      'BDB',
      'ACA',
      'BDB'
    ], {
      A: 'gtceu:aluminium_single_cable',
      B: 'gtceu:nichrome_quadruple_wire',
      C: 'gtceu:ev_machine_hull',
      D: 'gtceu:magnetic_steel_rod'
    }
    )

    event.shaped('gtceu:iv_polarizer', [
      'BDB',
      'ACA',
      'BDB'
    ], {
      A: 'gtceu:platinum_single_cable',
      B: 'gtceu:tungsten_steel_quadruple_wire',
      C: 'gtceu:ev_machine_hull',
      D: 'gtceu:magnetic_steel_rod'
    }
    )

 // The following forLoops couldn't be parsed, they were added to the forLoopBuffers
 // The following entries are unknown or couldn't be parsed, you should rewrite them manually.
  // ABS = recipemap('alloy_blast_smelter')
  // FORMING_PRESS = recipemap("forming_press")
  // crafting.replaceShaped('gregtech:magnet_hv_battery.re.hv.sodium', metaitem('item_magnet.hv'), [
  //         [metaitem('stickNeodymiumAlloyMagnetic'), ore('toolWrench'), metaitem('stickNeodymiumAlloyMagnetic')],
  //         [metaitem('stickNeodymiumAlloyMagnetic'), metaitem('battery.re.hv.sodium'), metaitem('stickNeodymiumAlloyMagnetic')],
  //         [metaitem('wireGtSingleGold'), metaitem('plateStainlessSteel'), metaitem('wireGtSingleGold')]
  // ])
  // crafting.replaceShaped('gregtech:magnet_hv_battery.re.hv.lithium', metaitem('item_magnet.hv'), [
  //         [metaitem('stickNeodymiumAlloyMagnetic'), ore('toolWrench'), metaitem('stickNeodymiumAlloyMagnetic')],
  //         [metaitem('stickNeodymiumAlloyMagnetic'), metaitem('battery.re.hv.lithium'), metaitem('stickNeodymiumAlloyMagnetic')],
  //         [metaitem('wireGtSingleGold'), metaitem('plateStainlessSteel'), metaitem('wireGtSingleGold')]
  // ])
  // crafting.replaceShaped('gregtech:magnet_hv_battery.re.hv.cadmium', metaitem('item_magnet.hv'), [
  //         [metaitem('stickNeodymiumAlloyMagnetic'), ore('toolWrench'), metaitem('stickNeodymiumAlloyMagnetic')],
  //         [metaitem('stickNeodymiumAlloyMagnetic'), metaitem('battery.re.hv.cadmium'), metaitem('stickNeodymiumAlloyMagnetic')],
  //         [metaitem('wireGtSingleGold'), metaitem('plateStainlessSteel'), metaitem('wireGtSingleGold')]
  // ])
  // crafting.replaceShaped('gregtech:magnet_hv_energy_crystal', metaitem('item_magnet.hv'), [
  //         [metaitem('stickNeodymiumAlloyMagnetic'), ore('toolWrench'), metaitem('stickNeodymiumAlloyMagnetic')],
  //         [metaitem('stickNeodymiumAlloyMagnetic'), metaitem('energy_crystal'), metaitem('stickNeodymiumAlloyMagnetic')],
  //         [metaitem('wireGtSingleGold'), metaitem('plateStainlessSteel'), metaitem('wireGtSingleGold')]
  // ])
});