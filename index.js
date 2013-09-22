var Domo, domo;

Domo = require('domo-kun');

domo = new Domo({
  nick: 'Domo',
  userName: 'Domo',
  realName: 'Domo the awesome IRC-bot',
  address: 'irc.datnode.net',
  channels: ['#riku'],
  users: [
    {
      username: 'riku',
      password: 'admin'
    }
  ],
  debug: true
});

domo.route('Hello Domo!', function(res) {
  this.say(res.channel, 'Hi ' + res.nick + '!');
});

domo.connect();

