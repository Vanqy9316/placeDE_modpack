onEvent('jei.hide.items', e => {
  //#region consts
  let colors = ['white', 'light_gray', 'gray', 'black', 'red', 'orange', 'yellow', 'lime', 'green', 'light_blue', 'cyan', 'blue', 'purple', 'magenta', 'pink', 'brown']
  //mekanism is weird, uses a different id notation ingame than other mods
  let typeFirst = ['mekanism']
  let enviroStonesMats = ['basalt', 'hardened_stone', 'granodiorite', 'marble', 'pumice', 'travertine']
  //#endregion
  //#region functions
  function hideMetal(mod, name, types) {
    types.forEach(type => {
      let id = typeFirst.includes(mod) ? `${mod}:${type}_${name}` : `${mod}:${name}_${type}`
      if (!Ingredient.of(id).stacks.empty) e.hide(id)
    })
  }
  function hideStuff(mod, type, names) {
    names.forEach(name => {
      let id = typeFirst.includes(mod) ? `${mod}:${type}_${name}` : `${mod}:${name}_${type}`
      if (!Ingredient.of(id).stacks.empty) e.hide(id)
    })
  }
  //#endregion

  e.hide([
    'apotheosis:iron_mining_arrow',
    'apotheosis:diamond_mining_arrow',
    'apotheosis:explosive_arrow',
    'projectred-exploration:copper_ore',
    'projectred-exploration:tin_ore',
    'projectred-exploration:silver_ore',
    'moreminecarts:chunkrodite',
    'moreminecarts:chunkrodite_block',
    'moreminecarts:chunk_loader',
    'moreminecarts:minecart_with_chunk_loader',
    /chiselsandbits:block_bit/,
    /supplementaries:bamboo_spikes_tipped/,
    'quark:ancient_tome',
    '@curios',
    'appliedenergistics2:flour',
    'appliedenergistics2:network_tool',
    /titanium:.+/,
    'bloodmagic:saltpeter',
    'bloodmagic:sulfur',
    'bloodmagic:coalsand',
    'bloodmagic:ironsand',
    'bloodmagic:goldsand',
    'mekanism:copper_ore',
    'mekanism:tin_ore',
    'mekanism:osmium_ore',
    'mekanism:uranium_ore',
    'mekanism:lead_ore',
    'mekanism:sawdust',
    'mekanism:block_charcoal',
    /mekanism:creative_chemical_tank/,
    /mekanism:creative_fluid_tank/,
    'darkutils:ender_hopper',
    'tconstruct:copper_ingot',
    'tconstruct:molten_aluminum_bucket',
    'tconstruct:molten_copper_bucket',
    'tconstruct:molten_lead_bucket',
    'tconstruct:molten_nickel_bucket',
    'tconstruct:molten_osmium_bucket',
    'tconstruct:molten_platinum_bucket',
    'tconstruct:molten_silver_bucket',
    'tconstruct:molten_tin_bucket',
    'tconstruct:molten_uranium_bucket',
    'tconstruct:molten_zinc_bucket',
    /tconstruct:crafting_station/,
    /tconstruct:tinker_station/,
    /tconstruct:part_builder/,
    /tconstruct:tinkers_anvil/,
    /tconstruct:scorched_anvil/,
    'create:honey_bucket',
    'twilightforest:uncrafting_table',
    'solarflux:sp_6',
    'solarflux:sp_7',
    'solarflux:sp_8',
    'lazierae2:coal_dust',
    'thermal:rf_coil_creative_augment',
    'thermal:fluid_tank_creative_augment',
    'thermal:machine_catalyst_creative_augment',
    'mekanism:dust_sulfur',
    'translocators:diamond_nugget',
    'createaddition:diamond_grit',
    'projectred-core:copper_ingot',
    'pipez:universal_pipe',
    /chipped:*/,
    'envirocore:creative_energy_source' //has missing texture and no recipe
  ])

  enviroStonesMats.forEach(stone => e.hide(`/enviromats:${stone}_.*/`))
  colors.forEach(color => {
    e.hide([
      `/enviromats:alabaster_${color}_.*/`
    ])
  })

  //#region hideMetal
  hideMetal('mekanism', 'copper', ['ingot', 'dust', 'nugget', 'block'])
  hideMetal('mekanism', 'tin', ['ingot', 'dust', 'nugget', 'block'])
  hideMetal('mekanism', 'uranium', ['ingot', 'dust', 'nugget', 'block'])
  hideMetal('mekanism', 'lead', ['ingot', 'dust', 'nugget', 'block'])
  hideMetal('mekanism', 'osmium', ['ingot', 'dust', 'nugget', 'block'])
  hideMetal('mekanism', 'bronze', ['ingot', 'dust', 'nugget', 'block'])
  hideMetal('projectred-core', 'silver', ['ingot'])
  hideMetal('projectred-core', 'tin', ['ingot'])
  hideMetal('create', 'copper', ['ingot', 'ore', 'nugget', 'block'])
  hideMetal('create', 'zinc', ['ingot', 'ore', 'nugget', 'block'])
  hideMetal('thermal', 'copper', ['ingot', 'ore', 'dust', 'nugget', 'block'])
  hideMetal('thermal', 'tin', ['ingot', 'ore', 'dust', 'nugget', 'block'])
  hideMetal('thermal', 'lead', ['ingot', 'ore', 'dust', 'nugget', 'block'])
  hideMetal('thermal', 'silver', ['ingot', 'ore', 'dust', 'nugget', 'block'])
  hideMetal('thermal', 'nickel', ['ingot', 'ore', 'dust', 'nugget', 'block'])
  //#endregion
  //#region hideStuff
  hideStuff('thermal', 'dust', ['iron', 'gold'])
  hideStuff('mekanism', 'dust', ['lapis_lazuli', 'emerald', 'diamond', 'quartz', 'iron', 'gold'])
  hideStuff('mekanism', 'crystal', ['osmium', 'copper', 'tin', 'lead', 'uranium'])
  hideStuff('mekanism', 'shard', ['osmium', 'copper', 'tin', 'lead', 'uranium'])
  hideStuff('mekanism', 'dirty_dust', ['osmium', 'copper', 'tin', 'lead', 'uranium'])
  hideStuff('mekanism', 'clump', ['osmium', 'copper', 'tin', 'lead', 'uranium'])
  hideStuff('appliedenergistics2', 'dust', ['nether_quartz', 'ender', 'iron', 'gold'])
  hideStuff('create', 'sheet', ['iron', 'golden', 'copper'])
  hideStuff('solarflux', 'sp', [6, 7, 8])
  hideStuff('quark', 'crate', ['apple', 'carrot', 'beetroot', 'potato'])
  hideStuff('quark', 'block', ['bamboo', 'charcoal', 'sugar_cane'])
  //#endregion
})
