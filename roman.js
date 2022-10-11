var input = prompt('numero romano')

input = input.toUpperCase();
input = input.replace(/[0-9]/g, '');

const algarismos = input.split("");

var sum = 0;

const convertionRomanToDecimal = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
};

algarismos.forEach((key, index) => {
  algarismos[index] = convertionRomanToDecimal[key];
  if (algarismos[index] < algarismos[index - 1]) {
    sum -= convertionRomanToDecimal[key];
  } else sum += convertionRomanToDecimal[key];
});
console.log(sum);