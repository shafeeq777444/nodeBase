const si = setInterval(() => {
    console.log("hello");
}, 2000);

const fi=setTimeout(() => {
    clearInterval(si);
}, 4000); // This allows "hello" to print twice (at 2s and 4s) before clearing.
