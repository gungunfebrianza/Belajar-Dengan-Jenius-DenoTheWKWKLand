interface MotorVehicle {
  startEngine(): boolean;
  stopEngine(): boolean;
  brake(): boolean;
  accelerate(speed: number): void;
  honk(howLong: number): void;
}

class Car implements MotorVehicle {
  startEngine(): boolean {
    return true;
  }
  stopEngine(): boolean {
    return true;
  }
  brake(): boolean {
    return true;
  }
  accelerate(speed: number): void {
    console.log("Driving Faster");
  }
  honk(howLong: number): void {
    console.log("beep beep beep");
  }
  onlyOnTypeCar(howLong: number): void {
    console.log("beep beep beep");
  }
}

const typeCar: Car = new Car();
typeCar.onlyOnTypeCar(2);

const typeMotorVechile: MotorVehicle = new Car();
typeMotorVechile.startEngine();
