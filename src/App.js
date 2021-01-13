import './App.scss';
import Header from './Header/Header';
import Logo from './logo/Logo';
import Body from './Body/Body';
import { Button } from './Button/Button';


function App() {
  return (
    <div className="App">
      <Logo />
      <Button
      type="button"
      buttonStyle="btn--secondary--solid"
      buttonSize="btn--large">Test</Button>
      <Header />
      <Body />
    </div>
  );
}

export default App;
