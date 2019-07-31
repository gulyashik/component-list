import React from 'react';
import './index.css';
import MainComponent from './MainComponent'
class App extends React.Component {
  renderMainComponent(){
    return <MainComponent></MainComponent>
  }
  render() {
    return (
      <div className="wrapper">
        {this.renderMainComponent()}
      
      </div>
    );
  }
}
export default App;
