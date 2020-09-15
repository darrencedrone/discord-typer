const getResult = () => {
  const word = document.getElementById('word').value

  const arr1 = word.split('')
  const arr2 = [''].concat(arr1)
  const newSentence = arr2.join(':regional_indicator_')

  const insertFormatting = (str, n) => {
    let ret = []
    let i
    let len

    for (i = 0, len = str.length; i < len; i += n) {
      ret.push(str.substr(i, n))
    }

    return ret
  }

  const joinedSentence = insertFormatting(newSentence, 21).join(': ')
  const regex = /:regional_indicator_ :/gi
  const finalSentence = joinedSentence.replace(regex, "   ")
  const displaySentence = joinedSentence.replace(regex, "&nbsp&nbsp&nbsp")
  document.getElementById('display').innerHTML = displaySentence + ":"
}

const copyText = () => {
  const word = document.getElementById('word').value

  const arr1 = word.split('')
  const arr2 = [''].concat(arr1)
  const newSentence = arr2.join(':regional_indicator_')

  const insertFormatting = (str, n) => {
    let ret = []
    let i
    let len

    for (i = 0, len = str.length; i < len; i += n) {
      ret.push(str.substr(i, n))
    }

    return ret
  }

  const joinedSentence = insertFormatting(newSentence, 21).join(': ')
  const regex = /:regional_indicator_ :/gi
  const finalSentence = joinedSentence.replace(regex, "   ")
  const copyText = finalSentence + ":"
  navigator.clipboard.writeText(copyText)
}