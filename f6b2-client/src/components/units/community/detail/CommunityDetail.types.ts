import { IQuery } from "../../../../commons/types/generated/types";

export interface ICommunityDetailUIProps {
  data?: Pick<IQuery, "fetchCommunityBoard">;
  onClickMoveToList: () => void;
  onClickMoveToEdit: () => void;
  onClickDelete: () => void;
  onClickLike: () => void;
  isLike: Boolean;
  onClickUser: () => void;
}
