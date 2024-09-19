
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


export interface InitialStatePropTypes {
  isLoading: boolean;
  isError: boolean;
  cars: CarPropTypes[];
}

export interface WishlistPropTypes {
  _id: string;
  carId: string;
}


export interface WishlistInitialState {
  isLoading: boolean;
  isError: boolean;
  wishlist: WishlistPropTypes[]
}



