import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./Layouts/Header/Header";
import Footer from "./Layouts/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
