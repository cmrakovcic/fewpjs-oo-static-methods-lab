class Formatter {
  static capitalize(string) {
    return string[0].toUpperCase() + string.slice(1)
  }
  static sanitize(string) {
    string = string.replace(/[^a-zA-Z0-9'\. -]/g, '')
    return string
  }
  static titleize(string) {
    const exceptions = ["the", "a", "an", "but", "of", "and", "for", "at", "by", "from"]
    string = string[0].toUpperCase() + string.slice(1)
    const array = string.split(" ")
    for(let n = 0; n < array.length; n++){
      if(!(exceptions.includes(array[n]))){
        array[n] = array[n][0].toUpperCase() + array[n].slice(1)
      }
    }
    return array.join(" ")
  }
}