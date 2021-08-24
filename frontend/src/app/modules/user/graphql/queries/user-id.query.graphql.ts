import gql from 'graphql-tag';
import { UserFieldsFragment } from '../fragments/user.fragment.graphql';

export const UserByIdQuery = gql`
  ${UserFieldsFragment}

  query UserById($id: ID!) {
    userById(id: $id) {
      ...UserFields
    }
  }
`;
