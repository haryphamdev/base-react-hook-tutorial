import { useState, useRef } from 'react';
import OtpInput from 'react-otp-input';
import CountDown from './CountDown';
import CountDownAnimation from './CountDownAnimation';

const InputOTP = (props) => {
    const childRef = useRef();
    const [otp, setOtp] = useState("");
    const handleChange = (otp) => {
        setOtp(otp);
        props.setUserOTPParent(otp);
    }

    const handleConfirmOTP = () => {
        props.handleSubmitOTP();
    }

    const handleClearBtn = () => {
        childRef.current.restTimer();
        console.log(">>> check ref: ", childRef)
    }
    return (
        <div className='input-otp-container'>
            <div className='title'>Enter verification code</div>
            <OtpInput
                value={otp}
                onChange={handleChange}
                numInputs={6}
                separator={<span>-</span>}
                inputStyle={"input-customize"}
            />
            <div className='timer'>
                {/* <CountDown
                    setIsDisableBtn={props.setIsDisableBtn}
                /> */}
                <CountDownAnimation
                    setIsDisableBtn={props.setIsDisableBtn}
                    ref={childRef}
                />
            </div>
            <div className='action'>
                <button className='clear'
                    onClick={() => handleClearBtn()}
                    disabled={!props.isDisableBtn}
                >Clear</button>
                <button className='confirm'
                    disabled={props.isDisableBtn}
                    onClick={() => handleConfirmOTP()}
                >
                    Confirm
                </button>
            </div>
        </div>
    )

}

export default InputOTP;

