import { SplitScreen } from "./SplitScreen";
import { SplitScreenViaChildren } from "./SplitScreenViaChildren";

const LeftHandComponent = () => {
  return <h1 style={{ backgroundColor: "green" }}>Left</h1>;
};

const RightHandComponent = () => {
  return <p style={{ backgroundColor: "red" }}> Right</p>;
};

// MORE DEVELOPER FRIENDLY!

function App() {
  return (
    <>
      <SplitScreen
        left={LeftHandComponent}
        right={RightHandComponent}
        leftWeight={1}
        rightWeight={3}
      />
      <SplitScreenViaChildren leftWeight={3} rightWeight={1}>
        <LeftHandComponent />
        <RightHandComponent />
      </SplitScreenViaChildren>
    </>
  );
}

export default App;
