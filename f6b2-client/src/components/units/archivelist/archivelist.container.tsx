import { useQuery } from '@apollo/client';
import { useRecoilState } from 'recoil';
import { userInfoState } from '../../../commons/store';
import { FETCH_SAVED_BOARDS } from '../../commons/queries';
import ArchiveUI from './archivelist.presenter';

export default function ArchiveContainer() {
  const [userInfo] = useRecoilState(userInfoState);
  const { data } = useQuery(FETCH_SAVED_BOARDS, {
    variables: { userId: userInfo?.id },
  });
  console.log('archive', data);

  return <ArchiveUI data={data} />;
}
