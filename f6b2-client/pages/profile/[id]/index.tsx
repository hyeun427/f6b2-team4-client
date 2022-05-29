import { useAuth } from '../../../src/components/commons/hooks/useAuth';
import UserProfileContainer from '../../../src/components/units/userprofile/userprofile.container';

export default function profile() {
  useAuth();
  return <UserProfileContainer />;
}
