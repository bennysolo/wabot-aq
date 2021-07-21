  let handler = async (m, { conn, args }) => {
  let ownerGroup = m.chat.split`-`[0] + '@s.whatsapp.net'
  let groupMem = await conn.groupMetadata(m.chat)
  let sleep = async (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}
  let groupMemb = groupMem.participants
  let users = groupMemb.filter(u => !(u.jid == ownerGroup || u.jid.includes(conn.user.jid)))
  for (let i = 0; i < users.length; i++) {
  if (users[i].jid.endsWith('@s.whatsapp.net')) {
  await sleep(2000)
  conn.groupRemove(m.chat, [users[i].jid])
  }
}
handler.help = ['kickall']
handler.tags = ['admin']
handler.command = /^(kick|\-)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false

handler.admin = true
handler.botAdmin = true

handler.fail = null
handler.limit = true

module.exports = handler
