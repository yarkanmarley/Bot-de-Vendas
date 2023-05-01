const Discord = require("discord.js")
const { JsonDatabase, } = require("wio.db");
const perms = new JsonDatabase({ databasePath:"./databases/myJsonPerms.json" });
const db = require("quick.db")
const dbB = new JsonDatabase({ databasePath:"./databases/myJsonBotConfig.json" });
const config = require("../config.json")

const db2 = new JsonDatabase({
  databasePath:"./databases/myJsonDatabase.json"
});
module.exports = {
    name: "stock", // Coloque o nome do comando do arquivo
    run: async(client, message, args) => {
        if(message.author.id !== `${perms.get(`${message.author.id}_id`)}`) return message.reply(`❌ | **Você não está na lista de pessoas!**`).then(msg => setTimeout(() => msg.delete().catch(err => console.log(err)), 5000));
const embed = new Discord.MessageEmbed()
.setDescription(`Total Recebido: \`R$${db2.get("gastostotal") || "0"},00\`\nPedidos Feitos: \`${db2.get("pedidostotal") || "0"}\``)
.setColor(`${dbB.get(`cor`)}`)
.setImage(`${dbB.get(`banner`)}`)
                message.channel.send({embeds: [embed]})

    }
}