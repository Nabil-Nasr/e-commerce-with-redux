// a function for giving restarting delay on every call of the cb like deferring it
const debounce = (cb, delay=250)=> {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      cb(...args);
    }, delay);
  }
}

export default debounce;