const events = [
    { name: "Conference", date: "2025-09-15", attendees: 45 },
    { name: "Workshop", date: "2025-08-30", attendees: 20 },
    { name: "Webinar", date: "2025-09-01", attendees: 100 },
    { name: "Meeting", date: "2025-09-05", attendees: 15 },
    { name: "Seminar", date: "2025-10-10", attendees: 60 }
];

const filteredByName = events.filter(event =>
    event.name.toLowerCase().includes('a') || event.name.toLowerCase().includes('e')
);
console.log("Events with 'a' or 'e':", filteredByName);

const sortedByDate = [...events].sort((a, b) => new Date(a.date) - new Date(b.date));
console.log("Events by date:", sortedByDate);

const averageAttendees = Math.round(events.reduce((sum, event) => sum + event.attendees, 0) / events.length);
const filteredByAttendees = events.filter(event => event.attendees > averageAttendees);
console.log("Events with attendees above average:", filteredByAttendees);

const maxAttendeesEvent = events.reduce((max, event) => event.attendees > max.attendees ? event : max, events[0]);
const minAttendeesEvent = events.reduce((min, event) => event.attendees < min.attendees ? event : min, events[0]);
console.log("Event with the highest number of attendees:", maxAttendeesEvent);
console.log("Event with the lowest number of attendees:", minAttendeesEvent);

const formattedEvents = events.map(event => {
    const [year, month, day] = event.date.split("-");
    return `The conference will take place on ${day}.${month}.${year}, number of attendees: ${event.attendees}`;
});
console.log("Formatted events:", formattedEvents);

const today = new Date();
const totalFutureAttendees = events
    .filter(event => new Date(event.date) > today)
    .reduce((sum, event) => sum + event.attendees, 0);
console.log("Total number of attendees at future events:", totalFutureAttendees);