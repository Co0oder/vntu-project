const knex = require('../data')
table = 'users' 

module.exports = {
    get : () => knex('users').select()
}