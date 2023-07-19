class Engine {
  constructor(private _name: String) {
    this._name = _name;
  }

  public get name() : String {
    return this._name;
  }
}

enum Transmission {
  AUTOMATIC = "AUTOMATIC",
  SEMI_AUTOMATIC = "SEMI_AUTOMATIC",
  MANUAL = "MANUAL"
}

enum VehicleType {
  SEDAN = "SEDAN",
  SPORTCAR = "SPORTCAR",
  SUV = "SUV",
  PICKUPTRUCK = "PICKUPTRUCK",
  TRUCK = "TRUCK"
}

class Wheel {
  constructor(private _rim: Number) {
    this._rim = _rim;
  }
}

class Vehicle {
  private _engine: Engine;
  private _transmission: Transmission;
  private _type: VehicleType;
  private _wheels: Wheel[] = [];
  private _seats: Number;

  get engine() {
    return this._engine
  }
  
  set engine(val: Engine) {
    this._engine = val
  }
  
  get transmission() {
    return this._transmission
  }
  
  set transmission(val: Transmission) {
    this._transmission = val
  }
  
  get type() {
    return this._type
  }
  
  set type(val: VehicleType) {
    this._type = val
  }
  
  get wheels() {
    return this._wheels;
  }
  
  addWheel(wheel: Wheel) {
    this._wheels.push(wheel);
  }
  
  get seats() {
    return this._seats
  }
  
  set seats(val: Number) {
    this._seats = val
  }
}

interface IBuilder {
  reset(): void;
  getVehicle(): Vehicle;
  setVehicleType(type: VehicleType): void;
  setSeats(number: Number): void;
  setEngine(engine: Engine): void;
  setTramsmission(transmission: Transmission): void;
  addWheel(wheel: Wheel): void;
}

class CarBuilder implements IBuilder {
  private _vehicle: Vehicle;

  constructor() {
    this._vehicle = new Vehicle();
  }
  
  reset() {
    this._vehicle = new Vehicle();
  }

  getVehicle(): Vehicle {
    return this._vehicle;
  }

  setVehicleType(type: VehicleType) {
    this._vehicle.type = type;
  }

  setSeats(seats_amount: Number) {
    this._vehicle.seats = seats_amount;
  }

  setEngine(engine: Engine) {
    this._vehicle.engine = engine;
  }

  setTramsmission(transmission: Transmission) {
    this._vehicle.transmission = transmission;
  }

  addWheel(wheel: Wheel) {
    this._vehicle.addWheel(wheel);
  }
}

class Director {
  constructor(private _builder: IBuilder) {

  }

  constructorSedanCar(): Vehicle {
    this._builder = new CarBuilder();
    this._builder.reset();
    this._builder.setVehicleType(VehicleType.SEDAN);
    this._builder.setTramsmission(Transmission.AUTOMATIC);
    this._builder.setSeats(5);
    this._builder.setEngine(new Engine("V4"));
    this._builder.addWheel(new Wheel(35))
    this._builder.addWheel(new Wheel(35))
    this._builder.addWheel(new Wheel(35))
    this._builder.addWheel(new Wheel(35))
    return this._builder.getVehicle();
  }
  
  constructorTruck(): Vehicle {
    this._builder.reset();
    this._builder.setVehicleType(VehicleType.TRUCK);
    this._builder.setTramsmission(Transmission.MANUAL);
    this._builder.setSeats(3);
    this._builder.setEngine(new Engine("V8"));
    this._builder.addWheel(new Wheel(70))
    this._builder.addWheel(new Wheel(70))
    this._builder.addWheel(new Wheel(70))
    this._builder.addWheel(new Wheel(70))
    this._builder.addWheel(new Wheel(70))
    this._builder.addWheel(new Wheel(70))
    return this._builder.getVehicle();
  }
}

const builder = new CarBuilder();
const director = new Director(builder);
const corsa_sedan = director.constructorSedanCar();
console.log(corsa_sedan);

const truck = director.constructorTruck();
console.log(truck);
