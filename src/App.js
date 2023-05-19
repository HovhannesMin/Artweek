import "./App.css";
import { useState, useMemo, useCallback, useEffect } from "react";

function App() {
  const [name, setName] = useState('test');
  //const [surname, setSurname] = useState('');
  const [count, setCount] = useState(0);

  // const user = useMemo(() => {
  //   console.log('ok');
  //   return {
  //     name: name,
  //     surname: surname
  //   }
  // }, [name, surname]);

  const logName = useCallback(() => {
    console.log(name);

  }, [name]);

  useEffect(() => {
    logName(name);

  }, [logName, name])

  return (
    <>
      {/* <button onClick={() => setCount(count + 1)}>{count}</button>
     <input type="text" value={name} onChange={e=>setName(e.target.value)}></input>
     <input type="text" value={surname} onChange={e=>setSurname(e.target.value)}></input>
     <p>{JSON.stringify(user)}</p> */}
      <button onClick={() => setCount(count + 1)}>{count}</button>

    </>
  );
}

export default App;
