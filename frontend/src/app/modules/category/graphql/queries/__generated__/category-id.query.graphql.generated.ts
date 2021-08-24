import * as Types from '../../../../../shared/graphql/generated/types';

import { CategoryFieldsFragment } from '../../fragments/__generated__/category.fragment.graphql.generated';
import gql from 'graphql-tag';
import { CategoryFieldsFragmentDoc } from '../../fragments/__generated__/category.fragment.graphql.generated';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type CategoryByIdQueryVariables = Types.Exact<{
  id: Types.Scalars['ID'];
}>;


export type CategoryByIdQuery = (
  { readonly __typename: 'Query' }
  & { readonly categoryById: Types.Maybe<(
    { readonly __typename: 'Category' }
    & CategoryFieldsFragment
  )> }
);

export const CategoryByIdDocument = gql`
    query CategoryById($id: ID!) {
  categoryById(id: $id) {
    ...CategoryFields
  }
}
    ${CategoryFieldsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class CategoryByIdGQL extends Apollo.Query<CategoryByIdQuery, CategoryByIdQueryVariables> {
    document = CategoryByIdDocument;
    
  }