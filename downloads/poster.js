const CronJob = require('cron').CronJob;
const faker = require('faker');
const nicknames = require('nicknames');
const http = require('http');
http.post = require('http-post');

new CronJob('* * * * * *', function() {
  let data = {
    name: faker.name.findName(),
    nickname: nicknames.allRandom()
  }
  console.log(data);
  http.post('http://localhost:3030/nicknames', data)
}, null, true, 'America/Los_Angeles');
