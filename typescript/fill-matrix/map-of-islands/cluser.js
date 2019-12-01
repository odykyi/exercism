class User{
  constructor(name) {
    this.setName(name);
  }
  eat() {
    console.log('user eat, name' + this.getName())
  }
  setName(name) {
    this.name = name
  }
  getName() {
    return this.name
  }
}

//
const firstuser = new User('Karina');

firstuser.eat();
