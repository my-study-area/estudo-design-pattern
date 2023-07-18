class Car {
  private _seat: Number;
  private _engine: String;
  private _tripComputer: Boolean;
  private _GPS: Boolean;

  set seat(number: Number) {
    this._seat = number;
  }

  get seat() {
    return this._seat;
  }

  set engine(engine: String) {
    this._engine = engine;
  }

  get engine() {
    return this._engine;
  }

  set tripComputer(tripComputer: Boolean) {
    this._tripComputer = tripComputer;
  }

  get tripComputer(): Boolean {
    return this._tripComputer;
  }

  set GPS(gps: Boolean) {
    this._GPS = gps
  }

  get GPS(): Boolean {
    return this._GPS
  }
}

class Manual extends Car {
}

interface Builder {
  reset(): void;
  setSeats(number: Number): void;
  setEngine(engine: String): void;
  setTripComputer(tripComputer: Boolean): void;
  setGPS(GPS: Boolean): void;
}

class CarBuilder implements Builder {
  private car: Car;

  constructor() {
    this.reset();
  }

  reset(): void {
    this.car = new Car();
  }

  setSeats(number: Number): void {
    this.car.seat = number;
    console.log(`Add ${this.car.seat} seats`);
  }

  setEngine(engine: String) {
    this.car.engine = engine;
    console.log(`Add engine ${this.car.engine}`);
  }

  setTripComputer(tripComputer: Boolean) {
    this.car.tripComputer = tripComputer;
    console.log(`Add trip computer ${this.car.tripComputer}`);
  }

  setGPS(gps: Boolean): void {
    this.car.GPS = gps;
    console.log(`Add GPS ${this.car.GPS}`);
  }

  getResult(): Car {
    console.log(`Create Car: ${this.car}`);
    return this.car;
  }
}

class ManualBuilder implements Builder {
  private manual: Manual;

  constructor() {
    this.reset();
  }

  reset(): void {
    this.manual = new Manual();
  }

  setSeats(number: Number): void {
    this.manual.seat = number;
    console.log(`Add information about ${this.manual.seat} seats`);
  }

  setEngine(engine: String) {
    this.manual.engine = engine;
    console.log(`Add information about engine ${this.manual.engine}`);
  }

  setTripComputer(tripComputer: Boolean): void {
    this.manual.tripComputer = tripComputer;
    console.log(`Add information about trip computer ${this.manual.tripComputer}`);
  }

  setGPS(gps: Boolean): void {
    this.manual.GPS = gps;
    console.log(`Add information about GPS ${this.manual.GPS}`);
  }

  getResult(): Manual {
    console.log(`Create manual: ${this.manual}`);
    return this.manual;
  }
}

class Director {
  constructorCar(carBuilder: Builder): void {
    carBuilder.reset();
    carBuilder.setEngine('engine');
    carBuilder.setGPS(true);
    carBuilder.setSeats(4);
    carBuilder.setTripComputer(true);
  }

  constructorManual(manual: Builder): void {
    manual.reset();
    manual.setGPS(true);
    manual.setTripComputer(true);
    manual.setSeats(44);
    manual.setEngine('engine man');
  }
}

const director = new Director();
const car = new CarBuilder();
director.constructorCar(car);
console.log(car);

const manual = new ManualBuilder();
director.constructorManual(manual);
console.log(manual);
