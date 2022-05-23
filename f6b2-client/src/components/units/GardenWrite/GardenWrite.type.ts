import { ChangeEvent } from 'react';
import { IUser } from '../../../commons/types/generated/types';

export interface IGardenWrite {
  onChangeContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onClickSave: () => void;
  data: {
    fetchUser: IUser;
  };
  isContent: string;
  onChangeFileUrls: (fileUrl: string) => void;
  fileUrls: Array<string>;
  onChangeVideoUrls: (fileUrl: string) => void;
  videoUrls: Array<string>;
}
