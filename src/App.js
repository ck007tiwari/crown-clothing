import React from 'react';
import { Switch, Route } from "react-router-dom";
import HomePage from './pages/homepage/homepage.component';
import './App.css';
// import { TestPage, Start, Start1, Id} from "./pages/homepage/test.pages";

const HatsPage = () => (
  <div class="bg-primary text-white text-center">
    <h2>Hats Page </h2>
    <h3 class="badge bg-primary text-wrap">
      Here we have multiple Hats/ Caps for the sale
    </h3>
  </div>
);

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/hats" component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
