const fs = Ft.fs
const yts = require("yt-search")

module.exports = {
name: ["play"],
type: ["download"],
description: "download audio/video from youtube url",
utilisation: userbot.prefix + "play",

async execute(m) {
let { conn, text } = data
conn.data = conn.data ? conn.data : {}
conn.play1 = []
if (m.chat in conn.data && "sender" in conn.data[m.chat]) return m.reply("sudah ada yang memakai command, silahkan menunggu giliran")
if (text) {
const cewek = await yts(text)
const hasil = cewek.all
let nom = 0
txt = ``
for (let i of hasil) {
nom++
txt += "[" + nom+ "]. " +"title: " +i.title 
txt += "\nurl : " + i.url + "\n\n"
conn.play1.push(i.url)
conn.data = {
[m.chat]: {
sender: m.sender
}
}
}
m.reply(txt)
} else {

conn.data = {
[m.chat]: {
sender: m.sender
}
}
m.reply("reply bot dan masukkan query")
}
}
}
