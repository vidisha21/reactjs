
import styled from 'styled-components';

export const Wrapper = styled.div`
 position : absolute;
 bottom : 0px;
 right : 0px;
 left :0px;
 border : solid 2px black;
 

`;

export const ScoreButton = styled.button`
  display: inline-block;
  width: 100px; 
  height: 110px; 
  background-color: white;
  color: black;
  border: solid 0.9px grey;
  // border-radius: 1px;
  cursor: pointer;
  font-size: 22px;
  box-sizing : border-box;
  background : #d3d3d3;
  flex : 1;

  &:hover {
    background-color: grey;
  }
`;
export const Background = styled.div`
border : solid 4px black;`

// export const ResetButton = styled.button`
//   display: block;
//   margin: 10px auto; 
//   padding: 10px 20px;
//   background-color: teal;
//   color: white;
//   border: none;
//   border-radius: 3px;
//   cursor: pointer;

//   &:hover {
//     background-color: grey;
//   }
// `;
// export const Whole = styled.div`
// background-image: url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOK6MKUnKzFRD7d9WBgKv9OT8YIBNsKHsutPAdXYHWWg&s' style={{width:'500px'}} );
//   background-repeat: no-repeat;`;
