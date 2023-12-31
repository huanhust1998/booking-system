import { Suspense } from "react";
import RoutesConfig from "./routes";
import { BrowserRouter as Router } from "react-router-dom";
import FallbackLoading from "./components/fallback-loading";

function App() {
  return (
    <div className="w-screen h-screen p-10">
      <Router>
        <Suspense fallback={<FallbackLoading />}>
          <RoutesConfig />
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
