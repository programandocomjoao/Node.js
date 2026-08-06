let data = new Date()

exports.getDia = function() {
  return data.getDate()
}

exports.getMes = function() {
  return data.getMonth() + 1
}

exports.getAno = function() {
  return data.getFullYear()
}

exports.getHoras = function() {
  return data.getHours()
}

exports.getMinutos = function() {
  return data.getMinutes()
}