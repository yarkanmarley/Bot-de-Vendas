const Discord = require("discord.js")
const { JsonDatabase, } = require("wio.db");
const config = new JsonDatabase({ databasePath:"./config.json" });
const perms = new JsonDatabase({ databasePath:"./databases/myJsonPerms.json" });
const db = new JsonDatabase({ databasePath:"./databases/myJsonBotConfig.json" });
const dbB = new JsonDatabase({ databasePath:"./databases/myJsonBotConfig.json" });

module.exports = {
    name: "configvendas", 
    run: async(client, message, args) => {
      if(message.author.id !== `${perms.get(`${message.author.id}_id`)}`) return message.reply(`❌ | **Você não está na lista de pessoas!**`).then(msg => setTimeout(() => msg.delete().catch(err => console.log(err)), 5000));
       
      const chave = args[0];
      const row = new Discord.MessageActionRow()
      .addComponents(
        new Discord.MessageButton()
          .setCustomId('relchave')
          .setEmoji('🔁')
          .setLabel('Atualizar')
          .setStyle('SUCCESS'),
      )
        .addComponents(
          new Discord.MessageButton()
            .setCustomId('logsvendas')
            .setEmoji('🔁')
            .setLabel('Logs privadas')
            .setStyle('SECONDARY'),
        )
        .addComponents(
          new Discord.MessageButton()
            .setCustomId('logspublica')
            .setEmoji('🔁')
            .setLabel('Logs públicas')
            .setStyle('SECONDARY'),
        )
        .addComponents(
          new Discord.MessageButton()
            .setCustomId('catecarrinho')
            .setEmoji('🔁')
            .setLabel('Categoria Carrinho')
            .setStyle('SECONDARY'),
        );
        
        const msg = await message.reply({ embeds: [new Discord.MessageEmbed()
          .setTitle(`Configurações de gerais`)
          .setDescription(`
**Logs privada:** <#${db.get(`logs`)}>
**Logs públicas:** <#${db.get(`logspublica`)}>
**Categoria do carrinho:** <#${db.get(`catecarrinho`)}>`)
          .setColor(`${db.get(`cor`)}`)], components: [row]})
        const interação = msg.createMessageComponentCollector({ componentType: "BUTTON", })
        interação.on("collect", async (interaction) => {
         if (message.author.id != interaction.user.id) {
          return;
         }
                
         if (interaction.customId === "delchave") {
           msg.delete()
           msg.channel.send("✅ | Excluido!")
           db.delete(`${chave}`)
         }
         if (interaction.customId === "logsvendas") {
             interaction.deferUpdate();
             msg.channel.send("Qual o novo chat de logs privada? `ID`").then(msg => {
               const filter = m => m.author.id === interaction.user.id;
               const collector = msg.channel.createMessageCollector({ filter, max: 1 });
               collector.on("collect", message => {
                 message.delete()
                 if (isNaN(message.content)) return msg.edit("❌ | Não coloque nenhum caractere especial além de números.")
                 db.set(`logs`, `${message.content}`)
                 msg.edit("Logs privada atualizada! ✅")
             })
           })
         }
         if (interaction.customId === "logspublica") {
          interaction.deferUpdate();
          msg.channel.send("Qual o novo chat de logs públicas? `ID`").then(msg => {
            const filter = m => m.author.id === interaction.user.id;
            const collector = msg.channel.createMessageCollector({ filter, max: 1 });
            collector.on("collect", message => {
              message.delete()
              db.set(`logspublica`, `${message.content}`)
              msg.edit("Logs públicas atualizada! ✅")
          })
        })
      }
         if (interaction.customId === "catecarrinho") {
          interaction.deferUpdate();
          msg.channel.send("Qual a nova categoria? `ID`").then(msg => {
            const filter = m => m.author.id === interaction.user.id;
            const collector = msg.channel.createMessageCollector({ filter, max: 1 });
            collector.on("collect", message => {
              message.delete()
              db.set(`catecarrinho`, `${message.content}`)
              msg.edit("Categoria atualizada! ✅")
          })
        })
      }

         if (interaction.customId === 'relchave') {
           interaction.deferUpdate();
           const embed = new Discord.MessageEmbed()
           .setTitle(`Configurações de gerais`)
           .setDescription(`
           **Logs privada:** <#${db.get(`logs`)}>
           **Logs públicas:** <#${db.get(`logspublica`)}>
           **Categoria do carrinho:** <#${db.get(`catecarrinho`)}>`)
             .setColor(`${db.get(`cor`)}`)
           msg.edit({ embeds: [embed] })
           message.channel.send("Informações atualizada! ✅")
             }
           })
         }
       }