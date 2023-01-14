import styled, { css } from 'styled-components';

export const HomeContainer = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const HomeSection = styled.section`
  width: 100%;
  min-height: 54.4rem;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
`;

export const HomeInfo = styled.div`
  min-height: 36rem;
  width: 100%;
  max-width: 60rem;

  & > div:first-child {
    display: flex;
    width: 100%;
    flex-direction: column;

    & h1 {
      color: var(--base-title);
      font-size: 3rem;
      width: 100%;
      line-height: 130%;
    }

    & p {
      margin-top: 2rem;
      color: var(--base-subtitle);
      font-size: 1.25rem;
    }
  }

  @media (max-width: 1215px) {
    width: 80%;
    text-align: center;
  }
`;

export const Advantages = styled.div`
  margin-top: 2rem;
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  margin-bottom: 40px;

  & div {
    width: 50%;
    display: flex;
    align-items: center;
    margin-top: 2rem;
    min-width: 290px;

    & span {
      font-size: 0.9rem;
      color: var(--base-text);
      margin-left: 1rem;
    }

    & svg {
      border-radius: 50%;
      font-size: 2.8rem;
      padding: 0.5rem;
    }
  }

  & div:nth-child(2) svg {
    background-color: var(--base-text);
  }

  & div:nth-child(3) svg {
    background-color: var(--base-text);
  }

  & div:nth-child(4) svg {
    background-color: var(--base-text);
  }
`;

export const CoffeesSection = styled.section`
  width: 100%;

  & h3 {
    font-size: 1.25rem;
    color: var(--base-subtitle);
  }

  & > div {
    width: 100%;
    margin-top: 2rem;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;

    & > div {
      margin: 2rem 0;
    }

    @media (max-width: 600px) {
      justify-content: center;
    }
  }
`;
