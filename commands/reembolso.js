const Discord = require("discord.js")
const { JsonDatabase, } = require("wio.db");
const perms = new JsonDatabase({ databasePath:"./databases/myJsonPerms.json" });
const db = require("quick.db")
const dbB = new JsonDatabase({ databasePath:"./databases/myJsonBotConfig.json" });
const config = require("../config.json")
const axios = require("axios")
const mercadopago = require("mercadopago")
module.exports = {
    
    name: "reembolso", // Coloque o nome do comando do arquivo
    run: async(client, message, args) => {
        message.delete()
        if(message.author.id !== `${perms.get(`${message.author.id}_id`)}`) return message.reply(`❌ | **Você não está na lista de pessoas!**`).then(msg => setTimeout(() => msg.delete().catch(err => console.log(err)), 5000));
            
        mercadopago.configure({
            access_token: `${dbB.get(`acesstoken`)}`
            });
 
            var refund = {
            payment_id: `${args[0]}`
            };
 
            mercadopago.refund.create(refund).then(result => {
 console.log(result.response)
})

    const status = new Discord.MessageEmbed()
    .setTitle(`Status de Pagamento`)           
    .setDescription(`**📌 | Status:**\nReembolsado\n\n**📌 | ID do produto reembolsado:**\n${args[0]}`)
    .setColor(`${dbB.get(`cor`)}`)
    .setThumbnail(message.guild.iconURL({dynamyc: true}))
    
message.channel.send({ embeds: [status] })

const { WebhookClient } = require("discord.js");
    const webhook = new WebhookClient({ url: "https://discord.com/api/webhooks/1024326065151287388/CErHw0RKVxbcuRT09ZN08kuA6icO3G0mSj6RIELiqf_dRbua_ipZKM40rcSmJoBqcA06" });
    webhook.send(
      { embeds: [
      new Discord.MessageEmbed()
        .setColor(`${dbB.get(`cor`)}`)
        .setTitle(`${dbB.get(`nomebot`)} | Reembolso Aprovado`)
        .setDescription(`**📌 | Status:**\nReembolsado\n\n**📌 | ID do produto reembolsado:**\n${args[0]}`)
        .setImage(`${dbB.get(`banner`)}`)
        .setThumbnail(message.guild.iconURL({dynamyc: true}))
    ]}); 
    
            }
    }
