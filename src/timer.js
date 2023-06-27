import React, {useState, useEffect} from "react";

function Timer() {

    let start = "Start";
    let stop = "Stop";
    const [startStop, setStartStop] = useState(false);
   
    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [hours, setHours] = useState(0);

    useEffect(() => {
        let interval = null;
        if(startStop) {
            interval = setInterval(() => {
                setSeconds(seconds => seconds + 1)

                if(seconds > 59) {
                    setSeconds(0);
                    setMinutes(minutes => minutes + 1);
                }

                if(minutes > 59) {
                    setMinutes(0);
                    setHours(hours => hours + 1)
                }
            }, 1000)
        } else if(!startStop) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    },[startStop, seconds, minutes])

    function handlePlayStop() {
        if (startStop === false) {
            setStartStop(true);
        } else {
            setStartStop(false);
        }
    };


    return(
        <div className="container">
            <p className="timer">{hours < 10 ? `0${hours}` : hours}
            :{minutes < 10 ? `0${minutes}` : minutes}
            :{seconds < 10 ? `0${seconds}` : seconds}
            </p>
            <button className="timerBtn" onClick={handlePlayStop}>{startStop ? stop : start}</button>
        </div>
    );
}

export default Timer;