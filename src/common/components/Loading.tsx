import styled, { keyframes } from "styled-components";

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Spinner = styled.div`
  width: 6rem;
  height: 6rem;
  border-radius: 50%;
  border: 6px solid transparent;
  border-top: 6px solid #74c8ff;
  border-right: 6px solid #74c7ffd9;
  border-bottom: 6px solid #74c7ffa4;
  filter: drop-shadow(0px 0.808px 10px rgba(198, 22, 210, 0.2));
  animation: ${spin} 1s linear infinite;
`;

const Loading = () => {
  return (
    <LoadingContainer>
      <Spinner />
    </LoadingContainer>
  );
};

export default Loading;
