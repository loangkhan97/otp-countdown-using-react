import React, { useEffect, useState} from 'react';
import './App.css';

function App() {
  // State variables to managee OTP input, minutes, and seconds
  const [otp, setOtp] = useState("");
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(10);
 
  // Function to resend OTP
  const resendOTP = () => {
    setMinutes(0);
    setSeconds(10);
  };



  

  // useEffect hook to handle the countdown timer
  useEffect(() => {
    const Interval = setInterval(() => {
      if(seconds > 0) {
        setSeconds(seconds - 1);
      }

      if(seconds === 0) {
        if(minutes === 0) {
          clearInterval(Interval);
        }
        else {
          setSeconds(59);
          setMinutes(minutes - 1);
        }
      }
      
    }, 1000);
    return () => {
      clearInterval(Interval);
    };
  }, [seconds]);


  return (
    <div className='container'>
      <div className='card'>
        <h4>Verify OTP</h4>

        {/* Input field for entering OTP */}
        <input
        placeholder='Enter OTP'
        value={otp}
        onChange={({ target }) => {
          setOtp(target.value);
        }}

/>

        <div className='countdown-text'>
        <p>
          Time Remaining:{" "}
          <span style={{ fontWeight: 600 }}>
            {minutes < 10 ? `0${minutes}` : minutes}:
            {seconds < 10 ? `0${seconds}` : seconds }
          </span>
        </p>

        {/* button to resend OTP  */}
        <button
        disabled={seconds > 0 || minutes > 0}
        style={{
          color: seconds > 0 || minutes > 0 ? "#DFE3E8" : "#FF5630"
        }}
        onClick={resendOTP}
        >
          Resend OTP
        </button>
        </div>
        {/* Button to submit OTP */}
        <button className='submit-btn'>SUBMIT</button>
      </div>
    </div>
  );
}

export default App;
