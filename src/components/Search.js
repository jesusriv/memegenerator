import styled from 'styled-components';
import Wrapper from './Wrapper';

const SearchWrapper = styled.div`
  color: #615220;  
  font-size: 18px;
  font-weigh: 500;
  text-align: center;
  padding: 20px;
  
  div {
    padding: 10px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    button {
      margin-left: 10px;
      border: none;
      background-color: #00e800;
      color: white;
      font-weight: 800;
      border-radius: 5px;
      font-size: 18px;
      padding: 5px 10px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);

      &:hover {cursor: pointer;}
      &:active {box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);}
    }
  }
`;

const Search = ({ 
  view, 
  search, 
  data, 
  submit }) => {

  return (
    <Wrapper>
      <SearchWrapper>
        Find a the perfect gif with GIPHY.
        <div>
          <input
            type="text"
            value={data}
            onChange={search}
          />
            <button onClick={submit} >Search</button>
        </div>
      </SearchWrapper>

      <img onClick={() => view()} id="back" src="https://www.flaticon.com/svg/static/icons/svg/109/109618.svg" alt="" />
    </Wrapper>
  );
};

export default Search