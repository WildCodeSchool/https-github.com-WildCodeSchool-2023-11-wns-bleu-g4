import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
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
  product?: Maybe<Product>;
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

export type DeleteAgencyMutationVariables = Exact<{
  agencyId: Scalars['Float'];
}>;


export type DeleteAgencyMutation = { __typename?: 'Mutation', deleteAgency: string };

export type GetAgencyByIdQueryVariables = Exact<{
  agencyId: Scalars['Int'];
}>;


export type GetAgencyByIdQuery = { __typename?: 'Query', getAgencyById: { __typename?: 'Agency', id: number, name: string, address: string, postcode: string, city: string, country: string, phone: string, email: string } };

export type GetAllAgenciesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllAgenciesQuery = { __typename?: 'Query', getAllAgencies: Array<{ __typename?: 'Agency', id: number, name: string, address: string, postcode: string, city: string, country: string, phone: string, email: string }> };

export type UpdateAgencyMutationVariables = Exact<{
  data: UpdateAgencyInput;
  agencyId: Scalars['Float'];
}>;


export type UpdateAgencyMutation = { __typename?: 'Mutation', updateAgency: { __typename?: 'Agency', id: number, name: string, address: string, postcode: string, city: string, country: string, phone: string, email: string } };

export type CancelBookingMutationVariables = Exact<{
  bookingId: Scalars['Float'];
}>;


export type CancelBookingMutation = { __typename?: 'Mutation', cancelBooking: string };

export type CreateBookingMutationVariables = Exact<{
  data: NewBookingInput;
}>;


export type CreateBookingMutation = { __typename?: 'Mutation', createBooking: { __typename?: 'Booking', id: number, status: StatusBooking, invoice: string, bookingDate: any, startDate: any, endDate: any } };

export type GetAllBookingQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllBookingQuery = { __typename?: 'Query', getAllBooking: Array<{ __typename?: 'Booking', id: number, status: StatusBooking, invoice: string, bookingDate: any, startDate: any, endDate: any }> };

export type GetBookingByIdQueryVariables = Exact<{
  bookingId: Scalars['Int'];
}>;


export type GetBookingByIdQuery = { __typename?: 'Query', getBookingById: { __typename?: 'Booking', id: number, status: StatusBooking, invoice: string, bookingDate: any, startDate: any, endDate: any } };

export type UpdateBookingMutationVariables = Exact<{
  data: UpdateBookingInput;
  bookingId: Scalars['Float'];
}>;


export type UpdateBookingMutation = { __typename?: 'Mutation', updateBooking: { __typename?: 'Booking', id: number, status: StatusBooking, invoice: string, bookingDate: any, startDate: any, endDate: any, agency: { __typename?: 'Agency', id: number }, user: { __typename?: 'User', id: number } } };

export type CreateProductMutationVariables = Exact<{
  data: NewProductInput;
}>;


export type CreateProductMutation = { __typename?: 'Mutation', createProduct: { __typename?: 'Product', id: number, name: string, price: number, description: string, brand: string, thumbnail: string } };

export type DeleteProductMutationVariables = Exact<{
  productId: Scalars['Float'];
}>;


export type DeleteProductMutation = { __typename?: 'Mutation', deleteProduct: string };

export type GetAllProductsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllProductsQuery = { __typename?: 'Query', getAllProducts: Array<{ __typename?: 'Product', id: number, name: string, price: number, description: string, brand: string, thumbnail: string }> };

export type GetProductByIdQueryVariables = Exact<{
  productId: Scalars['Int'];
}>;


export type GetProductByIdQuery = { __typename?: 'Query', getProductById: { __typename?: 'Product', id: number, name: string, price: number, description: string, brand: string, thumbnail: string } };

export type CreateUserMutationVariables = Exact<{
  data: NewUserInput;
}>;


export type CreateUserMutation = { __typename?: 'Mutation', createUser: { __typename?: 'User', id: number, email: string, name: string, firstname: string, address: string, postcode: string, city: string, country: string, phone: string, avatar: string } };

export type LoginMutationVariables = Exact<{
  data: LoginInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: string };


export const DeleteAgencyDocument = gql`
    mutation DeleteAgency($agencyId: Float!) {
  deleteAgency(agencyId: $agencyId)
}
    `;
export type DeleteAgencyMutationFn = Apollo.MutationFunction<DeleteAgencyMutation, DeleteAgencyMutationVariables>;

/**
 * __useDeleteAgencyMutation__
 *
 * To run a mutation, you first call `useDeleteAgencyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteAgencyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteAgencyMutation, { data, loading, error }] = useDeleteAgencyMutation({
 *   variables: {
 *      agencyId: // value for 'agencyId'
 *   },
 * });
 */
export function useDeleteAgencyMutation(baseOptions?: Apollo.MutationHookOptions<DeleteAgencyMutation, DeleteAgencyMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteAgencyMutation, DeleteAgencyMutationVariables>(DeleteAgencyDocument, options);
      }
export type DeleteAgencyMutationHookResult = ReturnType<typeof useDeleteAgencyMutation>;
export type DeleteAgencyMutationResult = Apollo.MutationResult<DeleteAgencyMutation>;
export type DeleteAgencyMutationOptions = Apollo.BaseMutationOptions<DeleteAgencyMutation, DeleteAgencyMutationVariables>;
export const GetAgencyByIdDocument = gql`
    query GetAgencyById($agencyId: Int!) {
  getAgencyById(agencyId: $agencyId) {
    id
    name
    address
    postcode
    city
    country
    phone
    email
  }
}
    `;

/**
 * __useGetAgencyByIdQuery__
 *
 * To run a query within a React component, call `useGetAgencyByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAgencyByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAgencyByIdQuery({
 *   variables: {
 *      agencyId: // value for 'agencyId'
 *   },
 * });
 */
export function useGetAgencyByIdQuery(baseOptions: Apollo.QueryHookOptions<GetAgencyByIdQuery, GetAgencyByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAgencyByIdQuery, GetAgencyByIdQueryVariables>(GetAgencyByIdDocument, options);
      }
export function useGetAgencyByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAgencyByIdQuery, GetAgencyByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAgencyByIdQuery, GetAgencyByIdQueryVariables>(GetAgencyByIdDocument, options);
        }
export type GetAgencyByIdQueryHookResult = ReturnType<typeof useGetAgencyByIdQuery>;
export type GetAgencyByIdLazyQueryHookResult = ReturnType<typeof useGetAgencyByIdLazyQuery>;
export type GetAgencyByIdQueryResult = Apollo.QueryResult<GetAgencyByIdQuery, GetAgencyByIdQueryVariables>;
export const GetAllAgenciesDocument = gql`
    query GetAllAgencies {
  getAllAgencies {
    id
    name
    address
    postcode
    city
    country
    phone
    email
  }
}
    `;

/**
 * __useGetAllAgenciesQuery__
 *
 * To run a query within a React component, call `useGetAllAgenciesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllAgenciesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllAgenciesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllAgenciesQuery(baseOptions?: Apollo.QueryHookOptions<GetAllAgenciesQuery, GetAllAgenciesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllAgenciesQuery, GetAllAgenciesQueryVariables>(GetAllAgenciesDocument, options);
      }
export function useGetAllAgenciesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllAgenciesQuery, GetAllAgenciesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllAgenciesQuery, GetAllAgenciesQueryVariables>(GetAllAgenciesDocument, options);
        }
export type GetAllAgenciesQueryHookResult = ReturnType<typeof useGetAllAgenciesQuery>;
export type GetAllAgenciesLazyQueryHookResult = ReturnType<typeof useGetAllAgenciesLazyQuery>;
export type GetAllAgenciesQueryResult = Apollo.QueryResult<GetAllAgenciesQuery, GetAllAgenciesQueryVariables>;
export const UpdateAgencyDocument = gql`
    mutation UpdateAgency($data: UpdateAgencyInput!, $agencyId: Float!) {
  updateAgency(data: $data, agencyId: $agencyId) {
    id
    name
    address
    postcode
    city
    country
    phone
    email
  }
}
    `;
export type UpdateAgencyMutationFn = Apollo.MutationFunction<UpdateAgencyMutation, UpdateAgencyMutationVariables>;

/**
 * __useUpdateAgencyMutation__
 *
 * To run a mutation, you first call `useUpdateAgencyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateAgencyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateAgencyMutation, { data, loading, error }] = useUpdateAgencyMutation({
 *   variables: {
 *      data: // value for 'data'
 *      agencyId: // value for 'agencyId'
 *   },
 * });
 */
export function useUpdateAgencyMutation(baseOptions?: Apollo.MutationHookOptions<UpdateAgencyMutation, UpdateAgencyMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateAgencyMutation, UpdateAgencyMutationVariables>(UpdateAgencyDocument, options);
      }
export type UpdateAgencyMutationHookResult = ReturnType<typeof useUpdateAgencyMutation>;
export type UpdateAgencyMutationResult = Apollo.MutationResult<UpdateAgencyMutation>;
export type UpdateAgencyMutationOptions = Apollo.BaseMutationOptions<UpdateAgencyMutation, UpdateAgencyMutationVariables>;
export const CancelBookingDocument = gql`
    mutation CancelBooking($bookingId: Float!) {
  cancelBooking(bookingId: $bookingId)
}
    `;
export type CancelBookingMutationFn = Apollo.MutationFunction<CancelBookingMutation, CancelBookingMutationVariables>;

/**
 * __useCancelBookingMutation__
 *
 * To run a mutation, you first call `useCancelBookingMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCancelBookingMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [cancelBookingMutation, { data, loading, error }] = useCancelBookingMutation({
 *   variables: {
 *      bookingId: // value for 'bookingId'
 *   },
 * });
 */
export function useCancelBookingMutation(baseOptions?: Apollo.MutationHookOptions<CancelBookingMutation, CancelBookingMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CancelBookingMutation, CancelBookingMutationVariables>(CancelBookingDocument, options);
      }
export type CancelBookingMutationHookResult = ReturnType<typeof useCancelBookingMutation>;
export type CancelBookingMutationResult = Apollo.MutationResult<CancelBookingMutation>;
export type CancelBookingMutationOptions = Apollo.BaseMutationOptions<CancelBookingMutation, CancelBookingMutationVariables>;
export const CreateBookingDocument = gql`
    mutation CreateBooking($data: NewBookingInput!) {
  createBooking(data: $data) {
    id
    status
    invoice
    bookingDate
    startDate
    endDate
  }
}
    `;
export type CreateBookingMutationFn = Apollo.MutationFunction<CreateBookingMutation, CreateBookingMutationVariables>;

/**
 * __useCreateBookingMutation__
 *
 * To run a mutation, you first call `useCreateBookingMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateBookingMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createBookingMutation, { data, loading, error }] = useCreateBookingMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateBookingMutation(baseOptions?: Apollo.MutationHookOptions<CreateBookingMutation, CreateBookingMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateBookingMutation, CreateBookingMutationVariables>(CreateBookingDocument, options);
      }
export type CreateBookingMutationHookResult = ReturnType<typeof useCreateBookingMutation>;
export type CreateBookingMutationResult = Apollo.MutationResult<CreateBookingMutation>;
export type CreateBookingMutationOptions = Apollo.BaseMutationOptions<CreateBookingMutation, CreateBookingMutationVariables>;
export const GetAllBookingDocument = gql`
    query GetAllBooking {
  getAllBooking {
    id
    status
    invoice
    bookingDate
    startDate
    endDate
  }
}
    `;

/**
 * __useGetAllBookingQuery__
 *
 * To run a query within a React component, call `useGetAllBookingQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllBookingQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllBookingQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllBookingQuery(baseOptions?: Apollo.QueryHookOptions<GetAllBookingQuery, GetAllBookingQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllBookingQuery, GetAllBookingQueryVariables>(GetAllBookingDocument, options);
      }
export function useGetAllBookingLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllBookingQuery, GetAllBookingQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllBookingQuery, GetAllBookingQueryVariables>(GetAllBookingDocument, options);
        }
export type GetAllBookingQueryHookResult = ReturnType<typeof useGetAllBookingQuery>;
export type GetAllBookingLazyQueryHookResult = ReturnType<typeof useGetAllBookingLazyQuery>;
export type GetAllBookingQueryResult = Apollo.QueryResult<GetAllBookingQuery, GetAllBookingQueryVariables>;
export const GetBookingByIdDocument = gql`
    query GetBookingById($bookingId: Int!) {
  getBookingById(bookingId: $bookingId) {
    id
    status
    invoice
    bookingDate
    startDate
    endDate
  }
}
    `;

/**
 * __useGetBookingByIdQuery__
 *
 * To run a query within a React component, call `useGetBookingByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBookingByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBookingByIdQuery({
 *   variables: {
 *      bookingId: // value for 'bookingId'
 *   },
 * });
 */
export function useGetBookingByIdQuery(baseOptions: Apollo.QueryHookOptions<GetBookingByIdQuery, GetBookingByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetBookingByIdQuery, GetBookingByIdQueryVariables>(GetBookingByIdDocument, options);
      }
export function useGetBookingByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetBookingByIdQuery, GetBookingByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetBookingByIdQuery, GetBookingByIdQueryVariables>(GetBookingByIdDocument, options);
        }
export type GetBookingByIdQueryHookResult = ReturnType<typeof useGetBookingByIdQuery>;
export type GetBookingByIdLazyQueryHookResult = ReturnType<typeof useGetBookingByIdLazyQuery>;
export type GetBookingByIdQueryResult = Apollo.QueryResult<GetBookingByIdQuery, GetBookingByIdQueryVariables>;
export const UpdateBookingDocument = gql`
    mutation UpdateBooking($data: UpdateBookingInput!, $bookingId: Float!) {
  updateBooking(data: $data, bookingId: $bookingId) {
    id
    status
    invoice
    bookingDate
    startDate
    endDate
    agency {
      id
    }
    user {
      id
    }
  }
}
    `;
export type UpdateBookingMutationFn = Apollo.MutationFunction<UpdateBookingMutation, UpdateBookingMutationVariables>;

/**
 * __useUpdateBookingMutation__
 *
 * To run a mutation, you first call `useUpdateBookingMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateBookingMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateBookingMutation, { data, loading, error }] = useUpdateBookingMutation({
 *   variables: {
 *      data: // value for 'data'
 *      bookingId: // value for 'bookingId'
 *   },
 * });
 */
export function useUpdateBookingMutation(baseOptions?: Apollo.MutationHookOptions<UpdateBookingMutation, UpdateBookingMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateBookingMutation, UpdateBookingMutationVariables>(UpdateBookingDocument, options);
      }
export type UpdateBookingMutationHookResult = ReturnType<typeof useUpdateBookingMutation>;
export type UpdateBookingMutationResult = Apollo.MutationResult<UpdateBookingMutation>;
export type UpdateBookingMutationOptions = Apollo.BaseMutationOptions<UpdateBookingMutation, UpdateBookingMutationVariables>;
export const CreateProductDocument = gql`
    mutation CreateProduct($data: NewProductInput!) {
  createProduct(data: $data) {
    id
    name
    price
    description
    brand
    thumbnail
  }
}
    `;
export type CreateProductMutationFn = Apollo.MutationFunction<CreateProductMutation, CreateProductMutationVariables>;

/**
 * __useCreateProductMutation__
 *
 * To run a mutation, you first call `useCreateProductMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateProductMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createProductMutation, { data, loading, error }] = useCreateProductMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateProductMutation(baseOptions?: Apollo.MutationHookOptions<CreateProductMutation, CreateProductMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateProductMutation, CreateProductMutationVariables>(CreateProductDocument, options);
      }
export type CreateProductMutationHookResult = ReturnType<typeof useCreateProductMutation>;
export type CreateProductMutationResult = Apollo.MutationResult<CreateProductMutation>;
export type CreateProductMutationOptions = Apollo.BaseMutationOptions<CreateProductMutation, CreateProductMutationVariables>;
export const DeleteProductDocument = gql`
    mutation DeleteProduct($productId: Float!) {
  deleteProduct(productId: $productId)
}
    `;
export type DeleteProductMutationFn = Apollo.MutationFunction<DeleteProductMutation, DeleteProductMutationVariables>;

/**
 * __useDeleteProductMutation__
 *
 * To run a mutation, you first call `useDeleteProductMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteProductMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteProductMutation, { data, loading, error }] = useDeleteProductMutation({
 *   variables: {
 *      productId: // value for 'productId'
 *   },
 * });
 */
export function useDeleteProductMutation(baseOptions?: Apollo.MutationHookOptions<DeleteProductMutation, DeleteProductMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteProductMutation, DeleteProductMutationVariables>(DeleteProductDocument, options);
      }
export type DeleteProductMutationHookResult = ReturnType<typeof useDeleteProductMutation>;
export type DeleteProductMutationResult = Apollo.MutationResult<DeleteProductMutation>;
export type DeleteProductMutationOptions = Apollo.BaseMutationOptions<DeleteProductMutation, DeleteProductMutationVariables>;
export const GetAllProductsDocument = gql`
    query GetAllProducts {
  getAllProducts {
    id
    name
    price
    description
    brand
    thumbnail
  }
}
    `;

/**
 * __useGetAllProductsQuery__
 *
 * To run a query within a React component, call `useGetAllProductsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllProductsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllProductsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllProductsQuery(baseOptions?: Apollo.QueryHookOptions<GetAllProductsQuery, GetAllProductsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllProductsQuery, GetAllProductsQueryVariables>(GetAllProductsDocument, options);
      }
export function useGetAllProductsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllProductsQuery, GetAllProductsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllProductsQuery, GetAllProductsQueryVariables>(GetAllProductsDocument, options);
        }
export type GetAllProductsQueryHookResult = ReturnType<typeof useGetAllProductsQuery>;
export type GetAllProductsLazyQueryHookResult = ReturnType<typeof useGetAllProductsLazyQuery>;
export type GetAllProductsQueryResult = Apollo.QueryResult<GetAllProductsQuery, GetAllProductsQueryVariables>;
export const GetProductByIdDocument = gql`
    query GetProductById($productId: Int!) {
  getProductById(productId: $productId) {
    id
    name
    price
    description
    brand
    thumbnail
  }
}
    `;

/**
 * __useGetProductByIdQuery__
 *
 * To run a query within a React component, call `useGetProductByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProductByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProductByIdQuery({
 *   variables: {
 *      productId: // value for 'productId'
 *   },
 * });
 */
export function useGetProductByIdQuery(baseOptions: Apollo.QueryHookOptions<GetProductByIdQuery, GetProductByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetProductByIdQuery, GetProductByIdQueryVariables>(GetProductByIdDocument, options);
      }
export function useGetProductByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetProductByIdQuery, GetProductByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetProductByIdQuery, GetProductByIdQueryVariables>(GetProductByIdDocument, options);
        }
export type GetProductByIdQueryHookResult = ReturnType<typeof useGetProductByIdQuery>;
export type GetProductByIdLazyQueryHookResult = ReturnType<typeof useGetProductByIdLazyQuery>;
export type GetProductByIdQueryResult = Apollo.QueryResult<GetProductByIdQuery, GetProductByIdQueryVariables>;
export const CreateUserDocument = gql`
    mutation CreateUser($data: NewUserInput!) {
  createUser(data: $data) {
    id
    email
    name
    firstname
    address
    postcode
    city
    country
    phone
    avatar
  }
}
    `;
export type CreateUserMutationFn = Apollo.MutationFunction<CreateUserMutation, CreateUserMutationVariables>;

/**
 * __useCreateUserMutation__
 *
 * To run a mutation, you first call `useCreateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserMutation, { data, loading, error }] = useCreateUserMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateUserMutation(baseOptions?: Apollo.MutationHookOptions<CreateUserMutation, CreateUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateUserMutation, CreateUserMutationVariables>(CreateUserDocument, options);
      }
export type CreateUserMutationHookResult = ReturnType<typeof useCreateUserMutation>;
export type CreateUserMutationResult = Apollo.MutationResult<CreateUserMutation>;
export type CreateUserMutationOptions = Apollo.BaseMutationOptions<CreateUserMutation, CreateUserMutationVariables>;
export const LoginDocument = gql`
    mutation Login($data: LoginInput!) {
  login(data: $data)
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;