
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('accounts').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('accounts').insert([
        {name: 'Jazmine', email:'jazmine@jazmine.com' },
        {name: 'Richard', email:'richard@richard.com' },
        {name: 'Chris', email:'chris@chris.com' }
      ]);
    });
};
