/* eslint-disable */
import { useCallback, useState } from "react";
import { BackToHome } from "../../App";
import ActionBar from "./ActionBar";
import Messges from "./Messages.jsx";

const ChallengeThree = () => {
  const [state, setState] = useState(0);

  // YOU are not allowed to place this in the render function directly
  // as a jsx or change it's intial value
  // const [componentMap] = useState({
  //   0: <Messges count={state} />,
  //   1: (
  //     <>
  //       <span>{state}</span>
  //       <Messges count={state} />
  //     </>
  //   ),
  //   2: (
  //     <>
  //       <span>{state}</span>
  //       <Messges count={state} />
  //     </>
  //   ),
  //   3: <Messges count={state} />,
  // });

  const handleNextClick = () => {
   if(state < 3){
    setState(state + 1);
   }
  }

  const handlePreviousClick = () => {

   if(state > 0){
    setState(state - 1);
   }
  }

  return (
    <>
      <BackToHome />
      <h1>{state}</h1>
      <h3>
        Your Task is to fix the code with
        <span className="warning"> Minimum Changes </span>
        so it can go from
        <code>"Just Start And Just Do It"</code>
        to <code>"You Just Finshed"</code>while showing the state number with
        the 2 middle messages using the <code>Next</code> and
        <code>Previous</code> Buttons, going thorugh the proper flow of messages
        which is:
      </h3>
      <p>
        <code>"Just Start And Just Do It "</code>,
      </p>
      <p>
        <span>1</span>
        <code>"Keep Going"</code>,
      </p>
      <p>
        <span>2</span>
        <code>"Almost There"</code>,
      </p>
      <p>
        <code>"You Just Finshed"</code>,
      </p>

      <br />
      <h3>
        {" "}
        Each click should show one line only and when you click the msg should
        change with the right number{" "}
        <code>(we don't need the four msgs stacked under each other) </code>
      </h3>
      <h3>
        <span className="warning"> Note: </span>
        Minimum changes means that you should change one file ONLY and just add
        something or remove something no major re location of logic or changes
        between components , the goal is to find the bug in this very simple and
        clear code not make the code work using other ways
      </h3>
      {/* <span> {componentMap[state]}</span> */}

<span> <Messges count={state} /></span>

      <ActionBar
        onNextClick={handleNextClick}
        onPreviousClick={handlePreviousClick}
      />
      <br />
    </>
  );
};

export default ChallengeThree;
