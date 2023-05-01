const Discord = require("discord.js")
const { JsonDatabase, } = require("wio.db");
const perms = new JsonDatabase({ databasePath:"./databases/myJsonPerms.json" });
const dbB = new JsonDatabase({ databasePath:"./databases/myJsonBotConfig.json" });
const db = require("quick.db")
const config = require("../config.json")
module.exports = {
    name: "stock", // Coloque o nome do comando do arquivo
    run: async(client, message, args) => {
        message.delete()
        if(message.author.id !== `${perms.get(`${message.author.id}_id`)}`) return message.reply(`❌ | **Você não está na lista de pessoas!**`).then(msg => setTimeout(() => msg.delete().catch(err => console.log(err)), 5000));
        if(!args[0]) return message.channel.send("❌ | insira um produto")
                if(!db.get(args[0])) return message.channel.send("❌ | Produto inexistente")

const itens = db.get(`${args[0]}.conta`);
const embed = new Discord.MessageEmbed()
.setTitle(`Mostrando Estoque de: ${args[0]}`)
.setDescription(`\`\`\`${itens.join(" \n") || "Sem estoque"}\`\`\``)
.setColor(`${dbB.get(`cor`)}`)
.setFooter(`${dbB.get(`nomebot`)} - Sistema de estoque`)
message.channel.send({embeds: [embed]})
    }
}