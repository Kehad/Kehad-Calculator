import { useState } from 'react';
import CalcInfo from './calcInfo';
import CalcTheme from './calcTheme';

const CalcMain = () => {
  // check user story no10
  const [formula, setFormular] = useState('');
  const [display, setDisplay] = useState(0);
  const [theme, setTheme] = useState();
  const handlerFormular = (event) => {
    event.preventDefault();
    const newValue = event.target.value;
    console.log(newValue);

    const sanitizedText = newValue.replace(/00+/g, 0);
    console.log(sanitizedText);

    // setFormular((prevState) => prevState + sanitizedText);
    if (
      !(formula === '0' && newValue === '0') &&
      !(formula.endsWith(0) && newValue === '0')
    ) {
      // if (formula.length === 0) throw new Error('Error');
      setFormular((prevState) => {
        return prevState + newValue;
      });
    }

    console.log(formula);
  };
  const solveFormula = () => {
    const solution = eval(formula);
    console.log(solution);
    setDisplay(solution);
  };
  const resetFormula = () => {
    setDisplay(0);
    setFormular('');
  };

  const reloadHandler = () => {};

  const themeHandler = (props) => {
    console.log(props);
    setTheme(props);
  };

  // styles

  // for minibox1
  const minibox1DarkStyle = {
    backgroundColor: '#2A2D38',
    color: '#fff',
  };
  const minibox1LightStyle = {
    backgroundColor: '#fff',
    color: '#000',
  };

  // for minbox 2
  const minibox2DarkStyle = {
    backgroundColor: '#191919',
    color: '#fff',
  };
  const minibox2LightStyle = {
    backgroundColor: '#fff',
    color: '#000',
  };

  // for minbox2 button
  const minibox2ButtonDarkStyle = {
    backgroundColor: '#262626',
    color: '#fff',
    fill: '#fff',
    stroke: '#fff',
  };
  const minibox2ButtonLightStyle = {
    backgroundColor: '#fff',
    color: '#000',
  };
  // for minibox2 symbols
  const minibox2SymbolLightStyle = {
    color: '#44c14f',
  };
  const minibox2SymbolDarkStyle = {
    color: '#c3a03a',
    backgroundColor: '#262626',
  };
  const minibox2ACSymbolDarkStyle = {
    color: '#C84A44',
    backgroundColor: '#262626',
  };

  return (
    <>
      <section className="container">
        <div className="container__box">
          <div
            className="container__box---minibox1"
            style={theme ? minibox1DarkStyle : minibox1LightStyle}
          >
            <CalcInfo />
            <CalcTheme themeSet={themeHandler} />
            <div className="container__box---minibox1--solution">
              <p className="container__box---minibox1--solution-history">
                {formula}
              </p>
              <p
                className="container__box---minibox1--solution-number"
                id="display"
              >
                {display}
              </p>
            </div>
          </div>
          <div
            className="container__box---minibox2"
            style={theme ? minibox2DarkStyle : minibox2LightStyle}
          >
            <div
              className={`container__box---minibox2--button ac-green`}
              style={
                theme ? minibox2ACSymbolDarkStyle : minibox2SymbolLightStyle
              }
              id="clear"
              onClick={resetFormula}
            >
              AC
            </div>
            <div
              className={`container__box---minibox2--button ac-green`}
              style={theme ? minibox2SymbolDarkStyle : minibox2SymbolLightStyle}
            >
              @
            </div>
            <button
              className={`container__box---minibox2--button ac-green`}
              style={theme ? minibox2SymbolDarkStyle : minibox2SymbolLightStyle}
              id="remainder"
              value="%"
              onClick={handlerFormular}
            >
              %
            </button>
            <button
              className={`container__box---minibox2--button ac-green`}
              style={theme ? minibox2SymbolDarkStyle : minibox2SymbolLightStyle}
              id="divide"
              value="/"
              onClick={handlerFormular}
            >
              /
            </button>
            {/* <br /> */}
            <button
              className="container__box---minibox2--button"
              style={theme ? minibox2DarkStyle : minibox2LightStyle}
              id="seven"
              value="7"
              onClick={handlerFormular}
            >
              7
            </button>
            <button
              className="container__box---minibox2--button"
              style={theme ? minibox2DarkStyle : minibox2LightStyle}
              id="eight"
              value="8"
              onClick={handlerFormular}
            >
              8
            </button>
            <button
              className="container__box---minibox2--button"
              style={theme ? minibox2DarkStyle : minibox2LightStyle}
              id="nine"
              value="9"
              onClick={handlerFormular}
            >
              9
            </button>
            <button
              className={`container__box---minibox2--button ac-green`}
              style={theme ? minibox2SymbolDarkStyle : minibox2SymbolLightStyle}
              id="multiply"
              value="*"
              onClick={handlerFormular}
            >
              *
            </button>
            {/* <br /> */}
            <button
              className="container__box---minibox2--button"
              style={theme ? minibox2DarkStyle : minibox2LightStyle}
              id="four"
              value="4"
              onClick={handlerFormular}
            >
              4
            </button>
            <button
              className="container__box---minibox2--button"
              style={theme ? minibox2DarkStyle : minibox2LightStyle}
              id="five"
              value="5"
              onClick={handlerFormular}
            >
              5
            </button>
            <button
              className="container__box---minibox2--button"
              style={theme ? minibox2DarkStyle : minibox2LightStyle}
              id="six"
              value="6"
              onClick={handlerFormular}
            >
              6
            </button>
            <button
              className={`container__box---minibox2--button ac-green`}
              style={theme ? minibox2SymbolDarkStyle : minibox2SymbolLightStyle}
              id="substract"
              value="-"
              onClick={handlerFormular}
            >
              -
            </button>
            {/* <br /> */}
            <button
              className="container__box---minibox2--button"
              style={theme ? minibox2DarkStyle : minibox2LightStyle}
              id="one"
              value="1"
              onClick={handlerFormular}
            >
              1
            </button>
            <button
              className="container__box---minibox2--button"
              style={theme ? minibox2DarkStyle : minibox2LightStyle}
              id="two"
              value="2"
              onClick={handlerFormular}
            >
              2
            </button>
            <button
              className="container__box---minibox2--button"
              style={theme ? minibox2DarkStyle : minibox2LightStyle}
              id="three"
              value="3"
              onClick={handlerFormular}
            >
              3
            </button>
            <button
              className={`container__box---minibox2--button ac-green`}
              style={theme ? minibox2SymbolDarkStyle : minibox2SymbolLightStyle}
              id="add"
              value="+"
              onClick={handlerFormular}
            >
              +
            </button>
            {/* <br /> */}
            {/* for reloading the page */}
            {/* downloading the reloading and replace it with the & symbol */}
            <div
              className="container__box---minibox2--button"
              id="&" // for
              value="reload"
              onClick={reloadHandler}
              style={theme ? minibox2DarkStyle : minibox2LightStyle}
            >
              <svg
                fill={theme ? '#fff' : '#000'}
                height="20px"
                width="20px"
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 489.533 489.533"
                xmlSpace="preserve"
                stroke={theme ? '#fff' : '#000'}
                style={theme ? minibox2DarkStyle : minibox2LightStyle}
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {' '}
                  <g>
                    {' '}
                    <path d="M268.175,488.161c98.2-11,176.9-89.5,188.1-187.7c14.7-128.4-85.1-237.7-210.2-239.1v-57.6c0-3.2-4-4.9-6.7-2.9 l-118.6,87.1c-2,1.5-2,4.4,0,5.9l118.6,87.1c2.7,2,6.7,0.2,6.7-2.9v-57.5c87.9,1.4,158.3,76.2,152.3,165.6 c-5.1,76.9-67.8,139.3-144.7,144.2c-81.5,5.2-150.8-53-163.2-130c-2.3-14.3-14.8-24.7-29.2-24.7c-17.9,0-31.9,15.9-29.1,33.6 C49.575,418.961,150.875,501.261,268.175,488.161z"></path>{' '}
                  </g>{' '}
                </g>
              </svg>
            </div>
            <button
              className="container__box---minibox2--button"
              style={theme ? minibox2DarkStyle : minibox2LightStyle}
              id="zero"
              value="0"
              onClick={handlerFormular}
            >
              0
            </button>
            <button
              className={`container__box---minibox2--button ac-green`}
              style={theme ? minibox2DarkStyle : minibox2LightStyle}
              id="decimal"
              value="."
              onClick={handlerFormular}
            >
              .
            </button>
            <button
              className={`container__box---minibox2--button equal`}
              // style={theme ? minibox2DarkStyle : minibox2LightStyle}
              id="equals"
              value="="
              onClick={solveFormula}
            >
              =
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default CalcMain;
