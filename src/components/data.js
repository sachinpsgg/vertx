// data.js
export const dataSets = {
    Visitors: {
        Today: [{ date: "Today", value: 500 }],
        Yesterday: [{ date: "Yesterday", value: 600 }],
        'This week': [
            { date: "Mon", value: 400 },
            { date: "Tue", value: 450 },
            { date: "Wed", value: 550 }, // Crosses with Connections
            { date: "Thu", value: 500 },
            { date: "Fri", value: 600 },
        ],
        'Last week': [
            { date: "Mon", value: 300 },
            { date: "Tue", value: 350 },
            { date: "Wed", value: 450 }, // Crosses with Connections
            { date: "Thu", value: 400 },
            { date: "Fri", value: 500 },
        ],
        'Last 7 days': [
            { date: "Day 1", value: 700 },
            { date: "Day 2", value: 750 },
            { date: "Day 3", value: 800 },
            { date: "Day 4", value: 850 }, // Crosses with Connections
            { date: "Day 5", value: 900 },
            { date: "Day 6", value: 950 },
            { date: "Day 7", value: 1000 },
        ],
        'Last 30 days': [
            { date: "Mar 1", value: 300 },
            { date: "Mar 4", value: 1250 },
            { date: "Mar 8", value: 800 },
            { date: "Mar 10", value: 1300 },
            { date: "Mar 11", value: 800 },
            { date: "Mar 12", value: 700 },
            { date: "Mar 15", value: 900 }, // Crosses with Connections
            { date: "Mar 18", value: 600 },
            { date: "Mar 20", value: 1900 },
            { date: "Mar 21", value: 600 },
            { date: "Mar 22", value: 800 },
            { date: "Mar 23", value: 400 },
            { date: "Mar 24", value: 700 },
            { date: "Mar 25", value: 500 },
            { date: "Mar 26", value: 900 }, // Crosses with Connections
            { date: "Mar 27", value: 903 },
            { date: "Mar 28", value: 1200 },
            { date: "Mar 29", value: 800 },
            { date: "Mar 30", value: 1750 },
        ],
    },
    Connections: {
        Today: [{ date: "Today", value: 450 }], // Close to Visitors
        Yesterday: [{ date: "Yesterday", value: 550 }], // Close to Visitors
        'This week': [
            { date: "Mon", value: 350 },
            { date: "Tue", value: 400 },
            { date: "Wed", value: 500 }, // Crosses with Visitors
            { date: "Thu", value: 550 },
            { date: "Fri", value: 650 },
        ],
        'Last week': [
            { date: "Mon", value: 250 },
            { date: "Tue", value: 300 },
            { date: "Wed", value: 400 }, // Crosses with Visitors
            { date: "Thu", value: 450 },
            { date: "Fri", value: 550 },
        ],
        'Last 7 days': [
            { date: "Day 1", value: 650 },
            { date: "Day 2", value: 700 },
            { date: "Day 3", value: 750 },
            { date: "Day 4", value: 800 }, // Crosses with Visitors
            { date: "Day 5", value: 850 },
            { date: "Day 6", value: 900 },
            { date: "Day 7", value: 950 },
        ],
        'Last 30 days': [
            { date: "Mar 1", value: 250 },
            { date: "Mar 4", value: 950 },
            { date: "Mar 8", value: 700 },
            { date: "Mar 10", value: 1200 },
            { date: "Mar 11", value: 750 },
            { date: "Mar 12", value: 600 },
            { date: "Mar 15", value: 850 }, // Crosses with Visitors
            { date: "Mar 18", value: 500 },
            { date: "Mar 20", value: 1800 },
            { date: "Mar 21", value: 550 },
            { date: "Mar 22", value: 750 },
            { date: "Mar 23", value: 350 },
            { date: "Mar 24", value: 650 },
            { date: "Mar 25", value: 450 },
            { date: "Mar 26", value: 850 }, // Crosses with Visitors
            { date: "Mar 27", value: 950 },
            { date: "Mar 28", value: 1100 },
            { date: "Mar 29", value: 750 },
            { date: "Mar 30", value: 1600 },
        ],
    },
    Interactions: {
        Today: [{ date: "Today", value: 400 }], // Close to Connections
        Yesterday: [{ date: "Yesterday", value: 500 }], // Close to Connections
        'This week': [
            { date: "Mon", value: 300 },
            { date: "Tue", value: 350 },
            { date: "Wed", value: 450 }, // Crosses with Connections
            { date: "Thu", value: 500 },
            { date: "Fri", value: 550 },
        ],
        'Last week': [
            { date: "Mon", value: 200 },
            { date: "Tue", value: 250 },
            { date: "Wed", value: 350 }, // Crosses with Connections
            { date: "Thu", value: 400 },
            { date: "Fri", value: 450 },
        ],
        'Last 7 days': [
            { date: "Day 1", value: 600 },
            { date: "Day 2", value: 650 },
            { date: "Day 3", value: 700 },
            { date: "Day 4", value: 750 }, // Crosses with Connections
            { date: "Day 5", value: 800 },
            { date: "Day 6", value: 850 },
            { date: "Day 7", value: 900 },
        ],
        'Last 30 days': [
            { date: "Mar 1", value: 200 },
            { date: "Mar 4", value: 800 },
            { date: "Mar 8", value: 600 },
            { date: "Mar 10", value: 1000 },
            { date: "Mar 11", value: 650 },
            { date: "Mar 12", value: 500 },
            { date: "Mar 15", value: 700 }, // Crosses with Connections
            { date: "Mar 18", value: 400 },
            { date: "Mar 20", value: 1700 },
            { date: "Mar 21", value: 450 },
            { date: "Mar 22", value: 650 },
            { date: "Mar 23", value: 300 },
            { date: "Mar 24", value: 550 },
            { date: "Mar 25", value: 400 },
            { date: "Mar 26", value: 750 }, // Crosses with Connections
            { date: "Mar 27", value: 800 },
            { date: "Mar 28", value: 1000 },
            { date: "Mar 29", value: 700 },
            { date: "Mar 30", value: 1500 },
        ],
    },
    Impressions: {
        Today: [{ date: "Today", value: 550 }], // Close to Visitors
        Yesterday: [{ date: "Yesterday", value: 650 }], // Close to Visitors
        'This week': [
            { date: "Mon", value: 450 },
            { date: "Tue", value: 500 },
            { date: "Wed", value: 600 }, // Crosses with Visitors
            { date: "Thu", value: 550 },
            { date: "Fri", value: 650 },
        ],
        'Last week': [
            { date: "Mon", value: 350 },
            { date: "Tue", value: 400 },
            { date: "Wed", value: 500 }, // Crosses with Visitors
            { date: "Thu", value: 450 },
            { date: "Fri", value: 550 },
        ],
        'Last 7 days': [
            { date: "Day 1", value: 750 },
            { date: "Day 2", value: 800 },
            { date: "Day 3", value: 850 },
            { date: "Day 4", value: 900 }, // Crosses with Visitors
            { date: "Day 5", value: 950 },
            { date: "Day 6", value: 1000 },
            { date: "Day 7", value: 1050 },
        ],
        'Last 30 days': [
            { date: "Mar 1", value: 350 },
            { date: "Mar 4", value: 1300 },
            { date: "Mar 8", value: 850 },
            { date: "Mar 10", value: 1400 },
            { date: "Mar 11", value: 850 },
            { date: "Mar 12", value: 750 },
            { date: "Mar 15", value: 950 }, // Crosses with Visitors
            { date: "Mar 18", value: 650 },
            { date: "Mar 20", value: 1950 },
            { date: "Mar 21", value: 650 },
            { date: "Mar 22", value: 850 },
            { date: "Mar 23", value: 450 },
            { date: "Mar 24", value: 750 },
            { date: "Mar 25", value: 550 },
            { date: "Mar 26", value: 950 }, // Crosses with Visitors
            { date: "Mar 27", value: 1000 },
            { date: "Mar 28", value: 1250 },
            { date: "Mar 29", value: 850 },
            { date: "Mar 30", value: 1800 },
        ],
    },
};