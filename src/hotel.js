class Hotel {

    constructor(nome, classificacao, taxaDiaSemanaRegular, taxaFinalSemanaRegular, taxaDiaSemanaReward, taxaFinalSemanaReward) {
        this.nome = nome
        this.classificacao = classificacao
        this.valorReserva = 0
        this.taxaDiaSemanaRegular = taxaDiaSemanaRegular
        this.taxaFinalSemanaRegular = taxaFinalSemanaRegular
        this.taxaDiaSemanaReward = taxaDiaSemanaReward
        this.taxaFinalSemanaReward = taxaFinalSemanaReward
    }

    calcularReserva(clienteTipo, dias) {

        let taxaDiaSemana = 0
        let taxaFinalSemana = 0

        if (clienteTipo === "REGULAR" ) {
            taxaDiaSemana = this.taxaDiaSemanaRegular
            taxaFinalSemana = this.taxaFinalSemanaRegular
        } else if (clienteTipo === "REWARD") {
            taxaDiaSemana = this.taxaDiaSemanaReward
            taxaFinalSemana = this.taxaFinalSemanaReward
        }

        dias.forEach(dia => {
            if (dia === "DIASEMANA") {
                this.valorReserva = this.valorReserva + taxaDiaSemana
            } else if (dia === "FINALSEMANA") {
                this.valorReserva = this.valorReserva + taxaFinalSemana
            } 
        })

        return this.valorReserva
    }

}