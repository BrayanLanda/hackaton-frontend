export interface CreateUser {
  first_name: string;
  last_name: string;
  address: string;
  city: string;
  mobile: string;
  birth_date: Date;
  email: string;
  password: string;
}

export interface Users {
  id_user: number;
  first_name: string;
  last_name: string;
  address: string;
  city: string;
  mobile: string;
  birth_date: Date;
  email: string;
  password: string;
  registration_date: string;
}