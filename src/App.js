import "./App.css";
import { useState, useRef } from "react";

function App() {
  // const [name, setName] = useState('test');
  // const [surname, setSurname] = useState('');
  // const [count, setCount] = useState(0);

  // const user = useMemo(() => {
  //   console.log('ok');
  //   return {
  //     name: name,
  //     surname: surname
  //   }
  // }, [name, surname]);

  // const logName = useCallback(() => {
  //   console.log(name);

  // }, [name]);

  // useEffect(() => {
  //   logName(name);

  // }, [logName, name])

  // const handleClick = () => {
  //   setCount(count+1);
  // }

  const testRef = useRef(null);

  const changeTest = () => {
    testRef.current.value = Number(testRef.current.value) + 1;
  }
  console.log('render');

  return (
    <>
      {/*<button onClick={() => setCount(count + 1)}>{count}</button>
     <input type="text" value={name} onChange={e=>setName(e.target.value)}></input>
     <input type="text" value={surname} onChange={e=>setSurname(e.target.value)}></input>
     <p>{JSON.stringify(user)}</p> 
      <button onClick={() => setCount(count + 1)}>{count}</button> */}
      {/*       
      <h1>{count}</h1>
      <button onClick={handleClick}>+</button>
      <MyComponent count={count}/> */}
      <input type="text" ref={testRef}/>
      <button onClick={changeTest}>change test</button>


    </>
  );
}

export default App;
