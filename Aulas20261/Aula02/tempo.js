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

exports.informarHoras = function() {
  return data.getHours()
}

exports.informarMin = function() {
  return data.getMinutes()
}

exports.informarSeg = function() {
  return data.getSeconds()
}