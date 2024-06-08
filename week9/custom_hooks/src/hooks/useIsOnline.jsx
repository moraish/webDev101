import { useState } from "react";

export function useIsOnline() {

    const [isOnline, setIsOnline] = useState(window.navigator.onLine);

    window.addEventListener('online', () => setIsOnline(true));
    window.addEventListener('offline', () => setIsOnline(false));



    return isOnline;
}