import React, { useState } from "react";
import { Route, Routes } from "react-router-dom"; // Make sure you're using react-router-dom
import Navbar from "./componenets/Navbar";
import News from "./componenets/News";
import LoadingBar from "react-top-loading-bar";

function App() {
  const pageSize = 5;
  const apiKey = process.env.REACT_APP_NEWS_API;
  // const apiKey = "b0c3f1a2d4e94f5a8b7c9e4f3d6e4c5d"; // Replace with your actual API key
  const [progress, setProgress] = useState(0);
  const count = "us";

  return (
    <div>
      <Navbar />
      <LoadingBar color="#f11946" progress={progress} height={3} />
      <div className="conatainer">
        <Routes>
          <Route
            path="/"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="g"
                pageSize={pageSize}
                country={count}
                category="General"
              />
            }
          />
          <Route
            path="/Business"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="buisness"
                pageSize={pageSize}
                country={count}
                category="Business"
              />
            }
          />
          <Route
            path="/Entertainment"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="entertainment"
                pageSize={pageSize}
                country={count}
                category="Entertainment"
              />
            }
          />
          <Route
            path="/Sports"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="sports"
                pageSize={pageSize}
                country={count}
                category="Sports"
              />
            }
          />
          <Route
            path="/General"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="gen"
                pageSize={pageSize}
                country={count}
                category="General"
              />
            }
          />
          <Route
            path="/Technology"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="tech"
                pageSize={pageSize}
                country={count}
                category="Technology"
              />
            }
          />
          <Route
            path="/Health"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="health"
                pageSize={pageSize}
                country={count}
                category="Health"
              />
            }
          />
          <Route
            path="/Science"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="science"
                pageSize={pageSize}
                country={count}
                category="Science"
              />
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
