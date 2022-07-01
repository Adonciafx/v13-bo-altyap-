const Discord = require("discord.js")
module.exports= { 
conf:{ 
aliases:["pp", "av"], 
name:"avatar",
help: ".avatar [@user]",
category: "İnformation",
enabled: true 
},

run: async (client, message, args, prefix) => {
let user = message.mentions.users.first() || client.users.cache.get(args[0]) || (args[0] && args[0].length ? client.users.cache.find(x => x.username.match(new RegExp(args.join(" "), "mgi"))) : null) || null;
if (!user) 
  try { user = await client.users.fetch(args[0]); }
  catch (err) { user = message.author; }
const avatar = `${user.displayAvatarURL({ dynamic: true, size: 4096})}`
  const row = new Discord.MessageActionRow()
  .addComponents(
      new Discord.MessageButton()
          .setLabel("Resim Adresi")
          .setStyle('LINK')
          .setURL(`${avatar}`)
  )
  let embed = new Discord.MessageEmbed()
.setAuthor({ name: user.tag, iconURL: user.displayAvatarURL({ dynamic: true }) })
.setDescription(`**${user.tag}** adlı kullanıcının profil fotoğrafı!`)
.setImage(user.displayAvatarURL({dynamic: true, size: 2048}))
.setFooter({ text: `${message.author.tag} tarafından istendi!`, iconURL: message.author.displayAvatarURL({ dynamic: true }) })
message.channel.send({ embeds: [embed], components: [row] })

        
    
  }
    }


