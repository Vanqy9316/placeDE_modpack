onEvent('recipes', e => {
  function stonecutting(inputs, formatter) {
    inputs.forEach(metal => {
      let output = formatter(metal);
      e.stonecutting(output, `#forge:storage_blocks/${metal}`)
        .id(`kubejs:stonecutting/${output.replace(':', '/')}`)
    });
  }

  stonecutting(mekanismMetals.concat(mekanismAlloys), metal => `mekanism:block_${metal}`)
  stonecutting(thermalMetals.concat(thermalAlloys), metal => `thermal:${metal}_block`)
  stonecutting(atoMetals, metal => `alltheores:${metal}_block`)
  stonecutting(['tin', 'silver', 'copper'], metal => `projectred-exploration:${metal}_block`)
  stonecutting(['brass', 'zinc', 'copper'], metal => `create:${metal}_block`)
  stonecutting(['copper'], metal => `tconstruct:${metal}_block`)
})
