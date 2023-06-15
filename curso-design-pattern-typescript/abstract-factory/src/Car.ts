import ILandVehicle from "./ILandVehicle";

export default class Car implements ILandVehicle {
  startRoute(): void {
    this.getCargo();
    console.log("Inicia corrida");
  }
  getCargo(): void {
    console.log("Pegando passageiro");
    
  }
}
