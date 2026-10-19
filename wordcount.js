let text = "Hello world! This is JavaScript.";

let cleanText = text.trim();

let totalWords = 0;

if (cleanText !== "") {
    totalWords = cleanText.split(/\s+/).length;
}

console.log(`Your text contains ${totalWords} words.`);
