import * as Types from '../../../../../shared/graphql/generated/types';

import { ProductFieldsFragment } from '../../fragments/__generated__/product.fragment.graphql.generated';
import gql from 'graphql-tag';
import { ProductFieldsFragmentDoc } from '../../fragments/__generated__/product.fragment.graphql.generated';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type ProductByIdQueryVariables = Types.Exact<{
  id: Types.Scalars['ID'];
}>;


export type ProductByIdQuery = (
  { readonly __typename: 'Query' }
  & { readonly productById: Types.Maybe<(
    { readonly __typename: 'Product' }
    & ProductFieldsFragment
  )> }
);

export const ProductByIdDocument = gql`
    query ProductById($id: ID!) {
  productById(id: $id) {
    ...ProductFields
  }
}
    ${ProductFieldsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class ProductByIdGQL extends Apollo.Query<ProductByIdQuery, ProductByIdQueryVariables> {
    document = ProductByIdDocument;
    
  }