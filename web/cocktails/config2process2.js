var A = {}

function cj(o) {
  return JSON.parse(JSON.stringify(o))
}

var PROD = true

A.lut = {
  gn: 'gin',
  rw: 'rye whiskey',
  bit: 'bitters',
  amar: 'amaro',
  peych: "Peychaud's bitters",
  cog: 'cognac',
  abs: 'absinthe',
  soda: 'soda water',
  limj: 'lime juice',
  lemj: 'lemon juice',
  tripsc: 'triple sec',
  mali: 'maraschino liqueur',
  bene: 'Bénédictine',
  gc: 'Green Chartreuse',
  sv: 'sweet vermouth',
  dv: 'dry vermouth',
  ss: 'simple syrup',
  cocchi: 'cocchi',
  Ng: 'Negroni',
  Mtz: 'Martinez',
  OF: 'Old Fashioned',
  Mnhtn: 'Manhattan',
  Blvdr: 'Boulevardier',
  Prkns: 'Preakness',
  jsmn: 'Jasmine',
  avtn: 'Aviation',
  gg: 'Gin Gimlet',
  tlw: 'The Last Word',
  ws: 'Whiskey Sour',
  wl: 'White Lady',
  gf: 'Gin Fizz / John Collins',
  cpn2: 'Corpse Reviver №2',
  merican: 'Americano',
  vc: 'Vieux Carré',
  teq: 'tequila',
  dv: 'dry vermouth',
  oj: 'orange juice',
  gj: 'grapefruit juice',
  pros: 'prosecco',
  gngrbr: 'ginger beer',
  rum: 'rum',
  vod: 'vodka',
  ton: 'tonic',
}

A.ingrds = {
  // spirit
  rw: { color: '#dc7a13', type: 'spirit' },
  gn: { color: '#7fc0da', type: 'spirit' },
  abs: { color: '#aec390', type: 'spirit' },
  cog: { color: '#8c3226', type: 'spirit' },
  // red
  sv: { color: '#840e11', type: 'sweet' },
  amar: { color: '#b30022', type: 'bitter' },
  bit: { color: '#b62d05', type: 'bitter' },
  cocchi: { color: '#ecdda2', type: 'bitter' },
  // hl
  gc: { color: '#39d623', type: 'herbal liqueur' },
  bene: { color: '#ecd10e', type: 'herbal liqueur' },
  // fl
  mali: { color: '#de001f', type: 'fruit liqueur' },
  tripsc: { color: '#ff9a34', type: 'fruit liqueur' },
  peych: { color: '#d45d9e', type: 'bitter' },
  //
  lemj: { color: '#ffff00', type: 'cordial' },
  limj: { color: '#93d53d', type: 'cordial' },
  soda: { color: '#eeeeff', type: 'cordial' },
  ss: { color: '#aaaaaa', type: 'sweet' },
}

A.revlut = {}
Object.entries(A.lut).forEach(e => {
  A.revlut[e[1]] = e[0]
})

A.drnkNmIngr = [
  {
    name: 'Long Island Iced Tea',
    ingStrs: { 'sprt-bit-swe-hl-fl-cord-misc': 'vod-|-ss-|-tripsc-lemj-|' },
    ingredients: ['vod', 'ss', 'tripsc', 'lemj'],
    // 1.5 cl Tequila
    // 1.5 cl Vodka
    // 1.5 cl White rum
    // 1.5 cl Gin
    // 1.5 cl Triple sec
    // 2.5 cl Lemon juice
    // 3.0 cl Gomme Syrup
    // 1 dash of Coke
  },
  {
    name: 'Paper Plane',
    ingStrs: { 'sprt-bit-swe-hl-fl-cord-misc': 'rw-amaro-|-|-|-lemj' },
    ingredients: ['rw', 'amaro', 'lemj'],
  },
  {
    name: 'Death in the Afternoon',
    ingStrs: { 'sprt-bit-swe-hl-fl-cord-misc': 'abs-pros' },
    ingredients: ['abs', 'pros'],
  },
  {
    name: 'Sazerac',
    ingStrs: { 'sprt-bit-swe-hl-fl-cord-misc': 'cog-abs-ss-peych' },
    ingredients: ['cog', 'abs', 'ss', 'peych'],
  },
  {
    name: 'Gin & Tonic',
    ingStrs: { 'sprt-bit-swe-hl-fl-cord-misc': 'gn-ton' },
    ingredients: ['gn', 'ton'],
  },
  {
    name: 'Whiskey Soda',
    // ingStrs: {'sprt-bit-swe-hl-fl-cord-misc': 'rw-soda'}
    ingStrs: {
      'sprt-bit-swe-hl-fl-cord-misc': ['rw', '|', '|', '|', '|', 'soda'].join(
        '-'
      ),
    },
    ingredients: ['rw', 'soda'],
  },
  {
    name: 'Ng',
    ingredients: [{ spirit: 'gn' }, { bit: 'amar' }, { sweet: 'sv' }],
    ingStrs: { 'sprt-bit-swe-hl-fl-cord-misc': 'gn-amar-sv' },
  },
  {
    name: 'Mtz',
    ingredients: [
      { spirit: 'gn' },
      { bit: 'bit' },
      { sweet: 'sv' },
      { fl: 'ml' },
    ],
    ingStrs: { 'sprt-bit-swe-hl-fl-cord-misc': 'gn-bit-sv' },
  },
  {
    name: 'OF',
    ingredients: [{ spirit: 'rw' }, { bit: 'bit' }, { sweet: 'ss' }],
    ingStrs: { 'sprt-bit-swe-hl-fl-cord-misc': 'rw-bit-ss' },
  },
  {
    name: 'Prkns',
    ingredients: ['rw', 'sv', 'bene', 'bit'],
    ingredients: [
      { spirit: 'rw' },
      { bit: 'bit' },
      { sweet: 'sv' },
      { hl: 'bene' },
    ],
    ingStrs: { 'sprt-bit-swe-hl-fl-cord-misc': 'rw-bit-sv-bene-|-|' },
  },
  {
    name: 'Blvdr',
    ingredients: [{ spirit: 'rw' }, { bit: 'amar' }, { sweet: 'sv' }],
    ingStrs: {
      'sprt-bit-swe-hl-fl-cord-misc': 'rw-amar-sv',
    },
  },
  {
    name: 'Mnhtn',
    ingredients: [{ spirit: 'rw' }, { bit: 'bit' }, { sweet: 'sv' }],
    ingStrs: {
      'sprt-bit-swe-hl-fl-cord-misc': 'rw-bit-sv',
    },
  },
  {
    name: 'Americano',
    IBA: 'Unforgettable',
    // ingredients: ['soda water', 'sweet vermouth', 'amaro'],
    ingredients: ['sweet vermouth', 'amaro'],
    ingStrs: { 'sprt-bit-swe-hl-fl-cord-misc': '|-amar-sv-|-|-|-soda' },
  },
  {
    name: 'Aviation',
    IBA: 'Unforgettable',
    ingredients: ['gin', 'maraschino liqueur', 'lemon juice'],
    ingStrs: { 'sprt-bit-swe-hl-fl-cord-misc': 'gn-|-|-|-mali-lemj' },
  },
  {
    name: 'Corpse Reviver №2',
    ingredients: [
      'gin',
      'triple sec',
      'Cocchi Americano',
      'absinthe',
      'lemon juice',
    ],
    ingStrs: {
      'sprt-bit-swe-hl-fl-cord-misc': 'gn-cocchi-|-|-tripsc-lemj-abs',
    },
  },
  {
    name: 'White Lady',
    IBA: 'Unforgettable',
    ingredients: ['gin', 'triple sec', 'lemon juice'],
    ingStrs: { 'sprt-bit-swe-hl-fl-cord-misc': 'gn-|-|-|-tripsc-lemj-|' },
  },
  {
    name: 'Gin Fizz / John Collins',
    IBA: 'Unforgettable',
    ingredients: ['gin', 'lemon juice', 'simple syrup', 'soda water'],
    ingStrs: { 'sprt-bit-swe-hl-fl-cord-misc': 'gn-|-ss-|-|-lemj-soda' },
  },
  {
    name: 'Jasmine',
    ingredients: ['gin', 'triple sec', 'amaro', 'lemon juice'],
    ingStrs: { 'sprt-bit-swe-hl-fl-cord-misc': 'gn-amar-|-|-tripsc-lemj' },
  },
  {
    name: 'Gin Gimlet',
    ingredients: ['gin', 'lime juice', 'simple syrup'],
    ingStrs: { 'sprt-bit-swe-hl-fl-cord-misc': 'gn-|-ss-|-tripsc-limj' },
  },
  {
    name: 'Whiskey Sour',
    IBA: 'Unforgettable',
    ingredients: ['rye whiskey', 'lemon juice', 'simple syrup'],
    ingStrs: { 'sprt-bit-swe-hl-fl-cord-misc': 'rw-|-ss-|-|-lemj' },
  },
  {
    name: 'The Last Word',
    ingredients: [
      'gin',
      'lime juice',
      'maraschino liqueur',
      'green chartreuse',
    ],
    ingStrs: { 'sprt-bit-swe-hl-fl-cord-misc': 'gn-|-ss-gc-mali-limj' },
  },
  {
    name: 'Vieux Carré',
    ingredients: [
      'rye whiskey',
      'cognac',
      'sweet vermouth',
      'Bénédictine',
      'bitters',
      "Peychaud's Bitters",
    ],
    ingStrs: { 'sprt-bit-swe-hl-fl-cord-misc': 'rw-bit-sv-bene-|-|-cog-peych' },
  },
  {
    name: 'Moscow Mule',
    ingredients: ['vodka', 'ginger beer', 'lime juice'],
    ingStrs: { 'sprt-bit-swe-hl-fl-cord-misc': 'vod-|-|-|-|-limj-gngrbr' },
  },
  {
    name: 'Mojito',
    IBA: 'Contemporary Classic',
    ingredients: ['rum', 'lime juice', 'simple syrup', 'soda water', 'mint'],
    ingStrs: { 'sprt-bit-swe-hl-fl-cord-misc': 'rum-|-ss-|-|-limj-soda-mint' },
  },
  {
    name: 'Daiquiri',
    IBA: '?',
    ingredients: ['rum', 'lime juice', 'simple syrup'],
    ingStrs: { 'sprt-bit-swe-hl-fl-cord-misc': 'rum-|-ss-|-|-limj' },
  },
  {
    name: 'Mint Julep',
    IBA: 'Contemporary Classic',
    ingredients: ['bourbon whiskey', 'simple syrup', 'mint'],
    ingStrs: { 'sprt-bit-swe-hl-fl-cord-misc': 'rw-|-ss-|-|-|-mint' },
  },
  {
    name: 'Margarita',
    IBA: 'Contemporary Classic',
    ingredients: ['tequila', 'triple sec', 'lime juice'],
    ingStrs: { 'sprt-bit-swe-hl-fl-cord-misc': 'teq-|-|-|-tripsc-limj' },
  },
  {
    name: 'Paloma',
    ingredients: ['tequila', 'grapefruit juice', 'soda'],
    ingStrs: { 'sprt-bit-swe-hl-fl-cord-misc': 'teq-|-|-|-|-gj-|-soda' },
  },
]

A.root = {}

// Yes (part 1) (part 2 will be conversion to name, children tree)
// var orderKey = 'sprt-bit-swe'
var orderKey = 'sprt-bit-swe-hl-fl-cord-misc'
A.drnkNmIngr.forEach(d => {
  var pathArr = d.ingStrs[orderKey].split('-')
  pathArr.push('drnk')
  var pathStr = pathArr.join('.')
  _.set(A.root, pathStr, d.name)
})

// part 2
var convertObjToNameChildrenTree = function(tree) {
  // testClone = convertObjToNameChildrenTree(testObj)
  var clone = { name: '', children: [] }
  var walk = function(obj, path, clonepath) {
    path = path || ''
    for (var key in obj) {
      // Make an item with a name of this key; will push to clone later
      var child = { name: key, children: [] }

      // Add the key to the path; this will be the next path to walk
      var pathkey = [path, key].filter(x => x).join('.')

      // From the last clonepath, basically append 'children'
      // Accomodate first case via split/filter/push/join
      var clonepathkey = clonepath.split('.')
      clonepathkey = clonepathkey.filter(x => x)
      clonepathkey.push('children')
      clonepathkey = clonepathkey.join('.')

      var cloneChildArr = _.get(clone, clonepathkey)
      cloneChildArr.push(child)

      var childCount = cloneChildArr.length - 1
      clonepathkey += '.' + childCount

      if (typeof obj[key] === 'object') {
        walk(obj[key], pathkey, clonepathkey)
      } else if (key === 'drnk') {
        leafChild = { name: obj[key], children: [], class: 'leaf' }
        _.set(clone, clonepathkey, leafChild)
      } else {
        // leaf (assuming no arrays)
        // Do above once more, but don't walk again
        leafChild = { name: obj[key], children: [] }
        _.set(clone, clonepathkey + '.children', leafChild)
      }
    }
  }
  walk(tree, '', '')
  return clone
}

A.treeData2 = convertObjToNameChildrenTree(A.root)

var getLeaves = function(tree) {
  var leaves = []
  var values = []
  var walk = function(obj, path) {
    path = path || ''
    for (var key in obj) {
      if (obj.hasOwnProperty(key)) {
        if (typeof obj[key] === 'object' || obj[key] instanceof Array) {
          var pathkey = [path, key].filter(x => x).join('.')
          walk(obj[key], pathkey)
        } else {
          // leaf
          var pathkey = [path, key].filter(x => x).join('.')
          leaves.push(pathkey)
        }
      }
    }
  }
  walk(tree, '')
  return leaves
}

function compareListsLookup(list, listOfObjects) {
  var firstMatch = ''
  list = list.filter(x => x != '').sort()
  for (var j = 0; j < listOfObjects.length; j++) {
    var list2 = listOfObjects[j].ingredients.sort()
    if (list.length === list2.length) {
      if (_.isEqual(list.sort(), list2.sort())) {
        firstMatch = listOfObjects[j].name
      }
    }
  }
  return firstMatch
}

function appendReductionToObjTreeLeaves(obj, depth) {
  leafPaths = getLeaves(obj)
  leafPaths = leafPaths.filter(p => p.split('.').length >= 2 * depth)
  for (var i = 0; i < leafPaths.length; i++) {
    // "0.children.0.children.0.children.0.name"
    // just get the numeric child indices, so split on '.children.'
    indices = leafPaths[i].split('.children.')
    var cummIdx = []
    var cummNames = []
    indices.forEach(idx => {
      idx = idx.split('.')[0] // if idx includes .name, just get the number part
      cummIdx.push(idx) // [0], then [0,2], then [0,2,0...]
      path = cummIdx.join('.children.')
      cummNames.push(_.get(obj, path + '.name'))
    })
    cummNames = cummNames.filter(x => x)
    _.set(obj, path + '.mix', cummNames.join(', '))

    var match = compareListsLookup(cummNames, A.drnkNmIngr)
    if (match.length > 1) {
      _.set(obj, path + '.children', [
        { name: match, children: [], class: 'match' },
      ])
      A.matchedNames.push(match)
    }
  }
}
