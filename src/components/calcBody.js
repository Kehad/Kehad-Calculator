const CalcBody = () => {
  return (
    <>
      <div className="container__box---minibox1">
        
        <div className="container__box---minibox1--solution">
          <p className="container__box---minibox1--solution-history">
            307 * 82
          </p>
          <p className="container__box---minibox1--solution-number" id="display">
            12,872
          </p>
        </div>
      </div>
      <div className="container__box---minibox2">
        <div className="container__box---minibox2--button ac-green" id="clear">AC</div>
        <div className="container__box---minibox2--button">@</div>
        <div className="container__box---minibox2--button">%</div>
        <div className="container__box---minibox2--button" id="divide">/</div>
        <br />
        <div className="container__box---minibox2--button" id="seven" value="7">
          7
        </div>
        <div className="container__box---minibox2--button" id="eight" value="8">
          8
        </div>
        <div className="container__box---minibox2--button" id="nine" value="9">
          9
        </div>
        <div className="container__box---minibox2--button" id="multiply">*</div>
        <br />
        <div className="container__box---minibox2--button" id="four" value="4">
          4
        </div>
        <div className="container__box---minibox2--button" id="five" value="5">
          5
        </div>
        <div className="container__box---minibox2--button" id="six" value="6">
          6
        </div>
        <div className="container__box---minibox2--button" id="substract">-</div>
        <br />
        <div className="container__box---minibox2--button" id="one" value="1">
          1
        </div>
        <div className="container__box---minibox2--button" id="two" value="2">
          2
        </div>
        <div className="container__box---minibox2--button" id="three" value="3">
          3
        </div>
        <div className="container__box---minibox2--button" id="add">+</div>
        <br />
        <div className="container__box---minibox2--button">&</div>
        <div className="container__box---minibox2--button" id="zero">0</div>
        <div className="container__box---minibox2--button" id="decimal">.</div>
        <div className="container__box---minibox2--button" id="equals">=</div>
      </div>
    </>
  );
};

export default CalcBody;