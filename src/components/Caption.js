import Wrapper from './Wrapper';
import CaptionWrapper from './CaptionWrapper';

const Caption = ({ toggleSearch, toggleTheme, bottomInput, topInput, top, bottom }) => {
  

  return (
    <Wrapper>
      <CaptionWrapper>
        Caption Your Meme
          <div id="outer">
          <div id="left">
            <label>Top:</label>
            <input 
              type="text"
              value={top}
              onChange={topInput} />
            <label>Bottom:</label>
            <input 
              type="text" 
              value={bottom} 
              onChange={bottomInput} />
          </div>

          <form id="right">
            <p>
              <input
                onClick={() => toggleTheme("white")}
                type="radio"
                name="background"
              />
              <label>Light</label>
            </p>

            <p>
              <input
                onClick={() => toggleTheme("black")}
                type="radio"
                name="background" />
              <label for="dark">Dark</label>
            </p>

            <img onClick={() => toggleSearch()} src="https://www.flaticon.com/svg/static/icons/svg/109/109617.svg" />
          </form>
        </div>

      </CaptionWrapper>
    </Wrapper>
  );
};

export default Caption;