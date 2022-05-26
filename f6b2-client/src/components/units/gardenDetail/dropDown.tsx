import { BiDotsHorizontalRounded } from "react-icons/bi";
import { Menu, Dropdown, Button, Space, Modal } from "antd";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { gql, useMutation } from "@apollo/client";

const IconWrapper = styled.div`
  color: black;
  font-size: 10px;
  font-weight: 700;
  border: none;
  filter: drop-shadow(4px 4px 4px rgba(0, 0, 0, 0));
  cursor: pointer;
  :hover {
    color: #ffb950;
  }
`;
export default function DropdownIcon() {
  const router = useRouter();

  //삭제 뮤테이션
  const DELETE_BOARD = gql`
    mutation deleteBoard($boardId: String!) {
      deleteBoard(boardId: $boardId)
    }
  `;
  const [deleteBoard] = useMutation(DELETE_BOARD);

  // 수정페이지 연결하기
  const onClickMoveToEditPage = () => {
    router.push(`/garden/${router.query.boardId}/edit`);
  };

  // 삭제 연결하기
  const onClickDelete = () => {
    deleteBoard({
      variables: { boardId: router.query.boardId },
    });
    router.back();
    Modal.success({ content: "게시글이 삭제되었습니다!" });
  };

  const menu = (
    <Menu
      items={[
        {
          key: "1",
          label: (
            <IconWrapper onClick={onClickMoveToEditPage}>Edit</IconWrapper>
          ),
        },
        {
          key: "2",
          label: <IconWrapper onClick={onClickDelete}>Delete</IconWrapper>,
        },
      ]}
    />
  );
  return (
    <>
      <Space direction="vertical">
        <Space wrap>
          <Dropdown overlay={menu} placement="bottom">
            <BiDotsHorizontalRounded
              style={{ color: "black", cursor: "pointer" }}
            />
          </Dropdown>
        </Space>
      </Space>
    </>
  );
}
