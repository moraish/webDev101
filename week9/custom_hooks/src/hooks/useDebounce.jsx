export function useDebounce(value, setTime) {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setDebouncedValue(value);
        }, setTime);

        return () => {
            clearInterval(timeout);
        }
    }, [value])
    return debouncedValue;
}