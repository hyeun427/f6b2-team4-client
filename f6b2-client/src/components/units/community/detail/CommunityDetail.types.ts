import { IQuery } from "../../../../commons/types/generated/types";

export interface ICommunityDetaulUIProps {
  data?: Pick<IQuery, "fetchCommunityBoard">;
  onClickMovetoList: () => void;
}
