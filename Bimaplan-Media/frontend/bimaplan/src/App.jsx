// import { Home } from "./Component/Home";
import { Login } from "./Component/Login";
import { Register } from "./Component/Register";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path={"/"} element={<Login />}></Route>
        <Route path={"/register"} element={<Register />}></Route>
      </Routes>
    </div>
  );
}

export default App;
