import logo from './logo.svg';
import './App.css';
import {useState,useEffect} from 'react'
import axios from 'axios'

// live_iFJq1Xu3t2vP2r4YLxKy4IjrqRx0cjNR6pxd1KhC8Y731jCXyMYTB7487laJ3uHI

function App() {

  const [cats,setCats] = useState([])

  // runs side-effects
  // useEffect(()=>{
  //   axios.get('https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=live_iFJq1Xu3t2vP2r4YLxKy4IjrqRx0cjNR6pxd1KhC8Y731jCXyMYTB7487laJ3uHI')
  //   .then((res)=>{
  //     console.log(res)
  //     setCats(res.data)
  //   }).catch((err)=>{
  //     console.log(err)
  //   })
  // },[])

  useEffect(()=>{
    async function myCall(){
      try {
        const result = await axios.get('https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=live_iFJq1Xu3t2vP2r4YLxKy4IjrqRx0cjNR6pxd1KhC8Y731jCXyMYTB7487laJ3uHI')
        setCats(result.data)
      } catch(error){
        console.log(error)
      }
    }
    myCall()
  },[])

  const apiCall = async () => {
    try {
      const result = await axios.get('https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=live_iFJq1Xu3t2vP2r4YLxKy4IjrqRx0cjNR6pxd1KhC8Y731jCXyMYTB7487laJ3uHI')
      setCats(result.data)
    } catch(error){
      console.log(error)
    }
  }

  return (
    <div className="App">
      <button onClick={apiCall}>API Call</button>
      {
        cats.map((cat)=>(
          <div>
            <img src={cat.url} style={{height:"200px"}} />
          </div>
        ))
      }
    </div>
  );
}

export default App;
