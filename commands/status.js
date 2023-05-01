const Discord = require("discord.js")
const { JsonDatabase, } = require("wio.db");
const db = require("quick.db")
const config = require("../config.json")
const dbB = new JsonDatabase({ databasePath:"./databases/myJsonBotConfig.json" });
const axios = require("axios")
module.exports = {
    
    name: "stock", // Coloque o nome do comando do arquivo
    run: async(client, message, args) => {
        message.delete()
        const embederro = new Discord.MessageEmbed()
        .setTitle(`Erro - Permissão`)
        .setDescription(`Você não tem permissão para isto!`)
        .setColor(`${dbB.get(`cor`)}`)
        .setFooter(`${dbB.get(`nomebot`)} - Todos os direitos reservados.`)
                if (!message.member.permissions.has("ADMINISTRATOR")) return message.channel.send({ embeds: [embederro] }).then(msg => {
                    setTimeout(() => msg.delete(), 5000)
                })
                axios.get(`https://api.mercadolibre.com/collections/notifications/${args[0]}`, {
                                                                    headers: {
                                                                        'Authorization': `Bearer ${dbB.get(`acesstoken`)}`
                                                                    }
                                                                }).then(async (doc) => {
                                                                    console.log(doc)
                                                                    if(doc.data.collection.status === "approved") {
                                                                      var msg = "<a:certo1:1014994068616527972> | Pagamento Aprovado";
                                                                    } else {
                                                                       var msg = "<a:errado1:1014994101747339314> | Pagamento Cancelado";
                                                                    }
message.channel.send(`${msg}\n<:Dinheiro:1024351056097980456> | Total Recebido: R$${doc.data.collection.transaction_amount}`)
                                                                }).catch(e => {
                                                                    console.log(e)
                                                                    message.channel.send("Erro , nesse canal não teve uma venda")
                                                                })

    }
}
