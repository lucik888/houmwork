const tickets = [
  { code: 'AA123', from: 'St. Petersburg', to: 'Moscow', company: 'S7 Airlines', departureAt: new Date('2021-03-14T13:22:00'), arrivalAt: new Date('2021-03-14T15:20:00') },
  { code: 'AB231', from: 'Moscow', to: 'Kazan', company: 'S7 Airlines', departureAt: new Date('2021-03-16T10:00:00'), arrivalAt: new Date('2021-03-16T11:20:00') },
  { code: 'BA321', from: 'Moscow', to: 'Voronezh', company: 'Pobeda avia', departureAt: new Date('2021-03-25T11:34:00'), arrivalAt: new Date('2021-03-25T15:31:00') },
  { code: 'BA321', from: 'St. Petersburg', to: 'Arkhangelsk', company: 'Airfleet', departureAt: new Date('2021-03-20T22:30:00'), arrivalAt: new Date('2021-03-21T01:12:00') },
];

const getTicketTime = (tickets, ticketCode) => {
 // write your code here

  return new Date();
};

console.log(getTicketTime(tickets, 'AA123'));
console.log(getTicketTime(tickets, 'AB231'));
console.log(getTicketTime(tickets, 'BA321'));
console.log(getTicketTime(tickets, 'BA321'));
