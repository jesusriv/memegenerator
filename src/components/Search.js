import styled from 'styled-components';
import Wrapper from './Wrapper';

const SearchWrapper = styled.div`
  color: #615220;  
  font-size: 18px;
  font-weigh: 500;
  text-align: center;
  padding: 25px;
  display: flex;
  flex-direction: column;
`;

const Search = ({ toggleCaption }) => {
  return (
    <Wrapper>
      <SearchWrapper>
        Find an image or gif with GIPHY.
        <input type="text" />
      </SearchWrapper>

      <img onClick={() => toggleCaption()} id="back" src="https://www.flaticon.com/svg/static/icons/svg/109/109618.svg" />
    </Wrapper>
  );
};

export default Search