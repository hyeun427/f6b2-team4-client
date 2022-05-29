import { useRouter } from "next/router";
import { useState } from "react";
import ChatAccessUI from "./ChatAccess.presenter";

export default function ChatAccess() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [language, setLanguage] = useState("");
  const [access, setAccess] = useState(true);

  const onChangeName = (event) => {
    setName(event.target.value);

    if (name !== "" && language !== "") {
      setAccess(false);
    }
  };

  const onChangeLanguage = (event) => {
    setLanguage(event.target.value);

    if (name !== "" && language !== "") {
      setAccess(false);
    }
  };

  const onClickMoveToChat = () => {
    router.push("/chat/" + name + "-" + language);
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
