import { useState } from 'react';
import './calcTheme.scss';

const CalcTheme = (props) => {
  const { themeSet } = props;
  const [theme, setTheme] = useState(false);

  const handlerDarkTheme = (event) => {
    event.preventDefault();
    setTheme((theme) => !theme);
    themeSet(theme);
  };
  const handlerLightTheme = (event) => {
    event.preventDefault();
    setTheme((theme) => !theme);
    themeSet(theme);
  };
  const operatorDarkStyles = {
    backgroundColor: '#373535',
    color: '#fff',
  };
  const operatorLightStyles = {
    backgroundColor: '#fff',
    color: '#000',
  };
  return (
    <>
      <div
        className="container__box---minibox1--change"
        // style={theme ? operatorLightStyles : operatorDarkStyles}
      >
        {/* <div className="container__box---minibox1--change-light">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={handlerLightTheme}
            height="30px"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {' '}
              <g
                clipPath="url(#a)"
                stroke="#fff"
                strokeWidth="1.5"
                strokeMiterlimit="10"
              >
                {' '}
                <path
                  d="M5 12H1M23 12h-4M7.05 7.05 4.222 4.222M19.778 19.778 16.95 16.95M7.05 16.95l-2.828 2.828M19.778 4.222 16.95 7.05"
                  strokeLinecap="round"
                ></path>{' '}
                <path
                  d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
                  fill="#000000"
                  fillOpacity=".16"
                ></path>{' '}
                <path d="M12 19v4M12 1v4" strokeLinecap="round"></path>{' '}
              </g>{' '}
              <defs>
                {' '}
                <clipPath id="a">
                  {' '}
                  <path fill="#ffffff" d="M0 0h24v24H0z"></path>{' '}
                </clipPath>{' '}
              </defs>{' '}
            </g>
          </svg>
        </div> */}
        <div className="container__box---minibox1--change-dark">
          <svg
            fill="#fff"
            viewBox="0 0 35 35"
            dataname="Layer 2"
            id="Layer_2"
            xmlns="http://www.w3.org/2000/svg"
            height="30px"
            onClick={handlerDarkTheme}
            title="dark theme"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path d="M18.44,34.68a18.22,18.22,0,0,1-2.94-.24,18.18,18.18,0,0,1-15-20.86A18.06,18.06,0,0,1,9.59.63,2.42,2.42,0,0,1,12.2.79a2.39,2.39,0,0,1,1,2.41L11.9,3.1l1.23.22A15.66,15.66,0,0,0,23.34,21h0a15.82,15.82,0,0,0,8.47.53A2.44,2.44,0,0,1,34.47,25,18.18,18.18,0,0,1,18.44,34.68ZM10.67,2.89a15.67,15.67,0,0,0-5,22.77A15.66,15.66,0,0,0,32.18,24a18.49,18.49,0,0,1-9.65-.64A18.18,18.18,0,0,1,10.67,2.89Z"></path>
            </g>
          </svg>
        </div>
      </div>
    </>
  );
};

export default CalcTheme;
