import { useState } from "react";
import { ContentArea } from "./app.styled";
import MainContent from "./components/MainContent/MainContent";
import Sidebar from "./components/Sidebar/Sidebar";
import TopBar from "./components/TopBar/TopBar";

function App() {
  const [firstValue, setFirstValue] = useState<string>("");
  const [secondValue, setSecondValue] = useState<string>("");
  const [resetLetters, setResetLetters] = useState<boolean>(false);

  return (
    <>
      <Sidebar />
      <ContentArea>
        <TopBar
          resetLetters={resetLetters}
          setResetLetters={setResetLetters}
          setFirstValue={setFirstValue}
          setSecondValue={setSecondValue}
        />
        <MainContent
          firstValue={firstValue}
          secondValue={secondValue}
          setFirstValue={setFirstValue}
          setSecondValue={setSecondValue}
          resetLetters={resetLetters}
          setResetLetters={setResetLetters}
        />
      </ContentArea>
    </>
  );
}

export default App;
