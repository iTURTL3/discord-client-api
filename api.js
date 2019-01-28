/*
   @https://github.com/jakemadness/discord-client-api
*/
window.discordClient = function(token) {
   var self         = this;
   self.version     = 6;
   self.endPoint    = 'https://discordapp.com/api/v' + self.version;
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
      self.httpRequest('POST', self.endPoint + '/invite/' + inviteCode, [
         'x-requested-with', 'XMLHttpRequest',
         'content-type',     'application/x-www-form-urlencoded; charset=UTF-8',
         'authorization',    token
      ], null, callback);
   };
   self.leaveServer = function(serverId, callback) {
      self.httpRequest('DELETE', self.endPoint + '/users/@me/guilds/' + serverId, [
         'x-requested-with', 'XMLHttpRequest',
         'content-type',     'application/x-www-form-urlencoded; charset=UTF-8',
         'authorization',    token
      ], null, callback);
   };
   self.isTyping = function(channelId, callback) {
      self.httpRequest('POST', self.endPoint + '/channels/' + channelId + '/typing', [
         'x-requested-with', 'XMLHttpRequest',
         'content-type',     'application/x-www-form-urlencoded; charset=UTF-8',
         'authorization',    token
      ], null, callback);
   };
   self.addReaction = function(channelId, messageId, reaction, callback) {
      self.httpRequest('PUT', self.endPoint + '/channels/' + channelId + '/messages/' + messageId + '/reactions/' + reaction + '/@me', [
         'x-requested-with', 'XMLHttpRequest',
         'content-type',     'application/x-www-form-urlencoded; charset=UTF-8',
         'authorization',    token
      ], null, callback);
   };
   self.removeReaction = function(channelId, messageId, reaction, callback) {
      self.httpRequest('DELETE', self.endPoint + '/channels/' + channelId + '/messages/' + messageId + '/reactions/' + reaction + '/@me', [
         'x-requested-with', 'XMLHttpRequest',
         'content-type',     'application/x-www-form-urlencoded; charset=UTF-8',
         'authorization',    token
      ], null, callback);
   };
   self.sendMessage = function(channelId, message, nonce, callback) {
      self.httpRequest('POST', self.endPoint + '/channels/' + channelId + '/messages', [
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
      self.httpRequest('PATCH', self.endPoint + '/guilds/' + serverId + '/members/@me/nick', [
         'x-requested-with', 'XMLHttpRequest',
         'content-type',     'application/json; charset=UTF-8',
         'authorization',    token
      ], JSON.stringify({
         'nick': nickname
      }), callback);
   };
   self.updateStatus = function(status, callback) {
      self.httpRequest('PATCH', self.endPoint + '/users/@me/settings', [
         'x-requested-with', 'XMLHttpRequest',
         'content-type',     'application/json; charset=UTF-8',
         'authorization',    token
      ], JSON.stringify({
         'status': status
      }), callback);
   };
   self.updateUserSettings = function(username, email, avatarBase64, callback) {
      self.httpRequest('PATCH', self.endPoint + '/users/@me', [
         'x-requested-with', 'XMLHttpRequest',
         'content-type',     'application/json; charset=UTF-8',
         'authorization',    token
      ], JSON.stringify({
         'username':      username,
         'email':         email,
         'avatar':        avatarBase64,
         'password':      '',
         'new_password':  null,
         'discriminator': null
      }), callback);
   };
   self.createServer = function(name, region, icon, callback) {
      self.httpRequest('POST', self.endPoint + '/guilds', [
         'x-requested-with', 'XMLHttpRequest',
         'content-type',     'application/json; charset=UTF-8',
         'authorization',    token
      ], JSON.stringify({
         'name':   name,
         'region': region,
         'icon':   icon
      }), callback);
   };
   self.deleteServer = function(serverId, callback) {
      self.httpRequest('POST', self.endPoint + '/guilds/' + serverId + '/delete', [
         'x-requested-with', 'XMLHttpRequest',
         'content-type',     'application/json; charset=UTF-8',
         'authorization',    token
      ], JSON.stringify({}), callback);
   };
   self.createChannel = function(serverId, name, parentId, type) {
      self.httpRequest('POST', self.endPoint + '/guilds/' + serverId + '/channels', [
         'x-requested-with', 'XMLHttpRequest',
         'content-type',     'application/json; charset=UTF-8',
         'authorization',    token
      ], JSON.stringify({
         'name':                  name,
         'parent_id':             parentId,
         'type':                  type,
         'permission_overwrites': []
      }), callback);
   };
   self.deleteChannel = function(channelId, callback) {
      self.httpRequest('DELETE', self.endPoint + '/channels/' + channelId, [
         'x-requested-with', 'XMLHttpRequest',
         'content-type',     'application/json; charset=UTF-8',
         'authorization',    token
      ], null, callback);
   };
};
