import styled from 'styled-components';

const CaptionContainer = styled.div`
  color: #615220;  
  font-size: 18px;
  font-weigh: 500;
  text-align: center;
  padding: 25px;
  display: flex;
  flex-direction: column;
  
  #outer {
    display: flex;
    
    
    #left {
      width: 75%;

      label {
        float: left;
        font-size: 16px;
      }  
    }
    
    #right {
      width: 25%;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      position: relative;
      padding-left: 10px;
      
      label {padding-left: 10px;}
      
      img { 
        height: 20px; 
        width: 30px;
        position: absolute;
        right: 0;
        bottom: -20px;
      }
    }
  }
`;

export default CaptionContainer;