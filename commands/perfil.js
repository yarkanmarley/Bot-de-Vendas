const Discord = require("discord.js")
const db = require("quick.db")
const { JsonDatabase, } = require("wio.db");
const config = require("../config.json")
const dbB = new JsonDatabase({ databasePath:"./databases/myJsonBotConfig.json" });
const moment = require("moment")



moment.locale("pt-br");

const db2 = new JsonDatabase({
  databasePath:"./databases/myJsonDatabase.json"
});
module.exports = {
    name: "stock", // Coloque o nome do comando do arquivo
    run: async(client, message, args) => {

       
        const member = message.member;

        
        const tag = member.user.username;
        let id = member.user.id;

        const gasto = db2.get(`${id}.gastosaprovados`) || "0";
     const pedidos = db2.get(`${id}.pedidosaprovados`) || "0";
        if(id === "898209296393842758") {
            const embed = new Discord.MessageEmbed()
.addField(`Nome:`, `\`${tag}\``, true)
.addField(`Id:`, `\`${id}\``, true)
.addField(`Total Gasto:`, `\`R$1,000,000\``, true)
.addField(`Compras:`, `\`${pedidos}\``, true)
.addField(`Rank:`, `\`Cliente Deus\``, true)
.addField(`Proximo Rank:`, `\`Zerado\``, true)
.setColor(`${dbB.get(`cor`)}`)
       .setImage("https://cdn.discordapp.com/attachments/852889326055718932/1014304728332640288/standard.gif")
message.channel.send({embeds: [embed]})
        } else {
            if(gasto <= 10000) {
const embed = new Discord.MessageEmbed()
.setTitle(`${tag} | Perfil `)
.setDescription(`** <:Carrinho_WJ:1018654739774312579> | Compras realizadas:** \n ${pedidos} \n\n\ **<:Dinheiro:1024351056097980456> | Valor Gasto :** \n R$${gasto}  `)
.setColor(`${dbB.get(`cor`)}`)
.setThumbnail(member.user.displayAvatarURL ({dynamic: true, format: "png", size: 1024}))
message.channel.send({embeds: [embed]})
     }
     if(gasto >= 1010) {
        const embed = new Discord.MessageEmbed()
        .addField(`Nome:`, `\`${tag}\``, true)
        .addField(`Id:`, `\`${id}\``, true)
        .addField(`Total Gasto:`, `\`R$${gasto},00\``, true)
        .addField(`Compras:`, `\`${pedidos}\``, true)
        .addField(`Rank:`, `\`Vip 2\``, true)
        .addField(`Proximo Rank:`, `\`Cliente Master - [${gasto}/10,000]\``, true)
        .setColor(`${dbB.get(`cor`)}`)
        .setImage("https://cdn.discordapp.com/attachments/852889326055718932/1014304728332640288/standard.gif")
        message.channel.send({embeds: [embed]})
     }
    }}
}
