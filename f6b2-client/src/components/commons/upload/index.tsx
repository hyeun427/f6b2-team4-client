import { useMutation } from "@apollo/client";
import { ChangeEvent, useRef, useState } from "react";
import { checkFileValidation } from "../../../commons/libraries/validation";
import {
  IMutation,
  IMutationUploadFileArgs,

} from '../../../commons/types/generated/types';
import styled from '@emotion/styled';
import { Modal } from 'antd';
import { UPLOAD_FILE } from '../../commons/queries';
import { BiImageAlt } from 'react-icons/bi';
import * as S from '../../../components/units/community/write/CommunityWrite.styles';
import * as Edit from '../../units/userprofile/useredit/useredit.style';


export const UploadImageWrapper = styled.div`
  width: 30px;
  display: flex;
  flex-direction: column;
`;

export const UploadButton = styled.button`
  color: white;
  width: 100px;
  height: 100px;
  background: #bdbdbd;
`;

export default function ImageUpload(props: {
  // setInputs: (arg0: any) => void;
  // inputs: any;
  onChangeFileUrls: (fileUrl: string) => void;
  fileUrls: Array<string>;
  type: string;
}) {
  const fileRef = useRef<HTMLInputElement>(null);

  const [, setImageUrl] = useState<string | undefined>("");
  const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);

  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    // const isValid = checkFileValidation(file);
    // if (!isValid) return;

    try {
      const { data: resultImgUrl } = await uploadFile({
        variables: { files: [file] },
      });
      console.log(resultImgUrl);

      setImageUrl(resultImgUrl?.uploadFile[3]);
      props.onChangeFileUrls(String(resultImgUrl?.uploadFile[3]));
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  const onClickImage = () => {
    fileRef.current?.click();
  };

  return (
    <UploadImageWrapper>
      {props.type === "garden" && (
        <BiImageAlt onClick={onClickImage} size={"30"} color={"A4B1DA"} />
      )}

      {props.type === 'community' && (
        <S.ImgBtn>
          <S.BsFileEarmarkIcon onClick={onClickImage} />
        </S.ImgBtn>
      )}
      {props.type === 'edit' && <Edit.IconEdit onClick={onClickImage} />}
      <input
        id="images"
        style={{ display: "none" }}
        type="file"
        onChange={onChangeFile}
        ref={fileRef}
      />
    </UploadImageWrapper>
  );
}
