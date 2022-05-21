import { IQuery } from "../../../../commons/types/generated/types";

export interface ICommunityDetailUIProps {
  data?: Pick<IQuery, "fetchCommunityBoard">;
  onClickMovetoList: () => void;
  onClickDelete: () => void;
  onClickLike: () => void;
  isLike: Boolean;
}
