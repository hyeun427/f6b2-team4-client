import { IQuery } from "../../../../commons/types/generated/types";

export interface ICommunityDetailUIProps {
  data?: Pick<IQuery, "fetchCommunityBoard">;
  myLike?: any;
  onClickMoveToList: () => void;
  onClickMoveToEdit: () => void;
  onClickDelete: () => void;
  onClickLike: () => void;
  onClickUser: () => void;
}
