const Discord = require("discord.js")
const { JsonDatabase, } = require("wio.db");
const config = new JsonDatabase({ databasePath:"./config.json" });
const perms = new JsonDatabase({ databasePath:"./databases/myJsonPerms.json" });
const db = new JsonDatabase({ databasePath:"./databases/myJsonBotConfig.json" });
const dbB = new JsonDatabase({ databasePath:"./databases/myJsonBotConfig.json" });

module.exports = {
    name: "configbot", 
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
            .setCustomId('setbanner')
            .setEmoji('🔁')
            .setLabel('Banner principal')
            .setStyle('SECONDARY'),
        )
        .addComponents(
          new Discord.MessageButton()
            .setCustomId('setfoto')
            .setEmoji('🔁')
            .setLabel('Banner entrega')
            .setStyle('SECONDARY'),
        );
        
        const msg = await message.reply({ embeds: [new Discord.MessageEmbed()
          .setTitle(`Configurações de Banners`)
          .setDescription(`
**Banner:**  [Ver imagem](${db.get(`banner`)})
**Banner entrega:** [Ver imagem](${db.get(`bannerentrega`)})`)
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
         if (interaction.customId === "setbanner") {
             interaction.deferUpdate();
             msg.channel.send("Qual o novo banner principal?").then(msg => {
               const filter = m => m.author.id === interaction.user.id;
               const collector = msg.channel.createMessageCollector({ filter, max: 1 });
               collector.on("collect", message => {
                 message.delete()
                 db.set(`banner`, `${message.content}`)
                 msg.edit("Banner principal atualizado! ✅")
             })
           })
         }
         if (interaction.customId === 'setfoto') {
             interaction.deferUpdate();
             msg.channel.send("Qual o novo banner entrega?").then(msg => {
               const filter = m => m.author.id === interaction.user.id;
               const collector = msg.channel.createMessageCollector({ filter, max: 1 });
               collector.on("collect", message => {
                 message.delete()
                 db.set(`bannerentrega`, `${message.content}`)
                 msg.edit("Banner entrega atualizado! ✅")
             })
           })
         }
         if (interaction.customId === 'relchave') {
           interaction.deferUpdate();
           const embed = new Discord.MessageEmbed()
           .setTitle(`Configurações de Banners`)
           .setDescription(`
**Banner principal:**  [Ver imagem](${db.get(`banner`)})
**Banner entrega:** [Ver imagem](${db.get(`bannerentrega`)})`)
             .setColor(`${db.get(`cor`)}`)
           msg.edit({ embeds: [embed] })
           message.channel.send("Informações atualizada! ✅")
             }
           })
         }
       }