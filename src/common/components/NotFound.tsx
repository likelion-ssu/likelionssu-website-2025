import { Link } from "react-router-dom";
import styled from "styled-components";

const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  color: white;
  background: #000;
`;

const NotFound = () => {
  return (
    <NotFoundContainer>
      <p>404 Not Found</p>
      <p>페이지를 찾을 수 없습니다.</p>
      <br />
      <Link to="/">홈으로 돌아가기</Link>
    </NotFoundContainer>
  );
};

export default NotFound;
