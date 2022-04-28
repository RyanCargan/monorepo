const response = await fetch("https://httpbin.org/get?hello=world");
const json = await response.json();

console.log(json.args);
