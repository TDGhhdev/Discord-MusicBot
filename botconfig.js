module.exports = {
  Admins: ["384526140376743962"], //Admins of the bot
  ExpressServer: false, //If you wanted to make the website run or not
  DefaultPrefix: process.env.Prefix || ">", //Default prefix, Server Admins can change the prefix
  Port: 3030, //Which port website gonna be hosted
  SupportServer: "TBD", //Support Server Link
  Token: process.env.Token || "OTUwMjQ2NDY1NDA0NTU1Mjc0.YiWH_A.We-cV1iedrTC3OL2S1i6qiK2kPA", //Discord Bot Token
  ClientID: process.env.Discord_ClientID || "950246465404555274", //Discord Client ID
  ClientSecret: process.env.Discord_ClientSecret || "tSc5mJUHZvQ-TtT8vwSENdDR19-aXMea", //Discord Client Secret
  Scopes: ["identify", "guilds", "applications.commands"], //Discord OAuth2 Scopes
  ServerDeafen: true, //If you want bot to stay deafened
  DefaultVolume: 30, //Sets the default volume of the bot, You can change this number anywhere from 1 to 100
  CallbackURL: "/api/callback", //Discord API Callback url. Do not touch it if you don't know what you are doing. All you need to change for website to work is on line 20.
  "24/7": false, //If you want the bot to be stay in the vc 24/7
  CookieSecret: "HHG Da Best", //A Secret like a password
  IconURL:
    "https://i.imgur.com/Zf59Rly.gif", //URL of all embed author icons | Dont edit unless you dont need that Music CD Spining
  EmbedColor: "#5e6162", //Color of most embeds | Dont edit unless you want a specific color instead of a random one each time
  Permissions: 2205281600, //Bot Inviting Permissions
  Website: process.env.Website || "https://0f6f-18-221-216-7.ngrok.io", //Website where it is hosted at includes http or https || Use "0.0.0.0" if you using Heroku || Do not include /api/callback. Just the website url. I.e. "https://foo.bar"
  //If you get invalid oauth, make sure on the discord developer page you set the oauth url to something like: https://example.com/api/callback.
  
  Presence: {
    status: "online", // You can show online, idle, and dnd
    name: "Playing The Most High Quality Music On Discord", // The message shown
    type: "PLAYING", // PLAYING, WATCHING, LISTENING, STREAMING
  },

   // Lavalink server; public lavalink -> https://lavalink-list.darrennathanael.com/; create one yourself -> https://darrennathanael.com/post/how-to-lavalink/
  // The default one should work fine, altho if you have issue with it, you can create your own or use another public lavalink.
  Lavalink: {
    id: "Main", //- Used for indentifier. You can set this to whatever you want.
    host: "lavalink.darrenofficial.com", //- The host name or IP of the lavalink server.
    port: 80, // The port that lavalink is listening to. This must be a number!
    pass: "hisudhan", //- The password of the lavalink server.
    secure: false, // Set this to true if the lavalink uses SSL. if not set it to false.
  },

  //Please go to https://developer.spotify.com/dashboard/
  Spotify: {
    ClientID: process.env.Spotify_ClientID || "35ee983e6eef4da49d3680f92adf6a7c", //Spotify Client ID
    ClientSecret: process.env.Spotify_ClientSecret || "481327e7a39e4b8897636b9fde625151", //Spotify Client Secret
  },
};
