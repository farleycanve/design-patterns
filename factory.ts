// The Factory Concept

interface Car {
  name: string;
  drive();
}

class CarFactory implements Car {
  name = "";
  drive() {
    console.log(`net po ---${this.name}---`);
  }
}

class TeslaFactory extends CarFactory {
  constructor() {
    super();
    this.name = "Tesla";
  }
}

class MercedesFactory extends CarFactory {
  constructor() {
    super();
    this.name = "Mercedes";
  }
}

class ToyotaFactory extends CarFactory {
  constructor() {
    super();
    this.name = "Toyota";
  }
}

class Creator {
  static createObject(someProperty: string): Car {
    if (someProperty === "a") {
      return new TeslaFactory();
    } else if (someProperty === "b") {
      return new MercedesFactory();
    } else {
      return new ToyotaFactory();
    }
  }
}

// The Client
const newCar = Creator.createObject("b");
newCar.drive();
console.log(newCar.name);
