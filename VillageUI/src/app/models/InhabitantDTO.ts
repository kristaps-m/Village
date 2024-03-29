export interface IInhabitantDTO {
  id?: number;
  name: string;
  lastname: string;
  personalCode: string;
  dateOfBirth: string;
  phone: string;
  email: string;
  idOfApartment: number;
  isOwner: boolean;
}

export class InhabitantDTO implements IInhabitantDTO {
  id?: number | undefined;
  name!: string;
  lastname!: string;
  personalCode!: string;
  dateOfBirth!: string;
  phone!: string;
  email!: string;
  idOfApartment!: number;
  isOwner!: boolean;
}
