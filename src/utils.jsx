export const wait = (ms) => {
    const start = Date.now();
    let now = start;
  
    while (now - start < ms) now = Date.now();
};