function cj(o) {
  return JSON.parse(JSON.stringify(o))
}

branches = [
  {
    type: 'spirits',
    items: ['', 'rye whiskey', 'gin', 'tequila'],
  },
]

branches = [
  [
    '',
    'soda water',
    'grenadine',
    'ginger beer',
    'lemon juice',
    'lime juice',
    'grapefruit juice',
    'orange juice',
  ],
  ['', 'gin', 'rye whiskey', 'tequila', 'cognac', 'absinthe'],
  ['', 'bitters', 'amaro', 'aperol', 'peychards bitters'],
  ['', 'sweet vermouth', 'simple syrup'],
  ['', 'Green Chartreuse', 'Bénédictine'],
  ['', 'maraschino liqueur', 'triple sec', 'elderflower liqueur'],
  ['', 'maraschino liqueur', 'triple sec', 'elderflower liqueur'],
]

var root = {
  name: 'Cocktails',
  children: [],
}

var baseSpirits = [
  // base spirit
  {
    name: 'gin',
    type: 'spirit',
    children: [],
  },
  {
    name: 'rye whiskey',
    type: 'spirit',
    children: [],
  },
  /*{
    name: 'tequila',
    type: 'spirit',
    children: [],
  },*/
  {
    name: '',
    type: 'spirit',
    children: [],
  },
]

var sweeteners = [
  // sweet
  {
    name: '',
    type: 'sweet',
    children: [],
  },
  {
    type: 'sweet',
    name: 'sweet vermouth',
    children: [],
  },
  {
    type: 'sweet',
    name: 'simple syrup',
    children: [],
  },
]

var bitterers = [
  {
    name: '',
    type: 'bitter',
    children: [],
  },
  {
    name: 'amaro',
    type: 'bitter',
    children: [],
  },
  {
    name: 'bitters',
    type: 'bitter',
    children: [],
  },
  /*{
    name: 'Cocchi Americano',
    type: 'bitter',
    children: [],
  },*/
]

var dryers = [
  {
    name: '',
    type: 'dry',
    children: [],
  },
  {
    name: 'dry vermouth',
    type: 'dry',
    children: [],
  },
]

var liqueursHerbalDominant = [
  {
    name: '',
    type: 'herbal liqueur',
    children: [],
  },
  {
    name: 'Green Chartreuse',
    type: 'herbal liqueur',
    children: [],
  },
  {
    name: 'Bénédictine',
    type: 'herbal liqueur',
    children: [],
  },
]

var liqueursFruitDominant = [
  {
    name: '',
    type: 'fruit liqueur',
    children: [],
  },
  {
    name: 'maraschino liqueur',
    type: 'fruit liqueur',
    children: [],
  },
  {
    name: 'triple sec',
    type: 'fruit liqueur',
    children: [],
  },
  /*{
    name: 'elderflower liqueur',
    type: 'fruit liqueur',
    children: [],
  },*/
]

var cordialsJuices = [
  {
    name: '',
    type: 'cordial',
    children: [],
  },
  {
    name: 'soda water',
    type: 'cordial',
    children: [],
  },
  {
    name: 'grenadine',
    type: 'cordial',
    children: [],
  },
  {
    name: 'ginger beer',
    type: 'cordial',
    children: [],
  },
  {
    name: 'lemon juice',
    type: 'cordial',
    children: [],
  },
  {
    name: 'lime juice',
    type: 'cordial',
    children: [],
  },
  {
    name: 'grapefruit juice',
    type: 'cordial',
    children: [],
  },
  {
    name: 'orange juice',
    type: 'cordial',
    children: [],
  },
]
/*
baseSpirits.forEach((a, ai) => {
  root.children.push(cj(a))
  bitterers.forEach((b, bi) => {
    root.children[ai].children.push(cj(b))
    sweeteners.forEach((s, si) => {
      root.children[ai].children[bi].children.push(cj(s))
      liqueursHerbalDominant.forEach((lh, lhi) => {
        root.children[ai].children[bi].children[si].children.push(cj(lh))
        liqueursFruitDominant.forEach((lf, lfi) => {
          root.children[ai].children[bi].children[si].children[lhi].children.push(cj(lf))
          cordialsJuices.forEach((j, ji) => {
            root.children[ai].children[bi].children[si].children[lhi].children[lfi].children.push(
                cj(j)
              )
          })
        })
      })
    })
  })
})

copy(root)
console.log('fin')
*/

/*
  cocktails = {"name": "cocktails", "children": []}
  cocktails.children.push({"name": "gin", "children": []})
  cocktails.children.push({"name": "rye whiskey", "children": []})
  cocktails.children.push({"name": "tequila", "children": []})
  cocktails.children.push({"name": "none", "children": []})

  var idx_gin = cocktails.children.findIndex(x => x.name === "gin")
  cocktails.children[idx_gin]

a = a.sort((a, b) => {
  var ain = a.ingredients
  var bin = b.ingredients
  if (ain[0] < bin[0]) return -1
  if (ain[0] > bin[0]) return 1
  if (ain[0] < bin[0]) return -1
  if (ain[0] > bin[0]) return 1
})
*/
