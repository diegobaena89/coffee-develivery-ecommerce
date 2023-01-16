import styled from 'styled-components';

export const ConfirmationContainer = styled.div`
  width: 1140px;
  margin: 120px auto;

  h1 {
    font-weight: bold;
    color: var(--yellow-dark);
    font-size: 32px;
  }

  p {
    font-family: 'Roboto';
    font-size: 20px;
    color: var(--base-subtitle);
    margin-bottom: 40px;
  }

  & div {
    border: 1px solid red;
    display: flex;
    justify-content: space-between;
  }
`;

export const AddresInfos = styled.div`
  display: flex;
  flex-direction: column;
  width: 526px;
  justify-content: center;

  > div {
    display: flex;
    flex-direction: column;
  }
`;

export const ImageContainer = styled.div``;
