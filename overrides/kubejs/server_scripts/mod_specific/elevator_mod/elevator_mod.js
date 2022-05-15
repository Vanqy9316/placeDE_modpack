onEvent('recipes', e => {
  colors.forEach(color => {
    e.remove({id: `elevatorid:elevator_${color}`})
  })
  e.shaped('2x elevatorid:elevator_black', [
    'SSS',
    'SAS',
    'SSS'
  ], {
    S: 'quark:biotite_block',
    A: 'allthemodium:vibranium_ingot'
  })
})
