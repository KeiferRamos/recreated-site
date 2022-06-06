import Sidebar from "./components/sidebar";
import Routescomponent from "./routes";
import useGlobalContext from "./context/globalcontext";
import Navbar from "./components/navbar";
import "./styles/app.css";
import Footer from "./components/footer";

function App() {
  const { screenWidth } = useGlobalContext();
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
