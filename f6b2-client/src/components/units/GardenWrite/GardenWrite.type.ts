import { ChangeEvent } from 'react';
import { IUser } from '../../../commons/types/generated/types';

export interface IGardenWrite {
  onChangeContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onClickSave: () => void;
  data: {
    fetchUser: IUser;
  };
}

// export interface IPostingUIProps {
//   submitContents: () => void;
//   updateButton: () => void;
//   isEdit?: boolean;
//   originData: any;
//   showModal: () => void;
//   handleOk: () => void;
//   handleCancel: () => void;
//   handleComplete: (data: any) => void;
//   isOpen: boolean;
//   warning: boolean;
//   onChangeInputs: (
//     event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
//   ) => void;
//   inputs: {
//     name: string;
//     password: string;
//     title: string;
//     contents: string;
//     youtube: string;
//     zipcode: string;
//     isAddress: string;
//     address2: string;
//     images: Array<string>;
//   };
//   isWarning: {
//     nameError: boolean;
//     passwordError: boolean;
//     titleError: boolean;
//     contentsError: boolean;
//   };
//   setInputs: any;
//   onChangeFileUrls: (fileUrl: string) => void;
//   fileUrls: Array<string>;
// }
