export interface ICustomerDTO {
  name: string;
  email: string;
  phone: string;
  x: number;
  y: number;
}

export interface ICustomerEntity extends ICustomerDTO {
  id: number;
}
