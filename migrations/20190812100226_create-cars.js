
exports.up = function(knex) {
    return knex.schema.createTable('users', tbl => {
        tbl.increments();
        tbl.text('VIN',99)
            .unique()
            .notNullable();
        tbl.text('make', 99)
            .notNullable();
        tbl.text('model')
            .notNullable();
        tbl.integer('mileage')
            .notNullable();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('users');
};
