const Discord = require("discord.js")
const { JsonDatabase, } = require("wio.db");
const perms = new JsonDatabase({ databasePath:"./databases/myJsonPerms.json" });
const db = new JsonDatabase({ databasePath:"./databases/myJsonPerms.json" });

module.exports = {
    name: "removeperms", 
    run: async(client, message, args) => {
        if(message.author.id !== `841029765015142410`) return message.reply(`❌ | Você não é desenvolvedor do bot!`).then(msg => setTimeout(() => msg.delete().catch(err => console.log(err)), 5000));
     const perms = args[0] 
     message.reply("✅ | Removido com sucesso!")
     db.delete(`${perms}_id`)
       }
     }