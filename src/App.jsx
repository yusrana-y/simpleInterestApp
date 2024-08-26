import { useState } from 'react';
import { Button, Stack, TextField } from '@mui/material';
import './App.css'

function App() {
  const [principle, setPrinciple] = useState(0)
  const [rate, setRate] = useState(0)
  const [year, setYear] = useState(0)
  const [interest, setInterest] = useState(0)

  const [isPrincipleInvalid,setIsPrincipleInvalid] = useState(false)
  const [isRateInvalid,setIsRateInvalid] = useState(false)
  const [isYearInvalid,setIsYearInvalid] = useState(false)
  


  const handleCalculate = (e) => {
    e.preventDefault()
    if(principle&&rate&&year)
    {
      setInterest(principle*rate*year/100)
    }
    else
    {
      alert("please fill the form completely")
    }
  }

  const validateInput = (InputTag) => {
    const {name,value} = InputTag
    console.log(name,value);
    // console.log(value.match(/^[0-9]*.?[0-9]+$/));
    console.log(!!value.match(/^\d*\.?\d+$/));
    if(name=='principle')
    {
      setPrinciple(value)
      !!value.match(/^\d*\.?\d+$/)?setIsPrincipleInvalid(false):setIsPrincipleInvalid(true)
    }

    else if(name=='rate')
    {
      setRate(value)
      !!value.match(/^\d*\.?\d+$/)?setIsRateInvalid(false):setIsRateInvalid(true)
    }

    else if(name=='year')
    {
      setYear(value)
      !!value.match(/^\d*\.?\d+$/)?setIsYearInvalid(false):setIsYearInvalid(true)
    }
  }

  const handleReset = () => {
    setInterest(0)
    setPrinciple(0)
    setRate(0)
    setYear(0)

    setIsPrincipleInvalid(false)
    setIsRateInvalid(false)
    setIsYearInvalid(false)
  }

  return (
    <div style={{ minHeight: '100vh', width: '100%' }} className='d-flex justify-content-center align-items-center bg-dark'>
      <div style={{ width: '600px' }} className='bg-light p-5 rounded'>
        <h3 className='text-center'>Simple Interest Calculator</h3>
        <p className='text-center'>Calculate your simple interest easily </p>
        <div className=' d-flex flex-column justify-content-center align-items-center bg-warning rounded shadow p-3'>
          <h1>₹ {interest}</h1>
          <p className='fw-bolder'>Total Simple Interest</p>
        </div>
        <form className='mt-5'>
          <div className='mb-2'>
            <TextField name="principle" value={principle||""} id="outlined-basic" className='w-100 mb-2' label="Principle Amount" variant="outlined" onChange={(e)=>{
              validateInput(e.target)
            }}/>
          </div>
          { isPrincipleInvalid &&
            <div className="fw-bolder text-danger mb-3">Invalid Principle Amount</div>}
          <div className='mb-2'>
            <TextField name="rate" value={rate||""} id="outlined-basic2" className='w-100' label="Rate of Interest (p.a) %" variant="outlined" onChange={(e)=>{validateInput(e.target)}} />
          </div>
          { isRateInvalid &&
            <div className="fw-bolder text-danger mb-3">Invalid Rate</div>}
          <div className='mb-2'>
            <TextField  name="year" value={year||""} id="outlined-basic3" className='w-100' label="Year (yr)" variant="outlined" onChange={(e)=>validateInput(e.target)} />
          </div>
          { isYearInvalid &&
            <div className="fw-bolder text-danger mb-3">Invalid Year</div>}
          <Stack direction="row" spacing={2}>
          <Button disabled={isYearInvalid||isRateInvalid||isPrincipleInvalid} type='submit' style={{width:'50%',height:'60px'}} className='bg-success' variant="contained" onClick={handleCalculate}>Calculate</Button>
          <Button style={{width:'50%',height:'60px'}} variant="outlined" onClick={handleReset}>Reset</Button>
          </Stack>
        </form>

      </div>
    </div>


  )
}

export default App
