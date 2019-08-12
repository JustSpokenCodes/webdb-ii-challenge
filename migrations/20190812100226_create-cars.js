
exports.up = function(knex) {
    return knex.schema.createTable('users', tbl => {
        tbl.increments();
        tbl.text('owner',99)
            .unique()
            .notNullable();
        tbl.text('car', 99)
            .notNullable();
        tbl.text('make')
            .notNullable();
        tbl.integer('car-year')
            .notNullable();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('users');
};
