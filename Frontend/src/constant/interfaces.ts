
export interface InitialStatePropTypes {
  isLoading: boolean;
  isError: boolean;
  cars: any;
}

export interface CarPropTypes {
  _id: string;
  name: string;
  image: string;
  transmission: string;
  fuel: string;
  price: number;
  description: string;
  category: string;
  bookingAmount: number;
  mileage: number;
  seater: number;
}




