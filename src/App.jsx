import React, { useEffect, useState} from 'react';
import './App.css';

function App() {
  // State variables to managee OTP input, minutes, and seconds
  const [otp, setOtp] = useState("");
  const [minutes, setMinutes] = useState(1);
  const [seconds, setSeconds] = useState(59);
 

  // Function to resend OTP
  const resendOTP = () => {

  }

  // useEffect hook to handle the countdown timer
  useEffect(() => {
    let myInterval = setInterval(() => {

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
