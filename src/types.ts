export type StoreType = {
  currency: string;
  cart: CartType[];
  productDetail: ProductType[];
  userSession: UserSessionType;
  loading: boolean;
  search: any;
  total: any;
};

export type ProductType = {
  productId: number;
  productName: string;
  productPrice: string;
  productImage: string;
  productSalePrice: string;
  productStock: number;
};

export interface ProductResponseType {
  totalItems: number;
  data: ProductType[];
  currentPage: number;
  totalPages: number;
}

export type MenuType = {
  menuItem: string;
  menuLink: string;
};

export type CartType = {
  productQty: number;
} & ProductType;

export type LoginResponseType = {
  message: string;
  expiresIn: number;
  access_token: string;
};

export type UserSessionType = {
  user: object | null;
  error: string | null;
  store: StoreType | null;
};
export type RegisterType = {
  email: String;
  name: string;
};
