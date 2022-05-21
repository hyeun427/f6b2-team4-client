import { useMutation } from '@apollo/client';
import React from 'react';
import UserEditUI from './useredit.presenter';
import { UPDATE_USER } from './useredit.queries';

export default function UserEditContainer() {
  const [updateUser] = useMutation(UPDATE_USER);

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const open = Boolean(anchorEl);

  const handleClickListItem = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (
    event: React.MouseEvent<HTMLElement>,
    index: number
  ) => {
    setSelectedIndex(index);
    setAnchorEl(null);
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

  const onClickUpdate = async () => {
    try {
      const result = await updateUser({
        variables: {
          originalPassword: 'jtjt0363!!',
          updateUserInput: {
            myLang: options[selectedIndex],
          },
        },
      });
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  return (
    <UserEditUI
      open={open}
      selectedIndex={selectedIndex}
      handleClickListItem={handleClickListItem}
      handleMenuItemClick={handleMenuItemClick}
      handleClose={handleClose}
      options={options}
      onClickUpdate={onClickUpdate}
    />
  );
}
