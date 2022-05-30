import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { FETCH_USER_LOGGED_IN, USE_POINT } from "../../../commons/queries";
import ChatAccessUI from "./ChatAccess.presenter";

export default function ChatAccess() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [language, setLanguage] = useState("");
  const [access, setAccess] = useState(true);
  const [usePoint] = useMutation(USE_POINT, {
    refetchQueries: [
      {
        query: FETCH_USER_LOGGED_IN,
      },
    ],
  });

  useEffect(() => {
    if (name !== "" && language !== "") {
      setAccess(false);
    }
  });

  const onChangeName = (event) => {
    setName(event.target.value);
  };

  const onChangeLanguage = (event) => {
    setLanguage(event.target.value);
  };

  const onClickMoveToChat = () => {
    try {
      usePoint();
      router.push("/chat/" + name + "-" + language);
    } catch (error) {
      alert(error);
    }
  };

  return (
    <ChatAccessUI
      onChangeName={onChangeName}
      onChangeLanguage={onChangeLanguage}
      onClickMoveToChat={onClickMoveToChat}
      access={access}
    />
  );
}
