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
      !(formula.endsWith('0') && newValue === '0')
    ) {
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

  const themeHandler = (props) => {
    console.log(props);
    setTheme(props);
  };

  // styles
  const miniboxDarkStyle = {
    backgroundColor: '#000',
    color: '#fff',
  };
  const miniboxLightStyle = {
    backgroundColor: '#fff',
    color: '#000',
  };
  return (
    <>
      <section className="container">
        <div className="container__box">
          <div
            className="container__box---minibox1"
            style={theme ? miniboxDarkStyle : miniboxLightStyle}
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
          <div className="container__box---minibox2">
            <div
              className={`container__box---minibox2--button ac-green`}
              id="clear"
              onClick={resetFormula}
            >
              AC
            </div>
            <div className={`container__box---minibox2--button ac-green`}>
              @
            </div>
            <div className={`container__box---minibox2--button ac-green`}>
              %
            </div>
            <button
              className={`container__box---minibox2--button ac-green`}
              id="divide"
              value="/"
              onClick={handlerFormular}
            >
              /
            </button>
            {/* <br /> */}
            <button
              className="container__box---minibox2--button"
              id="seven"
              value="7"
              onClick={handlerFormular}
            >
              7
            </button>
            <button
              className="container__box---minibox2--button"
              id="eight"
              value="8"
              onClick={handlerFormular}
            >
              8
            </button>
            <button
              className="container__box---minibox2--button"
              id="nine"
              value="9"
              onClick={handlerFormular}
            >
              9
            </button>
            <button
              className={`container__box---minibox2--button ac-green`}
              id="multiply"
              value="*"
              onClick={handlerFormular}
            >
              *
            </button>
            {/* <br /> */}
            <button
              className="container__box---minibox2--button"
              id="four"
              value="4"
              onClick={handlerFormular}
            >
              4
            </button>
            <button
              className="container__box---minibox2--button"
              id="five"
              value="5"
              onClick={handlerFormular}
            >
              5
            </button>
            <button
              className="container__box---minibox2--button"
              id="six"
              value="6"
              onClick={handlerFormular}
            >
              6
            </button>
            <button
              className={`container__box---minibox2--button ac-green`}
              id="substract"
              value="-"
              onClick={handlerFormular}
            >
              -
            </button>
            {/* <br /> */}
            <button
              className="container__box---minibox2--button"
              id="one"
              value="1"
              onClick={handlerFormular}
            >
              1
            </button>
            <button
              className="container__box---minibox2--button"
              id="two"
              value="2"
              onClick={handlerFormular}
            >
              2
            </button>
            <button
              className="container__box---minibox2--button"
              id="three"
              value="3"
              onClick={handlerFormular}
            >
              3
            </button>
            <button
              className={`container__box---minibox2--button ac-green`}
              id="add"
              value="+"
              onClick={handlerFormular}
            >
              +
            </button>
            {/* <br /> */}
            {/* for reloading the page */}
            {/* downloading the reloading and replace it with the & symbol */}
            <button
              className="container__box---minibox2--button"
              id="&" // for
              value="&"
              onClick={handlerFormular}
            >
              &
            </button>
            <button
              className="container__box---minibox2--button"
              id="zero"
              value="0"
              onClick={handlerFormular}
            >
              0
            </button>
            <button
              className={`container__box---minibox2--button ac-green`}
              id="decimal"
              value="."
              onClick={handlerFormular}
            >
              .
            </button>
            <button
              className={`container__box---minibox2--button equal`}
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
