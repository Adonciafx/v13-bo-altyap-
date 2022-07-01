const { joinVoiceChannel } = require('@discordjs/voice');
module.exports = async () => {
var guildId = ""
let guild = client.guilds.cache.get(guildId);
if(guild) guild.members.fetch().then(fetched=> { })
console.log("Başaraıyla Üyeler Fetchlendi")
const VoiceChannel = client.channels.cache.get("");
joinVoiceChannel({
  channelId: VoiceChannel.id,
  guildId: VoiceChannel.guild.id,
  adapterCreator: VoiceChannel.guild.voiceAdapterCreator,
  selfDeaf: true
});
console.log("Başarıyla Sese Giriş Yaptım")
client.user.setPresence({ activities: [{ type: "STREAMING", url: "https://www.twitch.tv/adonciai", name: "Adoncia ❤️ Adonciafx" }]})
}
module.exports.conf = {
    name: "ready",
  };
  
