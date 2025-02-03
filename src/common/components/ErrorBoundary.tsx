import { FallbackProps } from "react-error-boundary";
import styled from "styled-components";

const ErrorFallback = ({ error, resetErrorBoundary }: FallbackProps) => {
  return (
    <ErrorContainer>
      <ErrorMessage>error.message: {error?.message || "알 수 없는 오류"}</ErrorMessage>
      <br />
      <RetryBtn onClick={resetErrorBoundary}>다시 시도</RetryBtn>
    </ErrorContainer>
  );
};

export default ErrorFallback;

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 100vh;

  text-align: center;
  color: white;
`;

const ErrorMessage = styled.div`
  font-size: 2rem;
`;

const RetryBtn = styled.button`
  padding: 1rem 2.4rem;
  border: none;
  border-radius: 30px;

  background: linear-gradient(0deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.2) 100%),
    linear-gradient(96deg, #6df5ff -0.2%, #8079b4 96.8%);

  color: white;
  cursor: pointer;
`;
