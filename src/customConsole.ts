const originalConsoleLog = console.log;

console.log = (...args: any[]) => {
  const msg = 'Data:'
  const style = 'color: aqua; font-weight: bold;';
  originalConsoleLog(`%c${msg}`, style, ...args);
};