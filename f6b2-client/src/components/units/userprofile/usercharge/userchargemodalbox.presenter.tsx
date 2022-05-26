import styled from '@emotion/styled';
import { gql, useMutation } from '@apollo/client';
import { FETCH_RECEIPTS } from '../userprofile.queries';

export const CANCLE_RECEIPT = gql`
  mutation deleteReceipt($impUid: String!, $price: Float!) {
    deleteReceipt(impUid: $impUid, price: $price) {
      id
    }
  }
`;

export const WrapperModalBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid red;
`;

export const H2Title = styled.h2`
  width: 100%;
  height: auto;
  font-size: 20px;
  font-style: bold;
  text-align: Center;
`;

export const PExplane = styled.p`
  width: 100%;
  height: auto;
  font-size: 16px;
  font-style: bold;
  text-align: Center;
`;

export default function CancleModalBox(props) {
  const [cancle] = useMutation(CANCLE_RECEIPT);
  const onClickCancle = async () => {
    try {
      const result = await cancle({
        variables: {
          impUid: props?.impUid,
          price: props?.price,
        },
        refetchQueries: [
          {
            query: FETCH_RECEIPTS,
          },
        ],
      });
      props.handleClose();
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  return (
    <WrapperModalBox>
      <H2Title>Cancle</H2Title>
      <PExplane>정말 취소하시겠습니까?</PExplane>
      <button onClick={onClickCancle}>취소하기</button>
    </WrapperModalBox>
  );
}
