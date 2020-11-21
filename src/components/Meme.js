import styled from 'styled-components';

const MemeContainer = styled.div`
  width: 400px;
  height: 400px;
  margin: 10px auto;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-color: ${props => props.theme};

  div {
    width: 100%;
    height: 200px;
    border: 1px solid red;
  }
`;

const Meme = ({top, bottom, theme}) => {
  
  return(
    <MemeContainer theme={theme}>
      <p>{top}</p>
      <p>{bottom}</p>
      <div></div>
    </MemeContainer>
  );
}

export default Meme;