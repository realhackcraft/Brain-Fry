const zero = "+[]";
const one = "+!![]";

const number = (n) => {
  if (n === 0) return zero;
  return Array.from({ length: n }, () => one).join(" + ");
};

// C

const map = {};

const fromString = (s) =>
  s
    .split("")
    .map((x) => {
      if (!(x in map)) {
        const charCode = x.charCodeAt(0);
        return `([]+[])[${fromString("constructor")}][${fromString(
          "fromCharCode"
        )}](${number(charCode)})`;
      }
      return map[x];
    })
    .join("+");

map.a = `(+{}+[])[${number(1)}]`;
map.b = `({}+[])[${number(2)}]`;
map.o = `({}+[])[${number(1)}]`;
map.e = `({}+[])[${number(4)}]`;
map.c = `({}+[])[${number(5)}]`;
map.t = `({}+[])[${number(6)}]`;
map[" "] = `({}+[])[${number(7)}]`;
map.f = `(![]+[])[${number(0)}]`;
map.s = `(![]+[])[${number(3)}]`;
map.r = `(!![]+[])[${number(1)}]`;
map.u = `(!![]+[])[${number(2)}]`;
map.i = `((+!![]/+[])+[])[${number(3)}]`;
map.n = `((+!![]/+[])+[])[${number(4)}]`;
map.S = `([]+([]+[])[${fromString("constructor")}])[${number(9)}]`;
map.g = `([]+([]+[])[${fromString("constructor")}])[${number(14)}]`;
map.p = `([]+(/-/)[${fromString("constructor")}])[${number(14)}]`;
map["\\"] = `(/\\\\/+[])[${number(1)}]`;
map.d = `(${number(13)})[${fromString("toString")}](${number(14)})`;
map.h = `(${number(17)})[${fromString("toString")}](${number(18)})`;
map.m = `(${number(22)})[${fromString("toString")}](${number(23)})`;
map.C = `((()=>{})[${fromString("constructor")}](${fromString(
  "return escape"
)})()(${map["\\"]}))[${number(2)}]`;

const compile = (code) =>
  `(()=>{})[${fromString("constructor")}](${fromString(code)})()`;

const verse1 =
  "console.log('');console.log('Never gonna give you up');console.log('Never gonna let you down');console.log('Never gonna run around and desert you');console.log('Never gonna make you cry');console.log('Never gonna say goodbye');console.log('Never gonna tell a lie and hurt you');console.log('');";

const verse2 =
  "console.log('We have known each other for so long');console.log('Your heart is been aching, but you are too shy to say it');console.log('Inside, we both know what is been going on');console.log('We know the game and we are gonna play it');";

console.log(
  compile(
    `console.log('We re no strangers to love');console.log('You know the rules, and so I');console.log('A full commitment is what i am thinking of');console.log('You would not get this from any other guy');console.log('');console.log('I just wanna tell you how I am feeling');console.log('Gotta make you understand');${verse1}${verse2}console.log('');console.log('And if you ask me how I am feeling');console.log('Do not tell me you are too blind to see');${verse1}${verse2}console.log('I just wanna tell you how I am feeling');console.log('Gotta make you understand');${verse1}${verse1}`
  )
);
