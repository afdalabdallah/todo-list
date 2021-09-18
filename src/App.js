import TodoList from './components/TodoList';
import './App.css';

import { ChakraProvider } from '@chakra-ui/react';
import Navbar from './components/Navbar'

function App() {
  
  return (
    <div>
      <Navbar />
      <div className="App">
        <TodoList/>
      </div>
    </div>
  );
}

export default App;
