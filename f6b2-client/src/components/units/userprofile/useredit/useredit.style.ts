import styled from '@emotion/styled';
import { FaEdit } from 'react-icons/fa';

export const WrapperCol = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  padding: 0px 80px;
`;

export const PName = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 23px;
  text-align: center;
  margin-right: 10px;
`;

export const WrapperRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;
  width: 100%;
  height: 40px;
  margin: 5px 0px;
  margin-bottom: 20px;
`;

export const WrapperUpload = styled.div`
  position: relative;
  top: -20px;
  right: -40px;
`;

export const ImgProfile = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: gray;
  margin-bottom: 6px;
  object-fit: cover;
`;

export const IconEdit = styled(FaEdit)`
  font-size: 16px;
  color: #ffb950;
  cursor: pointer;
`;

export const WrapperRowCenter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: auto;
  height: 23px;
  margin-bottom: 20px;
`;

export const PLabel = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
`;

export const InputPW = styled.input`
  border: none;
  border-bottom: 1px solid #dbdbdb;
  width: 190px;
  font-size: 14px;
`;

export const ButtonSave = styled.button`
  width: 262px;
  height: 30px;
  background: #ffb950;
  border: 1px solid #ffb950;
  border-radius: 10px;
  color: white;
  margin-top: 53px;
`;

export const InputName = styled.input`
  border: none;
  border-bottom: none;
  width: auto;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 23px;
  text-align: center;
  margin-right: 5px;
`;
