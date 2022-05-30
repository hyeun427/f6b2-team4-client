import Landing1 from "../src/components/commons/landing/landing1";

export default function Home() {
  return (
    <>
      <Landing1 />
      <Landing1 />
    </>
  );
}

// import styled from "@emotion/styled";

// const Wrapper = styled.div`
//   /* position: relative; */
//   z-index: 1;
//   width: 100vw;
//   height: 100vh;
// `;

// const Video = styled.video`
//   /* position: relative; */
//   z-index: 2;
//   width: max-content;
//   width: 100%;
//   height: 100%;
//   /* width: 450px; */
//   object-fit: fill;
// `;

// const Btn = styled.button`
//   /* position: absolute; */
//   z-index: 1000;
//   width: 100px;
// `;

// export default function Home() {
//   return (
//     <Wrapper>
//       <Video muted autoPlay loop src="/landing/landing.mp4">
//       </Video>
//       <Btn>버튼</Btn>
//     </Wrapper>
//   );
// }
