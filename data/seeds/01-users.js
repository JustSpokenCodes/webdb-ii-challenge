
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { VIN: "10293495", make: "Acura", model: "Compact", mileage: "192000" },
        { VIN: "23450223", make: "BMW", model: "Midsize", mileage: "102000" },
        { VIN: "34459009", make: "Honda", model: "Minivan", mileage: "450690" },
        { VIN: "58490394", make: "Toyota", model: "Camry", mileage: "200000" }
      ]);
    });
};
