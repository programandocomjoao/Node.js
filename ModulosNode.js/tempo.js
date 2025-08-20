let data = new Date()

exports.informarDia = function() {
  return data.getDate()
}

exports.informarMes = function() {
  return data.getMonth() + 1
}

exports.informarAno = function() {
  return data.getFullYear()
}

exports.informarHora = function() {
  return data.getHours()
}

exports.informarMinuto = function() {
  return data.getMinutes()
}