import React, { useState } from 'react';
import styled from 'styled-components';

import Caption from './Caption';
import Search from './Search';
import Meme from './Meme';

const LandingContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #fff7db;
  padding-top: 20px;
`;

const Landing = () => {
  const [caption, setCaption] = useState(true);
  const [theme, setTheme] = useState("white");

  const [top, setTop] = useState("");
  const [bottom, setBottom] = useState("");

  const handleTopInput = (e) => {
    setTop(e.target.value);
  }
  
  const handleBottomInput = (e) => {
    setBottom(e.target.value);
  };

  const toggleCaption = () => {
    setCaption({ caption: !caption });
  }

  const handleTheme = (color) => {
    setTheme(color);
  }

  return (
    <LandingContainer>
      {
        caption ?
          <Caption
            toggleSearch={toggleCaption}
            toggleTheme={handleTheme}
            topInput={handleTopInput}
            bottomInput={handleBottomInput}
            top={top}
            bottom={bottom}
          /> :
          <Search toggleCaption={toggleCaption} />
      }
      <Meme theme={theme} top={top} bottom={bottom} /> 
    </LandingContainer>
  );
};

export default Landing;