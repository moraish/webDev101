import { useEffect, useState } from "react";

export function useCountdown(seconds) {
    const [timer, setTimer] = useState(seconds);
    useEffect(() => {
        const intervalId = setInterval(() => {
            setTimer((secs) => {
                return secs - 1;
            })

            return () => clearInterval(intervalId);
        }, 1000);
    }, [seconds])

    return timer;

}