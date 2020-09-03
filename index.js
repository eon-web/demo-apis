const eon = require('eonjs')(8080);

// Constants
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const colors = ['yellowgreen', 'brightgreen', 'yellow', 'orange', 'blue', 'blueviolet', 'ff69b4'];

eon.
    get('/weekdays-api').json(() => {
        // API code goes here
        var day = new Date().getDay();
        var dayName = days[day];
        var color = colors[day];

        return {
            schemaVersion: 1,
            label: 'today is',
            message: dayName,
            color: color
        }
    })
    .listen(p => {
        console.log(`Listening on http://localhost:${p}`);
    });