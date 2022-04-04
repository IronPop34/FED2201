import './App.css';
import Background from './components/background/Background';
import StartMenu from './components/wrapper/StartMenu';
import Button from './components/button/Button'

const App = () => {
   return (
      <div className='main-display'>      
      <Background />
      <StartMenu /> 
      <Button />     
      </div>

      
   );
};
export default App;
