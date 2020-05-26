const xCoordinate: number = 0;
const yCoordinate: number = 3;
const zCoordinate: number = 5;
function draw(...point3D: [number, number, number]): void {
  console.log(point3D);
}
draw(xCoordinate, yCoordinate, zCoordinate);
//[ 0, 3, 5 ]
