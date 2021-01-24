document.addEventListener('DOMContentLoaded', function() {
  // code here...

  // User object with the following properties:
  // - firstName = string
  // - lastName = string
  // - age = integer
  // - occupation = string
  // - address = object, with number, street and city as properties
  // - friends = array
  // - hasCar = boolean
  var user = {
    firstName: 'Jinty Jessie',
    lastName: 'Janet',
    age: 101,
    occupation: 'Designer & Coder',
    address: {
      number: 9,
      street: 'Kissing Tree Lane',
      city: 'Warwick'
    },
    friends: ['Steve', 'Beck', 'Little Boris'],
    hasCar: true
  };
  console.log(user);
  // Using the existing HTML elements, assigned each element its respective property from the new object

  // 1
  // name
  var nameElement = document.getElementById("name");
  nameElement.innerText = `${user.firstName} ${user.lastName}`;

  // age
  var ageElement = document.getElementById("age");
  ageElement.innerText = `${user.age}`;

  // occupation
  var occupationElement = document.getElementById("occupation");
  occupationElement.innerText = `${user.occupation}`;

  // hasCar
  var hasCarElement = document.getElementById("hasCar");
  hasCarElement.innerText = `${user.hasCar}`;

  // 2
  // address number
  var numberElement = document.getElementById("adrsNumber");
  numberElement.innerText = `${user.address.number}`;

  // address street
  var streetElement = document.getElementById("adrsStreet");
  streetElement.innerText = `${user.address.street}`;

  // address city
  var cityElement = document.getElementById("adrsCity");
  cityElement.innerText = `${user.address.city}`;

  // 3
  // looped through the friends and appended each one onto the correct element
  
  // Used the innerHTML property to get content of the current <ul> element
  // by selecting it by its id="friends"
  var ul = document.getElementById("friends");
  //got current HTML content of <ul> using innerHTML
  console.log(friends.innerHTML); // empty

  // found the length of the user.friends array in the user object
  var arrayLength = user.friends.length;
  console.log(arrayLength); // 3

  // looped thro each element in the user.friends array
  for (var i = 0; i < arrayLength; i++) {  
    var li = document.createElement('li'); //created new li element
    li.innerText = `${user.friends[i]}`; //li content is friend in array
    ul.appendChild(li); //added li to ul element
  };
  console.log(ul.innerHTML);

  /*  Dorina's version using .forEach()

  user.friends.forEach(function(item){
    var li = document.createElement("li");
    var text = document.createTextNode(item);
    li.appendChild(text);
    document.getElementById("friends").appendChild(li);
  });

  */


}) // DO NOT DELETE!!!
