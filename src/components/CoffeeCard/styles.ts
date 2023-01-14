import styled, { css } from 'styled-components';

export const FullCoffeeCardContainer = styled.div`
  height: 310px;
  width: 256px;
  background-color: var(--base-card);
  border-radius: 5px 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & img {
    margin-top: -1.5rem;
    width: 120px;
    margin-bottom: 0.5rem;
  }
`;

export const CoffeeTags = styled.div`
  min-width: 55px;
  height: 21px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;

  & span {
    padding: 5px 10px;
    color: var(--yellow-dark);
    background-color: var(--yellow-brand-light);
    border-radius: 15px;
    font-size: 10px;
    font-weight: bold;
    margin: 0.5rem;
  }
`;

export const CoffeeInfo = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin: 10px 0;

  & h6 {
    margin-bottom: 0.7rem;
    font-size: 20px;
    color: var(--base-subtitle);
    font-family: 'Baloo 2', cursive;
  }

  & p {
    color: var(--base-label);
    font-size: 1rem;
  }
`;

export const CoffeeSale = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
  padding-bottom: 2rem;

  & p {
    font-size: 1rem;
    margin-right: 1rem;
  }

  & p span {
    color: var(--base-title);
    font-family: 'Baloo 2', cursive;
    font-weight: bold;
    font-size: 24px;
  }

  & > button {
    background-color: var(--purple-dark);
    border: none;
    border-radius: 5px;
    margin-left: 0.8rem;
    width: 38px;
    height: 38px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.25s;

    &:hover:not(:disabled) {
      background-color: rem;
    }

    &:disabled {
      cursor: not-allowed;
    }
  }

  & > button svg {
    border-radius: 5px;
    color: white;
    font-size: 1.5rem;
  }
`;
