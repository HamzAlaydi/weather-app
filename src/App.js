import { useRecoilState } from "recoil";
import FetchDataFromAPI from "./components/FetchDataFromAPI";
import Form from "./components/Form";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/fetch" element={<FetchDataFromAPI />} />
        </Routes>
      </BrowserRouter> */}
      <Form />
    </div>
  );
}

export default App;
