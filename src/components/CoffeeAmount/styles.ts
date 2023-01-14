import styled, { css } from 'styled-components';

export const CoffeeAmountContainer = styled.div`
  display: flex;
  flex-direction: row;
  border-radius: 5px;
  width: 72px;
  height: 38px;
  justify-content: center;
  align-items: center;
  background-color: var(--base-button);

  & span {
    color: var(--base-title);
    font-size: 16px;
  }

  & button {
    color: var(--brand-purple-md);
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    border: none;
    width: 3rem;
    height: 3.2rem;
    transition: 0.25s;

    & svg {
      font-size: 1.5rem;
    }

    &:hover {
      color: var(--purple-dark);
    }
  }
`;
