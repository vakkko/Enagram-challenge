import { ContentArea } from "./app.styled";
import MainContent from "./components/MainContent/MainContent";
import Sidebar from "./components/Sidebar/Sidebar";
import TopBar from "./components/TopBar/TopBar";

function App() {
  return (
    <>
      <Sidebar />
      <ContentArea>
        <TopBar />
        <MainContent />
      </ContentArea>
    </>
  );
}

export default App;
