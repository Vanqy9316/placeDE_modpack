onEvent('recipes', e => {
  //start alloys
  e.custom({
    type: 'tconstruct:alloy',
    inputs: [{
      name: 'allthemodium:molten_vibranium',
      amount: 1
      },
      {
      name: 'allthemodium:molten_allthemodium',
      amount: 1
      }],
    result: {
      fluid: 'kubejs:molten_vibranium_allthemodium_alloy',
      amount: 2
      },
    temperature: 4337
  })

  e.custom({
    type: 'tconstruct:alloy',
    inputs: [{
      name: 'allthemodium:molten_unobtainium',
      amount: 1
      },
      {
      name: 'allthemodium:molten_allthemodium',
      amount: 1
      }],
    result: {
      fluid: 'kubejs:molten_unobtainium_allthemodium_alloy',
      amount: 2
      },
    temperature: 4690
  })

  e.custom({
    type: 'tconstruct:alloy',
    inputs: [{
      name: 'allthemodium:molten_unobtainium',
      amount: 1
      },
      {
      name: 'allthemodium:molten_vibranium',
      amount: 1
      }],
    result: {
      fluid: 'kubejs:molten_unobtainium_vibranium_alloy',
      amount: 2
      },
    temperature: 4867
  })
  //end alloys
  //start no vaping
  e.remove({ id: 'allthemodium:vapor_allthemodium' })
  e.remove({ id: 'allthemodium:vapor_vibranium' })
  e.remove({ id: 'allthemodium:vapor_unobtainium' })
  //end no vaping
  //start casting
  e.custom({
    type: 'tconstruct:casting_basin',
    cast: {
      item: 'minecraft:gold_block'
    },
    cast_consumed: true,
    fluid: {
      name: 'kubejs:molten_vibranium_allthemodium_alloy',
      amount: 1296
      },
    result: 'allthemodium:vibranium_allthemodium_alloy_block',
    cooling_time: 400
  })//block va
  e.custom({
    type: 'tconstruct:casting_table',
    cast: {
      item: 'tconstruct:ingot_cast'
    },
    cast_consumed: true,
    fluid: {
      name: 'kubejs:molten_vibranium_allthemodium_alloy',
      amount: 144
      },
    result: 'allthemodium:vibranium_allthemodium_alloy_ingot',
    cooling_time: 40
  })//ingot va

  e.custom({
    type: 'tconstruct:casting_basin',
    cast: {
      item: 'minecraft:gold_block'
    },
    cast_consumed: true,
    fluid: {
      name: 'kubejs:molten_unobtainium_allthemodium_alloy',
      amount: 1296
      },
    result: 'allthemodium:unobtainium_allthemodium_alloy_block',
    cooling_time: 600
  })//block ua
  e.custom({
    type: 'tconstruct:casting_table',
    cast: {
      item: 'tconstruct:ingot_cast'
    },
    cast_consumed: true,
    fluid: {
      name: 'kubejs:molten_unobtainium_allthemodium_alloy',
      amount: 144
      },
    result: 'allthemodium:unobtainium_allthemodium_alloy_ingot',
    cooling_time: 60
  })//ingot ua

  e.custom({
    type: 'tconstruct:casting_basin',
    cast: {
      item: 'minecraft:gold_block'
    },
    cast_consumed: true,
    fluid: {
      name: 'kubejs:molten_unobtainium_vibranium_alloy',
      amount: 1296
      },
    result: 'allthemodium:unobtainium_vibranium_alloy_block',
    cooling_time: 900
  })//block uv
  e.custom({
    type: 'tconstruct:casting_table',
    cast: {
      item: 'tconstruct:ingot_cast'
    },
    cast_consumed: true,
    fluid: {
      name: 'kubejs:molten_unobtainium_vibranium_alloy',
      amount: 144
      },
    result: 'allthemodium:unobtainium_vibranium_alloy_ingot',
    cooling_time: 100
  })//ingot uv
  //end casting
})
