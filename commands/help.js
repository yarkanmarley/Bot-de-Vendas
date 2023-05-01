const Discord = require("discord.js")
const { JsonDatabase, } = require("wio.db");
const db = require("quick.db")
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
                if (!message.member.permissions.has("ADMINISTRATOR")) return message.channel.send({ embeds: [embederro] })
        const embed = new Discord.MessageEmbed()
        .setTitle(`${dbB.get(`nomebot`)} | <:config:1037117083160420352> Comandos do Bot <:config:1037117083160420352> `)
        .setDescription(`
**📌 |  ${config.prefix}help** - Exibe está mensagem
**📌 |  ${config.prefix}configbot** - Configurar o Bot (Recomendado se acabou de adquirir o bot)
**📌 |  ${config.prefix}configcanais** - Configurar canais do Bot (Recomendado se acabou de adquirir o bot)
**📌 |  ${config.prefix}configtermos** - Configurar Termos de Compra (Recomendado se acabou de adquirir o bot)
**📌 |  ${config.prefix}criar** - Criar um produto
**📌 |  ${config.prefix}config** - Configurar um Produto
**📌 |  ${config.prefix}status** - Verificar o status de um pagamento
**📌 |  ${config.prefix}stockid** - Mostra o stock desse produto
**📌 |  ${config.prefix}produtoid** - Mostra todos od id dos Produtos criados
**📌 |  ${config.prefix}set** - Setar a mensagem de compra do produto
**📌 |  ${config.prefix}limpar** - Limpa as mensagens do canal
**📌 |  ${config.prefix}estatisticas** - Mostra as estatisticas de suas vendas
**📌 |  ${config.prefix}perfil** - Mostra o perfil de quem enviou o comando(liberado para todos os usuarios)
**📌 |  ${config.prefix}anunciar** - Enviar um anuncio embed
**📌 |  ${config.prefix}reembolso** - Reembolsar alguma compra
**📌 |  ${config.prefix}criarcupom** - Criar um cupom
**📌 |  ${config.prefix}configcupom** - Configurar um Cupom
**📌 |  ${config.prefix}botinfo** - Mostra algumas informações sobre o Bot
**📌 |  ${config.prefix}addperms** - Dar perms de Owner do bot
**📌 |  ${config.prefix}removeperms** - Remover perms de Owner do bot`)
.setColor(`${dbB.get(`cor`)}`)
.setThumbnail(`${dbB.get(`foto`)}`)
.setImage(`${dbB.get(`banner`)}`)
message.channel.send({embeds: [embed]})
        
    }
}
