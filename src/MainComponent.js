import React from 'react';
import './index.css';
import List from './List';

//ReactDOM.render(<App />, document.getElementById('root'));
class MainComponent extends React.Component {
    renderList(i){
      return <List value = {i}/>
    }
    render() {
      return (
        <div className="main-list">
          <h1>Список покупок для </h1>
          <ul className = "list">
              {this.renderList('Instagram')}
              {this.renderList('WhatsApp')}
              {this.renderList('Instagram')}

          </ul>
          {/* <ul>
            <li>Instagram</li>
            <li>WhatsApp</li>
            <li>Oculus</li>
          </ul> */}
        </div>
      );
    }
}
export default MainComponent;