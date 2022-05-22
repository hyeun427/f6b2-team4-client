import { useMutation } from '@apollo/client';
import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { userInfoState } from '../../../../commons/store';
import { FETCH_USER_ID } from '../userprofile.queries';
import UserEditUI from './useredit.presenter';
import { UPDATE_USER } from './useredit.queries';

export default function UserEditContainer(props) {
  const [userInfo] = useRecoilState(userInfoState);
  const [updateUser] = useMutation(UPDATE_USER);

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [selectedNewIndex, setSelectedNewIndex] = React.useState(3);
  const open = Boolean(anchorEl);

  const handleClickListItem = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  // myLang 선택
  const handleMenuItemClick = (
    event: React.MouseEvent<HTMLElement>,
    index: number
  ) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  // newLang 선택
  const handleMenuNewItemClick = (
    event: React.MouseEvent<HTMLElement>,
    index: number
  ) => {
    setSelectedNewIndex(index);
    setAnchorEl(null);
    console.log('배울언어');
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const options = [
    '한국어',
    'English',
    '日本語',
    'español',
    'Français',
    '中国',
  ];

  useEffect(() => {
    setSelectedIndex(options.indexOf(userInfo.myLang));
    setSelectedNewIndex(options.indexOf(userInfo.newLang));
  }, []);

  const onClickUpdate = async () => {
    try {
      const result = await updateUser({
        variables: {
          originalPassword: 'jtjt0363!!',
          updateUserInput: {
            myLang: options[selectedIndex],
            newLang: options[selectedNewIndex],
          },
        },
        refetchQueries: [
          {
            query: FETCH_USER_ID,
            variables: {
              userId: userInfo.id,
            },
          },
        ],
      });
      props.onClose();
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  return (
    <UserEditUI
      open={open}
      selectedIndex={selectedIndex}
      selectedNewIndex={selectedNewIndex}
      handleClickListItem={handleClickListItem}
      handleMenuItemClick={handleMenuItemClick}
      handleMenuNewItemClick={handleMenuNewItemClick}
      handleClose={handleClose}
      options={options}
      onClickUpdate={onClickUpdate}
    />
  );
}
