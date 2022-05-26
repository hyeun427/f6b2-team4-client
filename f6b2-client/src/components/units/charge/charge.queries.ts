import { gql } from '@apollo/client';

export const BUY_POINT = gql`
  mutation createReceipt($impUid: String!, $price: Float!) {
    createReceipt(impUid: $impUid, price: $price) {
      id
    }
  }
`;
