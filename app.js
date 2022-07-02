const _ = require('lodash')

const items = [1, [2, [3, [4]]]]
const newIteams = _.flattenDeep(items)

console.log(newIteams);