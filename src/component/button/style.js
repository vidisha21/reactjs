import styled from 'styled-components';

const Wrapper = styled.button`
  margin: 5px;
  padding: 5px 10px;
  font-size: 16px;
  background-color: teal;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: grey;
  }
`;

export { Wrapper };
