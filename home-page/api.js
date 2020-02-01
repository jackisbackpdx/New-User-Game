const mtTaborPark = {
    title: 'Mt Tabor Park',
    id: 'Tabor',
    map: {
        top: '55%',
        left: '65%'
    },
    image: '',
    audio: '',
    actionSound: '',
    description: 'You and your s/o decide to stop by Mt. Tabor park, as it is a beautiful and dry day, compaired to all of the days of rain that Portland has been experiencing within recent weeks.',
    choices: [
        {
            id: 'Scale the mountain',
            description: 'Deciding that you would like to get moving, you walk to the top of the mountain using the stairs.',
            result: ' It\'s a challenge, but you make it to the top, and get to enjoy the view of downtown Portland',
            enjoyment: 45,
            time: 30
        },
        {
            id: 'Have a pic nic',
            description: 'It\'s a perfect day for a pic nic so you decide to get a blanket and food from a basket out of the car so that you and your friends can sit down and eat food.',
            result: 'Afterwards, you feel sufficiently content and your stomach can not contain any more food',
            enjoyment: 40,
            time: 60
        },
        {
            id: 'Watch the sunset',
            description: 'You and your s/o stand along the overlook at the upper reservoir and watch the sun hide behind the horizon',
            result: 'it is a beautiful sight and you cherish the moment',
            enjoyment: 40,
            time: 20
        }
    ],
};

const roseFestival = {
    title: 'Rose Festival',
    id: 'rose festival',
    map: {
        top: '57%',
        left: '45%'
    },
    image: '',
    audio: '',
    actionSound: '',
    description: 'It\'s summer, and you know what that means! The Portland Rose Festival is back in town, and the doors have just open. You decide to grab a ticket and check out the fun, food, and games taking place. The first thing you decide to do is:',
    choices: [
        {
            id: 'Ferris Wheel',
            description: 'Ride the ferris wheel',
            result: 'You get a nice view of the park, as well as all of Portland that surrounds you.',
            enjoyment: 25,
            time: 20,
        },
        {
            id: 'Food',
            description: 'Eat at the Steak and Potatoes stand',
            result: 'You and your friend eat the Steak and Baked Potato meal and your friend feels uneasy, they urgently excuse themself to the nearest restroom.',
            enjoyment: -30,
            time: 25,
        },
        {
            id: 'Basketball Shot',
            description: 'Try your luck with the extra difficult basketball shot.',
            result: 'You miss the shot. Those things are rigged. And you knew the odds were poor going into the ordeal.',
            enjoyment: -5,
            time: 5,
        }
    ]
};

const blazerGame = {
    title: 'Blazer\'s Game',
    id: 'blazer\'s Game',
    map: {
        top: '53%',
        left: '50%'
    },
    image: '',
    audio: '',
    actionSound: '',
    description: 'It\'s a Friday night, and you have scheduled to meet a friend at the Blazer\'s game to watch them ball on the Brooklyn Nets. Both of you have arrived at the Moda Center, and now you must decide where to go first.',
    choices: [
        {
            id: 'Sit',
            description: 'Go to Seating',
            result: 'You sit down and watch the game start, there are really a lot impressive basketball moves and Damian Lillard dished out a beautiful fast break pass to CJ McCollumn for an assist.',
            enjoyment: 35,
            time: 60,
        },
        {
            id: 'Drinks',
            description: 'Get yourselves some drinks and snacks.',
            result: 'The drinks and snacks are undoubtedly enjoyable. They make the game more fun to watch as well',
            enjoyment: 45,
            time: 60,
        },
        {
            id: 'Game Booth',
            description: 'There is a game on the court, and there is a raffle to play the game for a prize. You and your friend decide to enter for a chance to win.',
            result: 'You friend gets chosen to play the game and they win, by dribbling the ball back and forth across the court and making a layup. They recieved $200 cash',
            enjoyment: 25,
            time: 5,
        }
    ]
};

const quests = [
    mtTaborPark,
    roseFestival,
    blazerGame
];

export default quests;