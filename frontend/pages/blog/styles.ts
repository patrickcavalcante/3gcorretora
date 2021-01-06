import styled from "styled-components";

export const Band = styled.div`
  width: 90%;
  max-width: 1240px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  grid-gap: 20px;

  @media only screen and (min-width: 500px) {
    grid-template-columns: 1fr 1fr;
  }

  @media only screen and (min-width: 850px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;

export const h1 = styled.div``;
