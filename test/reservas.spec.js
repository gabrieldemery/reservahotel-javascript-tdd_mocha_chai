'use strict'

const chai = require('chai')
const expect = chai.expect
let reservar = require('../src/reserva')

describe('Reservas', function () {

    it('Cliente Regular, de 16 à 18 de março de 2019', function () {
        const hotel = reservar('REGULAR', '2019-03-16', '2019-03-18')
        expect(hotel).to.equal("Lakewood")
    })

    it('Cliente Regular, de 20 à 22 de março de 2019', function () {
        const hotel = reservar('REGULAR', '2019-03-20', '2019-03-22')
        expect(hotel).to.equal("Bridgewood")
    })

    it('Cliente Reward, de 26 à 28 de março de 2019', function () {
        const hotel = reservar('REWARD', '2019-03-26', '2019-03-28')
        expect(hotel).to.equal("Ridgewood")
    })

})