import { ContentArea } from "./app.styled";
import Sidebar from "./components/Sidebar/Sidebar";
import TopBar from "./components/TopBar/TopBar";

function App() {
  return (
    <>
      <Sidebar />
      <ContentArea>
        <TopBar />
      </ContentArea>
    </>
  );
}

export default App;
