import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const nayoks = ['Anwar','Jafor','Alomgir','Salman','Bappy'];
  const products = [
    {name:'Photoshop',price:'$90.99'},
    {name:'Illustrator',price:'$60.99'},
    {name:'PDF Reader',price:'$6.99'},
    {name:'Premiere EI',price:'$249.99'},

  ];

  // var person = {
  //   name: "Dr. Mahfuz",
  //   job: "Singer"
  // }
  // var person2 = {
  //   name: "Eva Rahman",
  //   job: "Kokil konti"
  // }
  // var style = {
  //   color: 'red',
  //   backgroundColor: 'yellow'
  // }
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit done <code>src/App.js</code> and save to reload.
        </p>
        <h1 style={style}>My heading: {person.name+ " " + person.job}</h1>
        <h2 style={{backgroundColor:'cyan', color:'yellow'}}>My heading: {person2.name+ " " + person2.job}</h2>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}

        <p>React Person</p>
        <Counter></Counter>
        <Users></Users>
        <ul>
          {/* dynamic */}
          {
            nayoks.map(nayok => <li>{nayok}</li>)
          }
          {
            products.map(product => <li>{product.name}</li>)
          }

          {/* static */}
          {/* <li>{nayoks[0]}</li>
          <li>{nayoks[1]}</li>
          <li>{nayoks[2]}</li>
          <li>{nayoks[3]}</li> */}
        </ul>
        <Person name={nayoks[0]} nayika="Sabnur"></Person>
        <Person name="Rubel Nayok" nayika="Moushumi"></Person>
        <Person name="Sakib" nayika="Shabana"></Person>
        <Person name="Elias" nayika="Bobita"></Person>
        {
          products.map(pd => <Product product={pd}></Product>)
        }
        {/* <Product product={products[0]}></Product>
        <Product product={products[1]}></Product>
        <Product product={products[2]}></Product> */}
        
      </header>
    </div>
  );
}

function Counter(){
  const[count,setCount]=useState(0);
  // const handleIncrease =()=>{
  //   const newCount = count +1;
  //   setCount(newCount);
  // }
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={()=>setCount(count-1)}>Decrease</button>
      <button onClick={()=>setCount(count+1)}>Increase</button>
    </div>
  );
}
function Users(){
  const [users, setUsers]=useState([]);
  // data load korar jonno useEffect() use korbo
  useEffect(()=>{ 
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res =>res.json())
    .then(data => setUsers(data));
  },[])
  return(
    <div>
      <h3>Dynamic Users: {users.length}</h3>
      <ul>
        {
          users.map(user => <li>{user.name}</li>)
        }
      </ul>
    </div>
  )
}
function Product(props){
  const productStyle = {
    border:'1px solid gray',
    borderRadius:'5px',
    backgroundColor:'lightgray',
    height:'200px',
    width:'200px',
    float:'left',
    margin:'10px'
  }
  const {name, price}= props.product;
  return (
    <div style={productStyle}>
      <h2> {name}</h2>
      <h5> {price}</h5>
      <button>Buy now</button>
    </div>
  )
}

// similer in petarn differnt in data 
function Person(props){
  return (
    <div style={{border: '2px solid red', margin:'10px',padding:'10px',width:'400px'}}>
      <h1>Name: {props.name}</h1>
      <h1>Name: {props.nayika}</h1>
      <h3>Hero of the Year</h3>
    </div>
  );
}


export default App;
