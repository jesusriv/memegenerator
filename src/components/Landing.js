import React, { useState } from 'react';
import styled from 'styled-components';

import { Grid } from '@giphy/react-components'
import { GiphyFetch } from '@giphy/js-fetch-api'

import Caption from './Caption';
import Search from './Search';
import Meme from './Meme';

const LandingContainer = styled.div` 
  margin: 0 auto;
  width: 85%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 95vh;
  
  .setup {
    width: 600px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
    
    ::-webkit-scrollbar {
      width: 0px;  /* Remove scrollbar space */
      background: transparent;  /* Optional: just make scrollbar invisible */
    }

    .giphy {
      display: flex;
      justify-content: center;
      margin-top: 10px;
      box-sizing: content-box;
      border-radius: 10px;
      padding: 20px 15px;
      height: 450px;
      overflow-y: scroll;
      background: linear-gradient(45deg, #7300cc, #ce8fff);
      width: 70%;
    }
  }
`;

const Landing = () => {
  const gf = new GiphyFetch('C0mCiaMqHpEoAs9TDfcWEhtHGq76QDi7')
  
  const [data, setData] = useState("");  
  
  const [top, setTop] = useState("");
  const handleTopInput = (e) => {
    setTop(e.target.value);
  }
  
  const [bottom, setBottom] = useState("");
  const handleBottomInput = (e) => {
    setBottom(e.target.value);
  };
  
  const handleSearch = (e) => {
    setData(e.target.value);
  }
  
  const [caption, setCaption] = useState(true);
  const toggleView = () => {
    setCaption(!caption);
  }
  
  const [theme, setTheme] = useState("white");
  const handleTheme = (color) => {
    setTheme(color);
  }

  const fetchGifs = async (offset) => await gf.search(data, { sort: 'relevant', lang: 'es', offset, limit: 10 });
  const [gifGrid, setGifGrid] = useState("");
  const submitSearch = () => {
    setGifGrid("");
    setTimeout(() => {
      setGifGrid(<Grid id="grid" width={340} columns={1} fetchGifs={fetchGifs} />);
    }, 500);
    handle()
  }

  const [gifs, setGifs] = useState([]);
  const handle = () => {
    setGifs(document.getElementsByTagName('picture'))
    setTimeout(() => {
      console.log(gifs);
    }, 2000);
  }

  return (
    <LandingContainer>
      <div className="setup">
        {
          caption ?
            <Caption
              view={toggleView}
              toggleTheme={handleTheme}
              topInput={handleTopInput}
              bottomInput={handleBottomInput}
              top={top}
              bottom={bottom}
            />:
            <Search
              view={toggleView}
              search={handleSearch}
              submit={submitSearch}
              data={data} />
        }
        <div className="giphy">
          {gifGrid}
        </div>
      </div>
      <Meme theme={theme} top={top} bottom={bottom} /> 
    </LandingContainer>
  );
};

export default Landing;