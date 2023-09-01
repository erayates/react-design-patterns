import { ControlledForm } from "./ControlledForm";
import { ControlledModal } from "./ControlledModal";
import { UncontrolledForm } from "./UncontrolledForm";
import { useState } from "react";
import { UncontrolledModal } from "./UncontrolledModal";
import { UncontrolledOnBoardingFlow } from "./UncontrolledBoardingFlow";
import { ControlledOnboardingFlow } from "./ControlledOnboardingFlow";

const StepOne = ({ goToNext }) => (
  <>
    <h1>Step 1</h1>
    <button onClick={() => goToNext({ name: "John Doe" })}>Next</button>
  </>
);

const StepTwo = ({ goToNext }) => (
  <>
    <h1>Step 2</h1>
    <button onClick={() => goToNext({ age: 1000 })}>Next</button>
  </>
);

const StepThree = ({ goToNext }) => (
  <>
    <h1>Step 3</h1>
    <p>Congratulations! You qualify for our senior discount.</p>
    <button onClick={() => goToNext({})}>Next</button>
  </>
);

function App() {
  const [shouldShow, setShouldShow] = useState(false);

  const [onboardingData, setOnBoardingData] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);

  const onNext = (stepData) => {
    setOnBoardingData({ ...onboardingData, ...stepData });
    setCurrentIndex(currentIndex + 1);
  };

  return (
    <>
      <h1>Uncontrolled Form</h1>
      <UncontrolledForm />

      <hr></hr>

      <h1>Controlled Form</h1>
      <ControlledForm />

      <hr></hr>

      <h1>Uncontrolled Modal</h1>
      <UncontrolledModal />

      <hr></hr>

      <h1>Controlled Modal</h1>
      <ControlledModal
        shouldShow={shouldShow}
        onRequestClose={() => setShouldShow(false)}
      >
        <button onClick={() => setShouldShow((prev) => !prev)}>
          {shouldShow ? "Hide Modal" : "Show Modal"}
        </button>
      </ControlledModal>

      <hr></hr>

      <h1>Uncontrolled Onboarding Flow</h1>
      <UncontrolledOnBoardingFlow
        onFinish={(data) => {
          console.log(data);
          alert("Onboarding completed.");
        }}
      >
        <StepOne />
        <StepTwo />
        <StepThree />
      </UncontrolledOnBoardingFlow>

      <hr></hr>

      <h1>Controlled Onboarding Flow</h1>
      <ControlledOnboardingFlow currentIndex={currentIndex} onNext={onNext}>
        <StepOne />
        <StepTwo />
        <StepThree />
      </ControlledOnboardingFlow>
    </>
  );
}
export default App;
