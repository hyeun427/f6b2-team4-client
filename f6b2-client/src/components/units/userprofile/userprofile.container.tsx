import { useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { FETCH_BOARDS } from '../../commons/queries';
import UserProfileUI from './userprofile.presenter';
import { FETCH_USER_ID } from './userprofile.queries';

export default function UserProfileContainer() {
  const [isTab, setIsTab] = useState('mygarden');
  const router = useRouter();
  const { data: boards } = useQuery(FETCH_BOARDS);
  const { data: user } = useQuery(FETCH_USER_ID, {
    variables: {
      userId: router.query.id,
    },
  });

  console.log('user', user);

  //  data 중에 router.query.id 와 data.fetchBoards.writer.id 가 일치 하는 경우의 board와 community를 찾아내야 한다.
  const userGarden = boards?.fetchBoards?.filter(
    (el: any) => el.writer.id === router.query.id
  );

  const onClickTab = (event) => {
    setIsTab(event.currentTarget.id);
  };

  const onClickEdit = () => {
    alert('준비중입니다');
  };

  return (
    <UserProfileUI
      userGarden={userGarden}
      onClickTab={onClickTab}
      isTab={isTab}
      user={user}
      onClickEdit={onClickEdit}
    />
  );
}
