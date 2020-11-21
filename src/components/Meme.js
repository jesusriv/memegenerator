import styled from 'styled-components';

const MemeWrapper = styled.div`
  height: 100%;
  width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #c7f9ff;
  border-radius: 15px;
  padding: 30px 0;

  #completion-bar {
    width: 400px;
    height: 70px;
    margin-top: 20px;
    border-radius: 10px;
    background-color: #4fadff;
  }
`;

const MemeContainer = styled.div`
  width: 400px;
  height: 400px;
  margin: 10px auto;
  font-size: 22px;
  padding: 30px 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-color: ${props => props.theme};

  p {padding: 0 10px;}

  div {
    width: 100%;
    height: 220px;
    border: 1px solid red;
    overflow-y: scroll;
  }
`;



const Meme = ({top, bottom, theme}) => {

  
  return(
    <MemeWrapper>
      <MemeContainer theme={theme}>
        <p>{top}</p>
        <p>{bottom}</p>
        
        <div >
      
        </div>
      </MemeContainer>
      <div id="completion-bar">
      </div>
    </MemeWrapper>
  );
}

export default Meme;