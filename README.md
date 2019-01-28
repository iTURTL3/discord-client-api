# Discord Client API
Discord Client API works by including the script on the <b>discordapp.com</b> website (preferably in a userscript) then calling its functions.

## Getting Started
include the api.js file on the discordapp.com website. Once you've included that file on the website you can create an instance of the API like the following example:

```JS
var client = new window.discordClient('discord token here');
```

**Accept Invite:**
```JS
client.acceptInvite('insert invite code', function(data) {
   console.log(data);
});
```

**Leave Server:**
```JS
client.leaveServer('insert server id', function(data) {
   console.log(data);
});
```

**Is Typing:**
```JS
client.isTyping('insert channel id', function(data) {
   console.log(data);
});
```

**React to Message:**
```JS
client.addReaction('insert channel id', 'insert message id', '🐢', function(data) {
   console.log(data);
});
```

**Remove Reaction to Message:**
```JS
client.removeReaction('insert channel id', 'insert message id', '🐢', function(data) {
   console.log(data);
});
```

**Send Message:**
```JS
client.sendMessage('insert channel id', 'my message', 'insert nonce', function(data) {
   console.log(data);
});
```

**Update Nickname:**
```JS
client.updateNickname('insert server id', 'my new nickname', function(data) {
   console.log(data);
});
```

**Update Status:**
```JS
client.updateNickname('online', function(data) {
   console.log(data);
});
```

**Update User Settings :**
```JS
client.updateAvatar('username', 'email', 'password', 'new password', 'data:image/jpeg;base64,H8jkq........', function(data) {
   console.log(data);
});
```
