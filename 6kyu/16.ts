// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.

// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"

// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

// "The_Stealth-Warrior" gets converted to "TheStealthWarrior"

export function toCamelCase(str: string): string {
  const words: string[] = str.split(/[-_]/g);

  let res = words[0];

  for (let i = 1; i < words.length; i++) {
    res += words[i].replace(words[i][0], words[i][0].toUpperCase());
  }

  return res;
}

const t1 = "the-stealth-warrior";
const t2 = "The_Stealth_Warrior";
const t3 = "The_Stealth-Warrior";

console.log(toCamelCase(t1));
console.log(toCamelCase(t2));
console.log(toCamelCase(t3));
