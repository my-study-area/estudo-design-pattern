interface IVehicle {
  starRoute(): void;
  getCargo(): void;
}

class Car implements IVehicle {
  starRoute() {
    this.getCargo();
    console.log("Inicia rota");
  }
  
  getCargo() {
    console.log("Pega passageiros");
  }
}

class Motorcycle implements IVehicle {
  starRoute() {
    this.getCargo();
    console.log("Inicia rota");
  }
  
  getCargo() {
    console.log("Pega encomenda");
  }
}

interface ITransport {
  startTransport(): void;
  createTransport(): IVehicle;
}

class CarTransport implements ITransport {
  startTransport() {
    const vehicle = this.createTransport();
    vehicle.starRoute();
  }

  createTransport():IVehicle {
    return new Car();
  }
}

class  MotorCycleTransport implements ITransport {
  startTransport() {
    const vehicle = this.createTransport();
    vehicle.starRoute();
  }
  createTransport() {
    return new Motorcycle();
  }
}

declare var process;
let transport: ITransport;

if(process.argv.includes('--car')) {
  transport = new CarTransport();
} else if(process.argv.includes('--motor')) {
  transport = new MotorCycleTransport();
} else {
  console.error("Tipo de transporte não cadastrado")
}

if (transport) {
  transport.startTransport()
}
