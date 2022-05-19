import * as Profile from './userprofile.style';
import UserTabUI from './usertab/usertab.presenter';

export default function UserProfileUI(props) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    rows: 1,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Profile.WrapperRow>
      {/* 왼쪽 */}
      {/* <Profile.WrapperColUserinfo>
        <Profile.WrapperRowEnd>
          <Profile.ButtonEdit>Edit</Profile.ButtonEdit>
        </Profile.WrapperRowEnd>
        <Profile.ImageProfile />
        <Profile.H3ProfileName>
          {props?.userInformation[0]?.name}
        </Profile.H3ProfileName>
        <Profile.WrapperRowDetail>
          <Profile.PDetailTitle>Mother Tongue</Profile.PDetailTitle>
          <Profile.PDetailValue>
            {props?.userInformation[0]?.myLang}
          </Profile.PDetailValue>
        </Profile.WrapperRowDetail>
        <Profile.WrapperRowDetail>
          <Profile.PDetailTitle>New Language</Profile.PDetailTitle>
          <Profile.PDetailValue>
            {props?.userInformation[0]?.newLang}
          </Profile.PDetailValue>
        </Profile.WrapperRowDetail>
        <Profile.WrapperRowDetail>
          <Profile.PDetailTitle>Current Region</Profile.PDetailTitle>
          <Profile.PDetailValue>Busan</Profile.PDetailValue>
        </Profile.WrapperRowDetail>
        <Profile.WrapperRowTab>
          <Profile.WrapperColCenter>
            <Profile.IconMyGarden />
            <Profile.PMyGardenText>My garden</Profile.PMyGardenText>
            <Profile.PMyGardenCount>
              {props?.userGarden?.length}
            </Profile.PMyGardenCount>
          </Profile.WrapperColCenter>
          <Profile.WrapperColCenter>
            <Profile.IconMyHive />
            <Profile.PMyGardenText>My Hive</Profile.PMyGardenText>
            <Profile.PMyGardenCount>33</Profile.PMyGardenCount>
          </Profile.WrapperColCenter>
          <Profile.WrapperColCenter>
            <Profile.IconMyCharge />
            <Profile.PMyGardenText>Charge History</Profile.PMyGardenText>
            <Profile.PMyGardenCount>33</Profile.PMyGardenCount>
          </Profile.WrapperColCenter>
        </Profile.WrapperRowTab>
      </Profile.WrapperColUserinfo> */}

      {/* 오른쪽 */}
      <Profile.WrapperMyContents>
        <Profile.SliderTab {...settings}>
          <UserTabUI />
          <UserTabUI />
          <UserTabUI />
        </Profile.SliderTab>
      </Profile.WrapperMyContents>
    </Profile.WrapperRow>
  );
}
