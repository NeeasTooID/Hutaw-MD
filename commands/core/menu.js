const tags = {
default: "default",
owner: "owner"
}
const rawwr = Object.keys(global.Events)
const menu = {
before: `list command yang tersedia`.trimStart(),
type: "🗂️ #type ",
}
const fetch = require("node-fetch")

module.exports = {
name: ["menu"],
type: ["default"],
description: "menampilkan command",
utilisation: "#menu",
async execute(m) {
let raw = Object.values(global.Events).map(v => {
return {
help: Array.isArray(v.type) ? v.name : [v.name],
type: Array.isArray(v.type) ? v.type : [v.type],
custom: "custom" in v
}
})
for (let p of raw)
if (p && 'type' in p)
for (let i of p.type)
if (!(i in tags) && i) tags[i] = i
let before = menu.before
let type = menu.type

text = [
before,
...Object.keys(tags).map(v => {
return type.replace(/#type/g, tags[v]) + ("\n") + [
...raw.filter(menu => menu.type && menu.type.includes(v) && menu.help).map(menu => {
return menu.custom ? "*٬࿊⃟🔏*  " +menu.help : "*٬࿊⃟🔏*  " + userbot.prefix + menu.help
})].join("\n")
})].join("\n\n")

text += `\n\njika tidak tahu menggunakan command, format ${userbot.prefix}help command. contoh ${userbot.prefix}help ${random(rawwr)}`
text += `\nSpecial Thanks To:
-Allah SWT
-FearTeam
-Adhiraj Singh(adiwajshing)
-All Creator Bot
-Nurutomo`
conn.sendButtonLoc(m.chat, await (await fetch('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa1pVfdb1zUoSve4Unc08jl5BpCHwfys8qxA&usqp=CAU')).buffer(), text, `@created By fauzan`, `Creator`, `creator`, m)
}
}

function random(ext) {
return ext[Math.floor(Math.random () * ext.length)]
}
