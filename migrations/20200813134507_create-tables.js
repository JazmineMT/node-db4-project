
exports.up = function(knex) {
    return knex.schema 
    .createTable('accounts', tbl =>{
        tbl.increments();
        tbl.string('name')
        .notNullable();
        tbl.string('email', 128)
        .unique()
        .notNullable();
    })
    .createTable('recipes', tbl => {
        tbl.increments();
        tbl.text('recipe_name')
        .unique()
        .notNullable();
        tbl.integer('accounts_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('accounts')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
    })
    .createTable('instructions' , tbl => {
        tbl.increments();
        tbl.integer('step_number')
        .unsigned()
        .notNullable();
        tbl.text('instructions')
        .notNullable();
        tbl.integer('recipe_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('recipes')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
        
    })
    .createTable('shopping_list', tbl => {
        tbl.increments();
        tbl.integer('recipe_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('recipes')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
        tbl.integer('ingredient_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('ingredients')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
        tbl.decimal('quantity' , 120)
        .notNullable();

    })
    .createTable('ingredient_list', tbl => {
        tbl.increments();
        tbl.text('ingredient_type' , 128);
    })
  
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('accounts')
    .dropTableIfExists('recipes')
    .dropTableIfExists('instructions')
    .dropTableIfExists('shopping_list')
    .dropTableIfExists('ingredient_list')
  
};
