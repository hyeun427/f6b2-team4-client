## Backend 경로 바꾸기

1. 파일 위치 : /Users/jintaekwoo/Desktop/f6b2-team4-client/f6b2-client/src/components/commons/apollo/index.tsx

```javascript
const uploadLink = createUploadLink({
  // 아래 URL 변경, https 주의, https가 아니면 리프레시 토큰 발급 안됨
    uri: 'https://team04backend.shop/graphql',
    headers: { Authorization: `Bearer ${accessToken}` },
```

2. 파일 위치 : f6b2-client/src/commons/libraries/getAccessToken.ts

```javascript
export async function getAccessToken() {
  try {
    const graphQLClient = new GraphQLClient(
      // 아래 URL 변경, https 주의, https가 아니면 리프레시 토큰 발급 안됨
      'https://team04backend.shop/graphql',
      { credentials: 'include' }
    );
```

## image 업로드 사용방법

경로 : f6b2-client/src/components/commons/upload/index.tsx

> Container

```javascript
// 1. 이미지 URL을 받기 위한 set 선언
const [fileUrls, setFileUrls] = useState([]);

// 2. 업로드 컴포넌트에 넘겨줄 콜백 함수(?)
const onChangeFileUrls = (fileUrl: string) => {
  const newFileUrls = [...fileUrls];
  newFileUrls.push(fileUrl);
  setFileUrls(newFileUrls);
};
```

> Presenter

```javascript
// 1. 컴포넌트 임포트하기

// 2. 업로드 버튼 컴포넌트 삽입
<ImageUpload
  onChangeFileUrls={props.onChangeFileUrls}
  fileUrls={props.fileUrls}
  // type 주기
  // 가든 게시물인 경우 : garden
  // 커뮤니티 게시물인 경우 : community
  type={'garden'}
/>;
// 3. 이미지 썸네일 노출
// 디자인은 각자 수정 해서 사용하면 됩니다.
{
  props.fileUrls?.map((el, index) => (
    <>
      <L.ImageItempWrap>
        <L.ImageThumbnail
          key={uuidv4()}
          src={
            el.startsWith('https', 0)
              ? el
              : `https://storage.googleapis.com/${el}`
          }
        />
        {/* <button onClick={props.onClickImageDelete(index)}>삭제</button> */}
      </L.ImageItempWrap>
    </>
  ));
}
```

## video 업로드 사용방법

경로 : f6b2-client/src/components/commons/videoupload/index.tsx

> Container

```javascript
// 1. 이미지 URL을 받기 위한 set 선언
const [videoUrls, setVideoUrls] = useState([]);

// 2. 업로드 컴포넌트에 넘겨줄 콜백 함수(?)
const onChangeVideoUrls = (fileUrl: string) => {
  const newVideoUrls = [...videoUrls];
  newVideoUrls.push(fileUrl);
  setVideoUrls(newVideoUrls);
};
```

> Presenter

```javascript
// 1. 컴포넌트 임포트하기

// 2. 업로드 버튼 컴포넌트 삽입
<VideoUpload
  onChangeVideoUrls={props.onChangeVideoUrls}
  videoUrls={props.videoUrls}
  // type 주기
  // 가든 게시물인 경우 : garden
  // 커뮤니티 게시물인 경우 : community
  type={'garden'}
/>;
// 3. 비디오 썸네일 노출
// 디자인은 각자 수정 해서 사용하면 됩니다.
{
  props.videoUrls?.map((el, index) => (
    <>
      <L.VideoItempWrap>
        <L.VideoThumbnail
          key={uuidv4()}
          src={
            el.startsWith('https', 0)
              ? el
              : `https://storage.googleapis.com/${el}`
          }
        />
      </L.VideoItempWrap>
    </>
  ));
}
```

## timeago 사용방법

- 자세한 내용 : https://www.npmjs.com/package/timeago-react

> Container

```javascript
// 1. import하기
import * as timeago from 'timeago.js';
import ko from 'timeago.js/lib/lang/ko';
import TimeAgo from 'timeago-react';

export default function Home() {
  // timeago 등록하기
  // 한국어는 ko, 디폴트는 영어
  timeago.register('ko', ko);
```

> presenter

```javascript
<TimeAgo datetime={newDate} locale='ko' />
```

## Language 코드 받는 법

- 파일 경로 : f6b2-client/src/commons/libraries/utils.ts

- `getLangCode` import 하기
- 사용법

```javascript
getLangCode('한국어');
// result : ko
```
