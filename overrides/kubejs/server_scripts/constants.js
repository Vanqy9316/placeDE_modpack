//priority: 1
let colors = ['white', 'orange', 'magenta', 'light_blue', 'yellow', 'lime', 'pink', 'gray', 'light_gray', 'cyan', 'purple', 'blue', 'brown', 'green', 'red', 'black']
let vanillaMetals = ['iron', 'gold']
let atoMetals = ['aluminum', 'osmium', 'platinum', 'zinc', 'uranium', 'tin', 'lead', 'silver', 'nickel', 'zinc', 'copper']
let atmMetals = ['allthemodium', 'vibranium', 'unobtainium']
let mekanismMetals = ['osmium', 'lead', 'tin', 'uranium', 'copper']
let mekanismAlloys = ['steel', 'refined_obsidian', 'refined_glowstone', 'bronze']
let thermalMetals = ['copper', 'tin', 'lead', 'silver', 'nickel']
let thermalAlloys = ['bronze', 'electrum', 'invar', 'constantan', 'signalum', 'enderium', 'lumium']

let modifyShaped = (e, result, count, pattern, ingredients) => {
  e.remove({ output: result, type: 'minecraft:crafting_shaped' })
  e.shaped(item.of(result, count), pattern, ingredients).id(`kubejs:shaped/${result.replace(':', '/')}`)
}
let modifyShapeless = (e, result, count, ingredients) => {
  e.remove({ output: result, type: 'minecraft:crafting_shapeless' })
  e.shapeless(item.of(result, count), ingredients).id(`kubejs:shapeless/${result.replace(':', '/')}`)
}
let modifySmelt = (e, result, ingredients) => {
  e.remove({ output: result, type: 'minecraft:smelting' })
  e.smelting(result, ingredients).id(`kubejs:smelting/${result.replace(':', '/')}`)
}
let removeRecipeByID = (e, recipes) => {
  recipes.forEach(recipe => {
    e.remove({ id: recipe })
  })
}
let removeRecipeByOutput = (e, recipes) => {
  recipes.forEach(recipe => {
    if (Array.isArray(recipe)) {
      e.remove({ type: recipe[1], output: recipe[0] })
    } else {
      e.remove({ output: recipe })
    }
  })
}
