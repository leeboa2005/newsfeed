import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "./GlobalStyle";
import UpButton from "./components/UpButton";
import Login from "./pages/Login";
import Main from "./pages/Main";
import MyPage from "./pages/MyPage";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <UpButton />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/mypage" element={<MyPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
