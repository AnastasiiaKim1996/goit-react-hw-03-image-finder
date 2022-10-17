import styled, { keyframes } from 'styled-components';

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.div`
  animation: ${rotate360} 1s linear infinite;
  transform: translateZ(0);
  margin: 0 auto;
  border-top: 2px solid grey;
  border-right: 2px solid grey;
  border-bottom: 2px solid blanchedalmond;
  border-left: 4px solid blanchedalmond;
  background: transparent;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-top: 140px;
`;
