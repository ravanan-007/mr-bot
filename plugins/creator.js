let handler = function (m) {
  // this.sendContact(m.chat, '919048410619', 'Ranjith', m)
  this.sendContact(m.chat, '0', 'Insert Owner Number Here', m)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
