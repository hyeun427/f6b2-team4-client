import { useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { userInfoState } from '../../../commons/store';
import { FETCH_BOARDS } from '../../commons/queries';
import UserProfileUI from './userprofile.presenter';
import {
  FETCH_USER_ID,
  FETCH_COMMUNITY_BOARDS,
  FETCH_RECEIPTS,
} from './userprofile.queries';

import { MouseEvent } from 'react';

export default function UserProfileContainer() {
  const [userInfo] = useRecoilState(userInfoState);
  const [istab, setIsTab] = useState('mygarden');
  const [isMy, setIsMy] = useState(false);
  const router = useRouter();

  // 본인 여부 확인
  useEffect(() => {
    if (userInfo.id === router.query.id) setIsMy(true);
    else setIsMy(false);
  }, []);

  // material modal에 필요한 함수
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { data: boards } = useQuery(FETCH_BOARDS, {
    variables: {
      userId: router.query.id,
    },
  });

  const { data: user } = useQuery(FETCH_USER_ID, {
    variables: {
      userId: router.query.id,
    },
  });

  const { data: community } = useQuery(FETCH_COMMUNITY_BOARDS, {
    variables: {
      userId: router.query.id,
    },
  });

  const { data: receipts } = useQuery(FETCH_RECEIPTS);

  //  data 중에 router.query.id 와 data.fetchBoards.writer.id 가 일치 하는 경우의 board와 community를 찾아내야 한다.
  const userGarden = boards?.fetchBoards?.filter(
    (el: any) => el.writer.id === router.query.id
  );

  const userCommunity = community?.fetchCommunityBoards?.filter(
    (el: any) => el.writer.id === router.query.id
  );

  const onClickTab = (event: MouseEvent<HTMLButtonElement>) => {
    setIsTab(event.currentTarget.id);
  };

  const onClickEdit = () => {
    handleOpen();
  };

  return (
    <UserProfileUI
      userGarden={userGarden}
      userCommunity={userCommunity}
      receipts={receipts}
      onClickTab={onClickTab}
      istab={istab}
      user={user}
      onClickEdit={onClickEdit}
      community={community}
      handleClose={handleClose}
      open={open}
      isMy={isMy}
    />
  );
}
