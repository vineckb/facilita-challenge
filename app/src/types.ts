export interface ICustomerDTO {
  name: string;
  email: string;
  phone: string;
}

export interface ICustomerEntity extends ICustomerDTO {
  id: number;
}
