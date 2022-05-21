import * as Tab from './usertab.style';
import UserTabItemUI from './usertabitem.presenter';

export default function UserTabUI() {
  return (
    <Tab.Wrapper>
      <UserTabItemUI />
      <UserTabItemUI />
      <UserTabItemUI />
      <UserTabItemUI />
    </Tab.Wrapper>
  );
}
