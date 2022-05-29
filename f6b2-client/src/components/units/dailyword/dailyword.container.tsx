import axios from "axios";
import { useEffect, useState } from "react";
import DailyWordUI from "./dailyword.presenter";

export default function DailyWordContainer() {
  const [word, setWord] = useState("");

  // const todaysWord = async () => {
  //   const result = await axios.get("https://random-words-api.vercel.app/word");
  //   console.log("result", result);
  //   setWord(result?.data[0]?.word);
  // };

  useEffect(() => {
    const todaysWord = async () => {
      const result = await axios.get(
        "https://random-words-api.vercel.app/word"
      );
      console.log("result", result);
      setWord(result?.data[0]?.word || "");
    };
    todaysWord();
  }, []);

  return <DailyWordUI word={word} />;
}
