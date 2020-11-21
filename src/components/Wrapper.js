import styled from 'styled-components';

const  Wrapper = styled.div`
  width: 400px;
  margin: 0 auto;
  background-color: #fff;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  
  
  img {
    width: fit-content;
    height: 20px;
    
    &:hover {
      cursor: pointer;
    }
  }

  input[type="text"] {
      color: #444;
      width: 100%;
      padding: 5px 10px;
      background-color: rgba(0, 0, 0, 0.05);
      border: none;
      border-radius: 5px;
      font-size: 18px;
      margin-top: 4px;
      
      &:focus {
        outline: none;
      }
  }
  
  position: relative;
    
  #back {
    position: absolute;
    bottom: 5px;
    left: 4px;
    width: 20px;
  }
`;

export default Wrapper;