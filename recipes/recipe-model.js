const db = require('../data/dbConfig')
const { where } = require('../data/dbConfig')


module.exports = {
    getRecipes ,
    getShoppingList , 
    getInstructions
}


function getRecipes(){
    return db('recipes')

}

function getShoppingList(recipe_id){
    return db('shopping_list')
    .select('*', 'ingredient_id')
    .from('shopping_list as s')
    .where({recipe_id})
    .join('ingredient_list as i' , 's.id', 'i.id')
}

function getInstructions(recipe_id){
    return db('intructions')
    .select('*', 'instructions')
    .from('instructions as i')
    .where({recipe_id})
    .orderBy('step_number')
    
  
    

 
    
}