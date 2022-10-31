import styled from "styled-components";

export const LayoutContainer = styled.div`
  max-width: 74rem;
  height: calc(100vh - 12rem);
  margin: 5rem auto;
  padding: 2.5rem;

  background: ${(props) => props.theme["gray-800"]};

  display: flex;
  flex-direction: column;

  @media (max-width: 1400px) {
    height: calc(100vh - 10rem);
  }
`;
