let handler = async m => m.reply(`
╭─「 Donasi • donate 」
│ • subcribe my channel : https://youtube.com/channel/UCzmR66qTS65JUNNmFplCMNg
│ • Google pay : 9048410619
╰────
`.trim()) // Add it yourself if you want
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
