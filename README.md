# Discord Client API
Discord Client API works by including the script on the <b>discordapp.com</b> website (preferably in a userscript) then calling its functions.

## Getting Started
include the api.js file on the discordapp.com website. Once you've included that file on the website you can create an instance of the API like the following example:

```JS
var client = new window.discordClient('discord token');
```

**Accept Invite:**
```JS
client.acceptInvite('invite code', function(data) {
   console.log(data);
});
```

**Leave Server:**
```JS
client.leaveServer('server id', function(data) {
   console.log(data);
});
```

**Is Typing:**
```JS
client.isTyping('channel id', function(data) {
   console.log(data);
});
```

**React to Message:**
```JS
client.addReaction('channel id', 'message id', '🐢', function(data) {
   console.log(data);
});
```

**Remove Reaction from Message:**
```JS
client.removeReaction('channel id', 'message id', '🐢', function(data) {
   console.log(data);
});
```

**Send Message:**
```JS
client.sendMessage('channel id', 'my message', 'insert nonce', function(data) {
   console.log(data);
});
```

**Get Messages**
```JS
client.getMessages('channel id', 50, function(data) {
   console.log(data);
});
```

**Update Nickname:**
```JS
client.updateNickname('server id', 'new nickname', function(data) {
   console.log(data);
});
```

**Update Status:**
```JS
client.updateNickname('online', function(data) {
   console.log(data);
});
```

**Update User Settings:**
```JS
client.updateAvatar('username', 'email', 'password', 'new password', 'data:image/jpeg;base64,Hq..',
function(data) {
   console.log(data);
});
```

**Create Server**
```JS
client.createServer('my new server', 'eu-west', 'data:image/jpeg;base64,H8q..', function(data) {
   console.log(data);
});
```

**Delete Server**
```JS
client.deleteServer('server id', function(data) {
   console.log(data);
});
```

**Create Channel**
```JS
client.createChannel('server id', 'channel name', 'category id', 'channel type id', function(data) {
   console.log(data);
});
```

**Delete Channel**
```JS
client.deleteChannel('channel id', function(data) {
   console.log(data);
});
```
