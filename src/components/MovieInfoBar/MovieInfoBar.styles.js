import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  background: #1c1c1c;
  min-height: 100px;
  padding: 0 20px;
`;

export const Content = styled.div`
  display: flex;
  max-width: 1280px;
  width: 100%;
  margin: 0 auto;

  .column {
    display: flex;
    align-items: center;
    justify-content: center;
    background: #353535;
    border-radius: 20px;
    margin: 0 20px;
    flex: 1;

    ::first-child {
      margin-left: 0;
    }

    :last-child {
      margin-right: 0;
    }
  }

  @media screen and (max-width: 768px) {
    display: block;

    .column {
      margin: 20px 0;
    }
  }
`;
