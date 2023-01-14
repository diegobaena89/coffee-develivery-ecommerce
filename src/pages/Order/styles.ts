import styled from 'styled-components';

export const OrderContainer = styled.form`
  width: 1140px;
  margin: 40px auto;
  height: auto;
  display: flex;

  display: flex;
  justify-content: space-between;
`;

export const FormContainer = styled.div`
  width: 640px;
  height: auto;

  > h2 {
    font-family: 'Baloo 2';
    font-size: 18px;
    color: var(--base-subtitle);
  }
`;

export const AddressContainer = styled.div`
  width: 100%;
  height: 372px;
  background: var(--base-card);
  margin: 20px 0 12px;
  border-radius: 6px;
  padding: 40px 0;
`;

export const AddressFrame = styled.div`
  display: flex;
  width: 560px;
  margin: 0 auto;
  margin-bottom: 32px;

  & p {
    font-size: 1rem;
    color: var(--base-subtitle);
  }

  & span {
    font-size: 14px;
    color: var(--base-text);
  }

  svg {
    color: var(--yellow-dark);
    margin-right: 8px;
  }
`;

export const Forms = styled.div`
  width: 560px;
  margin: 0 auto;

  input {
    height: 42px;
    background-color: var(--base-input);
    border: 1px solid var(--base-button);
    border-radius: 4px;
    padding: 12px;
    font-size: 14px;
    margin-bottom: 16px;
  }

  & input:nth-child(1) {
    display: block;
    width: 200px;
  }

  & input:nth-child(2) {
    width: 100%;
  }

  & input:nth-child(3) {
    width: 200px;
    margin-right: 10px;
  }

  & input:nth-child(4) {
    width: 348px;
  }

  & input:nth-child(5) {
    width: 200px;
    margin-right: 10px;
  }

  & input:nth-child(6) {
    width: 276px;
    margin-right: 12px;
  }

  & input:nth-child(7) {
    width: 60px;
  }
`;

export const PaymentMethod = styled.div`
  width: 100%;
  height: 207px;
  background: var(--base-card);
  margin: 20px 0 0px;
  border-radius: 6px;
  padding: 40px 0;
`;

export const PaymentFrame = styled.div`
  display: flex;
  width: 560px;
  margin: 0 auto;
  margin-bottom: 32px;

  & p {
    font-size: 1rem;
    color: var(--base-subtitle);
  }

  & span {
    font-size: 14px;
    color: var(--base-text);
  }

  svg {
    color: var(--brand-purple-md);
    margin-right: 8px;
  }
`;

export const ChoosePayment = styled.div`
  width: 560px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;

  button {
    width: 178px;
    height: 51px;
    color: var(--base-text);
    text-transform: uppercase;
    font-size: 12px;
    border-radius: 6px;
    border: none;
    background-color: var(--base-button);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  & svg {
    margin-right: 12px;
    color: var(--brand-purple-md);
  }
`;

export const FinishOrder = styled.div`
  width: 448px;

  > h2 {
    font-family: 'Baloo 2';
    font-size: 18px;
    color: var(--base-subtitle);
  }
`;

export const ViewOrder = styled.div`
  width: 100%;
  height: 498px;
  background: var(--base-card);
  margin: 20px 0 12px;
  border-radius: 6px;
  padding: 40px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  & button {
    width: 100%;
    color: red;

    color: #fff;
    text-transform: uppercase;
    font-size: 14px;
    font-weight: bold;

    background-color: var(--yellow-brand);
    border: none;
    padding: 15px 0;
    border-radius: 6px;
    cursor: pointer;
  }
`;
