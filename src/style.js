import { styled } from "styled-components";

const Wrapper = styled.div`
display: flex;
flex-direction: column;
width: 100%;

margin: auto;
background : url('https://img.freepik.com/premium-photo/soccer-stadium-evening-arena-with-crowd-fans-d-illustration_336913-373.jpg?size=626&ext=jpg&ga=GA1.1.1522961941.1691787232&semt=ais');
background-repeat: no-repeat;
`;

const ScoreButtons = styled.div`{
    display: flex;
    justify-content: center;
    height: 45px;
    Button{
      width: 80px;
    }
  }
  `;

export { Wrapper ,ScoreButtons };
