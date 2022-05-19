import { FormEvent } from 'react';

export interface ISingninPresenter {
  onClickSignin: (event: FormEvent<HTMLFormElement>) => void;
  onClickMoveSignUp: () => void;
  register: any;
  handleSubmit: Function;
  formState: any;
}
