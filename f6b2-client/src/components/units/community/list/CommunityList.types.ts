import { MouseEvent } from "react";
import { IQuery } from "../../../../commons/types/generated/types";

export interface ICommunityListUIProps {
  data?: Pick<IQuery, "fetchCommunityBoards">;
  onClickMoveToWrite: () => void;
  onClickContent: (event: MouseEvent<HTMLDivElement>) => void;
  onClickLike: () => void;
  like: Boolean;
}

export interface ICommunityLikeProps {
  like: Boolean;
}
