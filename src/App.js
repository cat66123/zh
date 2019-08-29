import React, { Component } from 'react';
import store from './store';
import { Provider } from 'react-redux';
import Login from './pages/login/Login';
import { GlobalStyled } from './style';
import Header from '../src/common/header/Header';
import { GlobalStyleFont } from './statics/iconfont/iconfont';
import Home from '../src/pages/home/Home';

class App extends Component {
  render() {
    return (
      <>
        <GlobalStyled />
        <GlobalStyleFont />
        <Provider store={store}>
          <>
            <main
              style={{
                height: '100vh',
                width: '100vw',
                overflow: 'auto',
                background: '#f6f6f6',
              }}
            >
              <Header />
              <Home />
            </main>
            {/* <Login /> */}
          </>
        </Provider>
      </>
    );
  }
}

export default App;
