import './App.css';


import logo from './finzlogo.png';

function App() {
return (
<div className="main">
<div class="header">
<header className="App-header">
<img src = {logo} className="App-logo" alt="finzlogo" />

</header>
</div>
<div className="body">
<div className='body__up'></div>
<h1>Hi Admin</h1>

</div>
<div className="body__down">
<button>Account Request</button>
<button>Existing User</button>
<button>Support Request</button>
</div>
</div>

);

}

export default App;