export interface IApartmentDTO{
  id?:number;
  number:number;
  floor:number;
  numberOfRooms:number;
  population:number;
  fullArea: number;
  livingSpace: number;
  idOFHouse: number;
}

export class ApartmentDTO implements IApartmentDTO {
  id?: number | undefined;
  number!: number;
  floor!: number;
  numberOfRooms!: number;
  population!: number;
  fullArea!: number;
  livingSpace!: number;
  idOFHouse!: number;
}

/*
{
    "number": 21,
    "floor": 3,
    "numberOfRooms": 3,
    "population": 3,
    "fullArea": 74.5,
    "livingSpace": 70.5,
    "idOfHouse": 1,
    "id": 1
  }
*/