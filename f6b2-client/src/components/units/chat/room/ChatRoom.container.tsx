import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ChatRoomUI from "./ChatRoom.presenter";

export default function ChatRoom() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [language, setLanguage] = useState("");
  useEffect(() => {
    setName(String(router.query.chatInfo)?.split("-")[0]);
    setLanguage(String(router.query.chatInfo)?.split("-")[1]);
  }, []);

  return <ChatRoomUI />;
}
