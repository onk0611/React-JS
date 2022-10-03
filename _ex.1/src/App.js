import './App.css';
import CurrentDate from './conponents/Date/CurrentDate';
import UserUseState from './conponents/User/UserUseState';

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CurrentDate />
        <UserUseState />
      </header>
    </div>
  );
}
