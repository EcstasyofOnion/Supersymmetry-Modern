ServerEvents.recipes(event => {

  event.recipes.gtceu.mixer('bsrb8calcsc2j7') // remapped from original line 41
    .inputFluids(safeFluidOf('susy:dichloroethane', 1000))
    .inputFluids(safeFluidOf('susy:dichloromethane', 1000))
    .outputFluids(safeFluidOf('susy:dewaxing_solvent', 2000))
    .duration(20)
    .EUt(30)

  event.recipes.gtceu.centrifuge('y1vxc61cq1xjcv') // remapped from original line 49
    .inputFluids(safeFluidOf('susy:crude_lubricating_oil', 850))
    .inputFluids(safeFluidOf('susy:dewaxing_solvent', 2000))
    .outputFluids(safeFluidOf('susy:solvent_lubricant_mixture', 2850))
    .duration(20)
    .EUt(30)

  event.recipes.susy.heat_exchanger('hyvcxr8rry3mrg') // remapped from original line 57
    .inputFluids(safeFluidOf('gtceu:ice', 500))
    .inputFluids(safeFluidOf('susy:solvent_lubricant_mixture', 2850))
    .outputFluids(safeFluidOf('minecraft:water', 500))
    .outputFluids(safeFluidOf('susy:cold_solvent_lubricant_mixture', 2850))
    .duration(5)

  event.recipes.susy.phase_separator('smbkcntvcukhbp') // remapped from original line 65
    .inputFluids(safeFluidOf('susy:cold_solvent_lubricant_mixture', 2850))
    .outputFluids(safeFluidOf('susy:slack_wax', 350))
    .outputFluids(safeFluidOf('susy:dewaxed_lubricant_mixture', 2500))
    .duration(5)

  event.recipes.gtceu.distillation_tower('u1zcamhqhii0m6') // remapped from original line 72
    .inputFluids(safeFluidOf('susy:dewaxed_lubricant_mixture', 2500))
    .outputFluids(safeFluidOf('susy:sulfuric_lubricating_oil', 500))
    .outputFluids(safeFluidOf('susy:dewaxing_solvent', 2000))
    .duration(20)
    .EUt(30)

  event.recipes.susy.fixed_bed_reactor('vhjxeilahfva5j') // remapped from original line 80
    .inputFluids(safeFluidOf('susy:sulfuric_lubricating_oil', 180))
    .inputFluids(safeFluidOf('gtceu:hydrogen', 45))
    .notConsumable('1x #forge:catalysts/bed_alumina')
    .outputFluids(safeFluidOf('susy:lubricating_oil', 180))
    .duration(20)
    .EUt(30)

  event.recipes.gtceu.large_chemical_reactor('vis3l7wnruaujh') // remapped from original line 91
    .itemInputs('5x #forge:dusts/alumina')
    .inputFluids(safeFluidOf('susy:diisopropylamine', 1200))
    .inputFluids(safeFluidOf('gtceu:phosphoric_acid', 1000))
    .inputFluids(safeFluidOf('susy:tetraethyl_orthosilicate', 200))
    .inputFluids(safeFluidOf('susy:demineralized_water', 5000))
    .itemOutputs('1x #forge:dusts/sapo_eleven')
    .duration(600)
    .EUt(1920)

  event.recipes.susy.batch_reactor('qejngwm5gxia2f') // remapped from original line 102
    .itemInputs('1x #forge:dusts/platinum')
    .inputFluids(safeFluidOf('gtceu:aqua_regia', 8000))
    .inputFluids(safeFluidOf('gtceu:nitric_acid', 2000))
    .outputFluids(safeFluidOf('susy:chloroplatinic_acid_solution', 4000))
    .outputFluids(safeFluidOf('gtceu:nitrogen_dioxide', 4000))
    .duration(20)
    .EUt(30)

  event.recipes.susy.batch_reactor('nz4q7pdloqva2x') // remapped from original line 112
    .itemInputs('1x #forge:dusts/sapo_eleven')
    .itemInputs('3x #forge:dusts/sodium_hydroxide')
    .inputFluids(safeFluidOf('susy:ethylene_glycol', 500))
    .inputFluids(safeFluidOf('susy:chloroplatinic_acid_solution', 1000))
    .itemOutputs('1x #forge:dusts/platinum_sapo_eleven')
    .outputFluids(safeFluidOf('susy:wastewater', 1500))
    .duration(600)
    .EUt(1920)

  event.recipes.susy.fixed_bed_reactor('yqlxnjnwqh4ngt') // remapped from original line 125
    .inputFluids(safeFluidOf('susy:crude_lubricating_oil', 850))
    .inputFluids(safeFluidOf('gtceu:hydrogen', 315))
    .notConsumable('1x #forge:catalysts/bed_platinum_sapo_eleven')
    .outputFluids(safeFluidOf('susy:lubricating_oil', 850))
    .duration(20)
    .EUt(30)

  event.recipes.susy.continuous_stirred_tank_reactor('1jdqkdfgvboefv') // remapped from original line 136
    .inputFluids(safeFluidOf('gtceu:methyldichlorosilane', 50))
    .inputFluids(safeFluidOf('gtceu:chlorobenzene', 50))
    .outputFluids(safeFluidOf('susy:methylphenyldichlorosilane', 50))
    .outputFluids(safeFluidOf('susy:hydrogen_chloride', 50))
    .duration(10)
    .EUt(voltAmps[1])

  event.recipes.susy.batch_reactor('vgtc1l38apv4pw') // remapped from original line 145
    .inputFluids(safeFluidOf('gtceu:methyldichlorosilane', 900))
    .inputFluids(safeFluidOf('susy:methylphenyldichlorosilane', 100))
    .inputFluids(safeFluidOf('minecraft:water', 3000))
    .outputFluids(safeFluidOf('susy:silicone_oil_mixture', 3000))
    .duration(20)
    .EUt(voltAmps[3])

  event.recipes.susy.phase_separator('zuvxzqq0ux0mup') // remapped from original line 154
    .inputFluids(safeFluidOf('susy:silicone_oil_mixture', 3000))
    .outputFluids(safeFluidOf('susy:silicone_oil', 1000))
    .outputFluids(safeFluidOf('gtceu:hydrochloric_acid', 2000))
    .duration(10)
    .EUt(voltAmps[1])

  event.recipes.gtceu.mixer('rxnrl0zfbhwwyo') // remapped from original line 164
    .inputFluids(safeFluidOf('susy:boron_trifluoride', 750))
    .inputFluids(safeFluidOf('susy:n_butanol', 250))
    .outputFluids(safeFluidOf('susy:olefin_polymerization_initiator', 1000))
    .duration(50)
    .EUt(voltAmps[2])

  event.recipes.susy.continuous_stirred_tank_reactor('kw8zueensmijog') // remapped from original line 172
    .inputFluids(safeFluidOf('susy:one_dodecene', 600))
    .inputFluids(safeFluidOf('susy:olefin_polymerization_initiator', 100))
    .outputFluids(safeFluidOf('susy:crude_polyalphaolefin_mixture', 225))
    .duration(2)
    .EUt(voltAmps[2])

  event.recipes.susy.continuous_stirred_tank_reactor('hxrcbakvkmfk8b') // remapped from original line 180
    .inputFluids(safeFluidOf('susy:one_decene', 600))
    .inputFluids(safeFluidOf('susy:olefin_polymerization_initiator', 100))
    .outputFluids(safeFluidOf('susy:crude_polyalphaolefin_mixture', 225))
    .duration(2)
    .EUt(voltAmps[2])

  event.recipes.susy.continuous_stirred_tank_reactor('qlbptnfwjxyhse') // remapped from original line 188
    .inputFluids(safeFluidOf('susy:crude_polyalphaolefin_mixture', 225))
    .inputFluids(safeFluidOf('minecraft:water', 100))
    .outputFluids(safeFluidOf('susy:unsaturated_polyalphaolefin', 200))
    .outputFluids(safeFluidOf('susy:boron_trifluoride_mixture', 125))
    .duration(2)
    .EUt(voltAmps[2])

  event.recipes.susy.batch_reactor('ndbppn2ljzdj2u') // remapped from original line 197
    .inputFluids(safeFluidOf('susy:boron_trifluoride_mixture', 1250))
    .inputFluids(safeFluidOf('gtceu:sulfuric_acid', 50))
    .outputFluids(safeFluidOf('susy:boron_trifluoride', 500))
    .outputFluids(safeFluidOf('susy:n_butanol_waste', 1250))
    .duration(40)
    .EUt(voltAmps[2])

  event.recipes.gtceu.DISTILLATION_TOWER('vyjvpyvxdy4rf0') // remapped from original line 206
    .inputFluids(safeFluidOf('susy:n_butanol_waste', 1250))
    .outputFluids(safeFluidOf('susy:n_butanol', 250))
    .outputFluids(safeFluidOf('susy:wastewater', 1000))
    .duration(40)
    .EUt(voltAmps[2])

  event.recipes.gtceu.mixer('xzd3s4txmo6cu4') // remapped from original line 214
    .itemInputs('3x #forge:dusts/palladium_chloride')
    .inputFluids(safeFluidOf('gtceu:phosphoric_acid', 1000))
    .outputFluids(safeFluidOf('susy:palladium_precursor_solution', 1000))
    .duration(100)
    .EUt(voltAmps[3])

  event.recipes.susy.SINTERING_OVEN('icdco6olr9ucwy') // remapped from original line 222
    .itemInputs('5x #forge:dusts/alumina')
    .inputFluids(safeFluidOf('susy:palladium_precursor_solution', 1000))
    .itemOutputs('1x #forge:dusts/supported_palladium')
    .outputFluids(safeFluidOf('gtceu:phosphoric_acid', 1000))
    .duration(100)
    .EUt(voltAmps[3])

  event.recipes.susy.fixed_bed_reactor('lc3zg0sh0zwkby') // remapped from original line 231
    .inputFluids(safeFluidOf('susy:unsaturated_polyalphaolefin', 50))
    .inputFluids(safeFluidOf('gtceu:hydrogen', 100))
    .notConsumable('1x #forge:catalysts/bed_supported_palladium')
    .outputFluids(safeFluidOf('susy:polyalphaolefin', 50))
    .outputFluids(safeFluidOf('minecraft:water', 50))
    .duration(20)
    .EUt(voltAmps[3])

  event.recipes.susy.POLYMERIZATION('7nsqx0spoukude') // remapped from original line 243
    .inputFluids(safeFluidOf('gtceu:butene', 4000))
    .inputFluids(safeFluidOf('susy:olefin_polymerization_initiator', 500))
    .outputFluids(safeFluidOf('susy:polybutene_mixture', 4125))
    .duration(80)
    .EUt(voltAmps[2])

  event.recipes.susy.continuous_stirred_tank_reactor('mmoykec73j6gzi') // remapped from original line 251
    .inputFluids(safeFluidOf('susy:polybutene_mixture', 4125))
    .inputFluids(safeFluidOf('minecraft:water', 500))
    .outputFluids(safeFluidOf('susy:polybutene', 4000))
    .outputFluids(safeFluidOf('susy:boron_trifluoride_mixture', 625))
    .duration(4)
    .EUt(voltAmps[2])

  event.recipes.gtceu.large_chemical_reactor('x3vjywzrjscwy9') // remapped from original line 268
    .inputFluids(safeFluidOf('susy:pseudocumene', 1000))
    .inputFluids(safeFluidOf('susy:hot_hp_air', 12000))
    .inputFluids(safeFluidOf('gtceu:acetic_acid', 1000))
    .notConsumable('1x #forge:dusts/amoco_process_catalyst')
    .outputFluids(safeFluidOf('susy:trimellitic_acid_slurry', 2000))
    .EUt(1920)
    .duration(200)

  event.recipes.gtceu.DISTILLERY('zgmwrvqggit0ue') // remapped from original line 278
    .inputFluids(safeFluidOf('susy:trimellitic_acid_slurry', 2000))
    .itemOutputs('21x #forge:dusts/trimellitic_acid')
    .outputFluids(safeFluidOf('susy:diluted_acetic_acid', 2000))
    .EUt(120)
    .duration(100)

  event.recipes.susy.roaster('f0zaxmzroyg1r1') // remapped from original line 286
    .itemInputs('21x #forge:dusts/trimellitic_acid')
    .outputFluids(safeFluidOf('susy:dense_steam', 1000))
    .itemOutputs('18x #forge:dusts/trimellitic_anhydride')
    .EUt(120)
    .duration(100)

  event.recipes.gtceu.centrifuge('yeb9kbd2zs804y') // remapped from original line 328
    .itemInputs('1x #forge:dusts/flotated_molybdenite')
    .itemOutputs('1x #forge:dusts/molybdenum_disulfide')
    .duration(200)
    .EUt(120)

  event.recipes.susy.roaster('sh7zigbbz7hjpd') // remapped from original line 335
    .notConsumable(safeFluidOf('gtceu:nitrogen', 8000))
    .itemInputs('1x #forge:dusts/molybdenum_trisulfide')
    .itemOutputs('1x #forge:dusts/molybdenum_disulfide')
    .itemOutputs('1x #forge:dusts/sulfur')
    .duration(200)
    .EUt(120)

  event.recipes.susy.reaction_furnace('dh3ybr0nonaffg') // remapped from original line 346
    .itemInputs('1x #forge:dusts/graphite')
    .inputFluids(safeFluidOf('gtceu:fluorine', 1000))
    .itemOutputs('1x #forge:dusts/fluorinated_graphite')
    .duration(200)
    .EUt(240)

  event.recipes.susy.continuous_stirred_tank_reactor('wp6fp4qot0rfof') // remapped from original line 360
    .notConsumable('1x #forge:springs/kanthal')
    .inputFluids(safeFluidOf('susy:oleic_acid', 50))
    .inputFluids(safeFluidOf('gtceu:ammonia', 50))
    .outputFluids(safeFluidOf('susy:oleylamide', 50))
    .outputFluids(safeFluidOf('minecraft:water', 50))
    .duration(10)
    .EUt(240)

  event.recipes.susy.continuous_stirred_tank_reactor('mnvrxxjd2kn7s9') // remapped from original line 372
    .notConsumable('1x #forge:springs/kanthal')
    .inputFluids(safeFluidOf('gtceu:seed_oil', 50))
    .inputFluids(safeFluidOf('gtceu:glycerol', 100))
    .outputFluids(safeFluidOf('susy:monoglycerides', 150))
    .duration(10)
    .EUt(240)

  event.recipes.gtceu.autoclave('ipwku1wqaknvkt') // remapped from original line 388
    .inputFluids(safeFluidOf('gtceu:distilled_water', 3000))
    .inputFluids(safeFluidOf('susy:gtfo_stearin', 1000))
    .outputFluids(safeFluidOf('gtceu:glycerol', 1000))
    .outputFluids(safeFluidOf('susy:stearic_acid', 3000))
    .EUt(30)
    .duration(200)

  event.recipes.gtceu.large_chemical_reactor('dxuey33t0cjdnq') // remapped from original line 401
    .itemInputs('16x #forge:dusts/chromium_trioxide')
    .inputFluids(safeFluidOf('gtceu:sulfuric_acid', 6000))
    .inputFluids(safeFluidOf('gtceu:distilled_water', 15000))
    .inputFluids(safeFluidOf('gtceu:acetone', 1000))
    .inputFluids(safeFluidOf('susy:n_hexadecanol', 3000))
    .outputFluids(safeFluidOf('susy:chromium_sulfate_solution', 1000))
    .outputFluids(safeFluidOf('susy:palmitic_acid', 3000))
    .duration(200)
    .EUt(200)

  event.recipes.susy.batch_reactor('9shgqgpitzwa8x') // remapped from original line 421
    .inputFluids(safeFluidOf('gtceu:naphthalene', 1000))
    .inputFluids(safeFluidOf('gtceu:nitration_mixture', 2000))
    .itemOutputs('1x #forge:dusts/crude_one_nitronaphthalene')
    .outputFluids(safeFluidOf('gtceu:diluted_sulfuric_acid', 2000))
    .duration(200)
    .EUt(120)

  event.recipes.susy.vacuum_distillation('gljimbadcjtbkw') // remapped from original line 430
    .itemInputs('1x #forge:dusts/crude_one_nitronaphthalene')
    .itemOutputs('1x #forge:dusts/one_nitronaphthalene')
    .duration(200)
    .EUt(120)

  event.recipes.susy.fixed_bed_reactor('zmq9nqff0tumbx') // remapped from original line 437
    .itemInputs('1x #forge:dusts/one_nitronaphthalene')
    .notConsumable('1x #forge:catalysts/bed_nickel')
    .inputFluids(safeFluidOf('gtceu:hydrogen', 6000))
    .itemOutputs('1x #forge:dusts/one_naphthylamine')
    .outputFluids(safeFluidOf('minecraft:water', 2000))
    .duration(200)
    .EUt(120)

  event.recipes.susy.roaster('7ryulqear8qlqe') // remapped from original line 447
    .inputFluids(safeFluidOf('susy:one_naphthylamine', 144))
    .inputFluids(safeFluidOf('susy:gtfo_aniline', 1000))
    .itemOutputs('1x #forge:dusts/n_phenyl_one_naphthylamine')
    .duration(200)
    .EUt(120)

  event.recipes.susy.POLYMERIZATION('sjqamg1zsq2pee') // remapped from original line 458
    .inputFluids(safeFluidOf('susy:isobutylene', 4000))
    .inputFluids(safeFluidOf('susy:olefin_polymerization_initiator', 500))
    .outputFluids(safeFluidOf('susy:polyisobutene_mixture', 4125))
    .duration(200)
    .EUt(voltAmps[2])

  event.recipes.susy.batch_reactor('8djtn0vxxmnzwc') // remapped from original line 466
    .inputFluids(safeFluidOf('susy:polyisobutene_mixture', 4125))
    .inputFluids(safeFluidOf('minecraft:water', 500))
    .itemOutputs('1x #forge:dusts/polyisobutene')
    .outputFluids(safeFluidOf('susy:boron_trifluoride_mixture', 625))
    .duration(200)
    .EUt(voltAmps[2])

  event.recipes.susy.POLYMERIZATION('rapm7it2pqqc3w') // remapped from original line 477
    .circuit(2)
    .notConsumable('1x #forge:dusts/kaminsky_catalyst')
    .inputFluids(safeFluidOf('gtceu:ethylene', 1000))
    .inputFluids(safeFluidOf('gtceu:propene', 1000))
    .itemOutputs('2x #forge:dusts/ethylene_propylene_copolymer')
    .EUt(30)
    .duration(200)

  event.recipes.susy.batch_reactor('faqlbdazopt4xn') // remapped from original line 489
    .itemInputs('1x #forge:dusts/methacrylamide_sulfate')
    .inputFluids(safeFluidOf('minecraft:water', 1000))
    .outputFluids(safeFluidOf('susy:methacrylic_acid', 1000))
    .itemOutputs('11x #forge:dusts/ammonium_bisulfate')
    .duration(200)
    .EUt(30)

  event.recipes.susy.continuous_stirred_tank_reactor('2tmucbuqxcptag') // remapped from original line 498
    .inputFluids(safeFluidOf('susy:methacrylic_acid', 50))
    .inputFluids(safeFluidOf('susy:n_dodecanol', 50))
    .inputFluids(safeFluidOf('gtceu:sulfuric_acid', 50))
    .outputFluids(safeFluidOf('susy:alkyl_methacrylate', 50))
    .outputFluids(safeFluidOf('gtceu:diluted_sulfuric_acid', 100))
    .duration(10)
    .EUt(30)

  event.recipes.gtceu.mixer('nt7ns6oxr7ebfl') // remapped from original line 508
    .inputFluids(safeFluidOf('susy:alkyl_methacrylate', 1000))
    .inputFluids(safeFluidOf('minecraft:water', 1000))
    .inputFluids(safeFluidOf('susy:gtfo_sodium_stearate', 100))
    .outputFluids(safeFluidOf('susy:alkyl_methacrylate_emulsion', 2000))
    .duration(200)
    .EUt(30)

  event.recipes.susy.POLYMERIZATION('cjjy7f3w4sqmtj') // remapped from original line 517
    .inputFluids(safeFluidOf('susy:alkyl_methacrylate_emulsion', 2000))
    .itemInputs('1x #forge:dusts/tiny_potassium_persulfate')
    .outputFluids(safeFluidOf('susy:polyalkyl_methacrylate_solution', 2000))
    .duration(200)
    .EUt(30)

  event.recipes.susy.DRYER('wofotqqptq52pj') // remapped from original line 525
    .inputFluids(safeFluidOf('susy:polyalkyl_methacrylate_solution', 2000))
    .itemOutputs('1x #forge:dusts/pama')
    .duration(200)
    .EUt(30)

  event.recipes.susy.batch_reactor('clky0wcqw2qe2t') // remapped from original line 534
    .itemInputs('16x #forge:dusts/raw_styrene_isoprene_rubber')
    .inputFluids(safeFluidOf('gtceu:hydrogen', 6000))
    .notConsumable('1x #forge:catalysts/bed_supported_palladium')
    .itemOutputs('16x #forge:dusts/hydrogenated_styrene_isoprene_rubber')
    .outputFluids(safeFluidOf('minecraft:water', 3000))
    .duration(20)
    .EUt(voltAmps[3])

  event.recipes.susy.batch_reactor('laf2x2lntfllzx') // remapped from original line 546
    .itemInputs('16x #forge:dusts/raw_styrene_butadiene_rubber')
    .inputFluids(safeFluidOf('gtceu:hydrogen', 6000))
    .notConsumable('1x #forge:catalysts/bed_supported_palladium')
    .itemOutputs('16x #forge:dusts/hydrogenated_styrene_butadiene_rubber')
    .outputFluids(safeFluidOf('minecraft:water', 3000))
    .duration(20)
    .EUt(voltAmps[3])

  event.recipes.susy.batch_reactor('grsvwzz9ojgti8') // remapped from original line 560
    .inputFluids(safeFluidOf('gtceu:phenol', 1000))
    .inputFluids(safeFluidOf('susy:one_dodecene', 1000))
    .notConsumable(safeFluidOf('gtceu:hydrofluoric_acid', 100))
    .itemOutputs('1x #forge:dusts/dodecylphenol')
    .duration(200)
    .EUt(voltAmps[2])

  event.recipes.susy.batch_reactor('isfudvmasskyio') // remapped from original line 569
    .itemInputs('1x #forge:dusts/dodecylphenol')
    .itemInputs('5x #forge:dusts/calcite')
    .inputFluids(safeFluidOf('susy:sulfur_dichloride', 1000))
    .outputFluids(safeFluidOf('susy:calcium_phenate', 1000))
    .outputFluids(safeFluidOf('susy:hydrogen_chloride', 2000))
    .duration(200)
    .EUt(30)

  event.recipes.susy.batch_reactor('etwag0rf6kk3yc') // remapped from original line 581
    .circuit(3)
    .inputFluids(safeFluidOf('gtceu:benzene', 1000))
    .inputFluids(safeFluidOf('susy:one_dodecene', 1000))
    .notConsumable(safeFluidOf('gtceu:hydrofluoric_acid', 100))
    .itemOutputs('1x #forge:dusts/dodecylbenzene')
    .duration(200)
    .EUt(voltAmps[2])

  event.recipes.susy.batch_reactor('6bdydjjlnmyykz') // remapped from original line 591
    .itemInputs('1x #forge:dusts/dodecylbenzene')
    .inputFluids(safeFluidOf('susy:oleum', 11000))
    .itemOutputs('1x #forge:dusts/dodecylbenzenesulfonic_acid')
    .outputFluids(safeFluidOf('gtceu:sulfuric_acid', 10000))
    .duration(200)
    .EUt(voltAmps[2])

  event.recipes.susy.batch_reactor('yjsoepx6s32hjd') // remapped from original line 600
    .notConsumable('6x #forge:plates/polytetrafluoroethylene')
    .itemInputs('1x #forge:dusts/dodecylbenzene')
    .inputFluids(safeFluidOf('susy:chlorosulfuric_acid', 1000))
    .itemOutputs('1x #forge:dusts/dodecylbenzenesulfonic_acid')
    .outputFluids(safeFluidOf('susy:hydrogen_chloride', 1000))
    .duration(200)
    .EUt(voltAmps[2])

  event.recipes.susy.batch_reactor('pt9uxsewlfycdv') // remapped from original line 610
    .itemInputs('2x #forge:dusts/dodecylbenzenesulfonic_acid')
    .inputFluids(safeFluidOf('susy:calcium_hydroxide_slurry', 1000))
    .itemOutputs('1x #forge:dusts/calcium_dodecylbenzene_sulfonate')
    .outputFluids(safeFluidOf('minecraft:water', 1000))
    .duration(200)
    .EUt(120)

  event.recipes.gtceu.large_chemical_reactor('u8bnkdrln6acif') // remapped from original line 621
    .itemInputs('5x #forge:dusts/calcium_hydroxide')
    .itemInputs('1x #forge:dusts/calcite')
    .inputFluids(safeFluidOf('gtceu:phenol', 2000))
    .inputFluids(safeFluidOf('gtceu:carbon_dioxide', 2000))
    .inputFluids(safeFluidOf('susy:diethylene_glycol', 1000))
    .notConsumable(safeFluidOf('susy:hp_nitrogen', 6400))
    .outputFluids(safeFluidOf('susy:calcium_salicylate_solution', 1000))
    .duration(200)
    .EUt(120)

  event.recipes.gtceu.DISTILLERY('jtn92tbx2s35ui') // remapped from original line 633
    .inputFluids(safeFluidOf('susy:calcium_salicylate_solution', 1000))
    .itemOutputs('1x #forge:dusts/calcium_salicylate')
    .outputFluids(safeFluidOf('susy:diethylene_glycol', 1000))
    .duration(20)
    .EUt(30)

  event.recipes.susy.FLUIDIZEDBR('2xplomtlud2ck9') // remapped from original line 643
    .inputFluids(safeFluidOf('gtceu:butane', 1000))
    .inputFluids(safeFluidOf('gtceu:oxygen', 7000))
    .notConsumable('1x #forge:dusts/vanadium_pentoxide')
    .outputFluids(safeFluidOf('susy:dense_steam', 4000))
    .itemOutputs('9x #forge:dusts/maleic_anhydride')
    .duration(200)
    .EUt(240)

  event.recipes.susy.reaction_furnace('rhvmemjw0e1upn') // remapped from original line 653
    .itemInputs('9x #forge:dusts/maleic_anhydride')
    .itemInputs('1x #forge:dusts/polyisobutene')
    .itemOutputs('1x #forge:dusts/polyisobutene_succinic_anhydride')
    .duration(200)
    .EUt(240)

  event.recipes.susy.batch_reactor('aejbsn5vsb3z8u') // remapped from original line 665
    .itemInputs('2x #forge:dusts/dinonylnaphthalene_sulfonic_acid')
    .inputFluids(safeFluidOf('susy:calcium_hydroxide_slurry', 1000))
    .itemOutputs('1x #forge:dusts/calcium_dinonylnaphthalene_sulfonate')
    .outputFluids(safeFluidOf('minecraft:water', 1000))
    .duration(200)
    .EUt(120)

  event.recipes.susy.POLYMERIZATION('wo9hnzcoeal0y5') // remapped from original line 676
    .inputFluids(safeFluidOf('susy:ethylene_oxide', 1000))
    .inputFluids(safeFluidOf('susy:boron_trifluoride', 10))
    .outputFluids(safeFluidOf('susy:polyethylene_glycol', 1000))
    .duration(200)
    .EUt(240)

  event.recipes.gtceu.DISTILLATION_TOWER('n8panofj3u4ont') // remapped from original line 688
    .inputFluids(safeFluidOf('susy:cresol', 1000))
    .outputFluids(safeFluidOf('susy:meta_para_cresol_mixture', 700)) // needs to be slightly higher than SATP
    .outputFluids(safeFluidOf('susy:ortho_cresol', 300))
    .duration(200)
    .EUt(240)

  event.recipes.susy.continuous_stirred_tank_reactor('xzbzpw1lwumggl') // remapped from original line 696
    .inputFluids(safeFluidOf('susy:meta_para_cresol_mixture', 150))
    .inputFluids(safeFluidOf('susy:phosphoryl_chloride', 50))
    .outputFluids(safeFluidOf('susy:acidic_tricresyl_phosphate', 200))
    .duration(10)
    .EUt(120)

  event.recipes.susy.batch_reactor('aez6bst3bensip') // remapped from original line 704
    .itemInputs('9x #forge:dusts/sodium_hydroxide')
    .inputFluids(safeFluidOf('susy:acidic_tricresyl_phosphate', 4000))
    .outputFluids(safeFluidOf('susy:tricresyl_phosphate', 1000))
    .outputFluids(safeFluidOf('gtceu:salt_water', 3000))
    .duration(200)
    .EUt(120)

  event.recipes.susy.batch_reactor('uw0g2au41es6t0') // remapped from original line 715
    .itemInputs('7x #forge:dusts/phosphorus_pentasulfide')
    .inputFluids(safeFluidOf('susy:isopropyl_alcohol', 4000))
    .outputFluids(safeFluidOf('susy:diisopropyldithiophosphoric_acid', 2000))
    .outputFluids(safeFluidOf('gtceu:hydrogen_sulfide', 1000))
    .duration(200)
    .EUt(120)

  event.recipes.susy.batch_reactor('lqqzz8k1eibmdc') // remapped from original line 724
    .itemInputs('7x #forge:dusts/phosphorus_pentasulfide')
    .inputFluids(safeFluidOf('susy:n_butanol', 4000))
    .outputFluids(safeFluidOf('susy:dibutyldithiophosphoric_acid', 2000))
    .outputFluids(safeFluidOf('gtceu:hydrogen_sulfide', 1000))
    .duration(200)
    .EUt(120)

  event.recipes.susy.batch_reactor('wh6281lziaqg8l') // remapped from original line 733
    .itemInputs('2x #forge:dusts/zinc_oxide')
    .inputFluids(safeFluidOf('susy:diisopropyldithiophosphoric_acid', 2000))
    .outputFluids(safeFluidOf('susy:zinc_dialkyldithiophosphate', 1000))
    .outputFluids(safeFluidOf('minecraft:water', 1000))
    .duration(200)
    .EUt(120)

  event.recipes.susy.batch_reactor('5w840qsulcrrq3') // remapped from original line 742
    .itemInputs('2x #forge:dusts/zinc_oxide')
    .inputFluids(safeFluidOf('susy:dibutyldithiophosphoric_acid', 2000))
    .outputFluids(safeFluidOf('susy:zinc_dialkyldithiophosphate', 1000))
    .outputFluids(safeFluidOf('minecraft:water', 1000))
    .duration(200)
    .EUt(120)

  event.recipes.susy.batch_reactor('cs9gglm7rkfukv') // remapped from original line 751
    .itemInputs('19x #forge:dusts/ammonium_dimolybdate')
    .inputFluids(safeFluidOf('susy:diisopropyldithiophosphoric_acid', 4000))
    .itemOutputs('1x #forge:dusts/molybdenum_dialkyldithiophosphate')
    .outputFluids(safeFluidOf('susy:diluted_ammonia_solution', 4000))
    .duration(200)
    .EUt(120)

  event.recipes.susy.batch_reactor('ep1psfbu17ecqa') // remapped from original line 760
    .itemInputs('19x #forge:dusts/ammonium_dimolybdate')
    .inputFluids(safeFluidOf('susy:dibutyldithiophosphoric_acid', 4000))
    .itemOutputs('1x #forge:dusts/molybdenum_dialkyldithiophosphate')
    .outputFluids(safeFluidOf('susy:diluted_ammonia_solution', 4000))
    .duration(200)
    .EUt(120)

  event.recipes.susy.fixed_bed_reactor('za6r2is2bngonb') // remapped from original line 771
    .notConsumable('1x #forge:catalysts/bed_alumina')
    .inputFluids(safeFluidOf('susy:n_pentanol', 100))
    .inputFluids(safeFluidOf('gtceu:ammonia', 50))
    .outputFluids(safeFluidOf('susy:diamylamine', 50))
    .duration(5)
    .EUt(120)

  event.recipes.susy.batch_reactor('yzeoctnn9ctg4f') // remapped from original line 780
    .itemInputs('3x #forge:dusts/sodium_hydroxide')
    .inputFluids(safeFluidOf('susy:carbon_disulfide', 1000))
    .inputFluids(safeFluidOf('susy:diamylamine', 1000))
    .outputFluids(safeFluidOf('susy:sodium_diamyldithiocarbamate_solution', 1000))
    .duration(200)
    .EUt(120)

  event.recipes.susy.batch_reactor('b5gzg5kxcw8gbd') // remapped from original line 789
    .itemInputs('3x #forge:dusts/zinc_chloride')
    .inputFluids(safeFluidOf('susy:sodium_diamyldithiocarbamate_solution', 2000))
    .itemOutputs('1x #forge:dusts/zinc_bisdiamyldithiocarbamate')
    .outputFluids(safeFluidOf('gtceu:salt_water', 2000))
    .duration(200)
    .EUt(120)

  event.recipes.susy.batch_reactor('ddj4oru8xgkqnq') // remapped from original line 802
    .circuit(1)
    .inputFluids(safeFluidOf('gtceu:benzene', 1000))
    .inputFluids(safeFluidOf('susy:one_dodecene', 2000))
    .notConsumable(safeFluidOf('gtceu:hydrofluoric_acid', 100))
    .itemOutputs('1x #forge:dusts/didodecylbenzene')
    .duration(100)
    .EUt(voltAmps[2])

  event.recipes.susy.batch_reactor('sotjpxcgo08olg') // remapped from original line 812
    .circuit(2)
    .itemInputs('1x #forge:dusts/dodecylbenzene')
    .inputFluids(safeFluidOf('susy:one_dodecene', 1000))
    .notConsumable(safeFluidOf('gtceu:hydrofluoric_acid', 100))
    .itemOutputs('1x #forge:dusts/didodecylbenzene')
    .duration(100)
    .EUt(voltAmps[2])

  event.recipes.susy.batch_reactor('pkhaxdga5udqsf') // remapped from original line 822
    .itemInputs('1x #forge:dusts/didodecylbenzene')
    .inputFluids(safeFluidOf('susy:oleum', 11000))
    .itemOutputs('1x #forge:dusts/didodecylbenzenesulfonic_acid')
    .outputFluids(safeFluidOf('gtceu:sulfuric_acid', 10000))
    .duration(100)
    .EUt(voltAmps[2])

  event.recipes.susy.batch_reactor('qjdffiwbthwfo9') // remapped from original line 831
    .notConsumable('6x #forge:plates/polytetrafluoroethylene')
    .itemInputs('1x #forge:dusts/didodecylbenzene')
    .inputFluids(safeFluidOf('susy:chlorosulfuric_acid', 1000))
    .itemOutputs('1x #forge:dusts/didodecylbenzenesulfonic_acid')
    .outputFluids(safeFluidOf('susy:hydrogen_chloride', 1000))
    .duration(100)
    .EUt(voltAmps[2])

  event.recipes.susy.batch_reactor('bx4o4rzopoel6l') // remapped from original line 841
    .itemInputs('2x #forge:dusts/didodecylbenzenesulfonic_acid')
    .inputFluids(safeFluidOf('susy:calcium_hydroxide_slurry', 1000))
    .itemOutputs('1x #forge:dusts/calcium_didodecylbenzene_sulfonate')
    .outputFluids(safeFluidOf('minecraft:water', 1000))
    .duration(200)
    .EUt(120)

  event.recipes.susy.batch_reactor('csjjxqi7vxmvcw') // remapped from original line 852
    .inputFluids(safeFluidOf('gtceu:phenol', 1000))
    .inputFluids(safeFluidOf('susy:tripropylene', 1000))
    .notConsumable(safeFluidOf('gtceu:hydrofluoric_acid', 100))
    .outputFluids(safeFluidOf('susy:nonylphenol', 1000))
    .duration(200)
    .EUt(voltAmps[2])

  event.recipes.susy.continuous_stirred_tank_reactor('zjnq6zigl9vqdl') // remapped from original line 861
    .notConsumable('1x #forge:springs/kanthal')
    .inputFluids(safeFluidOf('susy:dichloroethane', 50))
    .inputFluids(safeFluidOf('gtceu:chlorine', 200))
    .outputFluids(safeFluidOf('susy:trichloroethylene', 50))
    .outputFluids(safeFluidOf('susy:hydrogen_chloride', 150))
    .duration(10)
    .EUt(voltAmps[2])

  event.recipes.susy.continuous_stirred_tank_reactor('qqoxozdrdlfrs4') // remapped from original line 871
    .inputFluids(safeFluidOf('susy:trichloroethylene', 50))
    .inputFluids(safeFluidOf('gtceu:diluted_sulfuric_acid', 200))
    .outputFluids(safeFluidOf('susy:chloroacetic_acid_solution', 150))
    .outputFluids(safeFluidOf('susy:hydrogen_chloride', 100))
    .duration(10)
    .EUt(voltAmps[2])

  event.recipes.susy.vacuum_distillation('uaeqbfrirns4np') // remapped from original line 880
    .inputFluids(safeFluidOf('susy:chloroacetic_acid_solution', 3000))
    .outputFluids(safeFluidOf('gtceu:sulfuric_acid', 2000))
    .outputFluids(safeFluidOf('susy:chloroacetic_acid', 1000))
    .duration(200)
    .EUt(voltAmps[2])

  event.recipes.susy.batch_reactor('swvs8soeeu2yen') // remapped from original line 888
    .inputFluids(safeFluidOf('susy:nonylphenol', 1000))
    .inputFluids(safeFluidOf('susy:sodium_hydroxide_solution', 1000))
    .inputFluids(safeFluidOf('susy:chloroacetic_acid', 1000))
    .itemOutputs('1x #forge:dusts/four_nonylphenoxyacetic_acid')
    .outputFluids(safeFluidOf('susy:diluted_saltwater', 2000))
    .duration(10)
    .EUt(voltAmps[2])

  event.recipes.susy.batch_reactor('fkfikdyhqmej2t') // remapped from original line 902
    .inputFluids(safeFluidOf('susy:two_chloronitrobenzene', 144))
    .inputFluids(safeFluidOf('gtceu:ammonia', 2000))
    .itemOutputs('6x #forge:dusts/ammonium_chloride')
    .outputFluids(safeFluidOf('susy:two_nitroaniline_solution', 1000))
    .duration(600)
    .EUt(120)

  event.recipes.susy.bubble_column_reactor('iyjv9gs1msttcx') // remapped from original line 911
    .notConsumable('1x #forge:catalysts/bed_palladium')
    .inputFluids(safeFluidOf('susy:two_nitroaniline_solution', 50))
    .inputFluids(safeFluidOf('gtceu:hydrogen', 300))
    .outputFluids(safeFluidOf('susy:ortho_phenylenediamine_slurry', 150))
    .duration(200)
    .EUt(30)

  event.recipes.gtceu.DISTILLATION_TOWER('ni66juoc4kwbzw') // remapped from original line 920
    .inputFluids(safeFluidOf('susy:ortho_phenylenediamine_slurry', 3000))
    .outputFluids(safeFluidOf('gtceu:toluene', 1000))
    .outputFluids(safeFluidOf('minecraft:water', 2000))
    .itemOutputs('16x #forge:dusts/ortho_phenylenediamine')
    .duration(200)
    .EUt(30)

  event.recipes.susy.batch_reactor('0ehdsu2cx3roat') // remapped from original line 929
    .itemInputs('16x #forge:dusts/ortho_phenylenediamine')
    .itemInputs('4x #forge:dusts/sodium_nitrite')
    .inputFluids(safeFluidOf('susy:hydrogen_chloride', 1000))
    .itemOutputs('1x #forge:dusts/benzotriazole')
    .outputFluids(safeFluidOf('susy:diluted_saltwater', 2000))
    .duration(200)
    .EUt(30)

  event.recipes.susy.batch_reactor('gerdbcpm6kzir9') // remapped from original line 941
    .itemInputs('1x #forge:dusts/sulfur')
    .inputFluids(safeFluidOf('susy:gtfo_aniline', 1000))
    .inputFluids(safeFluidOf('susy:carbon_disulfide', 1000))
    .itemOutputs('1x #forge:dusts/mercaptobenzothiazole')
    .outputFluids(safeFluidOf('gtceu:hydrogen_sulfide', 1000))
    .duration(200)
    .EUt(30)

  event.recipes.susy.batch_reactor('fckuddek2pfeav') // remapped from original line 953
    .inputFluids(safeFluidOf('susy:ethylenediamine', 1000))
    .inputFluids(safeFluidOf('susy:hydrogen_chloride', 1000))
    .inputFluids(safeFluidOf('susy:salicylaldehyde', 2000))
    .itemOutputs('1x #forge:dusts/salicylidene_ethylenediamine')
    .outputFluids(safeFluidOf('gtceu:diluted_hydrochloric_acid', 2000))
    .duration(200)
    .EUt(120)

 // The following forLoops couldn't be parsed, they were added to the forLoopBuffers
  //     for (alcohol in alcoholTab) {
  //         BR.recipeBuilder()
  //             .inputs(ore('dustPhthalicAnhydride') * 15)
  //             .fluidInputs(fluid(alcohol) * 1000)
  //             .fluidOutputs(fluid('ester_base_oil') * 1000)
  //             .EUt(120)
  //             .duration(100)
  //             .buildAndRegister()
  // 
  //         BR.recipeBuilder()
  //             .inputs(ore('dustTrimelliticAnhydride') * 18)
  //             .fluidInputs(fluid(alcohol) * 1000)
  //             .fluidOutputs(fluid('ester_base_oil') * 1500)
  //             .EUt(120)
  //             .duration(100)
  //             .buildAndRegister()
  // 
  //         BR.recipeBuilder()
  //             .inputs(ore('dustPyromelliticDianhydride') * 18)
  //             .fluidInputs(fluid(alcohol) * 2000)
  //             .fluidOutputs(fluid('ester_base_oil') * 3000)
  //             .EUt(120)
  //             .duration(100)
  //             .buildAndRegister()
  //     }

  // baseOilMap.each { oil, multiplier1 ->
  //     solidFrictionModifierMap.each { sfm, multiplier2 ->
  //         MIXER.recipeBuilder()
  //             .inputs(ore(sfm))
  //             .fluidInputs(fluid(oil) * (1000 * multiplier2 * 4))
  //             .fluidOutputs(fluid('lubricant') * (1000 * multiplier1 * multiplier2 * 4))
  //             .duration(200)
  //             .EUt(7)
  //             .buildAndRegister()
  //     }
  // 
  //     liquidFrictionModifierMap.each { lfm, multiplier3 ->
  //         MIXER.recipeBuilder()
  //             .fluidInputs(fluid(oil) * (1000 * multiplier3))
  //             .fluidInputs(fluid(lfm) * 250)
  //             .fluidOutputs(fluid('lubricant') * (1000 * multiplier1 * multiplier3))
  //             .duration(200)
  //             .EUt(7)
  //             .buildAndRegister()
  //     }
  // }

  // solidAntiwearMap.each { saw, multiplier ->
  //     BLENDER.recipeBuilder()
  //         .inputs(ore(saw))
  //         .fluidInputs(fluid('lubricant') * (1000 * multiplier * 4))
  //         .fluidInputs(fluid('polyethylene_glycol') * 1000)
  //         .fluidInputs(fluid('antifoaming_additive') * 1000)
  //         .fluidOutputs(fluid('midgrade_lubricant') * (1000 * multiplier * 4))
  //         .duration(200)
  //         .EUt(120)
  //         .buildAndRegister()
  //         
  //     BLENDER.recipeBuilder()
  //         .inputs(ore(saw))
  //         .inputs(ore('dustCalciumDinonylnaphthaleneSulfonate'))
  //         .fluidInputs(fluid('lubricant') * (1000 * multiplier * 4))
  //         .fluidInputs(fluid('antifoaming_additive') * 1000)
  //         .fluidOutputs(fluid('midgrade_lubricant') * (1000 * multiplier * 4))
  //         .duration(200)
  //         .EUt(120)
  //         .buildAndRegister()
  // }

  // liquidAntiwearMap.each { law, multiplier ->
  //     BLENDER.recipeBuilder()
  //         .fluidInputs(fluid('lubricant') * (1000 * multiplier))
  //         .fluidInputs(fluid('polyethylene_glycol') * 250)
  //         .fluidInputs(fluid('antifoaming_additive') * 250)
  //         .fluidInputs(fluid(law) * 250)
  //         .fluidOutputs(fluid('midgrade_lubricant') * (1000 * multiplier))
  //         .duration(200)
  //         .EUt(120)
  //         .buildAndRegister()
  // 
  //     BLENDER.recipeBuilder()
  //         .inputs(ore('dustCalciumDinonylnaphthaleneSulfonate'))
  //         .fluidInputs(fluid('lubricant') * (1000 * multiplier * 4))
  //         .fluidInputs(fluid('antifoaming_additive') * 1000)
  //         .fluidInputs(fluid(law) * 1000)
  //         .fluidOutputs(fluid('midgrade_lubricant') * (1000 * multiplier * 4))
  //         .duration(200)
  //         .EUt(120)
  //         .buildAndRegister()
  // }

  // pourPointDepressantMap.each { ppd, multiplier1 ->
  //     BLENDER.recipeBuilder()
  //         .inputs(ore(ppd))
  //         .fluidInputs(fluid('calcium_phenate') * 1000)
  //         .inputs(ore('dustCalciumDidodecylbenzeneSulfonate'))
  //         .fluidInputs(fluid('midgrade_lubricant') * (1000 * multiplier1 * 3 * 4))
  //         .fluidOutputs(fluid('premium_lubricant') * (1000 * multiplier1 * 3 * 4))
  //         .duration(200)
  //         .EUt(120)
  //         .buildAndRegister()
  // 
  //     BLENDER.recipeBuilder()
  //         .inputs(ore(ppd))
  //         .fluidInputs(fluid('calcium_phenate') * 1000)
  //         .inputs(ore('dustFourNonylphenoxyaceticAcid'))
  //         .fluidInputs(fluid('midgrade_lubricant') * (1000 * multiplier1 * 3 * 4 * 1.5))
  //         .fluidOutputs(fluid('premium_lubricant') * (1000 * multiplier1 * 3 * 4 * 1.5))
  //         .duration(200)
  //         .EUt(120)
  //         .buildAndRegister()
  //     
  //     detergentMap.each { det, multiplier2 ->
  //         BLENDER.recipeBuilder()
  //             .inputs(ore(det))
  //             .inputs(ore(ppd))
  //             .inputs(ore('dustCalciumDidodecylbenzeneSulfonate'))
  //             .fluidInputs(fluid('midgrade_lubricant') * (1000 * multiplier1 * multiplier2 * 4))
  //             .fluidOutputs(fluid('premium_lubricant') * (1000 * multiplier1 * multiplier2 * 4))
  //             .duration(200)
  //             .EUt(120)
  //             .buildAndRegister()
  // 
  //         BLENDER.recipeBuilder()
  //             .inputs(ore(det))
  //             .inputs(ore(ppd))
  //             .inputs(ore('dustFourNonylphenoxyaceticAcid'))
  //             .fluidInputs(fluid('midgrade_lubricant') * (1000 * multiplier1 * multiplier2 * 4))
  //             .fluidOutputs(fluid('premium_lubricant') * (1000 * multiplier1 * multiplier2 * 4))
  //             .duration(200)
  //             .EUt(120)
  //             .buildAndRegister()
  //     }
  // }

  // for (chelate in chelates) {
  //     for (ci in corrosionInhibitors) {
  //         BLENDER.recipeBuilder()
  //             .inputs(ore(chelate))
  //             .inputs(ore(ci))
  //             .inputs(ore('dustNPhenylOneNaphthylamine'))
  //             .fluidInputs(fluid('premium_lubricant') * 4000)
  //             .fluidOutputs(fluid('supreme_lubricant') * 4000)
  //             .duration(200)
  //             .EUt(120)
  //             .buildAndRegister()
  // 
  //         antioxidantMap.each { ant, multiplier ->
  //             BLENDER.recipeBuilder()
  //                 .inputs(ore(chelate))
  //                 .inputs(ore(ci))
  //                 .fluidInputs(fluid(ant) * 1000)
  //                 .fluidInputs(fluid('premium_lubricant') * (1000 * multiplier * 4))
  //                 .fluidOutputs(fluid('supreme_lubricant') * (1000 * multiplier * 4))
  //                 .duration(200)
  //                 .EUt(120)
  //                 .buildAndRegister()
  //         }
  //     }
  // }

 // The following entries are unknown or couldn't be parsed, you should rewrite them manually.
  // import globals.Globals
  // import static globals.SinteringGlobals.*
  // import static gregtech.api.unification.material.Materials.*;
  // import gregtech.api.unification.material.MarkerMaterials;
  // import static gregtech.api.unification.ore.OrePrefix.dye;
  // BR = recipemap('batch_reactor')
  // MIXER = recipemap('mixer')
  // ELECTROSTATIC_SEPARATOR = recipemap('electrostatic_separator')
  // CENTRIFUGE = recipemap('centrifuge')
  // DT = recipemap('distillation_tower')
  // ROASTER = recipemap('roaster')
  // VACUUM_DT = recipemap('vacuum_distillation')
  // CRYSTALLIZER = recipemap('crystallizer')
  // EXTRACTOR = recipemap('extractor')
  // ROTARY_KILN = recipemap('rotary_kiln')
  // COKING = recipemap('coking_tower')
  // CSTR = recipemap('continuous_stirred_tank_reactor')
  // CRACKER = recipemap('cracker')
  // EBF = recipemap('electric_blast_furnace')
  // REFORMER = recipemap('catalytic_reformer_recipes')
  // REACTION_FURNACE = recipemap('reaction_furnace')
  // FBR = recipemap('fixed_bed_reactor')
  // SIFTER = recipemap('sifter')
  // ALLOY_SMELTER = recipemap('alloy_smelter')
  // POLYMERIZATION_TANK = recipemap('polymerization_tank')
  // BCR = recipemap('bubble_column_reactor')
  // TBR = recipemap('trickle_bed_reactor')
  // LCR = recipemap('large_chemical_reactor')
  // AUTOCLAVE = recipemap('autoclave')
  // HEAT_EXCHANGER = recipemap('heat_exchanger')
  // UV_LIGHT_BOX = recipemap('uv_light_box')
  // BLENDER = recipemap('blender')
  // PHASE_SEPARATOR = recipemap('phase_separator')
  //     // Straight run lubricating oil
  //         // Hydrodewaxing catalyst
  //             
  //         // Hydrodewaxing
  //     // Silicone oil
  //     // Polyalphaolefins
  //     // Polybutenes
  //     // Esters
  //     
  //     def alcoholTab = [
  //         'n_octanol',
  //         'n_decanol',
  //         'n_dodecanol'
  //     ]
  //     /*Mechanically working FMs: molybdenum disulfide,
  //     graphite, PTFE, polyamide, fluorinated
  //     graphite*/
  //     // Molybdenum disulfide
  //     // Fluorinated graphite
  //     /*Adsoprtion layer FMs:
  //     long-chain carboxylic acids, fatty acid esters,
  //     ethers, alcohols, amides*/
  //     // Oleomide
  //     // Monoglycerides
  //     /*Tribochemical FMs:
  //     saturated fatty acids, phosphoric and thiophosphoric
  //     acid esters, xanthates, sulfurized fatty
  //     acids*/
  //     // Stearic acid
  //     // Palmitic acid
  //     // ADD PALM OIL WHEN READY
  //     /*Friction polymer FMs:
  //     ethoxylated dicarboxylic acid monoesters, dialkyl phthalates,
  //     methacrylates, unsaturated fatty acids, sulfurized olefins*/
  //     // N-phenyl-1-naphthylamine
  //         
  //     // Polyisobutene
  //     // Ethylene propylene copolymer
  //     // Polyalkyl methacrylate
  //     // Hydrogenated styrene-butadiene rubber
  //     // Hydrogenated styrene-isoprene rubber
  //     // Calcium phenate
  //     // Calcium dodecylbenzene sulfonate
  //     // Calcium salicylate
  //     // Polyisobutene succinic anhydride
  //     // Calcium dinonylnaphthalene sulfonate
  //     // Polyethylene glycol
  //     // Tri-(m/p)-cresylphosphate
  //     // Zinc/Molybdenum dialkyldithiophosphate
  //     // Zinc-bis(diethyldithiocarbamate)
  //     // Calcium didodecylbenzene sulfonate
  //     // 4-nonylphenoxyacetic acid
  //     
  //     // Benzotriazole
  //     // Mercaptobenzothiazole
  // def baseOilMap = [
  //     'seed_oil': 0.5,
  //     'lubricating_oil': 1,
  //     'polybutene': 1.5,
  //     'polyalphaolefin': 2.5,
  //     'ester_base_oil': 3
  // ]
  // def solidFrictionModifierMap = [
  //     'dustTalc': 0.5,
  //     'dustSoapstone': 0.5,
  //     'dustGraphite': 1,
  //     'dustFluorinatedGraphite': 2,
  //     'dustPolycaprolactam': 3,
  //     'dustPolytetrafluoroethylene': 4,
  //     'dustMolybdenumDisulfide': 4
  // ]
  // def liquidFrictionModifierMap = [
  //     'oleic_acid': 1,
  //     'stearic_acid': 1,
  //     'linoleic_acid': 1,
  //     'palmitic_acid': 1,
  //     'oleylamide': 2,
  //     'monoglycerides': 2
  // ]
  // def solidAntiwearMap = [
  //     'dustMolybdenumDialkyldithiophosphate': 4,
  //     'dustZincBisdiamyldithiocarbamate': 2
  // ]
  // def liquidAntiwearMap = [
  //     'tricresyl_phosphate': 1,
  //     'zinc_dialkyldithiophosphate': 1.5
  // ]
  // def pourPointDepressantMap = [
  //     'dustEthylenePropyleneCopolymer': 1,
  //     'dustHydrogenatedStyreneIsopreneRubber': 2,
  //     'dustHydrogenatedStyreneButadieneRubber': 2,
  //     'dustPolyisobutene': 2,
  //     'dustPama': 4
  // ]
  // def detergentMap = [
  //     'dustCalciumDodecylbenzeneSulfonate': 1,
  //     'dustCalciumSalicylate': 2,
  //     'dustPolyisobuteneSuccinicAnhydride': 4
  // ]
  // def chelates = [
  //     'dustSalicylideneEthylenediamine',
  //     'dustSalicylideneOneTwoPropanediamine'
  // ]
  // def corrosionInhibitors = [
  //     'dustBenzotriazole',
  //     'dustMercaptobenzothiazole'
  // ]
  // def antioxidantMap = [
  //     'butylated_hydroxytoluene': 1.5,
  //     'dimethyl_tert_butylphenol': 1,
  //     'di_tert_butylphenol': 1
  // ]
});