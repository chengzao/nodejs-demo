var Animal = require('./model/Animal')

Animal.findByName('fido', function (err, animals) {
  console.log(animals);
});

var dog = new Animal({ name: 'Fido', type: 'dog' });
dog.save()
