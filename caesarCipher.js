const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')

function enDeCode () {
  const cleanString = document.getElementById('userInput').value.toLowerCase()
  const encode = document.getElementById('encode').checked
  let userKey = Number(document.getElementById('userKey').value)
  const userKeyShift = Number(document.getElementById('userKeyShift').value)
  const outputMessage = []

  // iterates over user input, codes every letter and returns the output message
  for (let i = 0; i < cleanString.length; i++) {
    outputMessage.push(codeLetter(cleanString[i], userKey, encode))
    if (alphabet.includes(cleanString[i])) {
      userKey += userKeyShift
    }
  }

  document.getElementById('output').value = outputMessage.join('')
}

// encodes/decodes letter passed into the function based on userkey value and returns the new letter
function codeLetter (letter, userKey, encode) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
  if (alphabet.includes(letter) && encode) { // encodes
    const position = alphabet.indexOf(letter)
    const newPosition = (position + userKey) % 26
    return alphabet[newPosition]
  } else if (alphabet.includes(letter) && !encode) { // decodes
    const position = alphabet.indexOf(letter)
    const newPosition = (position - userKey + 26) % 26
    return alphabet[newPosition]
  } else { return letter } // doesn't encode/decode non-letter characters
}