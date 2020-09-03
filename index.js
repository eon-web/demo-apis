const eon = require('eonjs')();

// Constants
const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
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