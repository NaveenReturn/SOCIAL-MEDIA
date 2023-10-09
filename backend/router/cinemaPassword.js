// CINEMA TICKET PASSWORD

const express = require('express');
const { TicketPass, TicketLogin } = require('../controller/cinemaPassword');
const routers = express.Router();

// URL
routers.route('/ticket').post(TicketPass);
routers.route('/ticketlogin').post(TicketLogin)

module.exports = routers;
