
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('instructions').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('instructions').insert([
        {
          recipe_id: 1,
          step_number: 1,
          instructions: "Preheat oven to 450 degrees",
      },
      {
        recipe_id: 1,
        step_number: 2,
        instructions: "Place place pizza in over for 18 minutes or until crust is golen borwn",
    },
    {
      recipe_id: 1,
      step_number: 3,
      instructions: "Wait 2-5 minutes before cutting and enjoy",
  },
  {
    recipe_id: 2,
    step_number: 1,
    instructions: "Combine biscuit mix with  a egge and water until dough forms",
},
{
  recipe_id: 2,
  step_number: 2,
  instructions: "knead for 5 -10 minutes",
},
{
  recipe_id: 2,
  step_number: 3,
  instructions: " Cut into 2inch biscuits and bake at 350 degress for 15 minutes",
},
{
  recipe_id: 3,
  step_number: 1,
  instructions: " Cook bacon until crispy",
},
{
  recipe_id: 3,
  step_number: 2,
  instructions: "Hard boil eggs",
},
{
  recipe_id: 3,
  step_number: 3,
  instructions: "Chop lettuce, tomatoes, avocado",
},
{
  recipe_id: 3,
  step_number: 4,
  instructions: "Combine all ingredients and trop with ranch",
},





      ]);
    });
};
