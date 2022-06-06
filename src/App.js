import Sidebar from "./components/sidebar";
import Routescomponent from "./routes";
import useGlobalContext from "./context/globalcontext";
import Navbar from "./components/navbar";
import "./styles/app.css";
import Footer from "./components/footer";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function App() {
  const navigate = useNavigate();
  const { screenWidth } = useGlobalContext();

  useEffect(() => {
    navigate("/");
  }, []);

  return (
    <div className="App">
      {screenWidth <= 600 && <Navbar />}
      <Sidebar />
      <Routescomponent />
      <Footer />
    </div>
  );
}

export default App;
