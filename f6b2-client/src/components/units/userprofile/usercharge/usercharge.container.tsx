import UserChargeUI from './usercharge.presenter';

export default function UserChargeContainer(props) {
  let totalPoint = 0;

  props?.receipts?.fetchReceipts.forEach((el) => {
    if (el.status === 'PURCHASED') totalPoint = totalPoint + el.point;
    else totalPoint = totalPoint - el.point;
  });

  return <UserChargeUI receipts={props.receipts} totalPoint={totalPoint} />;
}
