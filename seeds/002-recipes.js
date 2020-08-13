
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {recipe_name: 'Pizza' , accounts_id: 1},
        {recipe_name: 'Buttermilk Biscuits' , accounts_id: 2},
        {recipe_name: 'Cobb Salad' , accounts_id: 3}
      ]);
    });
};
