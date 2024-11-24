(async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    await sleep(10000);
    console.log(data);
})();

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
