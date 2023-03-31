
import './App.css';
import Home from './Home';
// import Bot from './Bot';

function App() {
  return (
    <div className="App">
      <h1>Hello Amarnath, Welcome to React Framework</h1>
      <Home/>
      <Aspire></Aspire>
      <bottle></bottle>
      <Bot></Bot>
    </div>
  );
}
function Aspire(){
  return <div>"Happy now</div>
}
export default App;
