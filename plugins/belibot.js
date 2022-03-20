let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
	conn.send2ButtonLoc(m.chat, await (await fetch(fla + 'sewa bot')).buffer(), `╠═〘 Beli Bot 〙 ═
╠➥ *_Jadibot : 10k/Bulan_*
╠➥ *_Jadibot : 15k/Manen_*
╠➥ *_JasaRun : 10k/Bulan_*
╠➥ *_JasaRun : 20k/Manen_*
╠➥ *_Sewa bot : ketik .sewa_*
╠➥ *_Pasang iklan di Black BotZ : 10k/Manen_*
║    
╠═〘 PEMBAYARAN 〙 ═
╠➥ Qris all pay
║
╠═ Tertarik Untuk Jadibot?
╠➥Ketuk Tombol Di Bawah Ya
║
╠═ ©2022
╠═ Scrip original by Black BotZ x AlyaXzy
╠═〘 AlyaaXzy 〙 ═`.trim(), watermark, 'Dana', '#viadana', 'Pulsa', '#viapulsa', m)
}

handler.command = /^sewabot$/i

module.exports = handler
