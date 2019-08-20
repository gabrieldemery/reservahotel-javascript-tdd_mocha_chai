Date.prototype.addDays = function(days) {
    var date = new Date(this.valueOf())
    date.setDate(date.getDate() + days)
    return date
}

function reservar(clienteTipo, dataInicio, dataFim) {

    if ( clienteTipo === "REGULAR" || clienteTipo === "REWARD" ) {
        throw new Error('Tipo do cliente está incorreto')
    }


    let dias = gerarDias(dataInicio, dataFim)
    let hoteis = gerarHoteis(clienteTipo, dias)
    console.log(hoteis)

    return "Lakewood"
}

function gerarDias(dataInicio, dataFim) {
    const dias = new Array()
    let dataAtual = dataInicio

    while ( dataAtual <= dataFim ) {
        datas.push(verificarDia(dataAtual))
        dataAtual = dataAtual.addDays(1)
    }

    return dias
}

function verificarDia(data) {
    const dia = new Date(data).getDay()
    return (dia === 6) || (dia === 0) ? "FINALSEMANA" : "DIASEMANA"
}

function gerarHoteis(clienteTipo, dias) {
    const hoteis = new Array()
    hoteis.push(new Hotel("Lakewood", 3, 110, 90, 80, 80).calcularReserva(clienteTipo, dias))
    hoteis.push(new Hotel("Bridgewood", 4, 160, 60, 110, 50).calcularReserva(clienteTipo, dias))
    hoteis.push(new Hotel("Ridgewood", 5, 220, 150, 100, 40).calcularReserva(clienteTipo, dias))
    return hoteis
}



module.exports.reservar = reservar