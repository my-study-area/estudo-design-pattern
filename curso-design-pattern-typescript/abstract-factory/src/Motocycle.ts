import ILandVehicle from "./ILandVehicle";

export default class Motocycle implements ILandVehicle {
  startRoute(): void {
    this.getCargo();
    console.log("Inicia corrida");
  }
  getCargo(): void {
    console.log("Pegando passageiros");
  }

}
