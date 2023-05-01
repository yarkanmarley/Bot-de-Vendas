const Discord = require("discord.js")
const db = require("quick.db")
const { JsonDatabase, } = require("wio.db");
const moment = require("moment")
const dbB = new JsonDatabase({ databasePath:"./databases/myJsonBotConfig.json" });



moment.locale("pt-br");

const db2 = new JsonDatabase({
  databasePath:"./databases/myJsonDatabase.json"
});
module.exports = {
    name: "stock", // Coloque o nome do comando do arquivo
    run: async(client, message, args) => {
                if (!message.member.permissions.has("ADMINISTRATOR")) return message.channel.send({ embeds: [embederro] })
     
        const hojepedidos = db2.get(`${moment().format('L')}.pedidos`)  || 0;
        const hojerecebimentos = db2.get(`${moment().format('L')}.recebimentos`) || 0;
        var setedias = 0;

        setedias = Number(setedias) + Number(hojepedidos);
        setedias = Number(setedias) + Number(db2.get(`${moment().subtract(1, 'days').format('L')}.pedidos`) || 0);
        setedias = Number(setedias) + Number(db2.get(`${moment().subtract(2, 'days').format('L')}.pedidos`) || 0);
        setedias = Number(setedias) + Number(db2.get(`${moment().subtract(3, 'days').format('L')}.pedidos`) || 0);
        setedias = Number(setedias) + Number(db2.get(`${moment().subtract(4, 'days').format('L')}.pedidos`) || 0);
        setedias = Number(setedias) + Number(db2.get(`${moment().subtract(5, 'days').format('L')}.pedidos`) || 0);
        setedias = Number(setedias) + Number(db2.get(`${moment().subtract(6, 'days').format('L')}.pedidos`) || 0);
        setedias = Number(setedias) + Number(db2.get(`${moment().subtract(7, 'days').format('L')}.pedidos`) || 0);

        var setediasrec = 0;
        setediasrec = Number(setediasrec) + Number(hojerecebimentos);
        setediasrec = Number(setediasrec) + Number(db2.get(`${moment().subtract(1, 'days').format('L')}.recebimentos`) || 0);
        setediasrec = Number(setediasrec) + Number(db2.get(`${moment().subtract(2, 'days').format('L')}.recebimentos`) || 0);
        setediasrec = Number(setediasrec) + Number(db2.get(`${moment().subtract(3, 'days').format('L')}.recebimentos`) || 0);
        setediasrec = Number(setediasrec) + Number(db2.get(`${moment().subtract(4, 'days').format('L')}.recebimentos`) || 0);
        setediasrec = Number(setediasrec) + Number(db2.get(`${moment().subtract(5, 'days').format('L')}.recebimentos`) || 0);
        setediasrec = Number(setediasrec) + Number(db2.get(`${moment().subtract(6, 'days').format('L')}.recebimentos`) || 0);
        setediasrec = Number(setediasrec) + Number(db2.get(`${moment().subtract(7, 'days').format('L')}.recebimentos`) || 0);



//////////////////////
var setedias2 = 0;

setedias2 = Number(setedias2) + Number(hojepedidos);
setedias2 = Number(setedias2) + Number(db2.get(`${moment().subtract(1, 'days').format('L')}.pedidos`) || 0);
setedias2 = Number(setedias2) + Number(db2.get(`${moment().subtract(2, 'days').format('L')}.pedidos`) || 0);
setedias2 = Number(setedias2) + Number(db2.get(`${moment().subtract(3, 'days').format('L')}.pedidos`) || 0);
setedias2 = Number(setedias2) + Number(db2.get(`${moment().subtract(4, 'days').format('L')}.pedidos`) || 0);
setedias2 = Number(setedias2) + Number(db2.get(`${moment().subtract(5, 'days').format('L')}.pedidos`) || 0);
setedias2 = Number(setedias2) + Number(db2.get(`${moment().subtract(6, 'days').format('L')}.pedidos`) || 0);
setedias2 = Number(setedias2) + Number(db2.get(`${moment().subtract(7, 'days').format('L')}.pedidos`) || 0);
setedias2 = Number(setedias2) + Number(db2.get(`${moment().subtract(8, 'days').format('L')}.pedidos`) || 0);
setedias2 = Number(setedias2) + Number(db2.get(`${moment().subtract(9, 'days').format('L')}.pedidos`) || 0);
setedias2 = Number(setedias2) + Number(db2.get(`${moment().subtract(10, 'days').format('L')}.pedidos`) || 0);
setedias2 = Number(setedias2) + Number(db2.get(`${moment().subtract(11, 'days').format('L')}.pedidos`) || 0);
setedias2 = Number(setedias2) + Number(db2.get(`${moment().subtract(12, 'days').format('L')}.pedidos`) || 0);
setedias2 = Number(setedias2) + Number(db2.get(`${moment().subtract(13, 'days').format('L')}.pedidos`) || 0);
setedias2 = Number(setedias2) + Number(db2.get(`${moment().subtract(14, 'days').format('L')}.pedidos`) || 0);
setedias2 = Number(setedias2) + Number(db2.get(`${moment().subtract(15, 'days').format('L')}.pedidos`) || 0);
setedias2 = Number(setedias2) + Number(db2.get(`${moment().subtract(16, 'days').format('L')}.pedidos`) || 0);
setedias2 = Number(setedias2) + Number(db2.get(`${moment().subtract(17, 'days').format('L')}.pedidos`) || 0);
setedias2 = Number(setedias2) + Number(db2.get(`${moment().subtract(18, 'days').format('L')}.pedidos`) || 0);
setedias2 = Number(setedias2) + Number(db2.get(`${moment().subtract(19, 'days').format('L')}.pedidos`) || 0);
setedias2 = Number(setedias2) + Number(db2.get(`${moment().subtract(20, 'days').format('L')}.pedidos`) || 0);
setedias2 = Number(setedias2) + Number(db2.get(`${moment().subtract(21, 'days').format('L')}.pedidos`) || 0);
setedias2 = Number(setedias2) + Number(db2.get(`${moment().subtract(22, 'days').format('L')}.pedidos`) || 0);
setedias2 = Number(setedias2) + Number(db2.get(`${moment().subtract(23, 'days').format('L')}.pedidos`) || 0);
setedias2 = Number(setedias2) + Number(db2.get(`${moment().subtract(24, 'days').format('L')}.pedidos`) || 0);
setedias2 = Number(setedias2) + Number(db2.get(`${moment().subtract(25, 'days').format('L')}.pedidos`) || 0);
setedias2 = Number(setedias2) + Number(db2.get(`${moment().subtract(26, 'days').format('L')}.pedidos`) || 0);
setedias2 = Number(setedias2) + Number(db2.get(`${moment().subtract(27, 'days').format('L')}.pedidos`) || 0);
setedias2 = Number(setedias2) + Number(db2.get(`${moment().subtract(28, 'days').format('L')}.pedidos`) || 0);
setedias2 = Number(setedias2) + Number(db2.get(`${moment().subtract(29, 'days').format('L')}.pedidos`) || 0);
setedias2 = Number(setedias2) + Number(db2.get(`${moment().subtract(30, 'days').format('L')}.pedidos`) || 0);



var setediasrec2 = 0;
setediasrec2 = Number(setediasrec2) + Number(hojerecebimentos);
setediasrec2 = Number(setediasrec2) + Number(db2.get(`${moment().subtract(1, 'days').format('L')}.recebimentos`) || 0);
setediasrec2 = Number(setediasrec2) + Number(db2.get(`${moment().subtract(2, 'days').format('L')}.recebimentos`) || 0);
setediasrec2 = Number(setediasrec2) + Number(db2.get(`${moment().subtract(3, 'days').format('L')}.recebimentos`) || 0);
setediasrec2 = Number(setediasrec2) + Number(db2.get(`${moment().subtract(4, 'days').format('L')}.recebimentos`) || 0);
setediasrec2 = Number(setediasrec2) + Number(db2.get(`${moment().subtract(5, 'days').format('L')}.recebimentos`) || 0);
setediasrec2 = Number(setediasrec2) + Number(db2.get(`${moment().subtract(6, 'days').format('L')}.recebimentos`) || 0);
setediasrec2 = Number(setediasrec2) + Number(db2.get(`${moment().subtract(7, 'days').format('L')}.recebimentos`) || 0);
setediasrec2 = Number(setediasrec2) + Number(db2.get(`${moment().subtract(8, 'days').format('L')}.recebimentos`) || 0);
setediasrec2 = Number(setediasrec2) + Number(db2.get(`${moment().subtract(9, 'days').format('L')}.recebimentos`) || 0);
setediasrec2 = Number(setediasrec2) + Number(db2.get(`${moment().subtract(10, 'days').format('L')}.recebimentos`) || 0);
setediasrec2 = Number(setediasrec2) + Number(db2.get(`${moment().subtract(11, 'days').format('L')}.recebimentos`) || 0);
setediasrec2 = Number(setediasrec2) + Number(db2.get(`${moment().subtract(12, 'days').format('L')}.recebimentos`) || 0);
setediasrec2 = Number(setediasrec2) + Number(db2.get(`${moment().subtract(13, 'days').format('L')}.recebimentos`) || 0);
setediasrec2 = Number(setediasrec2) + Number(db2.get(`${moment().subtract(14, 'days').format('L')}.recebimentos`) || 0);
setediasrec2 = Number(setediasrec2) + Number(db2.get(`${moment().subtract(15, 'days').format('L')}.recebimentos`) || 0);
setediasrec2 = Number(setediasrec2) + Number(db2.get(`${moment().subtract(16, 'days').format('L')}.recebimentos`) || 0);
setediasrec2 = Number(setediasrec2) + Number(db2.get(`${moment().subtract(17, 'days').format('L')}.recebimentos`) || 0);
setediasrec2 = Number(setediasrec2) + Number(db2.get(`${moment().subtract(18, 'days').format('L')}.recebimentos`) || 0);
setediasrec2 = Number(setediasrec2) + Number(db2.get(`${moment().subtract(19, 'days').format('L')}.recebimentos`) || 0);
setediasrec2 = Number(setediasrec2) + Number(db2.get(`${moment().subtract(20, 'days').format('L')}.recebimentos`) || 0);
setediasrec2 = Number(setediasrec2) + Number(db2.get(`${moment().subtract(21, 'days').format('L')}.recebimentos`) || 0);
setediasrec2 = Number(setediasrec2) + Number(db2.get(`${moment().subtract(22, 'days').format('L')}.recebimentos`) || 0);
setediasrec2 = Number(setediasrec2) + Number(db2.get(`${moment().subtract(23, 'days').format('L')}.recebimentos`) || 0);
setediasrec2 = Number(setediasrec2) + Number(db2.get(`${moment().subtract(24, 'days').format('L')}.recebimentos`) || 0);
setediasrec2 = Number(setediasrec2) + Number(db2.get(`${moment().subtract(25, 'days').format('L')}.recebimentos`) || 0);
setediasrec2 = Number(setediasrec2) + Number(db2.get(`${moment().subtract(26, 'days').format('L')}.recebimentos`) || 0);
setediasrec2 = Number(setediasrec2) + Number(db2.get(`${moment().subtract(27, 'days').format('L')}.recebimentos`) || 0);
setediasrec2 = Number(setediasrec2) + Number(db2.get(`${moment().subtract(28, 'days').format('L')}.recebimentos`) || 0);
setediasrec2 = Number(setediasrec2) + Number(db2.get(`${moment().subtract(29, 'days').format('L')}.recebimentos`) || 0);
setediasrec2 = Number(setediasrec2) + Number(db2.get(`${moment().subtract(30, 'days').format('L')}.recebimentos`) || 0);


///////////////////////




        const embed = new Discord.MessageEmbed()
        .setTitle("<:info:1019066867698118779> | Seus rendimentos durante:")
        .addField(`Hoje:`, `<:DS_caixa:1036240744672919594> | Pedidos: \`${hojepedidos || "0"}\`\n<:Dinheiro:1024351056097980456> | Recebimentos: \`R$${hojerecebimentos || "0"}\``, true)
        .addField(`Ultimos 7 dias:`, `<:DS_caixa:1036240744672919594> | Pedidos: \`${setedias || "0"}\`\n<:Dinheiro:1024351056097980456> | Recebimentos: \`R$${setediasrec || "0"}\``, true)
        .addField(`Ultimos 30 dias:`, `<:DS_caixa:1036240744672919594> | Pedidos: \`${setedias2 || "0"}\`\n<:Dinheiro:1024351056097980456> | Recebimentos: \`R$${setediasrec2 || "0"}\``, true)
        .addField(`<:icon_outros:1023303030906568836> | Todo Periodo:`, `**Pedidos:** \`${db2.get(`pedidostotal`) || "0"}\` | **Recebimentos:** \`R$${db2.get(`gastostotal`) || "0"}\``)
        .setColor(`${dbB.get(`cor`)}`)
        message.channel.send({embeds: [embed]})
     
    }
}