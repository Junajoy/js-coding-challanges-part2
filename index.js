//Arrow Functions - Basic Sum
const sum = (a, b) => a + b;
console.log("1) Sum:", sum(4, 6));

// 2
const greet = (name) => `Hello, ${name}! Welcome.`;
console.log("2) Greeting:", greet("Alice"));

// 3
const numbers = [10, 20, 30, 40];
const [first, second] = numbers;
console.log("3) First:", first, "Second:", second);

// 4
const user = { names: "Alice", age: 30, city: "New York" };
const { names, age } = user;
console.log("4) Name:", names, "Age:", age);

// 5
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const combined = [...array1, ...array2];
console.log("5) Combined:", combined);

// 6
const power = (base, exponent = 2) => Math.pow(base, exponent);
console.log("6) Power:", power(3));

// 7
const nums = [1, 2, 3, 4];
const doubled = nums.map(n => n * 2);
console.log("7) Doubled:", doubled);

//8
const mixNums = [1, 2, 3, 4, 5, 6];
const evens = mixNums.filter(n => n % 2 === 0);
console.log("8) Evens:", evens);

// 9. 
class Dog {
  constructor(name, breed) {
    this.name = name;
    this.breed = breed;
  }
  bark() {
    return `${this.name} says Woof!`;
  }
}
const myDog = new Dog("Tipu", "Naadan Patti");
console.log("9) Bark:", myDog.bark());

//10
function add(a, b) {
  return a + b;
}
console.log("10) Add (module):", add(5, 3));

// 11
function sumAll(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}
console.log("11) SumAll:", sumAll(1, 2, 3, 4, 5));

// 12
const person = { id: 1, firstName: "John", email: "john@example.com" };
const { id: userId, firstName: fullName = "Guest", email: userEmail } = person;
console.log("12) userId:", userId, "fullName:", fullName, "email:", userEmail);

// 13
const nestedUser = { user: { name: "Jane", address: { street: "Main St", city: "Anytown" } } };
const { user: { name: nestedName, address: { street, city } } } = nestedUser;
console.log("13) Name:", nestedName, "Street:", street, "City:", city);

// 14
const originalObj = { a: 1, b: { c: 2 } };
const shallowCopy = { ...originalObj };
shallowCopy.a = 100;
console.log("14) Original a:", originalObj.a, "Shallow a:", shallowCopy.a);
shallowCopy.b.c = 200;
console.log("14) Original b.c:", originalObj.b.c, "Shallow b.c:", shallowCopy.b.c);

// 15. Promises - Simulate API Call
function fetchData(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id % 2 === 0) {
        resolve({ id: id, data: "Some data" });
      } else {
        reject("ID must be even");
      }
    }, 2000);
  });
}
fetchData(2).then(data => console.log("15) fetchData:", data)).catch(err => console.log("15) Error:", err));

// 16. Async/Await - Fetch and Handle Error
async function getData(id) {
  try {
    const result = await fetchData(id);
    console.log("16) getData Success:", result);
  } catch (error) {
    console.log("16) getData Error:", error);
  }
}
getData(3); // Should catch

//17. reduce() - Calculate Total Price
const cart = [{ item: "A", price: 10 }, { item: "B", price: 20 }, { item: "C", price: 30 }];
const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);
console.log("17) Total Price:", totalPrice);

// 18.reduce() - Group by Property
const items = [
  { type: "fruit", name: "apple" },
  { type: "vegetable", name: "carrot" },
  { type: "fruit", name: "banana" }
];
const grouped = items.reduce((acc, item) => {
  if (!acc[item.type]) {
    acc[item.type] = [];
  }
  acc[item.type].push({ name: item.name });
  return acc;
}, {});
console.log("18) Grouped:", grouped);

// 19. Classes - Inheritance 
class Animal {
  constructor(name) {
    this.name = name;
  }
  makeSound() {
    return `${this.name} makes a sound.`;
  }
}
class Dog2 extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }
  makeSound() {
    return "Woof!";
  }
}
const myDog2 = new Dog2("Buddy", "Beagle");
console.log("19) Dog2 Sound:", myDog2.makeSound());
//20
const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);
console.log("20) Capitalize:", capitalize("hello"));

// 21
const displayStatus = (isLoggedIn) => isLoggedIn ? "Welcome back!" : "Please log in.";
console.log("21) Status:", displayStatus(true));

// 22. find() - Find First User by ID
const users = [{ id: 1, name: "A" }, { id: 2, name: "B" }, { id: 3, name: "C" }];
const foundUser = users.find(user => user.id === 2);
console.log("22) Found User:", foundUser);

//23. some() and every() - Array Check
const nums2 = [2, 4, 6, 8];
const hasGreaterThanFive = nums2.some(n => n > 5);
const allEven = nums2.every(n => n % 2 === 0);
console.log("23) Some >5:", hasGreaterThanFive, "All Even:", allEven);

// 24. Classes - Getters and Setters
class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  get area() {
    return this.width * this.height;
  }
  set dimensions({ width, height }) {
    this.width = width;
    this.height = height;
  }
}
const rect = new Rectangle(5, 10);
console.log("24) Area:", rect.area);
rect.dimensions = { width: 2, height: 3 };
console.log("24) Updated Area:", rect.area);

// 25. Promise.all() 
Promise.all([fetchData(2), fetchData(4)])
  .then(results => console.log("25) Promise.all results:", results))
  .catch(err => console.log("25) Promise.all Error:", err));

//26. Promise.race() - Fastest API Call
Promise.race([fetchData(2), fetchData(4)])
  .then(result => console.log("26) Promise.race Result:", result))
  .catch(err => console.log("26) Promise.race Error:", err));

// 27. Generator Functions 
function* idGenerator() {
  let id = 1;
  while (true) {
    yield id++;
  }
}
const gen = idGenerator();
console.log("27) ID1:", gen.next().value, "ID2:", gen.next().value);

// 28. 
const add2 = (a, b) => a + b;
const PI = 3.1415;
const subtract = (a, b) => a - b;
console.log("28) add2:", add2(3, 4), "PI:", PI, "subtract:", subtract(5, 2));

// 29. Destructuring Function Parameters
function displayUserInfo({ name, age, city = "Unknown" }) {
  console.log(`29) Name: ${name}, Age: ${age}, City: ${city}`);
}
displayUserInfo({ name: "Tom", age: 25 });

// 30
function createUniqueId() {
  return Symbol();
}
const id1 = createUniqueId();
const id2 = createUniqueId();
console.log("30) Unique IDs equal?", id1 === id2); 
