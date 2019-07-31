import React from 'react';
import './index.css';

//ReactDOM.render(<App />, document.getElementById('root'));
class List extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          list : props.value
         
        };
      }
    
      render() {
        const { list } = this.state;
          return (
            
                <ul className = "list">
                   {list.map((option,opt_ind)=> (
                <li key={ opt_ind}>
                   {option} {opt_ind+1}
                </li>
                 ))}
                </ul>   
             
          );
      }

}
export default List;