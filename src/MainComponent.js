import React from 'react';
import './index.css';
import List from './List';

//ReactDOM.render(<App />, document.getElementById('root'));
class MainComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      token: []
    };
  }

  componentDidMount() {
    fetch("http://localhost:3000/token")
      .then(res => 
          res.json()
        )
      .then(
        (result) => {
            
          this.setState({
            isLoaded: true,
            token: result.token
          });
        },
      
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }
  renderList(options){
    return <List  value = {options}></List>
  }

  render() {
    const { error, isLoaded, token } = this.state;
    if (error) {
      return <div>Ошибка: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Загрузка...</div>;
    } else {
      return (
        token.map((tok,ind) => (
         
          <div className ="main-component" key = {ind}>
            <h2 className = "header">{tok.header}</h2>
            {this.renderList(tok.options)}
            <div className ="text">
              {tok.text}
            </div>
        </div>
        
        ))
      );
    }
  }

}
export default MainComponent;