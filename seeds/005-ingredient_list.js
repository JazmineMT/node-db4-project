
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredient_list').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredient_list').insert([
        {ingredient_type: 'Frozen Pizza'},
        {ingredient_type: ' 1 Egg'},
        {ingredient_type: ' 1 cup of Buiscuit Mix'},
        {ingredient_type: ' Head of Lettuce'},
        {ingredient_type: 'Tomatoes'},
        {ingredient_type: 'Bacon'},
        {ingredient_type: 'Avocado'},
        {ingredient_type: 'Ranch'}

      ]);
    });
};
