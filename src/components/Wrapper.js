import styled from 'styled-components';

const  Wrapper = styled.div`
  width: 450px;
  margin: 0 auto;
  background-color: #fff;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  border: 15px solid;
  border-image-source: linear-gradient(90deg, rgba(120,26,98,1) 0%, rgba(9,9,121,1) 33%, rgba(5,181,95,1) 66%, rgba(0,212,255,1) 100%);
  border-image-slice: 1;

  h1 {
    color: rgba(120,26,98,1);  
    font-size: 24px;
    font-weight: 800;
    text-transform: uppercase;
    text-align: center;
  }
  
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