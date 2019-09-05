// String Length

const txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const sln = txt.length;
console.log(sln);
console.log("");
const showText = text => {
  for (let index = 0; index < sln; index++) {
    // name and names are different
    const texts = txt[index];

    // log the name and index at the same time
    console.log(`[${index + 1}] ${texts}`);
  }
};
// execute or call the function
showText(txt);

console.log("");

// Finding a String in a String
// The indexOf() method returns the index of (the position of) the first occurrence of a specified
//  text in a string:
{
  const str = "Please locate where 'locate' occurs!";
  const pos = str.indexOf("locate");

  console.log(pos);
}
console.log("");

// The lastIndexOf() method returns the index of the last occurrence
// of a specified text in a string:

{
  const str = "Please locate where 'locate' occurs!";
  const pos = str.lastIndexOf("locate");

  console.log(pos);
}
console.log("");

// Both indexOf(), and lastIndexOf() return -1 if the text is not found.
{
  const str = "Please locate where 'locate' occurs!";
  const pos = str.lastIndexOf("John");
  const pos2 = str.indexOf("locate", 15);

  console.log(pos);
  console.log(pos2);
}

console.log("");

// Searching for a String in a String
// The search() method searches a string for a specified value and returns the position of the match:
{
  const str = "Please locate where 'locate' occurs!";
  const pos = str.search("locate");
  console.log(pos);
}

// The slice() Method
// slice() extracts a part of a string and returns the extracted part in a new string.

// The method takes 2 parameters: the start position, and the end position (end not included).

// This example slices out a portion of a string from position 7 to position 12 (13-1):

{
  const str = "Apple, Banana, Kiwi";
  const res = str.slice(7, 13);
  console.log(res);
}
{
  const str = "Apple, Banana, Kiwi";
  const res = str.slice(-12, -6);
  console.log(res);
}
{
  const str = "Apple, Banana, Kiwi";
  const res = str.slice(7);
  console.log(res);
}
{
  const str = "Apple, Banana, Kiwi";
  const res = str.slice(-12);
  console.log(res);
}

// Replacing String Content
// The replace() method replaces a specified value with another value in a string:
{
  const str = "Please visit Microsoft!";
  const n = str.replace("Microsoft", "W3Schools");
  console.log(n);
}
{
  const str = "Please visit Microsoft and Microsoft!";
  const n = str.replace("Microsoft", "W3Schools");
  console.log(n);
}
{
  const str = "Please visit Microsoft!";
  const n = str.replace("MICROSOFT", "W3Schools");
  console.log(n);
}
{
  const str = "Please visit Microsoft!";
  const n = str.replace(/MICROSOFT/i, "W3Schools");
  console.log(n);
}
{
  const str = "Please visit Microsoft and Microsoft!";
  const n = str.replace(/Microsoft/g, "W3Schools");
  console.log(n);
}
// Converting to Upper and Lower Case
// A string is converted to upper case with toUpperCase():
{
  const text1 = "Hello World!"; // String
  const text2 = text1.toUpperCase(); // text2 is text1 converted to upper
  console.log(text2);
}
{
  const text1 = "Hello World!"; // String
  const text2 = text1.toLowerCase(); // text2 is text1 converted to lower
}
