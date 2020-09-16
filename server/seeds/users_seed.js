
exports.seed = function(knex) {
  return knex('users').del()
    .then(function () {
      return knex('users').insert([
        {nick: 'Co0oder', salt: 'kahs%s#sa', password: 'kahs%s$#%&#sfsa'},
        {nick: 'Vlad', salt: 'ahs%s#sa', password: 'kahs%s$#%&#sfsa'}
      ]);
    });
};
