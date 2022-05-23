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
  const [fileUrls, setFileUrls] = useState([]);

  const handleChange = (event: SelectChangeEvent) => {
    setIsNewLang(event.target.value as string);
  };

  //   fetchUserId:
  // email: "zintagi@naver.com"
  // id: "60c028ab-2e02-4a59-b421-17a2791da74d"
  // image: "test"
  // myLang: "한국어"
  // name: "zintagi"
  // newLang: "한국어"

  const onChangeFileUrls = (fileUrl: string) => {
    const newFileUrls = [...fileUrls];
    newFileUrls.push(fileUrl);
    setFileUrls(newFileUrls);
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

  // type UpdateUserInput {
  //   name: String
  //   image: String
  //   email: String
  //   password: String
  //   myLang: String
  //   newLang: String
  //   currentRegion: String
  //   }

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
            image: fileUrls[0],
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
