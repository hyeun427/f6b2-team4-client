import { ISave } from '../../../commons/types/generated/types';

export interface IArchive {
  data: {
    fetchSavedBoards: Array<ISave>;
  };
}

export interface IArchiveItem {
  el: ISave;
}
