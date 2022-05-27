import styled from "@emotion/styled";

export const Wrapper = styled.div`
  background: #ffb950;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 69px;
`;

export const SignUpTitle = styled.h1`
  width: 72px;
  height: 27px;
  font-weight: 500;
  font-size: 20px;
  margin-top: 47px;
  margin-bottom: 30px;
`;

export const SignUpBox = styled.main`
  width: 390px;
  height: 580px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 30px 30px 10px rgba(0, 0, 0, 0.25);
  border-radius: 50px 0px;
`;

export const EmailInputBox = styled.section`
  width: 300.54px;
  height: 45px;
  border-bottom: 2px solid #dbdbdb;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const EmailInput = styled.input`
  width: 100%;
  height: 100%;
  font-weight: 400;
  font-size: 12px;
  border: none;
  :focus {
    outline: none;
  }
  :focus::-webkit-input-placeholder {
    opacity: 0;
  }
  :disabled {
    background: none;
  }
`;

export const AuthCallBtn = styled.button`
  width: 66px;
  height: 20px;
  background: #ffb950;
  border-radius: 10px;
  /* margin-top: 30px; */
  border: none;
  cursor: pointer;
  color: white;
  font-weight: 400;
  font-size: 10px;

  :disabled {
    background: gray;
  }
`;

export const AuthInputBox = styled.section`
  width: 300px;
  height: 45px;
  border-bottom: 2px solid #dbdbdb;
  margin-top: 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const AuthInput = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  font-weight: 400;
  font-size: 12px;
  :focus {
    outline: none;
  }
  :focus::-webkit-input-placeholder {
    opacity: 0;
  }
  :disabled {
    background: none;
  }
`;

export const AuthSubmitBtn = styled.button`
  width: 66px;
  height: 20px;
  background: #ffb950;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  color: white;
  font-weight: 400;
  font-size: 10px;

  :disabled {
    background: gray;
  }
`;

export const PasswordInputBox = styled.section`
  width: 300px;
  height: 45px;
  border-bottom: 2px solid #dbdbdb;
  margin-top: 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const PasswordInput = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  font-weight: 400;
  font-size: 12px;
  :focus {
    outline: none;
  }
  :focus::-webkit-input-placeholder {
    opacity: 0;
  }
`;

export const RePasswordInputBox = styled.section`
  width: 300px;
  height: 45px;
  border-bottom: 2px solid #dbdbdb;
  margin-top: 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const RePasswordInput = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  font-weight: 400;
  font-size: 12px;
  :focus {
    outline: none;
  }
  :focus::-webkit-input-placeholder {
    opacity: 0;
  }
`;

export const LangSelectBox = styled.section`
  width: 300px;
  height: 45px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 15px;
`;

export const SelectBox1 = styled.article`
  border: none;
`;

export const Select1 = styled.select`
  width: 120px;
  height: 58px;
  border: none;
  font-weight: 400;
  font-size: 12px;
  border-bottom: 2px solid #dbdbdb;
  :focus {
    outline: none;
  }
  color: #767676;
  cursor: pointer;
`;

export const SelectList = styled.option``;

export const SelectBox2 = styled.article``;

export const Select2 = styled.select`
  width: 120px;
  height: 58px;
  border: none;
  font-weight: 400;
  font-size: 12px;
  border-bottom: 2px solid #dbdbdb;
  :focus {
    outline: none;
  }
  color: #767676;
  cursor: pointer;
`;

export const SignUpBtn = styled.button`
  margin-top: 40px;
  width: 300px;
  height: 41px;
  border: 1px solid #dbdbdb;
  background: none;
  background: #ffb950;
  border-radius: 10px;
  font-weight: 400;
  font-size: 12px;
  color: white;
  cursor: pointer;

  :disabled {
    background: gray;
  }
`;

export const VisibleBtn = styled.button`
  border: none;
  background: none;
  cursor: pointer;
`;

export const Error = styled.div`
  width: 300px;
  height: 13px;
  font-weight: 400;
  font-size: 8px;
  color: #ed1c24;
`;

export const SelectError = styled.div`
  height: 13px;
  font-weight: 400;
  font-size: 8px;
  color: #ed1c24;
`;
