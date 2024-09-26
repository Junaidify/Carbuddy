
export interface CarPropTypes {
  _id: string;
  name: string;
  image: string;
  transmission: string;
  fuel: string;
  price: number;
  description: string;
  category: string;
  bookingAmount: string;
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
  image?: string;
  name?: string;
  bookingAmount?: string;
}


export interface WishlistInitialState {
  isLoading: boolean;
  isError: boolean;
  wishlist: WishlistPropTypes[]
}


export interface ProductPropTypes {
  name: string;
  email: string;
  phone: string;
  house: string;
  street: string;
  city: string;
  pincode: string;
  state: string;
  customer_name: string;
  card_number: string;
  expiry_date: string;
  cvv: string;
}


export interface LoginPropTypes {
  user_email: string;
  user_password: string;
}

export interface RegisterPropTypes {
  name: string;
  email: string;
  phone: string;
  password: string;
}