import { useMutation } from '@apollo/client';
import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { userInfoState } from '../../../../commons/store';
import { FETCH_USER_ID } from '../userprofile.queries';
import UserEditUI from './useredit.presenter';
import { UPDATE_USER } from './useredit.queries';
import { SelectChangeEvent } from '@mui/material/Select';

export default function UserEditContainer(props) {
  const [userInfo] = useRecoilState(userInfoState);
  const [updateUser] = useMutation(UPDATE_USER);

  const [isName, setIsName] = useState('');
  const [isNewLang, setIsNewLang] = useState('');
  const [isRegion, setIsRegion] = useState('');
  const [isCurPW, setIsCurPW] = useState('');
  const [isNewPW, setIsNewPW] = useState('');
  const [fileUrls, setFileUrls] = useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setIsNewLang(event.target.value as string);
  };

  useEffect(() => {
    setFileUrls(props?.user?.fetchUserId?.image);
    setIsName(props?.user?.fetchUserId?.name);
    setIsNewLang(props?.user?.fetchUserId?.newLang);
  }, []);

  const onChangeFileUrls = (fileUrl: string) => {
    setFileUrls(fileUrl);
  };

  const handleChangeRegion = (event: SelectChangeEvent) => {
    setIsRegion(event.target.value as string);
  };

  const onChangeName = (event: SelectChangeEvent) => {
    setIsName(event.target.value as string);
  };

  const onChangeCurPw = (event) => {
    setIsCurPW(event.target.value);
  };

  const onChangeNewPw = (event) => {
    setIsNewPW(event.target.value);
  };

  const onClickUpdate = async () => {
    try {
      const result = await updateUser({
        variables: {
          originalPassword: isCurPW,
          updateUserInput: {
            name: isName,
            newLang: isNewLang,
            // currentRegion: isRegion,
            password: isNewPW,
            image: fileUrls,
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
      isNewLang={isNewLang}
      handleChange={handleChange}
      handleChangeRegion={handleChangeRegion}
      onChangeName={onChangeName}
      onClickUpdate={onClickUpdate}
      onChangeCurPw={onChangeCurPw}
      onChangeNewPw={onChangeNewPw}
      user={props.user}
      onChangeFileUrls={onChangeFileUrls}
      fileUrls={fileUrls}
    />
  );
}
