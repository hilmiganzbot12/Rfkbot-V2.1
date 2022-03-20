let fetch = require('node-fetch')
let { MessageType } = require('@adiwajshing/baileys')
let handler = async(m, { conn }) => {
    let kamisato = `
┌〔 List Berlangganan 〕
├ 1 Minggu
├ 1 Bulan
├ 1 Tahun
├ Permanent
└────

Silahkan klik pada "List Harga" untuk melihat list.

Pembayaran:
Gopay: 082143349069
Dana: 082143349069
Ovo: 082331236882
Belum Premium? Ada Qris all pay
Qris all pay: minta Owner
`.trim()
    const button = {
        buttonText: 'List Harga',
        description: kamisato,
        sections:  [{title: "Silahkan di pilih", rows: [
        {title: '1 Minggu', description: "Rp1.000\nSewa bot selama 1 minggu [Berlaku kelipatan].", rowId:".masuk"},
        {title: '1 Bulan', description: "Rp5.000\nSewa bot selama 1 minggu [Berlaku kelipatan].", rowId:".masuk"},
        {title: '1 Minggu', description: "Rp8.000\nSewa bot selama 1 Tahun [Berlaku kelipatan].", rowId:".masuk"},
        {title: 'Permanent', description: "Rp10.000\nSewa bot tanpa batasan waktu.", rowId:".masuk"},
        {title: 'Owner', description: "Chat owner nya jika ada perlu.", rowId:".owner"},
        {title: 'Rules', description: "Kebijakan Privasi, Syarat Ketentuan dan Peraturan.", rowId:".rules"},
       ] }],
        listType: 1
       }
    conn.sendMessage(m.chat, button, MessageType.listMessage, { quoted: m })
}
handler.tags = ['main']
handler.command = /^(sewa)$/i
handler.help = ['sewa']
module.exports = handler
//Haruno Bot
