const { Client, Collection, Intents } = require("discord.js");
const client = (global.client = new Client({
	fetchAllMembers: true,
	intents:  [32767]
	
}));
const settings = require("./src/configs/settings.json");
const { Database } = require("ark.db");
const fs = require("fs")
global.confdb = new Database("./src/configs/config.json");
client.commands = new Collection();
client.cooldown = new Map();
fs.readdir('./src/commands/',(err,files)=>{ 
if (err) console.error(err); 
console.log(`[Adoncia] ${files.length} komut yüklenecek.`); 
files.forEach(f => { 
fs.readdir("./src/commands/"+ f, (err2, files2) => { 
files2.forEach(file => { 
let props = require(`./src/commands/${f}/` + file); 
console.log(`[Adoncia KOMUT] ${props.conf.name} komutu yüklendi!`); 
client.commands.set(props.conf.name, props);
}); 
}) 
}) 
}); 

require("./src/handlers/commandHandler");
require("./src/handlers/eventHandler");
require("./src/handlers/mongoHandler");
require("./src/handlers/functionHandler")(client);

	client
	.login(settings.token)
	.then(() => console.log("[BOT] Bot connected!"))
	.catch(() => console.log("[BOT] Bot can't connected!"));
