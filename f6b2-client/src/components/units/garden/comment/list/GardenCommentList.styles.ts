import styled from '@emotion/styled';
import TimeAgo from 'timeago-react';

export const CommentListBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-top: 15px;
  border-top: 1px solid gray;
  padding-top: 15px;
`;

export const CommentProfile = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50px;
  margin-right: 10px;
  margin-left: 10px;
  margin-top: 10px;
  background-color: white;
`;

export const CommentContentsBox = styled.main`
  width: 90%;
`;

export const CommentInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CommentName = styled.article`
  font-weight: 700;
  font-size: 14px;
`;

export const CommentText = styled.article`
  font-weight: 400;
  font-size: 12px;
  color: black;
  margin-top: 10px;
  width: 300px;
`;

export const CommentImg = styled.img`
  width: 200px;
  margin-top: 10px;
  border-radius: 10px;
`;

export const CommentVideo = styled.video`
  width: 300px;
  margin-top: 10px;
  border-radius: 10px;
`;

export const MediaBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CommentBtns = styled.section`
  width: auto;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-end;
`;

export const EditBtn = styled.button`
  border: none;
  background: none;
  font-size: 20px;
  cursor: pointer;
`;

export const DeleteBtn = styled.button`
  border: none;
  background: none;
  font-size: 20px;
  cursor: pointer;
`;

export const CreatedAt = styled(TimeAgo)`
  font-weight: 400;
  font-size: 11px;
  color: #767676;
`;

export const Like = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  margin-top: 15px;
  font-size: 12px;
`;

export const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const OtherBtns = styled.div`
  margin-left: 20px;
`;

export const Row1 = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ProfileWrapper = styled.div`
  display: flex;
  align-items: flex-start;
`;
