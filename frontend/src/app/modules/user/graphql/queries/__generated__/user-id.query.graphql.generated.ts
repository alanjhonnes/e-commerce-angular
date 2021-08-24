import * as Types from '../../../../../shared/graphql/generated/types';

import { UserFieldsFragment } from '../../fragments/__generated__/user.fragment.graphql.generated';
import gql from 'graphql-tag';
import { UserFieldsFragmentDoc } from '../../fragments/__generated__/user.fragment.graphql.generated';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type UserByIdQueryVariables = Types.Exact<{
  id: Types.Scalars['ID'];
}>;


export type UserByIdQuery = (
  { readonly __typename: 'Query' }
  & { readonly userById: Types.Maybe<(
    { readonly __typename: 'User' }
    & UserFieldsFragment
  )> }
);

export const UserByIdDocument = gql`
    query UserById($id: ID!) {
  userById(id: $id) {
    ...UserFields
  }
}
    ${UserFieldsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class UserByIdGQL extends Apollo.Query<UserByIdQuery, UserByIdQueryVariables> {
    document = UserByIdDocument;
    
  }