onEvent('item.registry', e => {
  e.create('mass_of_wills').displayName('§6Mass of Wills').tooltip('§8Combination of the six wills of the ancients').unstackable()
  e.create('rune_of_sins').displayName('§6Rune of Sins').tooltip('§8Rune that contains the power of the seven sins').unstackable()
  e.create('uu_matter').displayName('§dUU-Matter')
  e.create('patrick_star').displayName('§dPatrick Star')
  e.create('uru_ingot').displayName('§6Uru Metal Ingot')
  e.create('uru_nugget').displayName('§6Uru Metal Ingot')
})

onEvent('block.registry', e => {
  e.create('uru_block').displayName('§6Uru Metal Block').material('metal')
  e.create('atm_star_block').displayName('§eATM Star Block').material('iron').hardness(5).lightLevel(1)
  e.create('yellow_cake_uranium_block').displayName('§eYellow Cake Uranium Block').material('sand')
})

onEvent('fluid.registry', e => {
  e.create('molten_vibranium_allthemodium_alloy').textureStill('kubejs:fluid/vas').textureFlowing('kubejs:fluid/vaf').bucketColor(0x68B772).displayName('Molten Vibranium Allthemodium Alloy')
})

onEvent('fluid.registry', e => {
  e.create('molten_unobtainium_allthemodium_alloy').textureStill('kubejs:fluid/uas').textureFlowing('kubejs:fluid/uaf').bucketColor(0xEAA94A).displayName('Molten Unobtainium Allthemodium Alloy')
})

onEvent('fluid.registry', e => {
  e.create('molten_unobtainium_vibranium_alloy').textureStill('kubejs:fluid/uvs').textureFlowing('kubejs:fluid/uvf').bucketColor(0xD788F3).displayName('Molten Unobtainium Vibranium Alloy')
})
