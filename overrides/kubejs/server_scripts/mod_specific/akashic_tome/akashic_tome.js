onEvent('recipes', e => {
  e.remove({ id: 'akashictome:tome' })

  e.shapeless(
    Item.of('akashictome:tome', {
      'akashictome:is_morphing': 1,
      'akashictome:data': {
          tconstruct: {
              id: 'tconstruct:encyclopedia',
              Count: 1
          },
          resourcefulbees: {
              id: 'patchouli:guide_book',
              Count: 1,
              tag: {
                  'patchouli:book': 'resourcefulbees:fifty_shades_of_bees'
              }
          },
          astralsorcery: {
              id: 'astralsorcery:tome',
              Count: 1
          },
          theoneprobe: {
              id: 'theoneprobe:probenote',
              Count: 1
          },
          advancedperipherals: {
              id: 'patchouli:guide_book',
              Count: 1,
              tag: {
                  'patchouli:book': 'advancedperipherals:manual'
              }
          },
          allthemodium: {
              id: 'patchouli:guide_book',
              Count: 1,
              tag: {
                  'patchouli:book': 'allthemodium:allthemodium'
              }
          },
          solcarrot: {
              id: 'solcarrot:food_book',
              Count: 1
          },
          botania: {
              id: 'botania:lexicon',
              Count: 1
          },
          bloodmagic: {
              id: 'patchouli:guide_book',
              Count: 1,
              tag: {
                  'patchouli:book': 'bloodmagic:guide'
              }
          },
          thermal: {
              id: 'patchouli:guide_book',
              Count: 1,
              tag: {
                  'patchouli:book': 'thermal:guidebook'
              }
          },
          rftoolsbase: {
              id: 'rftoolsbase:manual',
              Count: 1
          },
          twilightforest: {
              id: 'patchouli:guide_book',
              Count: 1,
              tag: {
                  'patchouli:book': 'twilightforest:guide'
              }
          }
      }
    }),
    'minecraft:stick'
  ).id(`kubejs:akashik_tome`)
})
