import React, { Component } from 'react';
import Layout from "./containers/Layout/Layout";
import {Route, Switch} from "react-router-dom";
import Register from "./containers/Register/Register";
import Login from "./containers/Login/Login";
import Items from "./containers/Items/Items";
import Categories from "./containers/Categories/Categories";
import NewItem from "./components/NewItem/NewItem";

class App extends Component {
  render() {
    return (
      <Layout>
          <Switch>
              <Route path="/" exact component={Items}/>
              <Route path="/categories" exact component={Categories}/>
              <Route path="/new" exact component={NewItem}/>
              <Route path="/register" exact component={Register}/>
              <Route path="/login" exact component={Login}/>
          </Switch>
      </Layout>
    );
  }
}

export default App;
