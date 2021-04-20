let handler  = async (m, { conn }) => {
    conn.tebakgambar = conn. guess the image ? conn.tebakgambar : {}
    let id = m.chat
    if (!(id in conn.tebakgambar)) throw false
    let json = conn.tebakgambar[id][1]
    m.reply('```' + json.help + '```')
}
handler.command = /^hint$/i

module.exports = handler