onEvent('recipes', e => {
  //#region FUNCTIONS
  function multiCrush(output, input) {
    e.recipes.mekanism.crushing(output, input).id(`kubejs:atmadditions/${output.split(':')[1]}_mek_crush`)
    e.recipes.create.crushing(output, input).id(`kubejs:atmadditions/${output.split(':')[1]}_create_crush`)
    e.recipes.thermal.pulverizer(output, input).id(`kubejs:atmadditions/${output.split(':')[1]}_thermal_pulverize`)
  }
  //#endregion
  //#region RECIPES
  //#region Dragon Soul
  e.shaped('atmadditions:dragon_soul', ['BEE', 'INE', 'IIS'], {
    E: 'tconstruct:dragon_scale',
    N: 'minecraft:dragon_egg',
    B: 'minecraft:dragon_breath',
    S: 'botania:dragonstone',
    I: 'quark:dragon_scale'
  }).id('kubejs:atmadditions/dragon_soul')
  //#endregion
  //#region Dimensional Seed
  e.shaped('atmadditions:dimensional_seed', ['ABC', 'DEF', 'GHI'], {
    A: 'compressium:stone_6',
    B: 'compressium:endstone_4',
    C: 'compressium:netherrack_4',
    D: 'compressium:clay_3',
    E: 'compressium:emerald_5',
    F: 'compressium:soulsand_4',
    G: 'compressium:redsand_4',
    H: 'compressium:snow_4',
    I: 'compressium:obsidian_3'
  }).id('kubejs:atmadditions/dimensional_seed')
  //#endregion
  //#region Withers Compass
  e.shaped('atmadditions:withers_compass', ['DCD', 'A A', 'DED'], {
    A: 'minecraft:wither_skeleton_skull',
    C: 'darkutils:rune_wither',
    D: Item.of('apotheosis:potion_charm', { Damage: 0, Potion: "apotheosis:strong_wither" }),
    E: 'naturescompass:naturescompass'
  }).id('kubejs:atmadditions/withers_compass')
  //#endregion
  //#region Philosopher's Fuel
  e.recipes.bloodmagic.alchemytable('atmadditions:philosophers_fuel', [
    'mekanism:block_salt',
    'mekanism:sulfuric_acid_bucket',
    '#forge:storage_blocks/coal_coke',
    'thermal:heavy_oil_bucket',
    'mekanismgenerators:fusion_fuel_bucket'
  ]).syphon(50000).id('kubejs:atmadditions/philosophers_fuel')
  //#endregion
  //#region Improbable Probaility Device
  e.shaped('atmadditions:improbable_probability_device', ['AAB', 'CGE', 'FDF'], {
    A: 'computercraft:monitor_advanced',
    B: 'mekanism:module_solar_recharging_unit',
    C: 'ae2extras:16m_cell_component',
    D: 'minecraft:wither_skeleton_skull',
    E: Item.of('apotheosis:potion_charm', { Damage: 0, Potion: "apotheosis:strong_knowledge" }),
    F: 'thermal:enderium_block',
    G: 'mekanismgenerators:fusion_reactor_controller'
  }).id('kubejs:atmadditions/improbable_probability_device')
  //#endregion
  //#region Nexium Emitter
  e.shaped('atmadditions:nexium_emitter', ['A C', ' BF', 'CED'], {
    A: 'mekanism:supercharged_coil',
    B: 'appliedenergistics2:wireless_terminal',
    C: 'alltheores:platinum_block',
    D: 'compressium:netherite_3',
    E: 'appliedenergistics2:quantum_entangled_singularity',
    F: 'fluxnetworks:flux_controller'
  }).id('kubejs:atmadditions/nexium_emitter')
  //#endregion
  //#region Pulsating Black Hole
  e.shaped('atmadditions:pulsating_black_hole', ['AFB', 'CDE', 'BFA'], {
    A: 'bloodmagic:voidsigil',
    B: 'mekanism:pellet_antimatter',
    C: 'thermal:device_nullifier',
    D: 'mekanism:creative_energy_cube',
    E: 'envirotech:xerothium_void_miner_ccu',
    F: 'sophisticatedbackpacks:advanced_void_upgrade'
  }).id('kubejs:atmadditions/pulsating_black_hole')
  //#endregion
  //#region Oblivion Shard
  e.shaped('atmadditions:oblivion_shard', [' A ', 'ACA', ' A '], {
    A: 'allthemodium:unobtainium_block',
    C: 'astralsorcery:shifting_star_vicio',
  }).id('kubejs:atmadditions/oblivion_shard')
  //#endregion
  //#region Patrick Star
  e.recipes.create.mechanical_crafting('kubejs:patrick_star', [
    '    B    ',
    '   BCA   ',
    'BBBGCABBB',
    'ACGCGGGCA',
    ' AAGGGBA ',
    '  EDDDE  ',
    ' EFEDEFE ',
    'BEDD DDEB',
    'AAA   AAA'
  ], {
    A: 'minecraft:magenta_concrete',
    B: 'minecraft:pink_concrete',
    C: 'minecraft:pink_concrete_powder',
    D: 'minecraft:green_concrete',
    E: 'minecraft:green_concrete_powder',
    F: 'minecraft:lime_concrete',
    G: 'minecraft:magenta_concrete_powder'
  }).id('kubejs:atmadditions/patrick_star')
  //#endregion
  //#region ATM Star
  e.recipes.create.mechanical_crafting('atmadditions:atm_star', [
    '    A    ',
    '   AJA   ',
    'AAAJFJAAA',
    'AJJCDEJJA',
    ' ANBIHMA ',
    '  AKGKA  ',
    ' AJJAJJA ',
    'AJJA AJJA',
    'AAA   AAA'
  ], {
    A: 'allthemodium:unobtainium_allthemodium_alloy_block',
    B: 'atmadditions:nexium_emitter',
    C: 'atmadditions:dragon_soul',
    D: 'atmadditions:withers_compass',
    E: 'atmadditions:pulsating_black_hole',
    F: 'atmadditions:oblivion_shard',
    G: 'atmadditions:improbable_probability_device',
    H: 'atmadditions:dimensional_seed',
    I: 'kubejs:patrick_star',
    J: 'allthecompressed:nether_star_block',
    K: 'atmadditions:philosophers_fuel',
    M: 'kubejs:rune_of_sins',
    N: 'kubejs:mass_of_wills'
  }).id('kubejs:atmadditions/atm_star')
  //#endregion
  //#endregion
})
