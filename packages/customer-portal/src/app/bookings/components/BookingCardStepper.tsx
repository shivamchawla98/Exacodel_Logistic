import React from "react";
import { Stepper, Step, Button } from "@material-tailwind/react";
import { FaAnchor, FaShip } from "react-icons/fa";

export default function BookingStepper({activeStep,setActiveStep}: any) {
  const [isLastStep, setIsLastStep] = React.useState(false);
  const [isFirstStep, setIsFirstStep] = React.useState(false);


  return (
    <div className="w-full py-4 px-8 flex justify-center">
      <FaShip className="text-sky-400 mb-4 mr-2" size={25}/>
      <Stepper
        activeStep={activeStep}
        isLastStep={(value) => setIsLastStep(value)}
        isFirstStep={(value) => setIsFirstStep(value)}
      >
        <Step className="h-4 w-4" >
          <FaAnchor  />
        </Step>
        <Step className="h-4 w-4" onClick={() => setActiveStep(1)} >
        <FaAnchor />
        </Step>
        <Step className="h-4 w-4" onClick={() => setActiveStep(2)} />
        <Step className="h-4 w-4" onClick={() => setActiveStep(3)} />
      </Stepper>
      <FaShip className="text-sky-400 mb-4 ml-2" size={25}/>

    </div>
  );
}
