var A = {}
A.treeFontSize = 12

function cj(o) {
  return JSON.parse(JSON.stringify(o))
}

A.drinkNameAndIngredients = [
  {
    name: 'Americano',
    IBA: 'Unforgettable',
    // ingredients: ['soda water', 'sweet vermouth', 'amaro'],
    ingredients: ['sweet vermouth', 'amaro'],
  },
  {
    name: 'Aviation',
    IBA: 'Unforgettable',
    ingredients: ['gin', 'maraschino liqueur', 'lemon juice'],
  },
  {
    name: 'Boulevardier',
    ingredients: ['rye whiskey', 'sweet vermouth', 'amaro'],
  },
  {
    name: 'Manhattan',
    IBA: 'Unforgettable',
    ingredients: ['rye whiskey', 'sweet vermouth', 'bitters'],
  },
  {
    name: 'Corpse Reviver №2',
    ingredients: ['gin', 'triple sec', 'Cocchi Americano', 'absinthe', 'lemon juice'],
  },
  {
    name: 'Martini',
    IBA: 'New Era',
    ingredients: ['gin', 'dry vermouth'],
  },
  {
    name: 'White Lady',
    IBA: 'Unforgettable',
    ingredients: ['gin', 'triple sec', 'lemon juice'],
  },
  {
    name: 'Old Fashioned',
    IBA: 'Unforgettable',
    ingredients: ['rye whiskey', 'simple syrup', 'bitters'],
  },
  {
    name: 'Negroni',
    IBA: 'Unforgettable',
    ingredients: ['gin', 'sweet vermouth', 'amaro'],
  },
  {
    name: 'Gin Fizz / John Collins',
    IBA: 'Unforgettable',
    ingredients: ['gin', 'lemon juice', 'simple syrup', 'soda water'],
  },
  {
    name: 'Sidecar',
    IBA: 'Unforgettable',
    ingredients: ['cognac', 'lemon juice', 'triple sec'],
  },
  {
    name: 'Jasmine',
    ingredients: ['gin', 'triple sec', 'amaro', 'lemon juice'],
  },
  {
    name: 'Gin Gimlet',
    ingredients: ['gin', 'lime juice', 'simple syrup'],
  },
  {
    name: 'Vodka Gimlet',
    ingredients: ['vodka', 'lime juice', 'simple syrup'],
  },
  {
    name: 'Contessa',
    ingredients: ['gin', 'dry vermouth', 'Aperol'],
  },
  {
    name: 'Hanky Panky',
    ingredients: ['gin', 'sweet vermouth', 'fernet'],
  },
  {
    name: 'Preakness',
    ingredients: ['rye whiskey', 'sweet vermouth', 'Bénédictine', 'bitters'],
  },
  {
    name: 'Whiskey Sour',
    IBA: 'Unforgettable',
    ingredients: ['rye whiskey', 'lemon juice', 'simple syrup'],
  },
  {
    name: 'The Last Word',
    ingredients: ['gin', 'lime juice', 'maraschino liqueur', 'green chartreuse'],
  },
  {
    name: 'Old Pal',
    ingredients: ['rye whiskey', 'dry vermouth', 'amaro'],
  },
  {
    name: 'Mojito',
    IBA: 'Contemporary Classic',
    ingredients: ['rum', 'lime juice', 'simple syrup', 'soda water', 'mint'],
  },
  {
    name: 'Mimosa',
    IBA: 'Contemporary Classic',
    ingredients: ['sparkling wine', 'orange juice'],
  },
  {
    name: 'Aperol Spritz',
    ingredients: ['sparkling wine', 'Aperol', 'soda water'],
  },
  {
    name: 'Mint Julep',
    IBA: 'Contemporary Classic',
    ingredients: ['bourbon whiskey', 'simple syrup', 'mint'],
  },
  {
    name: 'Moscow Mule',
    IBA: 'Contemporary Classic',
    ingredients: ['vodka', 'ginger beer', 'lime juice'],
  },
  {
    name: 'Margarita',
    IBA: 'Contemporary Classic',
    ingredients: ['tequila', 'triple sec', 'lime juice'],
  },
  {
    name: 'Tequila Sunrise',
    IBA: 'Contemporary Classic',
    ingredients: ['tequila', 'orange juice', 'grenadine'],
  },
  {
    name: 'Martinez',
    ingredients: ['gin', 'sweet vermouth', 'maraschino liqueur', 'bitters'],
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
  },
]

/*
  {
    name: 'The Bad Word',
    ingredients: ['gin', 'lime juice', 'gran classico', 'green chartreuse'],
  },
  {
    name: 'Final Ward',
    ingredients: ['rye whiskey', 'green chartreuse', 'maraschino liqueur', 'lemon juice'],
  },
  {
    name: 'Mezcal Last Word',
    ingredients: ['mezcal', 'green chartreuse', 'maraschino liqueur', 'lemon juice'],
  },
  {
    name: 'fernetaboutit',
    ingredients: ['fernet', 'lime juice', 'maraschino liqueur', 'green chartreuse'],
  },
  {
    name: 'Third Man',
    ingredients: ['bourbon whiskey', 'grapefruit', 'amaro', 'lemon juice', 'simple syrup'],
  },
  {
    name: 'Toronto',
    ingredients: ['rye whiskey', 'fernet', 'simple syrup'],
  },
*/

/*
  a = a.map(x => {
    x.ingredients.sort()
    return x
  })
  a.sort((a, b) => {
    strA = JSON.stringify(a.ingredients)
    strB = JSON.stringify(b.ingredients)
    if (strA < strB) return -1
    if (strA > strB) return 1
    return 0
  })
  copy(a)
*/

A.drinkNameAndIngredientsSorted = [
  {
    name: 'Mint Julep',
    IBA: 'Contemporary Classic',
    ingredients: ['bourbon whiskey', 'simple syrup', 'mint'],
  },
  {
    name: 'Sidecar',
    IBA: 'Unforgettable',
    ingredients: ['cognac', 'lemon juice', 'triple sec'],
  },
  {
    name: 'Martini',
    IBA: 'New Era',
    ingredients: ['gin', 'dry vermouth'],
  },
  {
    name: 'Contessa',
    ingredients: ['gin', 'dry vermouth', 'Aperol'],
  },
  {
    name: 'Gin Fizz / John Collins',
    IBA: 'Unforgettable',
    ingredients: ['gin', 'lemon juice', 'simple syrup', 'soda water'],
  },
  {
    name: 'The Last Word',
    ingredients: ['gin', 'lime juice', 'maraschino liqueur', 'green chartreuse'],
  },
  {
    name: 'Gin Gimlet',
    ingredients: ['gin', 'lime juice', 'simple syrup'],
  },
  {
    name: 'Aviation',
    IBA: 'Unforgettable',
    ingredients: ['gin', 'maraschino liqueur', 'lemon juice'],
  },
  {
    name: 'Negroni',
    IBA: 'Unforgettable',
    ingredients: ['gin', 'sweet vermouth', 'amaro'],
  },
  {
    name: 'Hanky Panky',
    ingredients: ['gin', 'sweet vermouth', 'fernet'],
  },
  {
    name: 'Martinez',
    ingredients: ['gin', 'sweet vermouth', 'maraschino liqueur', 'bitters'],
  },
  {
    name: 'Corpse Reviver №2',
    ingredients: ['gin', 'triple sec', 'Cocchi Americano', 'absinthe', 'lemon juice'],
  },
  {
    name: 'Jasmine',
    ingredients: ['gin', 'triple sec', 'amaro', 'lemon juice'],
  },
  {
    name: 'White Lady',
    IBA: 'Unforgettable',
    ingredients: ['gin', 'triple sec', 'lemon juice'],
  },
  {
    name: 'Mojito',
    IBA: 'Contemporary Classic',
    ingredients: ['rum', 'lime juice', 'simple syrup', 'soda water', 'mint'],
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
  },
  {
    name: 'Old Pal',
    ingredients: ['rye whiskey', 'dry vermouth', 'amaro'],
  },
  {
    name: 'Whiskey Sour',
    IBA: 'Unforgettable',
    ingredients: ['rye whiskey', 'lemon juice', 'simple syrup'],
  },
  {
    name: 'Old Fashioned',
    IBA: 'Unforgettable',
    ingredients: ['rye whiskey', 'simple syrup', 'bitters'],
  },
  {
    name: 'Preakness',
    ingredients: ['rye whiskey', 'sweet vermouth', 'Bénédictine', 'bitters'],
  },
  {
    name: 'Boulevardier',
    ingredients: ['rye whiskey', 'sweet vermouth', 'amaro'],
  },
  {
    name: 'Manhattan',
    IBA: 'Unforgettable',
    ingredients: ['rye whiskey', 'sweet vermouth', 'bitters'],
  },
  {
    name: 'Aperol Spritz',
    ingredients: ['sparkling wine', 'Aperol', 'soda water'],
  },
  {
    name: 'Mimosa',
    IBA: 'Contemporary Classic',
    ingredients: ['sparkling wine', 'orange juice'],
  },
  {
    name: 'Americano',
    IBA: 'Unforgettable',
    ingredients: ['sweet vermouth', 'amaro'],
  },
  {
    name: 'Tequila Sunrise',
    IBA: 'Contemporary Classic',
    ingredients: ['tequila', 'orange juice', 'grenadine'],
  },
  {
    name: 'Margarita',
    IBA: 'Contemporary Classic',
    ingredients: ['tequila', 'triple sec', 'lime juice'],
  },
  {
    name: 'Moscow Mule',
    IBA: 'Contemporary Classic',
    ingredients: ['vodka', 'ginger beer', 'lime juice'],
  },
  {
    name: 'Vodka Gimlet',
    ingredients: ['vodka', 'lime juice', 'simple syrup'],
  },
]

A.treeData = {
  name: '',
  children: [
    {
      name: 'gin',
      children: [
        {
          name: '',
          children: [
            {
              name: '',
              children: [],
            },
            {
              name: 'sweet vermouth',
              children: [],
            },
            {
              name: 'simple syrup',
              children: [],
            },
          ],
        },
        {
          name: 'amaro',
          children: [
            {
              name: '',
              children: [],
            },
            {
              name: 'sweet vermouth',
              children: [],
            },
            {
              name: 'simple syrup',
              children: [],
            },
          ],
        },
        {
          name: 'bitters',
          children: [
            {
              name: '',
              children: [],
            },
            {
              name: 'sweet vermouth',
              children: [],
            },
            {
              name: 'simple syrup',
              children: [],
            },
          ],
        },
      ],
    },
    {
      name: 'rye whiskey',
      children: [
        {
          name: '',
          children: [
            {
              name: '',
              children: [],
            },
            {
              name: 'sweet vermouth',
              children: [],
            },
            {
              name: 'simple syrup',
              children: [],
            },
          ],
        },
        {
          name: 'amaro',
          children: [
            {
              name: '',
              children: [],
            },
            {
              name: 'sweet vermouth',
              children: [],
            },
            {
              name: 'simple syrup',
              children: [],
            },
          ],
        },
        {
          name: 'bitters',
          children: [
            {
              name: '',
              children: [],
            },
            {
              name: 'sweet vermouth',
              children: [],
            },
            {
              name: 'simple syrup',
              children: [],
            },
          ],
        },
      ],
    },
    {
      name: '',
      children: [
        {
          name: '',
          children: [
            {
              name: '',
              children: [],
            },
            {
              name: 'sweet vermouth',
              children: [],
            },
            {
              name: 'simple syrup',
              children: [],
            },
          ],
        },
        {
          name: 'amaro',
          children: [
            {
              name: '',
              children: [],
            },
            {
              name: 'sweet vermouth',
              children: [],
            },
            {
              name: 'simple syrup',
              children: [],
            },
          ],
        },
        {
          name: 'bitters',
          children: [
            {
              name: '',
              children: [],
            },
            {
              name: 'sweet vermouth',
              children: [],
            },
            {
              name: 'simple syrup',
              children: [],
            },
          ],
        },
      ],
    },
  ],
}

A.treeData2 = {
  name: '',
  children: [
    {
      name: 'gin',
      children: [
        {
          name: '',
          children: [
            {
              name: '',
              children: [
                {
                  name: '',
                  children: [
                    {
                      name: '',
                      children: [],
                    },
                    {
                      name: 'maraschino liqueur',
                      children: [],
                    },
                    {
                      name: 'triple sec',
                      children: [],
                    },
                  ],
                },
                {
                  name: 'Green Chartreuse',
                  children: [
                    {
                      name: '',
                      children: [],
                    },
                    {
                      name: 'maraschino liqueur',
                      children: [],
                    },
                    {
                      name: 'triple sec',
                      children: [],
                    },
                  ],
                },
                {
                  name: 'Bénédictine',
                  children: [
                    {
                      name: '',
                      children: [],
                    },
                    {
                      name: 'maraschino liqueur',
                      children: [],
                    },
                    {
                      name: 'triple sec',
                      children: [],
                    },
                  ],
                },
              ],
            },
            {
              name: 'sweet vermouth',
              children: [
                {
                  name: '',
                  children: [
                    {
                      name: '',
                      children: [],
                    },
                    {
                      name: 'maraschino liqueur',
                      children: [],
                    },
                    {
                      name: 'triple sec',
                      children: [],
                    },
                  ],
                },
                {
                  name: 'Green Chartreuse',
                  children: [
                    {
                      name: '',
                      children: [],
                    },
                    {
                      name: 'maraschino liqueur',
                      children: [],
                    },
                    {
                      name: 'triple sec',
                      children: [],
                    },
                  ],
                },
                {
                  name: 'Bénédictine',
                  children: [
                    {
                      name: '',
                      children: [],
                    },
                    {
                      name: 'maraschino liqueur',
                      children: [],
                    },
                    {
                      name: 'triple sec',
                      children: [],
                    },
                  ],
                },
              ],
            },
            {
              name: 'simple syrup',
              children: [
                {
                  name: '',
                  children: [
                    {
                      name: '',
                      children: [],
                    },
                    {
                      name: 'maraschino liqueur',
                      children: [],
                    },
                    {
                      name: 'triple sec',
                      children: [],
                    },
                  ],
                },
                {
                  name: 'Green Chartreuse',
                  children: [
                    {
                      name: '',
                      children: [],
                    },
                    {
                      name: 'maraschino liqueur',
                      children: [],
                    },
                    {
                      name: 'triple sec',
                      children: [],
                    },
                  ],
                },
                {
                  name: 'Bénédictine',
                  children: [
                    {
                      name: '',
                      children: [],
                    },
                    {
                      name: 'maraschino liqueur',
                      children: [],
                    },
                    {
                      name: 'triple sec',
                      children: [],
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: 'amaro',
          children: [
            {
              name: '',
              children: [
                {
                  name: '',
                  children: [
                    {
                      name: '',
                      children: [],
                    },
                    {
                      name: 'maraschino liqueur',
                      children: [],
                    },
                    {
                      name: 'triple sec',
                      children: [],
                    },
                  ],
                },
                {
                  name: 'Green Chartreuse',
                  children: [
                    {
                      name: '',
                      children: [],
                    },
                    {
                      name: 'maraschino liqueur',
                      children: [],
                    },
                    {
                      name: 'triple sec',
                      children: [],
                    },
                  ],
                },
                {
                  name: 'Bénédictine',
                  children: [
                    {
                      name: '',
                      children: [],
                    },
                    {
                      name: 'maraschino liqueur',
                      children: [],
                    },
                    {
                      name: 'triple sec',
                      children: [],
                    },
                  ],
                },
              ],
            },
            {
              name: 'sweet vermouth',
              children: [
                {
                  name: '',
                  children: [
                    {
                      name: '',
                      children: [],
                    },
                    {
                      name: 'maraschino liqueur',
                      children: [],
                    },
                    {
                      name: 'triple sec',
                      children: [],
                    },
                  ],
                },
                {
                  name: 'Green Chartreuse',
                  children: [
                    {
                      name: '',
                      children: [],
                    },
                    {
                      name: 'maraschino liqueur',
                      children: [],
                    },
                    {
                      name: 'triple sec',
                      children: [],
                    },
                  ],
                },
                {
                  name: 'Bénédictine',
                  children: [
                    {
                      name: '',
                      children: [],
                    },
                    {
                      name: 'maraschino liqueur',
                      children: [],
                    },
                    {
                      name: 'triple sec',
                      children: [],
                    },
                  ],
                },
              ],
            },
            {
              name: 'simple syrup',
              children: [
                {
                  name: '',
                  children: [
                    {
                      name: '',
                      children: [],
                    },
                    {
                      name: 'maraschino liqueur',
                      children: [],
                    },
                    {
                      name: 'triple sec',
                      children: [],
                    },
                  ],
                },
                {
                  name: 'Green Chartreuse',
                  children: [
                    {
                      name: '',
                      children: [],
                    },
                    {
                      name: 'maraschino liqueur',
                      children: [],
                    },
                    {
                      name: 'triple sec',
                      children: [],
                    },
                  ],
                },
                {
                  name: 'Bénédictine',
                  children: [
                    {
                      name: '',
                      children: [],
                    },
                    {
                      name: 'maraschino liqueur',
                      children: [],
                    },
                    {
                      name: 'triple sec',
                      children: [],
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: 'bitters',
          children: [
            {
              name: '',
              children: [
                {
                  name: '',
                  children: [
                    {
                      name: '',
                      children: [],
                    },
                    {
                      name: 'maraschino liqueur',
                      children: [],
                    },
                    {
                      name: 'triple sec',
                      children: [],
                    },
                  ],
                },
                {
                  name: 'Green Chartreuse',
                  children: [
                    {
                      name: '',
                      children: [],
                    },
                    {
                      name: 'maraschino liqueur',
                      children: [],
                    },
                    {
                      name: 'triple sec',
                      children: [],
                    },
                  ],
                },
                {
                  name: 'Bénédictine',
                  children: [
                    {
                      name: '',
                      children: [],
                    },
                    {
                      name: 'maraschino liqueur',
                      children: [],
                    },
                    {
                      name: 'triple sec',
                      children: [],
                    },
                  ],
                },
              ],
            },
            {
              name: 'sweet vermouth',
              children: [
                {
                  name: '',
                  children: [
                    {
                      name: '',
                      children: [],
                    },
                    {
                      name: 'maraschino liqueur',
                      children: [],
                    },
                    {
                      name: 'triple sec',
                      children: [],
                    },
                  ],
                },
                {
                  name: 'Green Chartreuse',
                  children: [
                    {
                      name: '',
                      children: [],
                    },
                    {
                      name: 'maraschino liqueur',
                      children: [],
                    },
                    {
                      name: 'triple sec',
                      children: [],
                    },
                  ],
                },
                {
                  name: 'Bénédictine',
                  children: [
                    {
                      name: '',
                      children: [],
                    },
                    {
                      name: 'maraschino liqueur',
                      children: [],
                    },
                    {
                      name: 'triple sec',
                      children: [],
                    },
                  ],
                },
              ],
            },
            {
              name: 'simple syrup',
              children: [
                {
                  name: '',
                  children: [
                    {
                      name: '',
                      children: [],
                    },
                    {
                      name: 'maraschino liqueur',
                      children: [],
                    },
                    {
                      name: 'triple sec',
                      children: [],
                    },
                  ],
                },
                {
                  name: 'Green Chartreuse',
                  children: [
                    {
                      name: '',
                      children: [],
                    },
                    {
                      name: 'maraschino liqueur',
                      children: [],
                    },
                    {
                      name: 'triple sec',
                      children: [],
                    },
                  ],
                },
                {
                  name: 'Bénédictine',
                  children: [
                    {
                      name: '',
                      children: [],
                    },
                    {
                      name: 'maraschino liqueur',
                      children: [],
                    },
                    {
                      name: 'triple sec',
                      children: [],
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: 'Cocchi Americano',
          children: [
            {
              name: '',
              children: [
                {
                  name: '',
                  children: [
                    {
                      name: '',
                      children: [],
                    },
                    {
                      name: 'maraschino liqueur',
                      children: [],
                    },
                    {
                      name: 'triple sec',
                      children: [],
                    },
                  ],
                },
                {
                  name: 'Green Chartreuse',
                  children: [
                    {
                      name: '',
                      children: [],
                    },
                    {
                      name: 'maraschino liqueur',
                      children: [],
                    },
                    {
                      name: 'triple sec',
                      children: [],
                    },
                  ],
                },
                {
                  name: 'Bénédictine',
                  children: [
                    {
                      name: '',
                      children: [],
                    },
                    {
                      name: 'maraschino liqueur',
                      children: [],
                    },
                    {
                      name: 'triple sec',
                      children: [],
                    },
                  ],
                },
              ],
            },
            {
              name: 'sweet vermouth',
              children: [
                {
                  name: '',
                  children: [
                    {
                      name: '',
                      children: [],
                    },
                    {
                      name: 'maraschino liqueur',
                      children: [],
                    },
                    {
                      name: 'triple sec',
                      children: [],
                    },
                  ],
                },
                {
                  name: 'Green Chartreuse',
                  children: [
                    {
                      name: '',
                      children: [],
                    },
                    {
                      name: 'maraschino liqueur',
                      children: [],
                    },
                    {
                      name: 'triple sec',
                      children: [],
                    },
                  ],
                },
                {
                  name: 'Bénédictine',
                  children: [
                    {
                      name: '',
                      children: [],
                    },
                    {
                      name: 'maraschino liqueur',
                      children: [],
                    },
                    {
                      name: 'triple sec',
                      children: [],
                    },
                  ],
                },
              ],
            },
            {
              name: 'simple syrup',
              children: [
                {
                  name: '',
                  children: [
                    {
                      name: '',
                      children: [],
                    },
                    {
                      name: 'maraschino liqueur',
                      children: [],
                    },
                    {
                      name: 'triple sec',
                      children: [],
                    },
                  ],
                },
                {
                  name: 'Green Chartreuse',
                  children: [
                    {
                      name: '',
                      children: [],
                    },
                    {
                      name: 'maraschino liqueur',
                      children: [],
                    },
                    {
                      name: 'triple sec',
                      children: [],
                    },
                  ],
                },
                {
                  name: 'Bénédictine',
                  children: [
                    {
                      name: '',
                      children: [],
                    },
                    {
                      name: 'maraschino liqueur',
                      children: [],
                    },
                    {
                      name: 'triple sec',
                      children: [],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: 'rye whiskey',
      children: [
        {
          name: '',
          children: [
            {
              name: '',
              children: [
                {
                  name: '',
                  children: [
                    {
                      name: '',
                      children: [],
                    },
                    {
                      name: 'maraschino liqueur',
                      children: [],
                    },
                    {
                      name: 'triple sec',
                      children: [],
                    },
                  ],
                },
                {
                  name: 'Green Chartreuse',
                  children: [
                    {
                      name: '',
                      children: [],
                    },
                    {
                      name: 'maraschino liqueur',
                      children: [],
                    },
                    {
                      name: 'triple sec',
                      children: [],
                    },
                  ],
                },
                {
                  name: 'Bénédictine',
                  children: [
                    {
                      name: '',
                      children: [],
                    },
                    {
                      name: 'maraschino liqueur',
                      children: [],
                    },
                    {
                      name: 'triple sec',
                      children: [],
                    },
                  ],
                },
              ],
            },
            {
              name: 'sweet vermouth',
              children: [
                {
                  name: '',
                  children: [
                    {
                      name: '',
                      children: [],
                    },
                    {
                      name: 'maraschino liqueur',
                      children: [],
                    },
                    {
                      name: 'triple sec',
                      children: [],
                    },
                  ],
                },
                {
                  name: 'Green Chartreuse',
                  children: [
                    {
                      name: '',
                      children: [],
                    },
                    {
                      name: 'maraschino liqueur',
                      children: [],
                    },
                    {
                      name: 'triple sec',
                      children: [],
                    },
                  ],
                },
                {
                  name: 'Bénédictine',
                  children: [
                    {
                      name: '',
                      children: [],
                    },
                    {
                      name: 'maraschino liqueur',
                      children: [],
                    },
                    {
                      name: 'triple sec',
                      children: [],
                    },
                  ],
                },
              ],
            },
            {
              name: 'simple syrup',
              children: [
                {
                  name: '',
                  children: [
                    {
                      name: '',
                      children: [],
                    },
                    {
                      name: 'maraschino liqueur',
                      children: [],
                    },
                    {
                      name: 'triple sec',
                      children: [],
                    },
                  ],
                },
                {
                  name: 'Green Chartreuse',
                  children: [
                    {
                      name: '',
                      children: [],
                    },
                    {
                      name: 'maraschino liqueur',
                      children: [],
                    },
                    {
                      name: 'triple sec',
                      children: [],
                    },
                  ],
                },
                {
                  name: 'Bénédictine',
                  children: [
                    {
                      name: '',
                      children: [],
                    },
                    {
                      name: 'maraschino liqueur',
                      children: [],
                    },
                    {
                      name: 'triple sec',
                      children: [],
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: 'amaro',
          children: [
            {
              name: '',
              children: [
                {
                  name: '',
                  children: [
                    {
                      name: '',
                      children: [],
                    },
                    {
                      name: 'maraschino liqueur',
                      children: [],
                    },
                    {
                      name: 'triple sec',
                      children: [],
                    },
                  ],
                },
                {
                  name: 'Green Chartreuse',
                  children: [
                    {
                      name: '',
                      children: [],
                    },
                    {
                      name: 'maraschino liqueur',
                      children: [],
                    },
                    {
                      name: 'triple sec',
                      children: [],
                    },
                  ],
                },
                {
                  name: 'Bénédictine',
                  children: [
                    {
                      name: '',
                      children: [],
                    },
                    {
                      name: 'maraschino liqueur',
                      children: [],
                    },
                    {
                      name: 'triple sec',
                      children: [],
                    },
                  ],
                },
              ],
            },
            {
              name: 'sweet vermouth',
              children: [
                {
                  name: '',
                  children: [
                    {
                      name: '',
                      children: [],
                    },
                    {
                      name: 'maraschino liqueur',
                      children: [],
                    },
                    {
                      name: 'triple sec',
                      children: [],
                    },
                  ],
                },
                {
                  name: 'Green Chartreuse',
                  children: [
                    {
                      name: '',
                      children: [],
                    },
                    {
                      name: 'maraschino liqueur',
                      children: [],
                    },
                    {
                      name: 'triple sec',
                      children: [],
                    },
                  ],
                },
                {
                  name: 'Bénédictine',
                  children: [
                    {
                      name: '',
                      children: [],
                    },
                    {
                      name: 'maraschino liqueur',
                      children: [],
                    },
                    {
                      name: 'triple sec',
                      children: [],
                    },
                  ],
                },
              ],
            },
            {
              name: 'simple syrup',
              children: [
                {
                  name: '',
                  children: [
                    {
                      name: '',
                      children: [],
                    },
                    {
                      name: 'maraschino liqueur',
                      children: [],
                    },
                    {
                      name: 'triple sec',
                      children: [],
                    },
                  ],
                },
                {
                  name: 'Green Chartreuse',
                  children: [
                    {
                      name: '',
                      children: [],
                    },
                    {
                      name: 'maraschino liqueur',
                      children: [],
                    },
                    {
                      name: 'triple sec',
                      children: [],
                    },
                  ],
                },
                {
                  name: 'Bénédictine',
                  children: [
                    {
                      name: '',
                      children: [],
                    },
                    {
                      name: 'maraschino liqueur',
                      children: [],
                    },
                    {
                      name: 'triple sec',
                      children: [],
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: 'bitters',
          children: [
            {
              name: '',
              children: [
                {
                  name: '',
                  children: [
                    {
                      name: '',
                      children: [],
                    },
                    {
                      name: 'maraschino liqueur',
                      children: [],
                    },
                    {
                      name: 'triple sec',
                      children: [],
                    },
                  ],
                },
                {
                  name: 'Green Chartreuse',
                  children: [
                    {
                      name: '',
                      children: [],
                    },
                    {
                      name: 'maraschino liqueur',
                      children: [],
                    },
                    {
                      name: 'triple sec',
                      children: [],
                    },
                  ],
                },
                {
                  name: 'Bénédictine',
                  children: [
                    {
                      name: '',
                      children: [],
                    },
                    {
                      name: 'maraschino liqueur',
                      children: [],
                    },
                    {
                      name: 'triple sec',
                      children: [],
                    },
                  ],
                },
              ],
            },
            {
              name: 'sweet vermouth',
              children: [
                {
                  name: '',
                  children: [
                    {
                      name: '',
                      children: [],
                    },
                    {
                      name: 'maraschino liqueur',
                      children: [],
                    },
                    {
                      name: 'triple sec',
                      children: [],
                    },
                  ],
                },
                {
                  name: 'Green Chartreuse',
                  children: [
                    {
                      name: '',
                      children: [],
                    },
                    {
                      name: 'maraschino liqueur',
                      children: [],
                    },
                    {
                      name: 'triple sec',
                      children: [],
                    },
                  ],
                },
                {
                  name: 'Bénédictine',
                  children: [
                    {
                      name: '',
                      children: [],
                    },
                    {
                      name: 'maraschino liqueur',
                      children: [],
                    },
                    {
                      name: 'triple sec',
                      children: [],
                    },
                  ],
                },
              ],
            },
            {
              name: 'simple syrup',
              children: [
                {
                  name: '',
                  children: [
                    {
                      name: '',
                      children: [],
                    },
                    {
                      name: 'maraschino liqueur',
                      children: [],
                    },
                    {
                      name: 'triple sec',
                      children: [],
                    },
                  ],
                },
                {
                  name: 'Green Chartreuse',
                  children: [
                    {
                      name: '',
                      children: [],
                    },
                    {
                      name: 'maraschino liqueur',
                      children: [],
                    },
                    {
                      name: 'triple sec',
                      children: [],
                    },
                  ],
                },
                {
                  name: 'Bénédictine',
                  children: [
                    {
                      name: '',
                      children: [],
                    },
                    {
                      name: 'maraschino liqueur',
                      children: [],
                    },
                    {
                      name: 'triple sec',
                      children: [],
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: 'Cocchi Americano',
          children: [
            {
              name: '',
              children: [
                {
                  name: '',
                  children: [
                    {
                      name: '',
                      children: [],
                    },
                    {
                      name: 'maraschino liqueur',
                      children: [],
                    },
                    {
                      name: 'triple sec',
                      children: [],
                    },
                  ],
                },
                {
                  name: 'Green Chartreuse',
                  children: [
                    {
                      name: '',
                      children: [],
                    },
                    {
                      name: 'maraschino liqueur',
                      children: [],
                    },
                    {
                      name: 'triple sec',
                      children: [],
                    },
                  ],
                },
                {
                  name: 'Bénédictine',
                  children: [
                    {
                      name: '',
                      children: [],
                    },
                    {
                      name: 'maraschino liqueur',
                      children: [],
                    },
                    {
                      name: 'triple sec',
                      children: [],
                    },
                  ],
                },
              ],
            },
            {
              name: 'sweet vermouth',
              children: [
                {
                  name: '',
                  children: [
                    {
                      name: '',
                      children: [],
                    },
                    {
                      name: 'maraschino liqueur',
                      children: [],
                    },
                    {
                      name: 'triple sec',
                      children: [],
                    },
                  ],
                },
                {
                  name: 'Green Chartreuse',
                  children: [
                    {
                      name: '',
                      children: [],
                    },
                    {
                      name: 'maraschino liqueur',
                      children: [],
                    },
                    {
                      name: 'triple sec',
                      children: [],
                    },
                  ],
                },
                {
                  name: 'Bénédictine',
                  children: [
                    {
                      name: '',
                      children: [],
                    },
                    {
                      name: 'maraschino liqueur',
                      children: [],
                    },
                    {
                      name: 'triple sec',
                      children: [],
                    },
                  ],
                },
              ],
            },
            {
              name: 'simple syrup',
              children: [
                {
                  name: '',
                  children: [
                    {
                      name: '',
                      children: [],
                    },
                    {
                      name: 'maraschino liqueur',
                      children: [],
                    },
                    {
                      name: 'triple sec',
                      children: [],
                    },
                  ],
                },
                {
                  name: 'Green Chartreuse',
                  children: [
                    {
                      name: '',
                      children: [],
                    },
                    {
                      name: 'maraschino liqueur',
                      children: [],
                    },
                    {
                      name: 'triple sec',
                      children: [],
                    },
                  ],
                },
                {
                  name: 'Bénédictine',
                  children: [
                    {
                      name: '',
                      children: [],
                    },
                    {
                      name: 'maraschino liqueur',
                      children: [],
                    },
                    {
                      name: 'triple sec',
                      children: [],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: '',
      children: [
        {
          name: '',
          children: [
            {
              name: '',
              children: [
                {
                  name: '',
                  children: [
                    {
                      name: '',
                      children: [],
                    },
                    {
                      name: 'maraschino liqueur',
                      children: [],
                    },
                    {
                      name: 'triple sec',
                      children: [],
                    },
                  ],
                },
                {
                  name: 'Green Chartreuse',
                  children: [
                    {
                      name: '',
                      children: [],
                    },
                    {
                      name: 'maraschino liqueur',
                      children: [],
                    },
                    {
                      name: 'triple sec',
                      children: [],
                    },
                  ],
                },
                {
                  name: 'Bénédictine',
                  children: [
                    {
                      name: '',
                      children: [],
                    },
                    {
                      name: 'maraschino liqueur',
                      children: [],
                    },
                    {
                      name: 'triple sec',
                      children: [],
                    },
                  ],
                },
              ],
            },
            {
              name: 'sweet vermouth',
              children: [
                {
                  name: '',
                  children: [
                    {
                      name: '',
                      children: [],
                    },
                    {
                      name: 'maraschino liqueur',
                      children: [],
                    },
                    {
                      name: 'triple sec',
                      children: [],
                    },
                  ],
                },
                {
                  name: 'Green Chartreuse',
                  children: [
                    {
                      name: '',
                      children: [],
                    },
                    {
                      name: 'maraschino liqueur',
                      children: [],
                    },
                    {
                      name: 'triple sec',
                      children: [],
                    },
                  ],
                },
                {
                  name: 'Bénédictine',
                  children: [
                    {
                      name: '',
                      children: [],
                    },
                    {
                      name: 'maraschino liqueur',
                      children: [],
                    },
                    {
                      name: 'triple sec',
                      children: [],
                    },
                  ],
                },
              ],
            },
            {
              name: 'simple syrup',
              children: [
                {
                  name: '',
                  children: [
                    {
                      name: '',
                      children: [],
                    },
                    {
                      name: 'maraschino liqueur',
                      children: [],
                    },
                    {
                      name: 'triple sec',
                      children: [],
                    },
                  ],
                },
                {
                  name: 'Green Chartreuse',
                  children: [
                    {
                      name: '',
                      children: [],
                    },
                    {
                      name: 'maraschino liqueur',
                      children: [],
                    },
                    {
                      name: 'triple sec',
                      children: [],
                    },
                  ],
                },
                {
                  name: 'Bénédictine',
                  children: [
                    {
                      name: '',
                      children: [],
                    },
                    {
                      name: 'maraschino liqueur',
                      children: [],
                    },
                    {
                      name: 'triple sec',
                      children: [],
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: 'amaro',
          children: [
            {
              name: '',
              children: [
                {
                  name: '',
                  children: [
                    {
                      name: '',
                      children: [],
                    },
                    {
                      name: 'maraschino liqueur',
                      children: [],
                    },
                    {
                      name: 'triple sec',
                      children: [],
                    },
                  ],
                },
                {
                  name: 'Green Chartreuse',
                  children: [
                    {
                      name: '',
                      children: [],
                    },
                    {
                      name: 'maraschino liqueur',
                      children: [],
                    },
                    {
                      name: 'triple sec',
                      children: [],
                    },
                  ],
                },
                {
                  name: 'Bénédictine',
                  children: [
                    {
                      name: '',
                      children: [],
                    },
                    {
                      name: 'maraschino liqueur',
                      children: [],
                    },
                    {
                      name: 'triple sec',
                      children: [],
                    },
                  ],
                },
              ],
            },
            {
              name: 'sweet vermouth',
              children: [
                {
                  name: '',
                  children: [
                    {
                      name: '',
                      children: [],
                    },
                    {
                      name: 'maraschino liqueur',
                      children: [],
                    },
                    {
                      name: 'triple sec',
                      children: [],
                    },
                  ],
                },
                {
                  name: 'Green Chartreuse',
                  children: [
                    {
                      name: '',
                      children: [],
                    },
                    {
                      name: 'maraschino liqueur',
                      children: [],
                    },
                    {
                      name: 'triple sec',
                      children: [],
                    },
                  ],
                },
                {
                  name: 'Bénédictine',
                  children: [
                    {
                      name: '',
                      children: [],
                    },
                    {
                      name: 'maraschino liqueur',
                      children: [],
                    },
                    {
                      name: 'triple sec',
                      children: [],
                    },
                  ],
                },
              ],
            },
            {
              name: 'simple syrup',
              children: [
                {
                  name: '',
                  children: [
                    {
                      name: '',
                      children: [],
                    },
                    {
                      name: 'maraschino liqueur',
                      children: [],
                    },
                    {
                      name: 'triple sec',
                      children: [],
                    },
                  ],
                },
                {
                  name: 'Green Chartreuse',
                  children: [
                    {
                      name: '',
                      children: [],
                    },
                    {
                      name: 'maraschino liqueur',
                      children: [],
                    },
                    {
                      name: 'triple sec',
                      children: [],
                    },
                  ],
                },
                {
                  name: 'Bénédictine',
                  children: [
                    {
                      name: '',
                      children: [],
                    },
                    {
                      name: 'maraschino liqueur',
                      children: [],
                    },
                    {
                      name: 'triple sec',
                      children: [],
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: 'bitters',
          children: [
            {
              name: '',
              children: [
                {
                  name: '',
                  children: [
                    {
                      name: '',
                      children: [],
                    },
                    {
                      name: 'maraschino liqueur',
                      children: [],
                    },
                    {
                      name: 'triple sec',
                      children: [],
                    },
                  ],
                },
                {
                  name: 'Green Chartreuse',
                  children: [
                    {
                      name: '',
                      children: [],
                    },
                    {
                      name: 'maraschino liqueur',
                      children: [],
                    },
                    {
                      name: 'triple sec',
                      children: [],
                    },
                  ],
                },
                {
                  name: 'Bénédictine',
                  children: [
                    {
                      name: '',
                      children: [],
                    },
                    {
                      name: 'maraschino liqueur',
                      children: [],
                    },
                    {
                      name: 'triple sec',
                      children: [],
                    },
                  ],
                },
              ],
            },
            {
              name: 'sweet vermouth',
              children: [
                {
                  name: '',
                  children: [
                    {
                      name: '',
                      children: [],
                    },
                    {
                      name: 'maraschino liqueur',
                      children: [],
                    },
                    {
                      name: 'triple sec',
                      children: [],
                    },
                  ],
                },
                {
                  name: 'Green Chartreuse',
                  children: [
                    {
                      name: '',
                      children: [],
                    },
                    {
                      name: 'maraschino liqueur',
                      children: [],
                    },
                    {
                      name: 'triple sec',
                      children: [],
                    },
                  ],
                },
                {
                  name: 'Bénédictine',
                  children: [
                    {
                      name: '',
                      children: [],
                    },
                    {
                      name: 'maraschino liqueur',
                      children: [],
                    },
                    {
                      name: 'triple sec',
                      children: [],
                    },
                  ],
                },
              ],
            },
            {
              name: 'simple syrup',
              children: [
                {
                  name: '',
                  children: [
                    {
                      name: '',
                      children: [],
                    },
                    {
                      name: 'maraschino liqueur',
                      children: [],
                    },
                    {
                      name: 'triple sec',
                      children: [],
                    },
                  ],
                },
                {
                  name: 'Green Chartreuse',
                  children: [
                    {
                      name: '',
                      children: [],
                    },
                    {
                      name: 'maraschino liqueur',
                      children: [],
                    },
                    {
                      name: 'triple sec',
                      children: [],
                    },
                  ],
                },
                {
                  name: 'Bénédictine',
                  children: [
                    {
                      name: '',
                      children: [],
                    },
                    {
                      name: 'maraschino liqueur',
                      children: [],
                    },
                    {
                      name: 'triple sec',
                      children: [],
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: 'Cocchi Americano',
          children: [
            {
              name: '',
              children: [
                {
                  name: '',
                  children: [
                    {
                      name: '',
                      children: [],
                    },
                    {
                      name: 'maraschino liqueur',
                      children: [],
                    },
                    {
                      name: 'triple sec',
                      children: [],
                    },
                  ],
                },
                {
                  name: 'Green Chartreuse',
                  children: [
                    {
                      name: '',
                      children: [],
                    },
                    {
                      name: 'maraschino liqueur',
                      children: [],
                    },
                    {
                      name: 'triple sec',
                      children: [],
                    },
                  ],
                },
                {
                  name: 'Bénédictine',
                  children: [
                    {
                      name: '',
                      children: [],
                    },
                    {
                      name: 'maraschino liqueur',
                      children: [],
                    },
                    {
                      name: 'triple sec',
                      children: [],
                    },
                  ],
                },
              ],
            },
            {
              name: 'sweet vermouth',
              children: [
                {
                  name: '',
                  children: [
                    {
                      name: '',
                      children: [],
                    },
                    {
                      name: 'maraschino liqueur',
                      children: [],
                    },
                    {
                      name: 'triple sec',
                      children: [],
                    },
                  ],
                },
                {
                  name: 'Green Chartreuse',
                  children: [
                    {
                      name: '',
                      children: [],
                    },
                    {
                      name: 'maraschino liqueur',
                      children: [],
                    },
                    {
                      name: 'triple sec',
                      children: [],
                    },
                  ],
                },
                {
                  name: 'Bénédictine',
                  children: [
                    {
                      name: '',
                      children: [],
                    },
                    {
                      name: 'maraschino liqueur',
                      children: [],
                    },
                    {
                      name: 'triple sec',
                      children: [],
                    },
                  ],
                },
              ],
            },
            {
              name: 'simple syrup',
              children: [
                {
                  name: '',
                  children: [
                    {
                      name: '',
                      children: [],
                    },
                    {
                      name: 'maraschino liqueur',
                      children: [],
                    },
                    {
                      name: 'triple sec',
                      children: [],
                    },
                  ],
                },
                {
                  name: 'Green Chartreuse',
                  children: [
                    {
                      name: '',
                      children: [],
                    },
                    {
                      name: 'maraschino liqueur',
                      children: [],
                    },
                    {
                      name: 'triple sec',
                      children: [],
                    },
                  ],
                },
                {
                  name: 'Bénédictine',
                  children: [
                    {
                      name: '',
                      children: [],
                    },
                    {
                      name: 'maraschino liqueur',
                      children: [],
                    },
                    {
                      name: 'triple sec',
                      children: [],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}

A.treeData2 = {
  children: [
    {
      name: 'gin',
      children: [
        {},
        {
          name: 'amaro',
          children: [
            {},
            {
              name: 'sweet vermouth',
              children: [
                {
                  name: '',
                  children: [
                    {
                      name: 'Negroni',
                      children: [],
                      class: 'match',
                      mix: 'gin, amaro, sweet vermouth, Negroni',
                    },
                  ],
                  uid: 'uid116',
                  mix: 'gin, amaro, sweet vermouth',
                  'on-match-path': 'on-match-path',
                },
                {},
                {},
              ],
              uid: 'uid114',
              'on-match-path': 'on-match-path',
            },
            {},
          ],
          uid: 'uid86',
          'on-match-path': 'on-match-path',
        },
        {
          name: 'bitters',
          children: [
            {},
            {
              name: 'sweet vermouth',
              children: [
                {
                  name: '',
                  children: [
                    {},
                    {
                      name: 'maraschino liqueur',
                      children: [
                        {
                          name: 'Martinez',
                          children: [],
                          class: 'match',
                        },
                      ],
                      uid: 'uid196',
                      mix: 'gin, bitters, sweet vermouth, maraschino liqueur',
                      'on-match-path': 'on-match-path',
                    },
                    {},
                  ],
                  uid: 'uid192',
                  mix: 'gin, bitters, sweet vermouth',
                  'on-match-path': 'on-match-path',
                },
                {},
                {},
              ],
              uid: 'uid190',
              'on-match-path': 'on-match-path',
            },
            {},
          ],
          uid: 'uid162',
          'on-match-path': 'on-match-path',
        },
        {},
      ],
      uid: 'uid4',
      'on-match-path': 'on-match-path',
    },
    {
      name: 'rye whiskey',
      children: [
        {},
        {
          name: 'amaro',
          children: [
            {},
            {
              name: 'sweet vermouth',
              children: [
                {
                  name: '',
                  children: [
                    {
                      name: 'Boulevardier',
                      children: [],
                      class: 'match',
                      mix: 'rye whiskey, amaro, sweet vermouth, Boulevardier',
                    },
                  ],
                  uid: 'uid436',
                  mix: 'rye whiskey, amaro, sweet vermouth',
                  'on-match-path': 'on-match-path',
                },
                {},
                {},
              ],
              uid: 'uid434',
              'on-match-path': 'on-match-path',
            },
            {},
          ],
          uid: 'uid406',
          'on-match-path': 'on-match-path',
        },
        {
          name: 'bitters',
          children: [
            {},
            {
              name: 'sweet vermouth',
              children: [
                {
                  name: '',
                  children: [
                    {
                      name: 'Manhattan',
                      children: [],
                      class: 'match',
                      mix: 'rye whiskey, bitters, sweet vermouth, Manhattan',
                    },
                  ],
                  uid: 'uid512',
                  mix: 'rye whiskey, bitters, sweet vermouth',
                  'on-match-path': 'on-match-path',
                },
                {},
                {
                  name: 'Bénédictine',
                  children: [
                    {
                      name: 'Preakness',
                      children: [],
                      class: 'match',
                      mix: 'rye whiskey, bitters, sweet vermouth, Bénédictine, Preakness',
                    },
                  ],
                  uid: 'uid524',
                  mix: 'rye whiskey, bitters, sweet vermouth, Bénédictine',
                  'on-match-path': 'on-match-path',
                },
              ],
              uid: 'uid510',
              'on-match-path': 'on-match-path',
            },
            {
              name: 'simple syrup',
              children: [
                {
                  name: '',
                  children: [
                    {
                      name: 'Old Fashioned',
                      children: [],
                      class: 'match',
                      mix: 'rye whiskey, bitters, simple syrup, Old Fashioned',
                    },
                  ],
                  uid: 'uid530',
                  mix: 'rye whiskey, bitters, simple syrup',
                  'on-match-path': 'on-match-path',
                },
                {},
                {},
              ],
              uid: 'uid528',
              'on-match-path': 'on-match-path',
            },
          ],
          uid: 'uid482',
          'on-match-path': 'on-match-path',
        },
        {},
      ],
      uid: 'uid324',
      'on-match-path': 'on-match-path',
    },
    {
      name: '',
      children: [
        {},
        {
          name: 'amaro',
          children: [
            {},
            {
              name: 'sweet vermouth',
              children: [
                {
                  name: '',
                  children: [
                    {
                      name: 'Americano',
                      children: [],
                      class: 'match',
                      mix: 'amaro, sweet vermouth, Americano',
                    },
                  ],
                  uid: 'uid742',
                  mix: 'amaro, sweet vermouth',
                  'on-match-path': 'on-match-path',
                },
                {},
                {},
              ],
              uid: 'uid740',
              'on-match-path': 'on-match-path',
            },
            {},
          ],
          uid: 'uid712',
          'on-match-path': 'on-match-path',
        },
        {},
        {},
      ],
      uid: 'uid630',
      'on-match-path': 'on-match-path',
    },
  ],
  uid: 'uid2',
}
