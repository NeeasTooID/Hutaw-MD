const { igstalk } = require("../../Lib/scrape")
module.exports = {
name: ["igstalk"],
type: ["information"],
description: "information instagram username",
utilisation: userbot.prefix + "igstalk <username>",

async execute(m) {
let { conn, args } = data
try {
if (!args[0]) return conn.reply(m.chat, 'Tidak ada username', m)
const ig = await igstalk(args[0])
m.reply(Ft.util.format(ig))
} catch (e) {
m.reply(e)
}
}
}