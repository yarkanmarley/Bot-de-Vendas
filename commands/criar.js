const Discord = require("discord.js")
const { JsonDatabase, } = require("wio.db");
const perms = new JsonDatabase({ databasePath:"./databases/myJsonPerms.json" });
const db = require("quick.db")
const dbB = new JsonDatabase({ databasePath:"./databases/myJsonBotConfig.json" });
module.exports = {
    name: "criar", // Coloque o nome do comando do arquivo
    run: async(client, message, args) => {
        if (message.author.id !== `${perms.get(`${message.author.id}_id`)}`) return message.reply(`<a:errado1:1041645915175391292> | ****Você não está na lista de pessoas!****`).then(msg => setTimeout(() => msg.delete().catch(err => console.log(err)), 5000));
        if (!args[0]) return message.reply(`<a:errado1:1041645915175391292> | Você não deu nenhum ID a esse produto!`).then(msg => setTimeout(() => msg.delete().catch(err => console.log(err)), 5000));
        if(args[0] === `${db.get(`${args[0]}.idproduto`)}`) return message.reply(`❌ | Esse ID de produto já é existente!`).then(msg => setTimeout(() => msg.delete().catch(err => console.log(err)), 5000)); 

      const idproduto = args[0]
        db.set(`${idproduto}.idproduto`, `${args[0]}`)
        db.set(`${idproduto}.nome`, `Nao configuramos ainda...`)
        db.set(`${idproduto}.desc`, `Nao configuramos ainda...`)
        db.set(`${idproduto}.preco`, `10.00`)
        db.push(`${idproduto}.conta`, [`${idproduto}`])
        const a = db.get(`${idproduto}.conta`);
        const removed = a.splice(0, 1);
        db.set(`${idproduto}.conta`, a);

        const row = new Discord.MessageActionRow()               
        .addComponents(
            new Discord.MessageButton()
                .setCustomId(args[0])
                .setLabel('Comprar')
                .setEmoji('<:blast_carrinho:1024351159332393031>')
                .setStyle('SUCCESS'),
        );

        const embed = new Discord.MessageEmbed()
            .setTitle(`${dbB.get(`nomebot`)} | Produto`)
            .setDescription(`\`\`\`${db.get(`${args[0]}.desc`)}\`\`\`\n🛒 **Nome:** **__${db.get(`${args[0]}.nome`)}__**\n💸 **Preço:** **R$${db.get(`${args[0]}.preco`)}**\n📦 **Estoque:** **${db.get(`${args[0]}.conta`).length}**`)
            .setColor(`${dbB.get(`cor`)}`)
            .setFooter("Para comprar clique no botão abaixo.")
            .setImage(`${dbB.get(`banner`)}`)
            message.channel.send({embeds: [embed], components: [row]})

       }
     }
        
                        
