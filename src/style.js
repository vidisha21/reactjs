import styled from 'styled-components';

export const Wrapper = styled.div`
    
max-width: 1068px;
margin: auto;
width: 100%;
padding-bottom: 2%;
display: flex;
flex-direction: column;
align-items: center; 
justify-content: center; 
`;

export const ScoreButton = styled.button`
  display: inline-block;
  width: 65px; 
  height: 47px; 
  margin: 4px; 
  background-color: teal;
  color: white;
  // border: solid 2px grey;
  border: none;
  border-radius: 3px;
  cursor: pointer;

  &:hover {
    background-color: grey;
  }
`;

export const ResetButton = styled.button`
  display: block;
  margin: 10px auto; 
  padding: 10px 20px;
  background-color: teal;
  color: white;
  border: none;
  border-radius: 3px;
  cursor: pointer;

  &:hover {
    background-color: grey;
  }
`;
// export const Whole = styled.div`
// background-image: url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOK6MKUnKzFRD7d9WBgKv9OT8YIBNsKHsutPAdXYHWWg&s' style={{width:'500px'}} );
//   background-repeat: no-repeat;`;