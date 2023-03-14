import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Admission from "./pages/Admission";
import Home from "./pages/Home";
import SignUpForm from "./pages/SignUpForm";
import Contact from "./pages/Contact";
import Department from "./pages/Department";
import Navigation from "./components/Navigation";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigation></Navigation>}>
          <Route index element={<Home></Home>}></Route>
          <Route path="signIn" element={<SignUpForm></SignUpForm>}></Route>
          <Route path="About" element={<About></About>}></Route>
          <Route path="Admission" element={<Admission></Admission>}></Route>
          <Route path="Contact" element={<Contact></Contact>}></Route>
          <Route path="Department" element={<Department></Department>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
