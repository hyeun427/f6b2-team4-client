import styled from '@emotion/styled';

// 순서
// display
// list-style
// position
// float
// clear
// width/height
// padding/margin
// border/background
// color/font
// text-decoration
// text-align/vertical-align
// white-space
// other text
// content

export const WrapperDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
`;

export const SignUpWrapperDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 520px;
  height: auto;
  padding: 45px 58px 36px 62px;
  background-color: #fff;
  box-shadow: 20px 20px 40px rgba(0, 0, 0, 0.2);
`;

export const SignUpForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
`;

export const SignUpTitleH1 = styled.h1`
  width: 100%;
  height: auto;
  text-align: center;
  font-size: 28px;
  margin-top: 80px;
  margin-bottom: 20px;
`;

export const SignUpItemDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  margin-bottom: 20px;
`;

export const SignUpItemLabel = styled.label`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  font-size: 16px;
`;

export const SignUpItemInput = styled.input`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  border: none;
  border-bottom: 2px solid #dbdbdb;
  font-size: 16px;
  padding: 20px 16px;
`;

export const SignUpItemBtn = styled.button`
  width: 100%;
  height: auto;
  margin-top: 40px;
  border: none;
  font-size: 20px;
  padding: 20px 16px;
  color: #f8f9fa;
  background-color: #a4b1da;
  cursor: pointer;
  :disabled {
    background-color: gray;
  }
`;

export const Warning = styled.p`
  color: red;
  font-size: 12px;
  margin-top: 4px;
`;

export const BtnMoveSignUp = styled.button`
  width: 100%;
  height: auto;
  margin-top: 40px;
  border: 1px solid #dbdbdb;
  font-size: 20px;
  padding: 20px 16px;
  color: black;
  background-color: white;
  :hover {
    background-color: #a4b1da;
    border: none;
    color: white;
    cursor: pointer;
  }
`;
