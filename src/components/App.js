import React from "react";
import './../styles/App.css';

const App = () => {
  const [username, setUserName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [dataList, setDataList] = React.useState(false);

  function handleLogin() {
    setDataList('User logged in!');
  }

  return (
    <div>
      <input
        name='username'
        type='text'
        onChange={(e) => setUserName(e.target.value)}
      />{" "}
      <br></br>
      <input
        name='email'
        type='email'
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={handleLogin}>Login </button>

      {dataList && (
        <p> {dataList}</p>
      )}
    </div>
  )
}

export default App;
