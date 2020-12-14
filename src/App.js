import Routes from "./Routes";
import { useLocation } from "react-router-dom";

// STYLES
import GlobalStyle from "./global";

const App = () => {
  const { pathname } = useLocation();
  return (
    <>
      <GlobalStyle
        overflow={
          pathname === "/" || pathname === "/register" ? "hidden" : "auto"
        }
      />
      <Routes />
    </>
  );
};

export default App;
