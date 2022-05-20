import * as Profile from './userprofile.style';
import UserTabUI from './usertab/usertab.presenter';
import { v4 as uuidv4 } from 'uuid';

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
      <Profile.WrapperColUserinfo>
        <Profile.WrapperRowEnd>
          <Profile.ButtonEdit onClick={props.onClickEdit}>
            Edit
          </Profile.ButtonEdit>
        </Profile.WrapperRowEnd>
        <Profile.ImageProfile />
        <Profile.H3ProfileName>
          {props.user?.fetchUserId?.name}
        </Profile.H3ProfileName>
        <Profile.WrapperRowDetail>
          <Profile.PDetailTitle>Mother Tongue</Profile.PDetailTitle>
          <Profile.PDetailValue>
            {props.user?.fetchUserId?.myLang}
          </Profile.PDetailValue>
        </Profile.WrapperRowDetail>
        <Profile.WrapperRowDetail>
          <Profile.PDetailTitle>New Language</Profile.PDetailTitle>
          <Profile.PDetailValue>
            {props.user?.fetchUserId?.newLang}
          </Profile.PDetailValue>
        </Profile.WrapperRowDetail>
        <Profile.WrapperRowDetail>
          <Profile.PDetailTitle>Current Region</Profile.PDetailTitle>
          <Profile.PDetailValue>Busan</Profile.PDetailValue>
        </Profile.WrapperRowDetail>
        <Profile.WrapperRowTab>
          <Profile.WrapperColCenter onClick={props.onClickTab} id={'mygarden'}>
            <Profile.IconMyGarden isTab={props.isTab} />
            <Profile.PMyGardenText>My garden</Profile.PMyGardenText>
            <Profile.PMyGardenCount>
              {props.userGarden?.length}
            </Profile.PMyGardenCount>
          </Profile.WrapperColCenter>
          <Profile.WrapperColCenter onClick={props.onClickTab} id={'myhive'}>
            <Profile.IconMyHive isTab={props.isTab} />
            <Profile.PMyGardenText>My Hive</Profile.PMyGardenText>
            <Profile.PMyGardenCount>33</Profile.PMyGardenCount>
          </Profile.WrapperColCenter>
          <Profile.WrapperColCenter onClick={props.onClickTab} id={'mycharge'}>
            <Profile.IconMyCharge isTab={props.isTab} />
            <Profile.PMyGardenText>Charge History</Profile.PMyGardenText>
            <Profile.PMyGardenCount>33</Profile.PMyGardenCount>
          </Profile.WrapperColCenter>
        </Profile.WrapperRowTab>
      </Profile.WrapperColUserinfo>

      {/* 오른쪽 */}
      <Profile.WrapperMyContents>
        {props.isTab}페이지
        <Profile.SliderTab {...settings}>
          {/* 배열을 받아서 8개씩 잘라야 한다. 8개가 1페이지가 되고 페이지 개수 만큼 슬라이드를 만들어야 한다.*/}
          {props.userGarden.map((el) => (
            <UserTabUI key={String(uuidv4())} el={el} />
          ))}
        </Profile.SliderTab>
      </Profile.WrapperMyContents>
    </Profile.WrapperRow>
  );
}
