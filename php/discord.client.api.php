<?php
/*
   @https://github.com/jakemadness/discord-client-api/tree/master/php
*/
class discord_client_api {

   /*
      CLASS VARIABLES.
   */
   private static $api_token = '';
   private static $api_base  = 'https://discordapp.com/api/v6/';

   /*
      REUSABLE FUNCTIONS.
   */
   function __construct($token) {
      self::$api_token = $token;
   }

   private static function http_request($method, $url, $headers, $post) {
      $ch = curl_init();
      curl_setopt($ch, CURLOPT_CUSTOMREQUEST,  $method);
      curl_setopt($ch, CURLOPT_URL,            $url);
      curl_setopt($ch, CURLOPT_HTTPHEADER,     $headers);
      if ( $post !== null ) {
         curl_setopt($ch, CURLOPT_POSTFIELDS, $post);
      }
      curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
      return curl_exec($ch);
   }

   private static function api_request($method, $path, $post) {
      $type   = $post !== null ? 'application/json' : 'application/x-www-form-urlencoded';
      $post   = $post !== null ? json_encode($post) : null;
      $length = strlen($post);
      return self::http_request($method, self::$api_base . $path, array(
         'authorization:'  . self::$api_token,
         'content-type:'   . $type,
         'content-length:' . $length
      ), $post);
   }

   /*
      MAIN FUNCTIONS.
   */
   public static function join_server($invite_code) {
      return self::api_request('POST', 'invite/' . $invite_code, null);
   }

   public static function leave_server($server_id) {
      return self::api_request('DELETE', 'users/@me/guilds/' . $server_id, null);
   }

   public static function get_servers() {
      return self::api_request('GET', 'users/@me/guilds', null);
   }

   public static function send_message($channel_id, $message) {
      return self::api_request('POST', 'channels/' . $channel_id . '/messages', array('content' => $message, 'nonce' => time(), 'tts' => false));
   }

   public static function delete_message($channel_id, $message_id) {
      return self::api_request('DELETE', 'channels/' . $channel_id . '/messages/' . $message_id, null);
   }

   public static function get_messages($channel_id, $amount) {
      return self::api_request('GET', 'channels/' . $channel_id . '/messages?limit=' . $amount, null);
   }

   public static function add_reaction($channel_id, $message_id, $reaction) {
      return self::api_request('PUT', 'channels/' . $channel_id . '/messages/' . $message_id . '/reactions/' . $reaction . '/@me', null);
   }

   public static function remove_reaction($channel_id, $message_id, $reaction) {
      return self::api_request('DELETE', 'channels/' . $channel_id . '/messages/' . $message_id . '/reactions/' . $reaction . '/@me', null);
   }

   public static function is_typing($channel_id) {
      return self::api_request('POST', 'channels/' . $channel_id . '/typing', null);
   }

   public static function change_nickname($server_id, $nickname) {
      return self::api_request('PATCH', 'guilds/' . $server_id . '/members/@me/nick', array('nick' => $nickname));
   }

   public static function update_status($status) {
      return self::api_request('PATCH', 'users/@me/settings', array('status' => $status));
   }

   public static function update_user_settings($username, $email, $password, $new_password, $avatar_base64) {
      return self::api_request('PATCH', 'users/@me', array('username' => $username, 'email' => $email, 'password' => $password, 'new_password' => $new_password, 'avatar' => $avatar_base64, 'discriminator' => null));
   }

   public static function create_server($name, $region, $icon) {
      return self::api_request('POST', 'guilds', array('name' => $name, 'region' => $region, 'icon' => $icon));
   }

   public static function delete_server($server_id) {
      return self::api_request('POST', 'guilds/' . $server_id . '/delete', array());
   }

   public static function create_channel($server_id, $name, $parent_id, $type) {
      return self::api_request('POST', 'guilds/' . $server_id . '/channels', array('name' => $name, 'parent_id' => $parent_id, 'type' => $type, 'permission_overwrites' => []));
   }

   public static function delete_channel($channel_id) {
      return self::api_request('DELETE', 'channels/' . $channel_id, null);
   }

   public static function create_role($server_id) {
      return self::api_request('POST', 'guilds/' . $server_id . '/roles', null);
   }

   public static function delete_role($server_id, $role_id) {
      return self::api_request('DELETE', 'guilds/' . $server_id . '/roles/' . $role_id, null);
   }

   public static function join_hypesquad($house_number) {
      return self::api_request('POST', 'hypesquad/online', array('house_id' => $house_number));
   }

   public static function create_invite($channel_id) {
      return self::api_request('POST', 'channels/' . $channel_id . '/invites', array('max_age' => 0, 'max_uses' => 0, 'temporary' => false));
   }

}
?>
