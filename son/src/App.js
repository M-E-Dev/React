import React, { useState, useEffect, useMemo, useCallback } from "react";
import Header from "./components/Header";
import Users from "./components/Users";
import fs from "./assets/fs.png";
import aws from "./assets/aws.png";
import axios from "axios";
import UserItem from "./components/UserItem";

function App() {
  const [counter, setCounter] = useState(0);
  const [img, setImg] = useState();
  const [users, setUsers] = useState([]);
  const [text, setText] = useState("");
  console.log(text);
  const [search, setSearch] = useState("");
  console.log(search);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data));
  }, []);

  // React.memo ile app render oluyo ama header olmuyo. ilginç...
  console.log("App Rendered");

  const handleText = (e) => {
    setText(e.target.value);
  };
  const handleSearch = () => {
    setSearch(text);
  };
  const resetSearch = () => {
    setSearch("");
  };


// useMemo değer tutar, useCallback fonksiyon tutar

  const filteredUsers = useMemo(() =>
    users.filter((user) => {
      return user.name.toLowerCase().includes(search.toLowerCase());
    }),[search, users]
  );

  const add = useCallback(() => {
    setUsers([...users, {id: users.length + 1, name: "Harry Potter"}])
  },[users])

  return (
    <div className="App">
      <button onClick={() => setImg(fs)}>FS</button>
      <button onClick={() => setImg(aws)}>AWS</button>
      <button onClick={() => setImg("")}>RESET</button>
      <Header img={img} />
      <p>Counter: {counter}</p>
      <button onClick={() => setCounter(counter + 1)}>Increase</button>
      <button onClick={() => setCounter(0)}>Reset</button>
      <input type="text" value={text} onChange={handleText} />
      <button onClick={handleSearch}>Search</button>
      <button onClick={resetSearch}>Reset</button>
      <Users students={filteredUsers} add={add}/>
    </div>
  );
}
export default App;

// import UseRefComponent from "./components/UseRefComponent";

// import React, {
//   useState,
//   useEffect,
//   useMemo,
//   useCallback,
//   useRef,
// } from "react";
// import Header from "./components/Header";
// import Users from "./components/Users";
// import fs from "./assets/fs.png";
// import aws from "./assets/aws.png";
// import axios from "axios";

// function App() {
//   const inputRef = useRef(null);
//   const [count, setCount] = useState(0);
//   const [img, setImg] = useState(null);

//   const [users, setUsers] = useState([]);
//   // console.log('users:', users)
//   const [text, setText] = useState("");
//   // console.log('text: ', text)
//   const [search, setSearch] = useState("");
//   // console.log('search:', search)

//   const increase = () => {
//     setCount(count+1);
//   }

//   useEffect(() => {
//     axios.get("https://jsonplaceholder.typicode.com/users")
//     .then(res => setUsers(res.data));
//   }, [])

//   const handleSearch = () => {
//     setSearch(text);
//   }

//   const filteredUsers = useMemo(() => users.filter((user) => {
//     return user.name.toLowerCase().includes(search.toLowerCase())
//   }), [users, search])

//   const addUser = useCallback(() => {
//     setUsers([...users, {id: users.length + 1, name: `Clarusway-${users.length-9}` }])
//   }, [users])

//   return (
//     <div className="App">
//       {/* <UseRefComponent/> */}
//       {/* <Header img={img} />
//       <p>Count: {count}</p>
//       <button onClick={increase}>Increase</button>
//       <button onClick={() => setImg(fs)}>FS</button>
//       <button onClick={() => setImg(aws)}>AWS</button> */}
//       <br />
//       <input ref={inputRef} onChange={() => setText(inputRef.current.value)} />
//       <button onClick={handleSearch}>Search User</button>
//       <Users users={filteredUsers} add={addUser}/>

//     </div>
//   );
// }

// export default App;
