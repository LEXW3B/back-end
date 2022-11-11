const promise = require('fs').promise;

const readAll = async () => {
  const fileContent = await promise.redFile('./simpson.json', 'utf-8');
  const simpsons = JSON.parse(fileContent);
  const string = simpsons.map(({ id, name }) => `${id} - ${name}`);
  string.forEach((string) => console.log(string));
};

const main = () => {
  await readAll();
};

main();
