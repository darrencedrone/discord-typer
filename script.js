const getResult = () => {
  const word = document.getElementById('word').value

  const arr1 = word.split('')
  console.log(arr1)
  const arr2 = [""].concat(arr1)
  console.log(arr2)
  const newSentence = arr2.join(':regional_indicator_')
  console.log(newSentence)

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
  const finalSentence = joinedSentence.replace(regex, "&nbsp&nbsp&nbsp")
  document.getElementById('display').innerHTML = finalSentence + ":"

}