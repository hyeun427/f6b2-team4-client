import { MouseEvent } from "react";
import { IQuery } from "../../../../commons/types/generated/types";

export interface ICommunityListUIProps {
  data?: Pick<IQuery, "fetchCommunityBoards">;
  onClickMoveToWrite: () => void;
  onClickContent: (event: MouseEvent<HTMLDivElement>) => void;
}

export interface ICommunityList {
  isLike: Boolean;
}
