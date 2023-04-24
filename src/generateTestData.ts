function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

export function generateLabels(amount: number) {}

export function generateValues(amount: number, min = 0, max = 100) {
  const output = [];

  for (let i = 0; i < amount; i++) {
    output.push(getRandomInt(min, max));
  }
  return output;
}
