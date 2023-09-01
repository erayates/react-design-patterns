import React, { useState } from "react";

export const UncontrolledOnBoardingFlow = ({ children, onFinish }) => {
  const [onboardingData, setOnBoardingData] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = (stepData) => {
    const nextIndex = currentIndex + 1;
    const updatedData = {
      ...onboardingData,
      ...stepData,
    };

    if (nextIndex < children.length) {
      setCurrentIndex(nextIndex);
      return;
    }

    onFinish(updatedData);
    setOnBoardingData(updatedData);
  };

  const currentChild = React.Children.toArray(children)[currentIndex];
  if (React.isValidElement(currentChild)) {
    return React.cloneElement(currentChild, { goToNext });
  }

  return (
    <>
      {currentChild}
      <button>Prev</button>
      <button>Next</button>
    </>
  );
};
