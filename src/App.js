import "./App.css";
import Footer from "./Components/Footer";
import Main from "./Components/Main";
import Navbar from "./Components/Navbar";
import useLocalStorage from "use-local-storage";

function App() {
  const [isDark, setIsDark] = useLocalStorage("isDark", true);
  return (
    <>
      <div data-bs-theme={isDark ? "dark" : "light"}>
        <Navbar />

        <div style={{ minHeight: 100 + "vh" }}>
          <Main />
        </div>

        <Footer />
      </div>
    </>
  );
}

export default App;
