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
            .setCustomId('termos')
            .setEmoji('<:ticketlog:1036240546785665124>')
            .setLabel('Canal Termos')
            .setStyle('SECONDARY'),
        )
        .addComponents(
            new Discord.MessageButton()
              .setCustomId('attermos')
              .setEmoji('<a:espera:1014988520617672814>')
              .setLabel('Atualizar')
              .setStyle('SECONDARY'),
          );

        const msg = await message.reply({ embeds: [new Discord.MessageEmbed()
          .setTitle(`Bot Store | Configurando os Termos`)
          .setDescription(`
<:ticketlog:1036240546785665124> | **Canal dos termos:** <#${db.get(`canaltermos`)}>`)
          .setThumbnail(client.user.displayAvatarURL())
          .setColor(`${db.get(`cor`)}`)], components: [row]})
        const interação = msg.createMessageComponentCollector({ componentType: "BUTTON", })
        interação.on("collect", async (interaction) => {
         if (message.author.id != interaction.user.id) {
          return;
         }
                

          if (interaction.customId === "termos") {
              interaction.deferUpdate();
              msg.channel.send("❓ | Qual o canal de termos? (mande o id)").then(msg => {
                const filter = m => m.author.id === interaction.user.id;
                const collector = msg.channel.createMessageCollector({ filter, max: 1 });
                collector.on("collect", message => {
                  message.delete()
                  db.set(`canaltermos`, `${message.content}`)
                  msg.edit("✅ | Alterado!")
              })
            })
          }
        
          if (interaction.customId === 'attermos') {
            interaction.deferUpdate();
            const embed = new Discord.MessageEmbed()
            .setTitle(`Bot Store | Configurando o BOT`)
            .setDescription(`
            <:ticketlog:1036240546785665124> | **Canal dos termos:** <#${db.get(`canaltermos`)}>`)
              .setThumbnail(client.user.displayAvatarURL())
              .setColor(`${db.get(`cor`)}`)
            msg.edit({ embeds: [embed] })
            message.channel.send("✅ | Atualizado!")
              }
            })
          }
        }