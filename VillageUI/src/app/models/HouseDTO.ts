export interface IHouseDTO{
    id?: number;
    number: number;
    street: string;
    city: string;
    country: string;
    postcode: string;
}

export class HouseDTO implements IHouseDTO {
  id?: number;
  number!: number;
  street = '';
  city = '';
  country = '';
  postcode = '';
}