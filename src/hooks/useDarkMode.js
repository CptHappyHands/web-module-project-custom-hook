import { useLocalStorage } from "./useLocalStorage";

const useDarkMode = (key, initValue) => {
  const [values, setValues] = useLocalStorage(key, initValue);
  return [values, setValues];
};
export default useDarkMode;
