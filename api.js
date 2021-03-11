export const ApiHandler = async () => {
  let detail = await fetch('https://jsonplaceholder.typicode.com/todos');
  let result = detail.json();

  return result;
};
