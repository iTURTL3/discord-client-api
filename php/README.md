# Discord Client API
Discord Client API works by including the script in your PHP file then calling its functions.

## Getting Started
include the api.php file in your PHP file. Once you've included that file you can create an instance of the API like the following example:

```PHP
include_once('api.php');
$client = new discord_client_api('discord token');
```

**Join Server:**
```PHP
echo $client::join_server('invite code');
```

**Leave Server:**
```PHP
echo $client::leave_server('server id');
```

**Send Message:**
```PHP
echo $client::send_message('channel id', 'message');
```

**Delete Message:**
```PHP
echo $client::delete_message('channel id', 'message id');
```

**Add Reaction:**
```PHP
echo $client::add_reaction('channel id', 'message id', '🐢');
```

**Remove Reaction:**
```PHP
echo $client::remove_reaction('channel id', 'message id', '🐢');
```

**Is Typing:**
```PHP
echo $client::is_typing('channel id');
```

**Get Messages:**
```PHP
echo $client::get_messages('channel id', 25);
```

**Change Nickname:**
```PHP
echo $client::change_nickname('server id', 'new nickname');
```

**Update Status:**
```PHP
echo $client::update_status('dnd');
```

**Update User Settings:**
```PHP
echo $client::update_user_settings('username', 'email', 'password', 'new password', 'data:image/jpeg;base64,Hq..');
```

**Create Server:**
```PHP
echo $client::create_server('server name', 'eu-west', 'data:image/jpeg;base64,H8q..');
```

**Delete Server:**
```PHP
echo $client::delete_server('server id');
```

**Create Channel:**
```PHP
echo $client::create_channel('server id', 'channel name', 'channel parent id', 'channel type');
```

**Delete Channel:**
```PHP
echo $client::delete_channel('channel id');
```

**Create Role:**
```PHP
echo $client::create_role('server id');
```

**Delete Role:**
```PHP
echo $client::delete_role('server id', 'role id');
```

**Join Hypesquad:**
```PHP
echo $client::join_hypesquad(1);
```
