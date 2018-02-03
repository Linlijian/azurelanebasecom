import React, { Component } from 'react';
import Header from './component/Header';
import Footer from './component/Footer';
import Content from './component/Content';
import Menu from './component/Menu';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Menu />
        <Content />
        <Footer />
      </div>
    );
  }
}

export default App;
