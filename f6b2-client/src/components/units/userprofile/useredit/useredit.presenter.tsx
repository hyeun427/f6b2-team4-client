import * as Edit from './useredit.style';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import { NativeSelect } from '@mui/material';
import ImageUpload from '../../../commons/upload';

export default function UserEditUI(props) {
  return (
    <Edit.WrapperCol>
      <Edit.ImgProfile src={props?.fileUrls} />
      <ImageUpload
        type='edit'
        onChangeFileUrls={props.onChangeFileUrls}
        fileUrls={props.fileUrls}
      />
      <Edit.WrapperRowCenter>
        <Edit.InputName
          defaultValue={props?.user?.fetchUserId?.name}
          onChange={props.onChangeName}
        />
      </Edit.WrapperRowCenter>
      <Edit.WrapperRow>
        <Edit.PLabel>New Language</Edit.PLabel>
        <Box sx={{ minWidth: 120, borderRadius: 25 }}>
          <FormControl fullWidth>
            <NativeSelect
              defaultValue={props?.user?.fetchUserId?.newLang}
              inputProps={{
                name: 'lang',
                id: 'uncontrolled-native',
              }}
              onChange={props.handleChange}
            >
              <option value={'한국어'}>한국어</option>
              <option value={'English'}>English</option>
              <option value={'日本語'}>日本語</option>
              <option value={'español'}>español</option>
              <option value={'Français'}>Français</option>
              <option value={'中国'}>中国</option>
            </NativeSelect>
          </FormControl>
        </Box>
      </Edit.WrapperRow>
      <Edit.WrapperRow>
        <Edit.PLabel>Current Region</Edit.PLabel>
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <NativeSelect
              defaultValue={'서울'}
              inputProps={{
                name: 'Region',
                id: 'uncontrolled-native',
              }}
              onChange={props.handleChangeRegion}
            >
              <option value={'서울'}>서울</option>
              <option value={'인천'}>인천</option>
            </NativeSelect>
          </FormControl>
        </Box>
      </Edit.WrapperRow>
      <Edit.WrapperRow>
        <Edit.PLabel>Current Password</Edit.PLabel>
        <Edit.InputPW
          placeholder='Enter your password'
          onChange={props.onChangeCurPw}
          type='password'
        />
      </Edit.WrapperRow>
      <Edit.WrapperRow>
        <Edit.PLabel>New Password</Edit.PLabel>
        <Edit.InputPW
          placeholder='Enter your password'
          onChange={props.onChangeNewPw}
          type='password'
        />
      </Edit.WrapperRow>
      <Edit.ButtonSave onClick={props.onClickUpdate}>Save</Edit.ButtonSave>
    </Edit.WrapperCol>
  );
}
