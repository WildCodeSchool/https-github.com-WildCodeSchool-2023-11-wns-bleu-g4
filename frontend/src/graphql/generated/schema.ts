export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTimeISO: any;
};

export type Agency = {
  __typename?: 'Agency';
  address: Scalars['String'];
  bookings: Array<Booking>;
  city: Scalars['String'];
  country: Scalars['String'];
  email: Scalars['String'];
  id: Scalars['Int'];
  name: Scalars['String'];
  phone: Scalars['String'];
  postcode: Scalars['String'];
  productCodes: Array<Product_Code>;
};

export type AgencyId = {
  id: Scalars['Int'];
};

export type Booking = {
  __typename?: 'Booking';
  agency: Agency;
  bookingDate: Scalars['DateTimeISO'];
  endDate: Scalars['DateTimeISO'];
  id: Scalars['Int'];
  invoice: Scalars['String'];
  startDate: Scalars['DateTimeISO'];
  status: StatusBooking;
  user: User;
};

export type Category = {
  __typename?: 'Category';
  id: Scalars['Int'];
  name: Scalars['String'];
  products: Array<Product>;
  subCategories: Array<SubCategory>;
};

export type LoginInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  cancelBooking: Scalars['String'];
  confirmEmail: Scalars['String'];
  createAgency: Agency;
  createBooking: Booking;
  createCategory: Category;
  createProduct: Product;
  createProduct_picture: Product_Picture;
  createReview: Review;
  createSubCategory: SubCategory;
  createUser: User;
  deleteAgency: Scalars['String'];
  deleteCategory: Scalars['String'];
  deleteProduct: Scalars['String'];
  deleteProduct_picture: Scalars['Boolean'];
  deleteReview: Scalars['String'];
  deleteSubCategory: Scalars['String'];
  login: Scalars['String'];
  logout: Scalars['String'];
  updateAgency: Agency;
  updateBooking: Booking;
  updateCategory: Category;
  updateProduct: Product;
  updateProduct_picture: Product_Picture;
  updateProfile: User;
  updateReview: Review;
  updateSubCategory: SubCategory;
};


export type MutationCancelBookingArgs = {
  bookingId: Scalars['Float'];
};


export type MutationConfirmEmailArgs = {
  token: Scalars['String'];
};


export type MutationCreateAgencyArgs = {
  data: NewAgencyInput;
};


export type MutationCreateBookingArgs = {
  data: NewBookingInput;
};


export type MutationCreateCategoryArgs = {
  data: NewCategoryInput;
};


export type MutationCreateProductArgs = {
  data: NewProductInput;
};


export type MutationCreateProduct_PictureArgs = {
  data: NewProduct_PictureInput;
};


export type MutationCreateReviewArgs = {
  data: NewReviewInput;
};


export type MutationCreateSubCategoryArgs = {
  data: NewSubCategoryInput;
};


export type MutationCreateUserArgs = {
  data: NewUserInput;
};


export type MutationDeleteAgencyArgs = {
  agencyId: Scalars['Float'];
};


export type MutationDeleteCategoryArgs = {
  categoryId: Scalars['Float'];
};


export type MutationDeleteProductArgs = {
  productId: Scalars['Float'];
};


export type MutationDeleteProduct_PictureArgs = {
  id: Scalars['Int'];
};


export type MutationDeleteReviewArgs = {
  reviewId: Scalars['Float'];
};


export type MutationDeleteSubCategoryArgs = {
  subCategoryId: Scalars['Float'];
};


export type MutationLoginArgs = {
  data: LoginInput;
};


export type MutationUpdateAgencyArgs = {
  agencyId: Scalars['Float'];
  data: UpdateAgencyInput;
};


export type MutationUpdateBookingArgs = {
  bookingId: Scalars['Float'];
  data: UpdateBookingInput;
};


export type MutationUpdateCategoryArgs = {
  categoryId: Scalars['Float'];
  data: UpdateCategoryInput;
};


export type MutationUpdateProductArgs = {
  data: UpdateProductInput;
  productId: Scalars['Float'];
};


export type MutationUpdateProduct_PictureArgs = {
  data: UpdateProduct_PictureInput;
  id: Scalars['Int'];
};


export type MutationUpdateProfileArgs = {
  data: UpdateUserInput;
};


export type MutationUpdateReviewArgs = {
  data: UpdateReviewInput;
  reviewId: Scalars['Float'];
};


export type MutationUpdateSubCategoryArgs = {
  data: UpdateSubCategoryInput;
  subCategoryId: Scalars['Float'];
};

export type NewAgencyInput = {
  address: Scalars['String'];
  city: Scalars['String'];
  country: Scalars['String'];
  email: Scalars['String'];
  name: Scalars['String'];
  phone: Scalars['String'];
  postcode: Scalars['String'];
};

export type NewBookingInput = {
  agency: AgencyId;
  bookingDate: Scalars['DateTimeISO'];
  endDate: Scalars['DateTimeISO'];
  invoice: Scalars['String'];
  startDate: Scalars['DateTimeISO'];
  status: StatusBooking;
  user: UserId;
};

export type NewCategoryInput = {
  name: Scalars['String'];
};

export type NewProductInput = {
  brand: Scalars['String'];
  categories: Array<ObjectId>;
  description: Scalars['String'];
  name: Scalars['String'];
  price: Scalars['Float'];
  reviews?: InputMaybe<Array<ObjectId>>;
  thumbnail: Scalars['String'];
};

export type NewProduct_PictureInput = {
  alt: Scalars['String'];
  productId: Scalars['Int'];
  thumbnail: Scalars['String'];
};

export type NewReviewInput = {
  comment: Scalars['String'];
  productId: Scalars['Int'];
  rate: Scalars['Int'];
  userId: Scalars['Int'];
};

export type NewSubCategoryInput = {
  category: ObjectId;
  name: Scalars['String'];
  thumbnail: Scalars['String'];
};

export type NewUserInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type ObjectId = {
  id: Scalars['Int'];
};

export type Product = {
  __typename?: 'Product';
  brand: Scalars['String'];
  categories: Array<Category>;
  description: Scalars['String'];
  id: Scalars['Int'];
  name: Scalars['String'];
  pictures: Array<Product_Picture>;
  price: Scalars['Float'];
  productCodes: Array<Product_Code>;
  reviews: Array<Review>;
  thumbnail: Scalars['String'];
};

export type Product_Code = {
  __typename?: 'Product_code';
  agency?: Maybe<Agency>;
  id: Scalars['Int'];
  isSizeable: Scalars['Boolean'];
  product?: Maybe<Product>;
  size?: Maybe<Scalars['String']>;
  status: Status;
};

export type Product_Picture = {
  __typename?: 'Product_picture';
  alt: Scalars['String'];
  id: Scalars['Int'];
  product: Product;
  thumbnail: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  getAgencyById: Agency;
  getAllAgencies: Array<Agency>;
  getAllBooking: Array<Booking>;
  getAllCategories: Array<Category>;
  getAllProduct_codes: Array<Product_Code>;
  getAllProduct_pictures: Array<Product_Picture>;
  getAllProducts: Array<Product>;
  getAllSubCategories: Array<SubCategory>;
  getBookingById: Booking;
  getBookingsByUser: Array<Booking>;
  getCategoryById: Category;
  getProductById: Product;
  getProductCodesByStatus: Array<Product_Code>;
  getSubCategoryById: SubCategory;
  profile: User;
};


export type QueryGetAgencyByIdArgs = {
  agencyId: Scalars['Int'];
};


export type QueryGetAllBookingArgs = {
  agencyId?: InputMaybe<Scalars['Float']>;
  userId?: InputMaybe<Scalars['Float']>;
};


export type QueryGetAllCategoriesArgs = {
  name?: InputMaybe<Scalars['String']>;
  productId?: InputMaybe<Scalars['Int']>;
  subCategoryId?: InputMaybe<Scalars['Int']>;
};


export type QueryGetAllProductsArgs = {
  categoryId?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
};


export type QueryGetAllSubCategoriesArgs = {
  categoryId?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
};


export type QueryGetBookingByIdArgs = {
  bookingId: Scalars['Int'];
};


export type QueryGetBookingsByUserArgs = {
  userId: Scalars['Int'];
};


export type QueryGetCategoryByIdArgs = {
  categoryId: Scalars['Int'];
};


export type QueryGetProductByIdArgs = {
  productId: Scalars['Int'];
};


export type QueryGetProductCodesByStatusArgs = {
  status: Status;
};


export type QueryGetSubCategoryByIdArgs = {
  subCategoryId: Scalars['Int'];
};

export type Review = {
  __typename?: 'Review';
  comment: Scalars['String'];
  id: Scalars['Int'];
  product?: Maybe<Product>;
  rate: Scalars['Int'];
  user?: Maybe<User>;
};

/** Check if the product is available or booked. */
export enum Status {
  Available = 'AVAILABLE',
  Booked = 'BOOKED'
}

/** Check booking's state. */
export enum StatusBooking {
  Booked = 'BOOKED',
  Canceled = 'CANCELED',
  Late = 'LATE',
  Retrieved = 'RETRIEVED'
}

export type SubCategory = {
  __typename?: 'SubCategory';
  id: Scalars['Int'];
  name: Scalars['String'];
  thumbnail: Scalars['String'];
};

export type UpdateAgencyInput = {
  address?: InputMaybe<Scalars['String']>;
  city?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  postcode?: InputMaybe<Scalars['String']>;
};

export type UpdateBookingInput = {
  agency?: InputMaybe<AgencyId>;
  bookingDate?: InputMaybe<Scalars['DateTimeISO']>;
  endDate?: InputMaybe<Scalars['DateTimeISO']>;
  invoice?: InputMaybe<Scalars['String']>;
  startDate?: InputMaybe<Scalars['DateTimeISO']>;
  status: StatusBooking;
};

export type UpdateCategoryInput = {
  name?: InputMaybe<Scalars['String']>;
};

export type UpdateProductInput = {
  brand?: InputMaybe<Scalars['String']>;
  categories: Array<ObjectId>;
  description?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['Float']>;
  reviews?: InputMaybe<Array<ObjectId>>;
  thumbnail?: InputMaybe<Scalars['String']>;
};

export type UpdateProduct_PictureInput = {
  alt: Scalars['String'];
  productId: Scalars['Int'];
  thumbnail: Scalars['String'];
};

export type UpdateReviewInput = {
  comment?: InputMaybe<Scalars['String']>;
  rate?: InputMaybe<Scalars['Int']>;
};

export type UpdateSubCategoryInput = {
  category: ObjectId;
  name?: InputMaybe<Scalars['String']>;
  thumbnail?: InputMaybe<Scalars['String']>;
};

export type UpdateUserInput = {
  address?: InputMaybe<Scalars['String']>;
  avatar?: InputMaybe<Scalars['String']>;
  city?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<Scalars['String']>;
  firstname?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  postcode?: InputMaybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  address: Scalars['String'];
  avatar: Scalars['String'];
  bookings: Array<Booking>;
  city: Scalars['String'];
  country: Scalars['String'];
  email: Scalars['String'];
  firstname: Scalars['String'];
  id: Scalars['Float'];
  name: Scalars['String'];
  phone: Scalars['String'];
  postcode: Scalars['String'];
  reviews: Array<Review>;
  role: Scalars['String'];
};

export type UserId = {
  id: Scalars['Int'];
};
