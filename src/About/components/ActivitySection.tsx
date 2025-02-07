import styled from "styled-components";

const ActivitySection = () => {
  return <BG className="page"></BG>;
};

export default ActivitySection;

const BG = styled.div`
  width: 100%;
  height: 500vh;
  background-color: black;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 2rem;
`;
