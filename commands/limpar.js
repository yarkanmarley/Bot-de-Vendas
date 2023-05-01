const Discord = require("discord.js")
const db = require("quick.db")
const { JsonDatabase, } = require("wio.db");
const config = require("../config.json")
const dbB = new JsonDatabase({ databasePath:"./databases/myJsonBotConfig.json" });
module.exports = {
    
    name: "stock", // Coloque o nome do comando do arquivo
    run: async(client, message, args) => {
        const embederro = new Discord.MessageEmbed()
        .setTitle(`Erro - Permissão`)
        .setDescription(`Você não tem permissão para isto!`)
        .setColor(`${dbB.get(`cor`)}`)
        .setFooter(`${dbB.get(`nomebot`)} - Todos os direitos reservados.`)
                if (!message.member.permissions.has("ADMINISTRATOR")) return message.channel.send({ embeds: [embederro] }).then(msg => {
                    setTimeout(() => msg.delete(), 5000)
                })
 message.channel.bulkDelete(99)

    }
}