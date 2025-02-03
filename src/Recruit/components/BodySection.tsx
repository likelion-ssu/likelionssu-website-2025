import styled from "styled-components";

const Body = () => {
  return (
    <>
      <BGC>
        <BoxContainer>
          <Title>숭실대 멋쟁이사자처럼은 이런 사람을 원해요</Title>
        </BoxContainer>
        <BoxContainer>
          <Title>모집 파트</Title>
        </BoxContainer>
        <BoxContainer>
          <Title>13기 활동 로드맵</Title>
        </BoxContainer>
        <BoxContainer>
          <Title>모집 절차</Title>
        </BoxContainer>
        <ApplyContainer>
          <Title>지금 바로 지원하세요</Title>
          <ApplyBtn>지원 서류 작성하기</ApplyBtn>
        </ApplyContainer>
      </BGC>
    </>
  );
};

export default Body;

const BGC = styled.div`
  /* background: linear-gradient(180deg, #f3f7fb 61.94%, #d6e3ff 100%); */
  width: 100%;
  /* height: 100vh; */
  padding: 16rem 0 34rem 0;
`;

const BoxContainer = styled.div`
  margin-bottom: 26rem;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-align: center;
`;

const ApplyContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;
`;

const ApplyBtn = styled.button`
  display: flex;
  padding: 1.8rem 3rem;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  border-radius: 10px;
  background: #fff;
  font-size: 1.8rem;
  font-style: normal;
  font-weight: 600;
`;
