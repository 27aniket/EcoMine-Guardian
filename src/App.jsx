/**
 * Main App Component
 * Sets up routing and layout structure
 */

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navigation, Footer } from "./components";
import { routes } from "./routes";
import "./index.css";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <main className="grow">
          <Routes>
            {routes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={<route.element />}
              />
            ))}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
