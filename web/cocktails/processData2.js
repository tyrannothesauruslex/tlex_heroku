testObj = {
  gn: {
    amar: {
      sv: 'Ng',
    },
    sv: {
      bit: 'Mtz',
    },
  },
  rw: {
    bit: {
      ss: 'OF',
      sv: 'Mnhtn',
    },
    amar: {
      sv: 'Blvdr',
    },
  },
}

/*
  or... resorting the branch order -> resort the drnkNmIngr?
  equiv: ... pre-bake key for each order
  ingStrs = {
    'sprt-bit-swe-hl-fl-cord-misc': 'rw-bit-ss-0-0-0-0'
    'bit-swe-sprt-hl-fl-cord-misc': 'bit-ss-rw-0-0-0-0'
    'hl-fl-cord-bit-swe-sprt-misc': '0-0-0-bit-ss-rw-0'
  }

  Or... instead of tracking index of children,
  first store as direct paths per ing

*/

// var root = {name: '', children:[]}
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
// copy(A.root)

// part 2
var convertObjToNameChildrenTree = function(tree) {
  // testClone = convertObjToNameChildrenTree(testObj)
  var clone = { name: 'head', children: [] }
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
      if (!cloneChildArr) {
        // cloneChildArr = _.set(clone, clonepathkey, [])

        debugger
      }
      cloneChildArr.push(child)

      // if (obj[key] === 'Prkns') debugger

      // cloneChildArr = _.set(clone, clonepathkey, child)

      var childCount = cloneChildArr.length - 1
      clonepathkey += '.' + childCount

      /*if (obj[key] === 'drnk') {
        leafChild = { name: obj[key], children: [] }
        _.set(clone, clonepathkey + '.children', leafChild)
      }*/
      if (typeof obj[key] === 'object') {
        walk(obj[key], pathkey, clonepathkey)
      } else if (key === 'drnk') {
        // debugger
        // console.log('drnk', obj[key])
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

testClone = convertObjToNameChildrenTree(A.root)

// copy(testClone)

// backup, before leaves

var convertObjToNameChildrenTree = function(tree) {
  // testClone = convertObjToNameChildrenTree(testObj)
  var clone = { name: 'head', children: [] }
  var walk = function(obj, path, clonepath) {
    path = path || ''
    for (var key in obj) {
      // gn, rw
      var child = { name: key, children: [] }
      if (typeof obj[key] === 'object') {
        var pathkey = [path, key].filter(x => x).join('.')
        var clonepathkey = clonepath.split('.')
        clonepathkey = clonepathkey.filter(x => x)
        clonepathkey.push('children')
        clonepathkey = clonepathkey.join('.')

        console.log('pathkey', pathkey)
        console.log('clonepathkey', clonepathkey)

        var cloneChildArr = _.get(clone, clonepathkey)
        cloneChildArr.push(child)
        var childCount = cloneChildArr.length - 1

        clonepathkey += '.' + childCount

        walk(obj[key], pathkey, clonepathkey)
      } else {
        // leaf
        var pathkey = [path, key].filter(x => x).join('.')
      }
    }
  }
  walk(tree, '', '')
  return clone
}

var getLeaves = function(tree) {
  var leaves = []
  var values = []
  var walk = function(obj, path) {
    path = path || ''
    for (var key in obj) {
      if (obj.hasOwnProperty(key)) {
        if (typeof obj[key] === 'object' || obj[key] instanceof Array) {
          var pathkey = [path, key].filter(x => x).join('.')
          // leaves.push(pathkey)
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

var writeUIDs = function(tree) {
  var uid = 0
  var walk = function(obj, path) {
    uid += 1
    path = path || ''
    for (var key in obj) {
      if (obj.hasOwnProperty(key)) {
        if (typeof obj[key] === 'object' || obj[key] instanceof Array) {
          var pathkey = [path, key].filter(x => x).join('.')
          if (typeof obj[key] === 'object') {
            obj['uid'] = 'uid' + uid
          }
          walk(obj[key], pathkey)
        } else {
          // leaf
          var pathkey = [path, key].filter(x => x).join('.')
        }
      }
    }
  }
  walk(tree, '')
}
writeUIDs([A.treeData2])

var writeValueWhereKey = function(
  tree,
  searchKey,
  searchValue,
  writeKey,
  writeValue
) {
  // writeValueWhereKey()
  console.log(tree, searchKey, searchValue, writeValue)
  var uid = 0
  var walk = function(obj, path) {
    uid += 1
    path = path || ''

    if (obj.hasOwnProperty(searchKey)) {
      if (obj[searchKey] === searchValue) {
        obj[writeKey] = writeValue
        return
      }
    }

    for (var key in obj) {
      if (obj.hasOwnProperty(key)) {
        // console.log(key, obj[key])
        if (typeof obj[key] === 'object' || obj[key] instanceof Array) {
          var pathkey = [path, key].filter(x => x).join('.')
          walk(obj[key], pathkey)
        } else {
          // leaf
          var pathkey = [path, key].filter(x => x).join('.')
        }
      }
    }
  }
  walk(tree, '')
}

var cloneTreeWhereKeyValue = function(tree, searchKey, searchValue) {
  /*
  cloneTree = cloneTreeWhereKeyValue(A.treeData2, 'on-match-path', 'on-match-path')
  copy(cloneTree)
  */
  var clone = {}
  var walk = function(obj, path) {
    path = path || ''
    for (var key in obj) {
      if (obj.hasOwnProperty(key)) {
        if (typeof obj[key] === 'object' || obj[key] instanceof Array) {
          var pathkey = [path, key].filter(x => x).join('.')
          if (obj[key][searchKey]) {
            if (obj[key][searchKey] === searchValue) {
              console.log(clone, pathkey.split('.'), cj(obj[key]))
              // debugger
              _.set(clone, pathkey.split('.'), cj(obj[key]))
            } else {
              _.unset(clone, pathkey.split('.'))
            }
          }
          walk(obj[key], pathkey)
        } else {
          // leaf
          var pathkey = [path, key].filter(x => x).join('.')
        }
      }
    }
  }
  walk(tree, '')
  return clone
}

/*
  FML
  JSON.stringify(cloneTree)
  regex replace children without on-match-path

"children":\[.*on-match-path.*\]
"children":\[[^!\]]*\]
"children":\[[^!]*\]
{"name".*"children":\[[^!\[\]}]*\]}
{"name".*"children":\[\]}

,?{"name[^!]*children":[^!]*},?

*/

/*
  Then create a function to copy the object, but only where obj['on-match-path'] = 'on-match-path'
  lodash?

nb: first node
A.treeData2['on-match-path'] = 'on-match-path'
A.newTreeData = _.filter(A.treeData2, function(item){
  console.log(item)
  return item['on-match-path'] === 'on-match-path';
});

A.newTreeData = _.pickBy(A.treeData2, function(item){
  console.log(item)
  return item['on-match-path'] === 'on-match-path';
});

*/

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

    // id match, add it as child[0].name
    var match = compareListsLookup(cummNames, A.drinkNameAndIngredients)
    if (match.length > 1) {
      // match = `<span class='match'>${match}</span>`
      _.set(obj, path + '.children', [
        { name: match, children: [], class: 'match' },
      ])
      A.matchedNames.push(match)
    } else {
      // _.unset(obj, path + '.children')
    }
    // return [d.data.name, match].filter(x => x).join(' ⇒ ') // ⇒ ⟹
  }
}

appendReductionToObjTreeLeaves([A.treeData2], 7)

// sorts ingreds
/*b = a.sort((a, b) => {
  var ain = a.ingredients
  var bin = b.ingredients
  if (ain[0] < bin[0]) return -1
  if (ain[0] > bin[0]) return 1
  if (ain[1] < bin[1]) return -1
  if (ain[1] > bin[1]) return 1
  if (ain[2] < bin[2]) return -1
  if (ain[2] > bin[2]) return 1
  return 0
})
*/

function cleanup(arr, obj) {
  for (var i = 0; i < arr.length; i++) {
    var pa = arr[i]
    // console.log(pa)

    // test all children to see if any has class: match
    // pa points to a leaf, so pop off the leaf prop
    pa = pa.slice(0, -1)
    // console.log('pa sliced', pa)
    // var leafParent = _.get(obj, pa.join('.'))
    var leafParent = deepValue(obj, pa.join('.'))
    // console.log('leafParent', leafParent)
    if (leafParent) {
      if (leafParent.class === 'match') {
        continue
      }
      if (leafParent['on-match-path'] === 'on-match-path') {
        continue
      }
      if (!leafParent.children) {
        console.log('1 deleting', leafParent)
        for (var lpKey in leafParent) {
          delete leafParent[lpKey]
        }
        continue
      }
      leafParent.children = leafParent.children.filter(x => {
        if (typeof x === 'object') {
          if (Object.keys(x).length === 0) {
            return false // The object had no properties, so delete that property
          }
        }
        return x != null
      })
      if (leafParent.children.length === 0) {
        console.log('2 deleting', leafParent)
        // debugger
        // delete leafParent.children
        // delete deepValue(obj, pa.join('.'))
        // leafParent = undefined
        // deepSet(obj, pa.join('.'), undefined)
        for (var lpKey in leafParent) {
          delete leafParent[lpKey]
        }
        console.log(JSON.stringify(obj))
        // _.unset(obj, pa.join('.'))
      }
    }
  }
}

// cleanTree = cj(A.fam)
// cleanTree = cj(A.treeData2)
/*

leafPathsArrays = getLeaves(cleanTree).map(x => x.split('.'))
leafPathsArrays.sort((a, b) => {
  if (a.length > b.length) return 1
  if (a.length < b.length) return -1
  return 0
})

leafPathsArrays15 = leafPathsArrays.filter(x => x.length === 15)
leafPathsArrays13 = leafPathsArrays.filter(x => x.length === 13)
leafPathsArrays11 = leafPathsArrays.filter(x => x.length === 11)
leafPathsArrays9 = leafPathsArrays.filter(x => x.length === 9)
leafPathsArrays7 = leafPathsArrays.filter(x => x.length === 7)
leafPathsArrays5 = leafPathsArrays.filter(x => x.length === 5)
leafPathsArrays3 = leafPathsArrays.filter(x => x.length === 3)

cleanup(leafPathsArrays15, cleanTree)
cleanup(leafPathsArrays13, cleanTree)

cleanup(leafPathsArrays11, cleanTree)
cleanup(leafPathsArrays9, cleanTree)
cleanup(leafPathsArrays7, cleanTree)
cleanup(leafPathsArrays5, cleanTree)
cleanup(leafPathsArrays3, cleanTree)
copy(cleanTree)
*/
var deepValue = function(obj, path) {
  for (var i = 0, path = path.split('.'), len = path.length; i < len; i++) {
    obj = obj[path[i]]
  }
  return obj
}

var deepSet = function(obj, path, newValue) {
  for (var i = 0, path = path.split('.'), len = path.length; i < len; i++) {
    obj = obj[path[i]]
  }
  console.log(obj, path, newValue)
  debugger
  obj = newValue
}
