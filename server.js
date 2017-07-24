const express    = require('express');
const app        = express();
const bodyParser = require('body-parser');
const shortid = require('shortid');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = process.env.PORT || 8081;

const router = express.Router();

// Unsafely enable cors
router.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next()
});

// logging middleware
router.use(function(req, res, next) {
    console.log('\nReceived:',{url: req.originalUrl, body: req.body, query: req.query});
    next();
});

// Simple in memory database
const database = [
  {
    name: 'Tea Chats',
    id: 0,
    users: ['Ryan', 'Nick, Ashwin'],
    messages: [
      {name: 'Ryan', message: 'ayyyyy', id: 'gg35545', reaction: null},
      {name: 'Nick', message: 'lmao', id: 'yy35578', reaction: null},
      {name: 'Ashwin', message: `Hey guys, how's it going?`, id: 'aa36558', reaction: null},
      {name: 'Nick', message: 'Hey Ashwin, where have you been?', id: 'yy15578', reaction: null},
      {name: 'Ashwin', message: `I was doing a little road trip in europe!` , id: 'aa25545', reaction: null},
      {name: 'Ashwin', message: `It was awesome!` , id: 'aa23345', reaction: null}
    ]
  },
  { name: 'Coffee Chats', id: 1, users: ['Abdul, Danielle'], messages: [{name: 'Abdul', message: 'ayy', id: 'ff35278', reaction: null}]},
  { name: 'Beer Chats', id: 2, users: ['Quintin, Ryan, Nick, Mark, Abdul, Danielle, Ashwin'], messages: [{name: 'Abdul', message: 'ayy', id: 'ff35278', reaction: null}]},
  { name: 'Wine Chats', id: 3, users: ['Cindy, Danielle, Nick'], messages: [{name: 'Abdul', message: 'ayy', id: 'ff35278', reaction: null}]},
  { name: 'Whisky Chats', id: 4, users: ['Quintin, Mark, Ashwin, Nick'], messages: [{name: 'Abdul', message: 'ayy', id: 'ff35278', reaction: null}]}
];


// Utility functions
const findRoom = (roomId) => {
  const room = database.find((room) => {
    return room.id === parseInt(roomId)
  });
  if (room === undefined) {
    return {error: `a room with id ${roomId} does not exist`}
  }
  return room;
};

const findRoomIndex = (roomId) => {
  return database.findIndex((room) => {
    return room.id === parseInt(roomId)
  });
};

const findMessageIndex = (room, messageId) => {
  return room.messages.findIndex((message) => {
    return message.id === messageId
  });
};

const logUser = (room, username) => {
  const userNotLogged = !room.users.find((user) => {
    return user === username
  });

  if (userNotLogged) {
    room.users.push(username)
  }
};

// API Routes
router.get('/rooms', function(req, res) {
    const rooms = database.map((room) => {
      return {name: room.name, id: room.id}
    });
    console.log('Response:',rooms);
    res.json(rooms)
});

router.get('/rooms/:roomId', function(req, res) {
  room = findRoom(req.params.roomId);
  if (room.error) {
    console.log('Response:',room);
    res.json(room)
  } else {
    console.log('Response:',{name: room.name, id: room.id, users: room.users});
    res.json({name: room.name, id: room.id, users: room.users})
  }
});

router.route('/rooms/:roomId/messages')
  .get(function(req, res) {
    room = findRoom(req.params.roomId);
    if (room.error) {
      console.log('Response:',room);
      res.json(room)
    } else {
      console.log('Response:',room.messages);
      res.json(room.messages)
    }
  })
  .post(function(req, res) {
    room = findRoom(req.params.roomId);
    if (room.error) {
      console.log('Response:', room);
      res.json(room)
    } else if (!req.body.name || !req.body.message) {
      console.log('Response:', {error: 'request missing name or message'});
      res.json({error: 'request missing name or message'})
    } else {
      logUser(room, req.body.name);
      const reaction = req.body.reaction || null;
      room.messages.push({name: req.body.name, message: req.body.message, id: shortid.generate(), reaction});
      console.log('Response:', {message: 'OK!'});
      res.json({message: 'OK!'})
    }
  });

app.use('/api', router);
app.listen(port);
console.log(`API running at localhost:${port}/api`);
