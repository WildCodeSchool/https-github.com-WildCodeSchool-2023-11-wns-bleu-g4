import * as Types from '../../generated/schema';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type GetAgencyByIdQueryVariables = Types.Exact<{
  agencyId: Types.Scalars['Int'];
}>;


export type GetAgencyByIdQuery = { __typename?: 'Query', getAgencyById: { __typename?: 'Agency', id: number, name: string, address: string, postcode: string, city: string, country: string, phone: string, email: string } };


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