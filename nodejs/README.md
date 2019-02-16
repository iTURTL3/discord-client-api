<div align="center">
  <p>
    <a href="https://nodei.co/npm/discord-client-api/"><img src="https://nodei.co/npm/discord-client-api.png?downloads=true&stars=true" alt="NPM info" /></a>
  </p>
</div>

# Discord Client API
discord-client-api works by requiring the package in your NodeJS file then calling its functions.

## Installation
To install the package type the following:
```
npm install discord-client-api
```

## Getting Started
Require the discord-client-api module and create an instance of the API like the following example:

```JS
var client = new (require('discord-client-api'))('discord token');
```

## API Methods
**Join Server:**
```JS
client.joinServer('invite code', function(data) {
   console.log(data);
});
```

**Leave Server:**
```JS
client.leaveServer('server id', function(data) {
   console.log(data);
});
```

**Get Servers:**
```JS
client.getServers(function(data) {
   console.log(data);
});
```

**Send Message:**
```JS
client.sendMessage('channel id', 'message', function(data) {
   console.log(data);
});
```

**Delete Message:**
```JS
client.deleteMessage('channel id', 'message id', function(data) {
   console.log(data);
});
```

**Get Messages:**
```JS
client.getMessages('channel id', 25, function(data) {
   console.log(data);
});
```

**Add Reaction:**
```JS
client.addReaction('channel id', 'message id', '🐢', function(data) {
   console.log(data);
});
```

**Remove Reaction:**
```JS
client.removeReaction('channel id', 'message id', '🐢', function(data) {
   console.log(data);
});
```

**Is Typing:**
```JS
client.isTyping('channel id', function(data) {
   console.log(data);
});
```

**Change Nickname:**
```JS
client.changeNickname('server id', 'new nickname', function(data) {
   console.log(data);
});
```

**Update Status:**
```JS
client.updateStatus('dnd', function(data) {
   console.log(data);
});
```

**Update User Settings:**
```JS
client.updateUserSettings('username', 'email', 'password', 'new password', 'data:image/jpeg;base64,Hq..', function(data) {
   console.log(data);
});
```

**Create Server:**
```JS
client.createServer('server name', 'eu-west', 'data:image/jpeg;base64,H8q..', function(data) {
   console.log(data);
});
```

**Delete Server:**
```JS
client.deleteServer('server id', function(data) {
   console.log(data);
});
```

**Create Channel:**
```JS
client.createChannel('server id', 'channel name', 'channel parent id', 'channel type', function(data) {
   console.log(data);
});
```

**Delete Channel:**
```JS
client.deleteChannel('channel id', function(data) {
   console.log(data);
});
```

**Create Role:**
```JS
client.createRole('server id', function(data) {
   console.log(data);
});
```

**Delete Role:**
```JS
client.deleteRole('server id', 'role id', function(data) {
   console.log(data);
});
```

**Join Hypesquad:**
```JS
client.joinHypesquad(1, function(data) {
   console.log(data);
});
```
