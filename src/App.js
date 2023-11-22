
import './App.css';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useState } from 'react';


function App() {
  //js code
  const[Principle,setPrinciple]=useState(0);
  const[Interest,setInterest]=useState(0);
  const[Rate,setRate]=useState(0);
  const[Year,setYear]=useState(0);

  const handleSubmit=(e)=>{
    e.preventDefault()
    console.log("===Principle Amount===");
    console.log(Principle);
    console.log("===Rate of interest===");
    console.log(Rate);
    console.log("===Year===");
    console.log(Year);
    let result=Principle*Year*Rate/100;
    console.log(result);
    setInterest(result);
    console.log(Interest);
  }
  // function handleSubmit(e){
  //   e.preventDefault()
  //     console.log("===Principle Amount===");
  //     console.log(Principle);
  //     console.log("===Rate of interest===");
  //     console.log(Rate);
  //     console.log("===Year===");
  //     console.log(Year);
  // }
  function clearValues(){
     setPrinciple(0);
     setInterest(0)
     setRate(0);
     setYear(0);
  }
  return (
    <div className='d-flex justify-content-center align-items-center w-100 mt-5' style={{ height:"85vh" }}>
      <div style={{ width: "500px" }} className='bg-light p-5 rounded'>
        <h3>Simple Interest</h3>
        <p>Calculate your simple interest easily</p>
        <div style={{ height: "150px" }} className='flex-column mt-5 bg-warning d-flex justify-content-center align-items-center w-100 rounded'>
          <h1>{'\u20B9'}{Interest}</h1>
          <p>Total Simple Interest</p>
        </div>
        <form action="" className='mt-5' onSubmit={(e)=>handleSubmit(e)}>

          <div className='mb-3'>
            <TextField id="outlined-basic" label="Principle Amount" variant="outlined" className='w-100' value={Principle} onChange={(e)=>setPrinciple(e.target.value)} />
          </div>

          <div className=''>
            <TextField id="outlined-basic" label="Rate of Interest (pa)%" variant="outlined" className='w-100' value={Rate} onChange={(e)=>setRate(e.target.value)} />
          </div>

          <div className='mt-3'>
            <TextField id="outlined-basic" label="Year(Yr)" variant="outlined" className='w-100' value={Year} onChange={(e)=>setYear(e.target.value)} />
          </div>

          <div className='mt-5'>
            <Stack direction="row" spacing={2}>
            <Button style={{height:"50px", width:"200px"}} variant="contained" className='bg-success border' type='submit'>CALCULATE</Button>
            <Button style={{height:"50px", width:"200px"}} variant="contained" onClick={clearValues} >RESET</Button>
            </Stack>
          </div>

        </form>
      </div>
    </div>
  );
}

export default App;
