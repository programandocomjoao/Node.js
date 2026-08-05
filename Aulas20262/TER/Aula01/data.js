let data = new Date()

exports.retornarDia = function() {
  return data.getDate()
}

exports.retornarMes = function() {
  return data.getMonth() + 1
}

exports.retornarAno = function() {
  return data.getFullYear()
}

exports.retornarHoras = function() {
  return data.getHours()
}

exports.retornarMinutos = function() {
  return data.getMinutes()
}