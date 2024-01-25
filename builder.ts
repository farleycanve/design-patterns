// Builder Concept Sample Code
class Car {
  parts: string[] = [];
}

interface IBuilder {
  buildFrame(): this;
  buildEngine(): this;
  buildTires(): this;
  buildBattery(): this;
  getResult(): Car;
}

class TeslaAssembly implements IBuilder {
  // The Concrete Builder
  car: Car;

  constructor() {
    this.car = new Car();
  }

  buildFrame() {
    this.car.parts.push("Frame");
    return this;
  }

  buildEngine() {
    this.car.parts.push("Engine");
    return this;
  }

  buildTires() {
    this.car.parts.push("Tires");
    return this;
  }
  buildBattery() {
    this.car.parts.push("Battery");
    return this;
  }

  getResult() {
    return this.car;
  }
}

class NormalCar {
  // The Director, building a complex representation

  static construct() {
    "Constructs and returns the final product";
    return new TeslaAssembly()
      .buildFrame()
      .buildEngine()
      .buildTires()
      .getResult();
  }
}
class ElectricCar {
  // The Director, building a complex representation

  static construct() {
    "Constructs and returns the final product";
    return new TeslaAssembly()
      .buildFrame()
      .buildEngine()
      .buildTires()
      .buildBattery()
      .getResult();
  }
}

// The Client
const product1 = NormalCar.construct();
console.log(product1.parts);
