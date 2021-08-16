function enDeCode () {
  const userInput = document.getElementById("userInput").value
  const cleanString = userInput.toLowerCase()
  const encode = document.getElementById("encode")
  const userKey = Number(document.getElementById("userKey").value)
  const outputMessage = []
  let flag = true

  if (encode.checked) {
    flag = true
  } else {
    flag = false
  }

  for (let i = 0; i < cleanString.length; i++) {
    outputMessage.push(codeLetter(cleanString[i], userKey, flag))
  }

  document.getElementById('output').value = outputMessage.join('')
}

function codeLetter (letter, userKey, flag) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
  if (alphabet.includes(letter) && flag) { // encodes
    const position = alphabet.indexOf(letter)
    const newPosition = (position + userKey) % 26
    return alphabet[newPosition]
  } else if (alphabet.includes(letter) && !flag) { // decodes
    const position = alphabet.indexOf(letter)
    const newPosition = (position - userKey) % 26
    return alphabet[newPosition]
  } else { return letter } // doesn't encode/decode non-letter characters
}
