import { useEffect,useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {

  const [theData,setTheData] = useState([])


  const myFunc = async () => {
    const res = await axios.get("https://api.spaceflightnewsapi.net/v3/articles?_limit=10");
    console.log(res.data);
    setTheData(res.data);
  }



  useEffect( ()=> {
     myFunc();
  },[])

  return (
    <div className="App">
      <ul>
      {theData.map((datum,indx) => (<li key={indx}>{datum.title}</li>))}

      </ul>
    </div>
  );
}

export default App;
