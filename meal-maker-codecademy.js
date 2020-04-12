// Meal Maker Project Codecademy
// Date: April 12, 2020
// Author: fredlin

const menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts: [],
    },
  get appetizers(){
    return this._courses.appetizers;
    // do you need to put in this whole path?
    // I need to understand why this is the default syntax for the getter and setter methods.
  },
  set appetizers(data){
    this._courses.appetizers = data;
  },
  get mains(){
    return this._courses.mains;
  },
  set mains(data){
    this._courses.mains = data;
  },
  get desserts(){
    return this._courses.desserts;
  },
  set desserts(data){
    this._courses.desserts = data;
  },
  get courses() {
    return {
      appetizers: this.appetizers,
      // why is this not the same color?
      mains: this.mains,
      desserts: this.desserts
    }
  },
  addDishToCourse(courseName, dishName, dishPrice) {
    const dish = {
      name: dishName,
      price: dishPrice,
    };
    this._courses[courseName].push(dish);
  },
  getRandomDishFromCourse(courseName)  {
    const dishes = this._courses[courseName];
    let randomIndex = Math.floor(Math.random() * dishes.length);
    return dishes[randomIndex];
    // a little uncertian about this line of code
    // do I need the this keyword here?
  },
  generateRandomMeal() {
    const appetizer = this.getRandomDishFromCourse('appetizers');
    const main = this.getRandomDishFromCourse('mains');
    const dessert = this.getRandomDishFromCourse('desserts');
    const totalPrice = appetizer.price + main.price + dessert.price;
  // Why this return Nan when the syntact uses the bracket method? ie `appetizer[price]`
    return `Your meal is ${appetizer.name}, ${main.name}, and ${dessert.name} and the total price of your meal is ${totalPrice}`;
  },
}

menu.addDishToCourse('appetizers', 'nachos', 5.00);
menu.addDishToCourse('appetizers', 'tacos', 4.50);
menu.addDishToCourse('appetizers', 'fries', 3.00);

menu.addDishToCourse('mains', 'fish', 9.99);
menu.addDishToCourse('mains', 'burger', 8.50);
menu.addDishToCourse('mains', 'steak', 13.75);

menu.addDishToCourse('desserts', 'cake', 5.00);
menu.addDishToCourse('desserts', 'ice cream', 3.50);
menu.addDishToCourse('desserts', 'pie', 3.50);


let meal = menu.generateRandomMeal();
console.log(meal);
