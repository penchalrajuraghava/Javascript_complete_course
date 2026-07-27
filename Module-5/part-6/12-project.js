/*
==========================================================
Mini Project
Seat Allocation System
==========================================================
*/

const seats = new Array(20).fill("Available");

seats[0] = "Booked";
seats[5] = "Booked";
seats[9] = "Booked";

console.log(seats);

const availableSeats = seats.filter((seat) => seat === "Available").length;

console.log("Available Seats:", availableSeats);

console.log("Last Seat:", seats.at(-1));
