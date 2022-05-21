import * as Profile from './userprofile.style';
import { v4 as uuidv4 } from 'uuid';
import UserTabItemUI from './usertab/usertabitem.presenter';
import Modal from '@mui/material/Modal';
import { Box, Typography } from '@mui/material';
import UserEditContainer from './useredit/useredit.container';

export default function UserProfileUI(props) {
  // react slick setting
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    rows: 2,
    slidesPerRow: 4,
    slidesToScroll: 1,
    vertical: false,
  };

  // modal style
  const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
  };

  return (
    <Profile.WrapperRow>
      {/* 왼쪽 */}
      <Profile.WrapperColUserinfo>
        <Profile.WrapperRowEnd>
          {props.isMy ? (
            <Profile.ButtonEdit onClick={props.onClickEdit}>
              Edit
            </Profile.ButtonEdit>
          ) : (
            ''
          )}
          <Modal open={props.open} onClose={props.handleClose}>
            <Box sx={style}>
              <UserEditContainer />
            </Box>
          </Modal>
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
            <Profile.IconMyGarden istab={props.istab} />
            <Profile.PMyGardenText>My garden</Profile.PMyGardenText>
            <Profile.PMyGardenCount>
              {props.userGarden?.length}
            </Profile.PMyGardenCount>
          </Profile.WrapperColCenter>
          <Profile.WrapperColCenter onClick={props.onClickTab} id={'myhive'}>
            <Profile.IconMyHive istab={props.istab} />
            <Profile.PMyGardenText>My Hive</Profile.PMyGardenText>
            <Profile.PMyGardenCount>33</Profile.PMyGardenCount>
          </Profile.WrapperColCenter>

          {props.isMy ? (
            <Profile.WrapperColCenter
              onClick={props.onClickTab}
              id={'mycharge'}
            >
              <Profile.IconMyCharge istab={props.istab} />
              <Profile.PMyGardenText>Charge History</Profile.PMyGardenText>
              <Profile.PMyGardenCount>33</Profile.PMyGardenCount>
            </Profile.WrapperColCenter>
          ) : (
            ''
          )}
        </Profile.WrapperRowTab>
      </Profile.WrapperColUserinfo>

      {/* 오른쪽 */}
      <Profile.WrapperMyContents>
        {props.istab === 'mygarden' ? (
          <Profile.WrapperRowNoMargin>
            {/* {props.istab}페이지 */}
            <Profile.SliderTab {...settings}>
              {props.userGarden?.map((el, index) => (
                <div>
                  <UserTabItemUI key={uuidv4} el={el} number={index} />
                </div>
              ))}
            </Profile.SliderTab>
          </Profile.WrapperRowNoMargin>
        ) : (
          ''
        )}
        {props.istab === 'myhive' ? (
          <Profile.WrapperRowNoMargin>
            {props.istab}페이지
            <Profile.SliderTab {...settings}>
              {props.community.fetchCommunityBoards?.map((el, index) => (
                <UserTabItemUI key={uuidv4} el={el} number={index} />
              ))}
            </Profile.SliderTab>
          </Profile.WrapperRowNoMargin>
        ) : (
          ''
        )}
        {props.istab === 'mycharge' ? (
          <Profile.WrapperRowNoMargin>
            {props.istab}페이지
          </Profile.WrapperRowNoMargin>
        ) : (
          ''
        )}
      </Profile.WrapperMyContents>
    </Profile.WrapperRow>
  );
}
