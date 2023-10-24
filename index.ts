//Enums
//1. Create an enum for days of the week and display the string
 //representation for a given numeric value.

/*enum DaysOfWeek {
  Sunday,
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
}

function getDayOfWeekString(day: DaysOfWeek): string {
  return DaysOfWeek[day];
}

console.log(getDayOfWeekString(DaysOfWeek.Monday));
*/

//2. Define an enum for basic geometric shapes and write a function that takes a shape as an argument.

/*enum GeometricShape {
  Circle,
  Square,
  Triangle,
  Rectangle,
}

function getShapeInfo(shape: GeometricShape): string {
  switch (shape) {
    case GeometricShape.Circle:
      return "A circle is a round shape.";
    case GeometricShape.Square:
      return "A square has four equal sides.";
    case GeometricShape.Triangle:
      return "A triangle has three sides.";
    case GeometricShape.Rectangle:
      return "A rectangle has four sides with opposite sides equal.";
    default:
      return "Unknown shape.";
  }
}

console.log(getShapeInfo(GeometricShape.Circle));*/

//3. Create an enum representing HTTP status codes and return the status message for a given code.

/*enum HttpStatusCode {
  OK = 200,
  BadRequest = 400,
  Unauthorized = 401,
  NotFound = 404,
}

function getStatusMessage(code: HttpStatusCode): string {
  switch (code) {
    case HttpStatusCode.OK:
      return "OK";
    case HttpStatusCode.BadRequest:
      return "Bad Request";
    case HttpStatusCode.Unauthorized:
      return "Unauthorized";
    case HttpStatusCode.NotFound:
      return "Not Found";
    default:
      return "Unknown status code";
  }
}

console.log(getStatusMessage(HttpStatusCode.OK));
*/

//4. Implement a type that accepts only specific enum values as input.

/*enum Color {
  Red = "RED",
  Green = "GREEN",
  Blue = "BLUE",
}

type AllowedColors = Color.Red | Color.Green;

function printColor(color: AllowedColors): void {
  console.log(color);
}

printColor(Color.Red); 
printColor(Color.Blue); 
*/


//5. Write a function that iterates through the keys of an enum and returns an array of their values.

/*enum Fruit {
  Apple,
  Banana,
  Orange,
}

function getEnumValues(enumObject: any): string[] {
  return Object.keys(enumObject)
    .filter((key) => isNaN(Number(key)))
    .map((key) => enumObject[key]);
}

console.log(getEnumValues(Fruit));
*/

//Types

//1. Define a type for a person with properties like name, age, and email.

/*type Person = {
  name: string;
  age: number;
  email: string;
};

const person: Person = {
  name: "John Doe",
  age: 30,
  email: "johndoe@example.com",
};
*/

//2. Create a custom type for representing a point in 2D space (x and y coordinates).

/*type Point = {
  x: number;
  y: number;
};

const point: Point = {
  x: 10,
  y: 20,
};
*/

//3. Implement a type for a shopping cart item with a name, price, and quantity.

/*type ShoppingCartItem = {
  name: string;
  price: number;
  quantity: number;
};

const item: ShoppingCartItem = {
  name: "Product A",
  price: 10.99,
  quantity: 2,
};
*/

//4. Write a type that combines two existing types into a new one.

/*type User = {
  id: number;
  name: string;
};

type UserProfile = {
  email: string;
  address: string;
};

type UserWithProfile = User & UserProfile;

const user: UserWithProfile = {
  id: 1,
  name: "John Doe",
  email: "johndoe@example.com",
  address: "123 Main St",
};
*/


//5. Define a type for a callback function that takes two numbers and returns a number.

/*type NumberCallback = (num1: number, num2: number) => number;

const addNumbers: NumberCallback = (num1, num2) => num1 + num2;
const multiplyNumbers: NumberCallback = (num1, num2) => num1 * num2;
*/

//Interface

//1. Create an interface for a vehicle with properties like make, model, and year.

/*interface Vehicle {
  make: string;
  model: string;
  year: number;
}

const car: Vehicle = {
  make: "Toyota",
  model: "Camry",
  year: 2021,
};
*/

//2. Define an interface for a user with required and optional properties.

/*interface User {
  firstName: string;
  lastName: string;
  age: number;
  email?: string;
  phone?: string;
}

const user1: User = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
};

const user2: User = {
  firstName: "Jane",
  lastName: "Doe",
  age: 25,
  email: "janedoe@example.com",
};
*/


//3. Implement an interface for a geometric shape with a method to calculate its area.


/* interface Shape {
  calculateArea(): number;
}

class Rectangle implements Shape {
  constructor(private width: number, private height: number) {}

  calculateArea(): number {
    return this.width * this.height;
  }
}

const rectangle = new Rectangle(10, 20);
console.log(rectangle.calculateArea());
*/

//4. Create a function that accepts an object with an interface as an argument.

/*interface Product {
  name: string;
  price: number;
}

function displayProduct(product: Product) {
  console.log(`Name: ${product.name}`);
  console.log(`Price: ${product.price}`);
}

const product = { name: "Product A", price: 10.99 };
displayProduct(product);
*/

//5. Write an interface for a class constructor and use it to create an object.


/*interface PersonConstructor {
  new (name: string, age: number): Person;
}

class Person {
  constructor(public name: string, public age: number) {}
}

const PersonClass: PersonConstructor = Person;
const person = new PersonClass("John Doe", 30);
console.log(person);
*/

//Object type

//1. Define an object type for a book with properties like title and author.

/*type Book = {
  title: string;
  author: string;
};

const book: Book = {
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
};
*/


//2. Create an object type for a person with nested address properties.

/*type Person = {
  name: string;
  age: number;
  address: {
    street: string;
    city: string;
    zipCode: string;
  };
};

const person: Person = {
  name: "John Doe",
  age: 30,
  address: {
    street: "123 Main St",
    city: "New York",
    zipCode: "10001",
  },
};
*/


//3. Implement an object type for a shopping cart item with methods to update the quantity.

/*type ShoppingCartItem = {
  name: string;
  price: number;
  quantity: number;
  updateQuantity: (newQuantity: number) => void;
};

const item: ShoppingCartItem = {
  name: "Product A",
  price: 10.99,
  quantity: 2,
  updateQuantity(newQuantity: number) {
    this.quantity = newQuantity;
  },
};

item.updateQuantity(3);
console.log(item.quantity);
*/

//4. Define an object type for a user with properties for name, age, and address.

/*type User = {
  name: string;
  age: number;
  address?: string; // Optional property
};

const user: User = {
  name: "John Doe",
  age: 30,
  address: "123 Main St",
};
*/

//5. Write a function that accepts an object type as a parameter and returns a string.

/*type MyObject = {
  foo: string;
  bar: number;
};

function getObjectInfo(obj: MyObject): string {
  return `Foo: ${obj.foo}, Bar: ${obj.bar}`;
}

const myObject: MyObject = {
  foo: "Hello",
  bar: 42,
};

console.log(getObjectInfo(myObject));
*/

//Array type

//1. Create an array type for a list of colors and write a function that processes the array.

/*type Color = string;
type ColorList = Color[];

function processColors(colors: ColorList): void {
  colors.forEach((color) => {
    console.log(color);
  });
}

const colors: ColorList = ["red", "green", "blue"];
processColors(colors);
*/


//2. Define an array type for a list of product prices and find the highest and lowest prices.

/*type Price = number;
type PriceList = Price[];

function findMinMaxPrices(prices: PriceList): [number, number] {
  const minPrice = Math.min(...prices);
  const maxPrice = Math.max(...prices);
  return [minPrice, maxPrice];
}

const productPrices: PriceList = [10.99, 5.99, 20.99, 8.99];
const [minPrice, maxPrice] = findMinMaxPrices(productPrices);
console.log(`Min Price: ${minPrice}, Max Price: ${maxPrice}`);
*/

//3. Implement an array type for a list of names and sort them in alphabetical order.

/*type Name = string;
type NameList = Name[];

function sortNames(names: NameList): NameList {
  return names.sort();
}

const names: NameList = ["John", "Alice", "Bob"];
const sortedNames = sortNames(names);
console.log(sortedNames);
*/

//4. Write a function that accepts an array type and returns a reversed array.

/*type MyArray<T> = T[];

function reverseArray<T>(arr: MyArray<T>): MyArray<T> {
  return arr.reverse();
}

const numbers: MyArray<number> = [1, 2, 3, 4, 5];
const reversedNumbers = reverseArray(numbers);
console.log(reversedNumbers);
*/

//5. Create an array type for a list of coordinates (x and y) and calculate the total distance.

/*type Coordinate = [number, number];
type CoordinateList = Coordinate[];

function calculateTotalDistance(coordinates: CoordinateList): number {
  let totalDistance = 0;
  for (let i = 1; i < coordinates.length; i++) {
    const [x1, y1] = coordinates[i - 1];
    const [x2, y2] = coordinates[i];
    const distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
    totalDistance += distance;
  }
  return totalDistance;
}

const coordinates: CoordinateList = [
  [0, 0],
  [3, 4],
  [6, 8],
];
const totalDistance = calculateTotalDistance(coordinates);
console.log(totalDistance);
*/

//Union type


//1. Create a function that accepts a union type for numbers and returns the square of the input.

/*function squareNumber(num: number | bigint): number | bigint {
  return num ** 2;
}

console.log(squareNumber(5)); 
console.log(squareNumber(BigInt(10))); 
*/

//2. Define a union type for different shapes (circle, square, triangle) and calculate their areas.

/*type Circle = {
  kind: "circle";
  radius: number;
};

type Square = {
  kind: "square";
  sideLength: number;
};

type Triangle = {
  kind: "triangle";
  base: number;
  height: number;
};

type Shape = Circle | Square | Triangle;

function calculateArea(shape: Shape): number {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "square":
      return shape.sideLength ** 2;
    case "triangle":
      return (shape.base * shape.height) / 2;
  }
}

const circle: Circle = { kind: "circle", radius: 5 };
const square: Square = { kind: "square", sideLength: 10 };
const triangle: Triangle = { kind: "triangle", base: 6, height: 4 };

console.log(calculateArea(circle));
console.log(calculateArea(square)); 
console.log(calculateArea(triangle));
*/

//3. Implement a union type for different data types (number, string, boolean) and return the type of the input.

/*function getType(value: number | string | boolean): string {
  return typeof value;
}

console.log(getType(10)); 
console.log(getType("Hello"));
console.log(getType(true));
*/

//4. Write a function that accepts a union type for different units (feet, meters) and converts between them.

/*type Feet = {
  kind: "feet";
  value: number;
};

type Meters = {
  kind: "meters";
  value: number;
};

type Unit = Feet | Meters;

function convertUnits(unit: Unit, to: "feet" | "meters"): number {
  if (unit.kind === to) {
    return unit.value;
  }

  if (unit.kind === "feet" && to === "meters") {
    return unit.value * 0.3048;
  }

  if (unit.kind === "meters" && to === "feet") {
    return unit.value * 3.28084;
  }

  throw new Error("Invalid unit conversion");
}

const feet: Feet = { kind: "feet", value: 10 };
const meters: Meters = { kind: "meters", value: 5 };

console.log(convertUnits(feet, "meters"));
console.log(convertUnits(meters, "feet")); 
*/

//5. Create a type for a list of items that can be numbers or strings and process the items accordingly.

/*type Item = number | string;
type ItemList = Item[];

function processItems(items: ItemList): void {
  items.forEach((item) => {
    if (typeof item === "number") {
      console.log(`Number: ${item}`);
    } else {
      console.log(`String: ${item}`);
    }
  });
}

const items: ItemList = [10, "Hello", 20, "World"];
processItems(items);
*/


//Optional type

//1. Define an object type for a person with optional properties for email and phone.


/*type Person = {
  name: string;
  age: number;
  email?: string;
  phone?: string;
};

const person1: Person = {
  name: "John Doe",
  age: 30,
  email: "johndoe@example.com",
};

const person2: Person = {
  name: "Jane Smith",
  age: 25,
};
*/

//2. Create a function that accepts an object with optional properties and handles missing values.

/*function processPerson(person: Person): void {
  console.log(`Name: ${person.name}`);
  console.log(`Age: ${person.age}`);
  if (person.email) {
    console.log(`Email: ${person.email}`);
  } else {
    console.log("Email: N/A");
  }
  if (person.phone) {
    console.log(`Phone: ${person.phone}`);
  } else {
    console.log("Phone: N/A");
  }
}

const person3: Person = {
  name: "John Smith",
  age: 35,
  phone: "123-456-7890",
};

processPerson(person3);
*/

//3. Implement a type for a configuration object with optional settings.

/*type Configuration = {
  option1?: boolean;
  option2?: string;
  option3?: number;
};

const config1: Configuration = {
  option1: true,
  option3: 10,
};

const config2: Configuration = {
  option2: "value",
};
*/

//4. Write a function that accepts an optional type and handles both defined and undefined inputs.

/*function processOptionalValue(value?: string): void {
  if (value) {
    console.log(`Value: ${value}`);
  } else {
    console.log("Value is undefined");
  }
}

processOptionalValue("Hello");
processOptionalValue();
*/

//5. Define an optional type for a callback function that takes two numbers and returns a number.

type OptionalCallback = ((a: number, b: number) => number) | undefined;

const add: OptionalCallback = (a, b) => a + b;

if (add) {
  console.log(add(2, 3));
}




