// a simple function to capitalize the country name. The name can be one or more words (Argentina = 1 word, United States = 2 words)

function capitalize(sentence) {

    const words = sentence.split(' ');

    const newSentence = words.map((word) => {
        return word[0].toUpperCase() + word.substring(1);
    }).join(" ");

    return newSentence;
}

export default capitalize;