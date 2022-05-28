import { useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';
import { accessTokenState, userInfoState } from '../../../commons/store';
import { FETCH_SAVED_BOARDS } from '../../commons/queries';
import ArchiveUI from './archivelist.presenter';

export default function ArchiveContainer() {
  const [userInfo] = useRecoilState(userInfoState);
  const [isToken] = useRecoilState(accessTokenState);
  const router = useRouter();
  const { data } = useQuery(FETCH_SAVED_BOARDS, {
    variables: { userId: userInfo?.id },
  });

  const onClickLogin = () => {
    router.push(`/signin`);
  };

  return (
    <ArchiveUI isToken={isToken} data={data} onClickLogin={onClickLogin} />
  );
}
