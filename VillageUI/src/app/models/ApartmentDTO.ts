export interface IApartmentDTO{
  id?:number;
  number:number;
  floor:number;
  numberOfRooms:number;
  population:number;
  fullArea: number;
  livingSpace: number;
  idOfHouse: number;
}

export class ApartmentDTO implements IApartmentDTO {
  id?: number | undefined;
  number!: number;
  floor!: number;
  numberOfRooms!: number;
  population!: number;
  fullArea!: number;
  livingSpace!: number;
  idOfHouse!: number;
}