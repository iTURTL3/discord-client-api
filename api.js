/*
   @https://github.com/jakemadness/discord-client-api
*/
window.discordClient = function(token) {
   var self         = this;
   self.httpRequest = function(method, url, headers, post, callback) {
      var request = new XMLHttpRequest();
      request.onreadystatechange = function() {
         (this.readyState == 4 && callback(this.responseText));
      };
      request.open(method, url, true);
      for ( var i = 0; i < headers.length; i += 2 ) {
         request.setRequestHeader(headers[i], headers[i + 1]);
      }
      request.send(post);
   };
   self.acceptInvite = function(inviteCode, callback) {
      self.httpRequest('POST', '/api/v6/invite/' + inviteCode, [
         'x-requested-with', 'XMLHttpRequest',
         'content-type',     'application/x-www-form-urlencoded; charset=UTF-8',
         'authorization',    token
      ], null, callback);
   };
   self.leaveServer = function(serverId, callback) {
      self.httpRequest('DELETE', '/api/v6/users/@me/guilds/' + serverId, [
         'x-requested-with', 'XMLHttpRequest',
         'content-type',     'application/x-www-form-urlencoded; charset=UTF-8',
         'authorization',    token
      ], null, callback);
   };
   self.isTyping = function(channelId, callback) {
      self.httpRequest('POST', '/api/v6/channels/' + channelId + '/typing', [
         'x-requested-with', 'XMLHttpRequest',
         'content-type',     'application/x-www-form-urlencoded; charset=UTF-8',
         'authorization',    token
      ], null, callback);
   };
   self.reactToMessage = function(channelId, messageId, reaction, callback) {
      self.httpRequest('PUT', '/api/v6/channels/' + channelId + '/messages/' + messageId + '/reactions/' + reaction + '/@me', [
         'x-requested-with', 'XMLHttpRequest',
         'content-type',     'application/x-www-form-urlencoded; charset=UTF-8',
         'authorization',    token
      ], null, callback);
   };
   self.removeReactionToMessage = function(channelId, messageId, reaction, callback) {
      self.httpRequest('DELETE', '/api/v6/channels/' + channelId + '/messages/' + messageId + '/reactions/' + reaction + '/@me', [
         'x-requested-with', 'XMLHttpRequest',
         'content-type',     'application/x-www-form-urlencoded; charset=UTF-8',
         'authorization',    token
      ], null, callback);
   };
   self.sendMessage = function(channelId, message, nonce, callback) {
      self.httpRequest('POST', '/api/v6/channels/' + channelId + '/messages', [
         'x-requested-with', 'XMLHttpRequest',
         'content-type',     'application/json; charset=UTF-8',
         'authorization',    token
      ], JSON.stringify({
         'content': message,
         'nonce':   nonce,
         'tts':     false
      }), callback);
   };
   self.updateNickname = function(serverId, nickname, callback) {
      self.httpRequest('PATCH', '/api/v6/guilds/' + serverId + '/members/@me/nick', [
         'x-requested-with', 'XMLHttpRequest',
         'content-type',     'application/json; charset=UTF-8',
         'authorization',    token
      ], JSON.stringify({
         'nick': nickname
      }), callback);
   };
   self.updateStatus = function(status, callback) {
      self.httpRequest('PATCH', '/api/v6/users/@me/settings', [
         'x-requested-with', 'XMLHttpRequest',
         'content-type',     'application/json; charset=UTF-8',
         'authorization',    token
      ], JSON.stringify({
         'status': status
      }), callback);
   };
   self.updateAvatar = function(username, email, base64, callback) {
      self.httpRequest('PATCH', '/api/v6/users/@me', [
         'x-requested-with', 'XMLHttpRequest',
         'content-type',     'application/json; charset=UTF-8',
         'authorization',    token
      ], JSON.stringify({
         'username':      username,
         'email':         email,
         'avatar':        base64,
         'password':      '',
         'new_password':  null,
         'discriminator': null
      }), callback);
   };
};
