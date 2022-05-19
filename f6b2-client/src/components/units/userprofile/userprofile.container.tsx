import { useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';
import { userInfoState } from '../../../commons/store';
import { FETCH_BOARDS, FETCH_USERS } from '../../commons/queries';
import UserProfileUI from './userprofile.presenter';

export default function UserProfileContainer() {
  const [userInfo] = useRecoilState(userInfoState);
  const router = useRouter();
  const { data: boards } = useQuery(FETCH_BOARDS);
  const { data: userList } = useQuery(FETCH_USERS);

  console.log(boards);
  console.log(userList);

  //  data 중에 router.query.id 와 data.fetchBoards.writer.id 가 일치 하는 경우의 board와 community를 찾아내야 한다.
  const userGarden = boards?.fetchBoards?.filter(
    (el: any) => el.writer.id === router.query.id
  );

  //  data 중에 router.query.id 와 data.fetchUsers.id 가 일치 하는 경우의 user를 찾아내야 한다.
  const userInformation = userList?.fetchUsers?.filter(
    (el: any) => el.id === router.query.id
  );

  console.log(userInformation);

  return (
    <UserProfileUI
      userInfo={userInfo}
      userGarden={userGarden}
      userInformation={userInformation}
    />
  );
}
