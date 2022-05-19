import Router, { useRouter } from "next/router";
import CommunityWriteUI from "./CommunityWrite.presenter";

export default function CommunityWrite() {
  const router = useRouter();

  // const onClickSubmit = () => {
  //   router.push($)
  // };
  return <CommunityWriteUI />;
}
