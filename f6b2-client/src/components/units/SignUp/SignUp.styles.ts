import styled from "@emotion/styled";

export const Wrapper = styled.div`
  background-color: #d4e8ea;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SignUpTitle = styled.h1`
  font-weight: 500;
  font-size: 28px;
  margin-bottom: 25px;
  margin-top: 80px;
`;

export const SignUpBox = styled.main`
  width: 520px;
  height: 780px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 180px;
`;

export const EmailInputBox = styled.section`
  width: 400px;
  height: 55px;
  border-bottom: 2px solid #dbdbdb;
  margin-top: 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const EmailInput = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  :focus {
    outline: none;
  }
  :focus::-webkit-input-placeholder {
    opacity: 0;
  }
`;

export const EmailBtn = styled.button`
  border: none;
  background: none;
  cursor: pointer;

  // test
  color: #dbdbdb;
`;

export const AuthCallBtn = styled.button`
  width: 400px;
  height: 55px;
  background-color: #a4b1da;
  margin-top: 30px;
  border: none;
  cursor: pointer;
  color: white;
`;

export const AuthInputBox = styled.section`
  width: 400px;
  height: 55px;
  border-bottom: 2px solid #dbdbdb;
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const AuthInput = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  :focus {
    outline: none;
  }
  :focus::-webkit-input-placeholder {
    opacity: 0;
  }
`;

export const AuthSubmitBtn = styled.button`
  width: 400px;
  height: 55px;
  background-color: #a4b1da;
  margin-top: 30px;
  border: none;
  cursor: pointer;
  color: white;
`;

export const PasswordInputBox = styled.section`
  width: 400px;
  height: 55px;
  border-bottom: 2px solid #dbdbdb;
  margin-top: 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const PasswordInput = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  :focus {
    outline: none;
  }
  :focus::-webkit-input-placeholder {
    opacity: 0;
  }
`;

export const RePasswordInputBox = styled.section`
  width: 400px;
  height: 55px;
  border-bottom: 2px solid #dbdbdb;
  margin-top: 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const RePasswordInput = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  :focus {
    outline: none;
  }
  :focus::-webkit-input-placeholder {
    opacity: 0;
  }
`;

export const LangSelectBox = styled.section`
  width: 400px;

  // 셀렉트 박스는 50 에러메세지는 20으로...
  height: 70px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 40px;
`;

export const SelectBox1 = styled.article``;

export const Select1 = styled.select`
  width: 160px;
  height: 55px;
  border: none;
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
  width: 160px;
  height: 55px;
  border: none;
  border-bottom: 2px solid #dbdbdb;
  :focus {
    outline: none;
  }
  color: #767676;
  cursor: pointer;
`;

export const SignUpBtn = styled.button`
  margin-top: 40px;
  width: 400px;
  height: 56px;
  border: 1px solid #dbdbdb;
  background: none;
  cursor: pointer;
`;
