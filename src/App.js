import  {Component} from 'react'
// import logo from './logo.svg';

import {CardList} from './components/card-list/card-list.component'
import {SearchBox} from './components/search-box/search-box.component'

import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a> 
//       </header>
//     </div>
//   );
// }

class App extends Component {

    constructor(){
      super();
      this.state={
        string :"Hello React",
        superheros:[
      
        ],
        searchField:""
      };
    }

    componentDidMount(){
      fetch("https://jsonplaceholder.typicode.com/users/")
      .then(responce => responce.json())
      .then(users => this.setState({superheros:users}))
    }

    handleChange = e => {this.setState({searchField:e.target.value})};

    // / arrow function bind this 
    // e => this.setState({searchField:e.target.value},()=>console.log(e.target.value))

    render() {

        const {superheros,searchField} = this.state

        const filerHeros = superheros.filter(hero => 

          hero.name.toLowerCase().includes(searchField.toLowerCase()))
        return (
            <div className="App">
             <h1>Monster Rolodex</h1>
              <SearchBox 
                placeholder={"Serach heros"}
                handleChange={this.handleChange}
              />            

              <CardList superheros={filerHeros} /> 

        </div>
        );
    }
}
export default App;

// SyntheticBaseEvent  -   onChange={e => console.log(e)}

// this.setStart is async


// <CardList name="Tej",city="DMT"> name and city used as prop
// <CardList> <p>This is children<p></CardList> // p is children of prop
 // <CardList superheros={this.state.superheros}> 
              
            // </CardList >