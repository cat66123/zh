import React,{Component} from 'react';
import store from "./store";
import {Provider} from "react-redux";
import Login from "./pages/login/Login";
import {GlobalStyled} from "./style";
import Header from "../src/common/header/Header";
import {GlobalStyleFont} from "./statics/iconfont/iconfont";
import Home from "../src/pages/home/Home";

class App extends Component{
  render(){
    return (
      <div>
        <GlobalStyled/>
        <GlobalStyleFont/>
        <Provider store={store}>
          {/* <Header />
          <Home /> */}
          <Login/>
        </Provider>
      </div>
    )
  }
}

export default App;
