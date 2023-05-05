import React, { Component } from "react";
import { Route, Routes } from "react-router";
import Navbar from "./componenets/Navbar";
import News from "./componenets/News";
import LoadingBar from "react-top-loading-bar";
export class App extends Component {
  pageSize = 15;
  apiKey = process.env.REACT_APP_NEWS_API;
  state = {
    progress: 0,
  };
  setProgress = (progress) => {
    this.setState({ progress: progress });
  };
  render() {
    return (
      <div>
        <Navbar />
        <LoadingBar color="#f11946" progress={this.state.progress} height={3} />
        <div className="conatainer">
          <Routes>
            <Route
              path="/"
              element={
                <News
                  setProgress={this.setProgress}
                  apiKey={this.apiKey}
                  key="g"
                  pageSize={this.page}
                  country="in"
                  category="General"
                />
              }
            />
            <Route
              path="/Business"
              element={
                <News
                  setProgress={this.setProgress}
                  apiKey={this.apiKey}
                  key="buisness"
                  pageSize={this.page}
                  country="in"
                  category="Business"
                />
              }
            />
            <Route
              path="/Entertainment"
              element={
                <News
                  setProgress={this.setProgress}
                  apiKey={this.apiKey}
                  key="enter"
                  pageSize={this.page}
                  country="in"
                  category="Entertainment"
                />
              }
            />
            <Route
              path="/general"
              element={
                <News
                  setProgress={this.setProgress}
                  apiKey={this.apiKey}
                  key="gen"
                  pageSize={this.page}
                  country="in"
                  category="General"
                />
              }
            />
            <Route
              path="/health"
              element={
                <News
                  setProgress={this.setProgress}
                  apiKey={this.apiKey}
                  key="heal"
                  pageSize={this.page}
                  country="in"
                  category="Health"
                />
              }
            />
            <Route
              path="/science"
              element={
                <News
                  setProgress={this.setProgress}
                  apiKey={this.apiKey}
                  key="sci"
                  pageSize={this.page}
                  country="in"
                  category="Science"
                />
              }
            />
            <Route
              path="/sports"
              element={
                <News
                  setProgress={this.setProgress}
                  apiKey={this.apiKey}
                  key="sports"
                  pageSize={this.page}
                  country="in"
                  category="Sports"
                />
              }
            />
            <Route
              path="/technology"
              element={
                <News
                  setProgress={this.setProgress}
                  apiKey={this.apiKey}
                  key="tech"
                  pageSize={this.page}
                  country="in"
                  category="Technology"
                />
              }
            />
          </Routes>
        </div>
      </div>
    );
  }
}

export default App;
