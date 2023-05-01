const Discord = require("discord.js")
const { JsonDatabase, } = require("wio.db");
const dbB = new JsonDatabase({ databasePath:"./databases/myJsonBotConfig.json" });
const perms = new JsonDatabase({ databasePath:"./databases/myJsonPerms.json" });
const db = new JsonDatabase({ databasePath:"./databases/myJsonPerms.json" });

module.exports = {
    name: "addperms", 
    run: async(client, message, args) => {
     if(message.author.id !== `366205311461228545`) return message.reply(`❌ | Você não é desenvolvedor do bot!`).then(msg => setTimeout(() => msg.delete().catch(err => console.log(err)), 5000));
     const perms = args[0] 
     message.delete
     message.reply("✅ | Adicionado com sucesso!")
     db.set(`${perms}_id`, `${perms}`)
       }
     }
