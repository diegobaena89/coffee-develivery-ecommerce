import styled from 'styled-components';

export const ConfirmationContainer = styled.div`
  width: 1140px;
  margin: 120px auto 0;

  & div > h1 {
    font-weight: bold;
    color: var(--yellow-dark);
    font-size: 32px;
  }

  & div > p {
    font-family: 'Roboto';
    font-size: 20px;
    color: var(--base-subtitle);
    margin-bottom: 40px;
  }
`;

export const DataContainer = styled.div`
  width: 1140px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;

export const DataConfirmation = styled.div`
  border: 1px solid var(--brand-purple-md);
  width: 526px;
  height: 270px;
  padding: 40px;
  border-radius: 6px 36px 6px 36px;

  & div:nth-child(1) svg {
    background-color: var(--brand-purple-md);
  }

  & div:nth-child(2) svg {
    background-color: var(--yellow-brand);
  }

  & div:nth-child(3) svg {
    background-color: var(--yellow-dark);
  }

  > div {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  > div:nth-child(1),
  > div:nth-child(2) {
    margin-bottom: 32px;
  }

  & svg {
    margin-right: 12px;
    border-radius: 50%;
    font-size: 2.8rem;
    width: 32px;
    height: 32px;
    padding: 0.35rem;
  }

  p {
    font-size: 16px;
    color: var(--base-text);
  }
`;
