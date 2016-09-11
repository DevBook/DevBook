
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('users').insert({name: 'George Green', age: 23, story: "I am from Wellington.", image: "https://avatars1.githubusercontent.com/u/18493037?v=3&s=460"}),
        knex('users').insert({name: "Guanzhou Zhao", age: 27, story: "I am from Luoyang.", image: "https://avatars2.githubusercontent.com/u/19282953?v=3&s=460"}),
        knex('users').insert({name: "Steve Sharp", age: 29, story: "I am from Zimbabwe.", image: "https://avatars2.githubusercontent.com/u/13898345?v=3&s=460"}),
        knex('users').insert({name: "Lisa Seeto", age: 25, story: "I am from Australia.", image: "https://avatars0.githubusercontent.com/u/20085843?v=3&s=460"}),
        knex('users').insert({name: "Jock Dalby", age: 30, story: "I am from Northland.", image: "https://avatars2.githubusercontent.com/u/19864300?v=3&s=460"}),
      ]);
    });
};
