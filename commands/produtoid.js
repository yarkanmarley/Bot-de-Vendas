const Discord = require("discord.js")
const { JsonDatabase, } = require("wio.db");
const perms = new JsonDatabase({ databasePath:"./databases/myJsonPerms.json" });
const dbB = new JsonDatabase({ databasePath:"./databases/myJsonBotConfig.json" });
const db = require("quick.db")
const config = require("../config.json")

module.exports = {
    
    name: "produtoid", // Coloque o nome do comando do arquivo
    run: async(client, message, args) => {
        message.delete()
        if(message.author.id !== `${perms.get(`${message.author.id}_id`)}`) return message.reply(`❌ | **Você não está na lista de pessoas!**`).then(msg => setTimeout(() => msg.delete().catch(err => console.log(err)), 5000));
                const embednprod = new Discord.MessageEmbed()
                .setTitle("Erro - Sistema de Estoque")
                .setDescription("Você não tem nenhum produto adicionado, utilize \`[.add]\` para criar o produto!")
                .setColor(`${dbB.get(`cor`)}`)
        if(db.all().length == 0) return message.channel.send({embeds: [embednprod]}).then(msg => {
            setTimeout(() => msg.delete(), 10000)
        })
const itens = db.all().map(item => `ID: ${item.ID} `)
const embed = new Discord.MessageEmbed()
.setTitle("Id dos seus produtos")
.setDescription(`\`\`\`${itens.join("\n\n")}\`\`\``)
.setColor(`${dbB.get(`cor`)}`)
message.channel.send({embeds: [embed]}).then(msg => {
    setTimeout(() => msg.delete(), 10000)
})

    }
}