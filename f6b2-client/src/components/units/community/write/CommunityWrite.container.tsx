// import CommunityWriteUI from "./CommunityWrite.presenter";
// import { ICommunityBoardWriteProps } from "./CommunityWrite.types";
// import { useMutation, useQuery } from "@apollo/client";
// import { useRouter } from "next/router";
// import { ChangeEvent, useEffect, useState } from "react";
// import {
//   CREATE_COMMUNITY_BOARD,
//   FETCH_COMMUNITY_BOARD,
// } from "../../../commons/queries";
// import { Modal } from "antd";
// import "antd/dist/antd.css";
// import { IUpdateCommunityBoardInput } from "../../../../commons/types/generated/types";
// import { UPDATE_COMMUNITY_BOARD } from "./CommunityWrite.queries";

// export default function CommunityWrite(props: ICommunityBoardWriteProps) {
//   const router = useRouter();

//   // 작성된 컨텐츠 data 불러오기
//   // const { data: commuData } = useQuery(FETCH_COMMUNITY_BOARD, {
//   //   variables: { communityBoardId: router?.query.communityBoardId },
//   // });

//   // 뮤테이션 가져오기
//   const [createCommunityBoard] = useMutation(CREATE_COMMUNITY_BOARD);
//   const [updateCommunityBoard] = useMutation(UPDATE_COMMUNITY_BOARD);

//   const [title, setTitle] = useState("");
//   const [content, setContent] = useState("");
//   // 이미지
//   const [fileUrls, setFileUrls] = useState([]);
//   const [titleError, setTitleError] = useState("");
//   const [contentError, setContentError] = useState("");

//   const [isActive, setIsActive] = useState(false);

//   // 제목 작성 시
//   const onChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
//     setTitle(event.target.value);
//     if (event.target.value !== "") {
//       setTitleError("");
//     }

//     if (event.target.value && content) {
//       setIsActive(true);
//     } else {
//       setIsActive(false);
//     }
//   };

//   // 내용 작성 시
//   const onChangeContent = (value: string) => {
//     setContent(value);
//     if (value !== "") {
//       setContentError("");
//     }

//     if (title && value) {
//       setIsActive(true);
//     } else {
//       setIsActive(false);
//     }
//   };

//   // 이미지 업로드 시
//   const onChangeFileUrls = (fileUrl: string) => {
//     const newFileUrls = [...fileUrls];
//     newFileUrls.push(fileUrl);
//     setFileUrls(newFileUrls);
//   };

//   // console.log(commuData);

//   // 등록 버튼
//   const onClickSubmit = async () => {
//     if (title === "") {
//       setTitleError("제목을 입력하세요");
//     }
//     if (content === "") {
//       setContentError("내용을 입력하세요.");
//     }
//     if (title !== "" && content !== "") {
//       try {
//         const result = await createCommunityBoard({
//           variables: {
//             createCommunityBoardInput: {
//               title,
//               content,
//               image: fileUrls[0],
//             },
//           },
//         });
//         Modal.success({
//           content: "오늘의 기록이 등록되었습니다.",
//         });

//         router.push(`/community/${result.data.createCommunityBoard.id}`);
//       } catch (error) {
//         Modal.error({ content: "오늘의 기록을 다시 작성해주세요." });
//       }
//     }
//   };
//   console.log(props.data, "diq");
//   console.log(props.data?.fetchCommunityBoard.image, "또잉");
//   useEffect(() => {
//     if (props.data?.fetchCommunityBoard.image?.length) {
//       setFileUrls([props.data?.fetchCommunityBoard.image]);
//     }
//   }, [props.data]);
//   // useEffect(() => {
//   //   if (commuData?.fetchCommunityBoard.image?.length) {
//   //     setFileUrls([...commuData?.fetchCommunityBoard.image[1]]);
//   //   }
//   // }, [commuData]);

//   // 수정 버튼
//   const onClickUpdate = async (data) => {
//     const currentFiles = JSON.stringify(fileUrls);
//     const defaultFiles = JSON.stringify(props.data?.fetchCommunityBoard.image);
//     // const defaultFiles = JSON.stringify(props.data?.fetchCommunityBoard.image);
//     const isChangeFiles = currentFiles !== defaultFiles;
//     console.log(isChangeFiles, "있니?");

//     if (title === "" && content === "") {
//       Modal.error({ content: "수정한 내용이 없습니다. 다시 확인해주세요." });
//       return;
//     }

//     const updateCommunityBoardInput: IUpdateCommunityBoardInput = {};
//     if (!title)
//       updateCommunityBoardInput.title = props.data.fetchCommunityBoard.title;
//     if (!content)
//       updateCommunityBoardInput.content =
//         props.data?.fetchCommunityBoard.content;
//     if (isChangeFiles)
//       updateCommunityBoardInput.image = String(
//         props.data?.fetchCommunityBoard.fileUrls
//       );
//     console.log(title, content, "???");

//     try {
//       const editResult = await updateCommunityBoard({
//         variables: {
//           updateCommunityBoardInput: {
//             title,
//             content,
//             image: fileUrls[0],
//           },
//           communityBoardId: router.query.communityBoardId,
//         },
//       });
//       Modal.success({ content: "게시물 수정에 성공하였습니다!" });
//       router.push(`/community/${editResult.data?.updateCommunityBoard.id}`);
//     } catch (error) {
//       console.log(error);
//       Modal.error({
//         content: "에러ㅠ",
//       });
//     }
//   };

//   //  수정 완료 되면 지우기
//   // 수정 버튼
//   // const onClickUpdate = async (data) => {
//   //   if (!title && !content) {
//   //     Modal.error({ content: "수정한 내용이 없습니다. 다시 확인해주세요." });
//   //     return;
//   //   }

//   //   const updateCommunityBoardInput: IUpdateCommunityBoardInput = {};
//   //   if (title) updateCommunityBoardInput.title = title;
//   //   if (content) updateCommunityBoardInput.content = content;
//   //   // 이미지 추가할 것
//   //   try {
//   //     const editResult = await updateCommunityBoard({
//   //       variables: {
//   //         communityBoardId: router?.query.communityBoardId,
//   //         updateCommunityBoardInput,
//   //       },
//   //     });
//   //     Modal.success({ content: "게시물 수정에 성공하였습니다!" });
//   //     router.push(`/community/${editResult.data?.updateCommunityBoard.id}`);
//   //   } catch (error) {
//   //     Modal.error({
//   //       content: "게시물 수정이 실패하였습니다.다시 확인해주세요.",
//   //     });
//   //   }
//   // };

//   return (
//     <CommunityWriteUI
//       // 작성 관련
//       isActive={isActive}
//       titleError={titleError}
//       contentError={contentError}
//       fileUrls={fileUrls}
//       // 이벤트 핸들러
//       onChangeTitle={onChangeTitle}
//       onChangeContent={onChangeContent}
//       onChangeFileUrls={onChangeFileUrls}
//       onClickSubmit={onClickSubmit}
//       onClickUpdate={onClickUpdate}
//       // 수정 관련
//       isEdit={props.isEdit}
//       data={props.data}
//       // commuData={commuData}
//     />
//   );
// }
///////////////////////////////////////////////////////////
import CommunityWriteUI from "./CommunityWrite.presenter";
import { ICommunityBoardWriteProps } from "./CommunityWrite.types";
import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import {
  CREATE_COMMUNITY_BOARD,
  FETCH_COMMUNITY_BOARD,
} from "../../../commons/queries";
import { Modal } from "antd";
import "antd/dist/antd.css";
import { IUpdateCommunityBoardInput } from "../../../../commons/types/generated/types";
import { UPDATE_COMMUNITY_BOARD } from "./CommunityWrite.queries";

export default function CommunityWrite(props: ICommunityBoardWriteProps) {
  const router = useRouter();

  // 작성된 컨텐츠 data 불러오기
  const { data: commuData } = useQuery(FETCH_COMMUNITY_BOARD, {
    variables: { communityBoardId: router?.query.communityBoardId },
  });

  // 뮤테이션 가져오기
  const [createCommunityBoard] = useMutation(CREATE_COMMUNITY_BOARD);
  const [updateCommunityBoard] = useMutation(UPDATE_COMMUNITY_BOARD);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  // 이미지
  const [fileUrls, setFileUrls] = useState([]);
  const [titleError, setTitleError] = useState("");
  const [contentError, setContentError] = useState("");

  const [isActive, setIsActive] = useState(false);

  // 제목 작성 시
  const onChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
    if (event.target.value !== "") {
      setTitleError("");
    }

    if (event.target.value && content) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  // 내용 작성 시
  const onChangeContent = (value: string) => {
    setContent(value);
    if (value !== "") {
      setContentError("");
    }

    if (title && value) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  // 이미지 업로드 시
  const onChangeFileUrls = (fileUrl: string) => {
    const newFileUrls = [...fileUrls];
    newFileUrls.push(fileUrl);
    setFileUrls(newFileUrls);
  };

  // 등록 버튼
  const onClickSubmit = async () => {
    if (title === "") {
      setTitleError("제목을 입력하세요");
    }
    if (content === "") {
      setContentError("내용을 입력하세요.");
    }
    if (title !== "" && content !== "") {
      try {
        const result = await createCommunityBoard({
          variables: {
            createCommunityBoardInput: {
              title,
              content,
              image: fileUrls[0],
            },
          },
        });
        Modal.success({
          content: "오늘의 기록이 등록되었습니다.",
        });

        router.push(`/community/${result.data.createCommunityBoard.id}`);
      } catch (error) {
        Modal.error({ content: "오늘의 기록을 다시 작성해주세요." });
      }
    }
  };
  // 수정 버튼
  // const onClickUpdate = async (data) => {
  //   const currentFiles = JSON.stringify(fileUrls);
  //   const defaultFiles = JSON.stringify(props.data?.fetchCommunityBoard.image);
  //   const isChangeFiles = currentFiles !== defaultFiles;

  //   if (title !== "" && content !== "") {
  //     Modal.error({ content: "수정한 내용이 없습니다. 다시 확인해주세요." });
  //     return;
  //   }

  //   const updateCommunityBoardInput: IUpdateCommunityBoardInput = {};
  //   if (title) updateCommunityBoardInput.title = title;
  //   if (content) updateCommunityBoardInput.content = content;
  //   // if (isChangeFiles) updateCommunityBoardInput.image = String(fileUrls[3]);

  //   try {
  //     const editResult = await updateCommunityBoard({
  //       variables: {
  //         updateCommunityBoardInput,
  //         //   : {
  //         //   ...data,
  //         //   image: fileUrls[0],
  //         // },
  //         communityBoardId: router.query.communityBoardId,
  //       },
  //     });
  //     Modal.success({ content: "게시물 수정에 성공하였습니다!" });
  //     router.push(`/community/${editResult.data?.updateCommunityBoard.id}`);
  //   } catch (error) {
  //     console.log(error);
  //     Modal.error({
  //       content: "에러ㅠ",
  //     });
  //   }
  // };

  //  수정 완료 되면 지우기
  // 수정 버튼
  const onClickUpdate = async (data) => {
    if (!title && !content) {
      Modal.error({ content: "수정한 내용이 없습니다. 다시 확인해주세요." });
      return;
    }

    const updateCommunityBoardInput: IUpdateCommunityBoardInput = {};
    if (title) updateCommunityBoardInput.title = title;
    if (content) updateCommunityBoardInput.content = content;
    // 이미지 추가할 것
    try {
      const editResult = await updateCommunityBoard({
        variables: {
          communityBoardId: router?.query.communityBoardId,
          updateCommunityBoardInput,
        },
      });
      Modal.success({ content: "게시물 수정에 성공하였습니다!" });
      router.push(`/community/${editResult.data?.updateCommunityBoard.id}`);
    } catch (error) {
      Modal.error({
        content: "게시물 수정이 실패하였습니다.다시 확인해주세요.",
      });
    }
  };

  return (
    <CommunityWriteUI
      // 작성 관련
      isActive={isActive}
      titleError={titleError}
      contentError={contentError}
      fileUrls={fileUrls}
      // 이벤트 핸들러
      onChangeTitle={onChangeTitle}
      onChangeContent={onChangeContent}
      onChangeFileUrls={onChangeFileUrls}
      onClickSubmit={onClickSubmit}
      onClickUpdate={onClickUpdate}
      // 수정 관련
      isEdit={props.isEdit}
      data={props.data}
      commuData={commuData}
    />
  );
}
