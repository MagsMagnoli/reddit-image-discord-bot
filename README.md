Reddit Image Discord Bot

A discord bot for displaying an image from a whitelisted set of subreddits.

# Setup
This bot needs to be self hosted. You will need to create a bot and add it to your discord server before you can run this.

1) Create a new discord bot via your personal developer account here: https://discordapp.com/developers/applications/me
2) On the application page click the button to generate an OAuth2 URL then paste it in your browser and select the server to add the bot to
3) On the application page click the button to create a bot user then click to reveal the bot user token. Copy and paste this token into src/config/bot-user-token.ts
4) Whitelist the subreddits you want to fetch images from in src/config/subreddits.ts
5) Run the bot using `npm start` in a node 6 or higher environment

# Usage
The bot can be invoked with the following message format `@ [subreddit]`
* '@' is a discord mention of the bot's name 
* '[subreddit]' is an optional subreddit to fetch from. If no subreddit is sent then a random one will be chosen