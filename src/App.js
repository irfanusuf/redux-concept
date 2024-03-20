import React from "react";
import {useDispatch , useSelector} from 'react-redux'
import { decrement, increment } from "./redux/actions";
import Navbar from "./components/Navbar";


const App = () => {

  const dispatch = useDispatch()

  function handleIncrease (){
      dispatch (increment())
  }


  function  handleDecrease (){
    dispatch (decrement())

  }

  const x = useSelector(state => state.simple.x)


  return (


    <div>

      <Navbar/>
      Hello Redux redux is a state managemnet libarary
      <button onClick={handleIncrease}>increase</button>

      <span> {x}  </span>
      <button onClick={handleDecrease}>decrease</button>
    </div>
  );
};

export default App;
