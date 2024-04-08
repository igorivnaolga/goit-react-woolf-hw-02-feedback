import styled from 'styled-components';

export const BtnWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 20px;
`;

export const Button = styled.button`
  width: 100px;
  font-size: 20px;
  padding: 5px;
  border-radius: 10px;
  border: 1px solid #dee3e8;
  box-shadow: 0 2px 5px #dee3e8;

  &:hover,
  &:focus {
    color: #fff;
    background-color: #000;
    cursor: pointer;
  }
`;
