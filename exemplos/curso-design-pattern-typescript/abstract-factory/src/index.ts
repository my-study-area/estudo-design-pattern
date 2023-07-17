interface ILandVehicle {
  getPassenger(): void;
  startRoute(): void;
}

class Car implements ILandVehicle {
  getPassenger(): void {
    console.log("Get passenger");
  }
  startRoute(): void {
    this.getPassenger();
    console.log(`Start route by ${this.constructor.name}`);
  }
}

class Motorcycle implements ILandVehicle {
  getPassenger(): void {
    console.log("Get passenger");
  }
  startRoute(): void {
    this.getPassenger();
    console.log(`Start route by ${this.constructor.name}`);
  }
}

interface IAircraft {
  getPassenger(): void;
  startRoute(): void;
}

class Airplane implements IAircraft {
  getPassenger(): void {
    console.log("Get passenger");
  }
  startRoute(): void {
    this.getPassenger();
    console.log(`Start route by ${this.constructor.name}`);
  }
}

interface ITransportFactory {
  createTransportVehicle(): ILandVehicle;
  createTransportAirCraft(): IAircraft;
}

class UberTransport implements ITransportFactory {
  createTransportVehicle(): ILandVehicle {
    return new Car();
  }

  createTransportAirCraft(): IAircraft {
    return new Airplane();
  }
}

class Client {
  private factory: ITransportFactory;
  constructor(factory: ITransportFactory) {
    this.factory = factory;
  }

  startRoute(): void {
    const airCraft = this.factory.createTransportAirCraft();
    const vehicle = this.factory.createTransportVehicle();
    vehicle.startRoute();
    airCraft.startRoute();
  }
}

const uberTransport: ITransportFactory = new UberTransport();
const client = new Client(uberTransport);
console.log(client.startRoute());

