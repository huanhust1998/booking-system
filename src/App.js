import "./App.css";
import { Suspense } from "react"
import RoutesConfig from "./routes"
import { BrowserRouter as Router } from "react-router-dom"
import FallbackLoading from "./components/fallback-loading";

function App() {
  return (
    <Router>
      <Suspense fallback={<FallbackLoading />}>
        <RoutesConfig  />
      </Suspense>
    </Router>
  );
}

export default App;
