import { IQuery } from "../../../../commons/types/generated/types";

export interface ICommunityListUIProps {
  data?: Pick<IQuery, "fetchCommunityBoards">;
  onClickMoveToWrite: () => void;
  onClickContent: () => void;
  onClickLike: () => void;
  // fileUrls: string[];
}

export interface ICommunityList {
  isLike: Boolean;
}
