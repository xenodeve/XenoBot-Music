const language = {
    loadevent: "โหลด player event แล้ว",
    loadcmd: "โหลด command แล้ว",
    ready: " เชื่อมต่อสำเร็จแว้ววว.",
    loadslash: "โหลด application [/] commands สำเร็จ.",
    error1: "The Bot Token You Entered Into Your Project Is Incorrect Or Your Bot's INTENTS Are OFF!",
    error2: "Please set the bot token in token.js or in your .env file in your project!",
    loadclientevent: "โหลด client event แล้ว",
    embed1: "คุณต้องมี <@&{djRole}>(DJ) บนเซิร์ฟเวอร์นี้เพื่อใช้คำสั่งนี้นะงับ ผู้ใช้ที่ไม่มีบทบาทนี้ไม่สามารถใช้ {cmdMAP} ได้น้าาา",
    message1: "คุณยังไม่ได้เข้าห้องเลยยฮะ. ❌",
    message2: "คุณไม่ได้อยู่ห้องเดียวกับน้องXenoนะฮะ. ❌",
    message3: "ไม่มี permissionนะ",
    msg4: "อุ้ยย!! มีบางอย่างผิดปกติ",
    msg5: "ไม่มีเพลงที่กำลังเล่นอยู่ฮับ. ❌",
    msg6: "บันทึกเพลงงะ",
    msg7: "ชื่อ playlist ไม่ถูกต้องนะฮะ.",
    msg8: "🐕เพลงนี้กำลัง streaming อยู่, ไม่มีหมดเวลานะงับ. 🐕🎧",
    msg9: "**✅ สำเร็จ:** อัปเดตข้อมูลเวลาแล้ว🐕.",
    msg10: "คุณยังไม่มี playlist ที่ใช้ชื่อนี้. ❌",
    msg11: "เพลงนี้อยู่ใน playlist นี้แล้ว. ❌",
    msg12: "เพิ่มเพลงใน playlist แล้ว.",
   error3: "Error reloading application [/] commands: ",
   error4: "คำเตือน: ดูเหมือนว่าคุณไม่ได้เขียน mongodb url? หากคุณไม่ป้อน URL mongodb ที่ถูกต้องในไฟล์ config.js คุณจะไม่สามารถใช้บอทได้.",
   msg13: `🎵🐕 กำลังเล่น : **{track?.title}** -> ในห้อง : **{queue?.connection.channel.name}** 🎧🐕`,
   //msg14: "ไม่มีเพลงในคิวแล้ว. คุณควรเปิดซักเพลงนะ, บ๊ายยยยย... ✅", //ไม่มีเพลงในคิวแล้ว. คุณควรเปิดซักเพลงนะ, บ๊ายยยยย... ✅
   msg15: "ผมตัดการเชื่อมต่อเพราะไม่มีใครเหลืออยู่ในช่องของผมแล้ว. ❌",
   msg16: "ผมมีปัญหาในการเชื่อมต่อกับช่องเสียง ❌ เหมือนมีคนเตะผมของห้อง? เสียใจจุง. 😔",
   msg17: "ไม่มีเพลงก่อนหน้า! ❌",
   msg18: "กำลังเล่น **{queue.previousTracks[1].title}** งับ. 🐕✅",
   msg19: " สถิติบอทนะ",
   msg20: "รีเฟรช",
   msg21: "**คุณหมดเวลาแล้ว!**",
   msg22: "**✅ ปรับปรุงข้อมูลแล้วนะ.**",
   msg23: "คิวว่างฮะ. ❌",
   msg24: "คิวเคลียเสร็จแย้ว.🐕🗑️",
   msg26: "หากคุณไม่ระบุบทบาท DJ คุณจะใช้คำสั่งไม่ได้!",
   msg25: "บทบาท DJ ถูกกำหนดเป็น <@&{role}> แล้ว.",
   msg27: "ลบบทบาทดีเจเรียบร้อยแล้ว.",
   msg28: "ยังไม่กำหนดบทบาทดีเจ.",
   msg29: `โปรดป้อนชื่อ filter ที่ถูกต้อง. ❌\n{filters}`,
   msg30: `ผมไม่พบ filter ที่มีชื่อนี้. ❌\n{filters}`,
   msg31: `เอฟเฟค: **{filter}**, Filter Status: **{status}**\n **โปรดจำไว้ว่าหากเพลงมีความยาว เวลาที่ใช้ประมวลผลอาจนานขึ้นตามไปด้วย.**`,
   msg32: "It's time to listen to music on your discord server with a completely free and advanced interface. Music bot that supports playing music on many platforms that will make your server feel special. Create your own music bot: https://github.com/umutxyp/MusicBot",
   msg33: "คำสั่งบอท",
   msg34: "You already have an active command here. ❌",
   msg35: "ทั้งคิว",
   msg36: "เพลงเดียว",
   msg37: "ปิด",
   msg38: "Loop System",
   msg39: `> **เลือกโหมดจากตัวเลือกด้านล่าง**
   > **ทั้งคิว :** วนซ้ำเพลงในคิว.
   > **เพลงเดียว :** วนซ้ำเพลงปัจจุบัน.
   > **ปิด :** ปิดการวนซ้ำ.`,
   msg40: "โหมด Loop คิว",
   msg41: "มีบางอย่างผิดพลาด. ❌",
   msg42: "กำลังเปิดโหมด Loop อยู่",
   msg43: "โหมด Loop ไม่ได้ใช้งานอยู่. ❌",
   msg44: `โหมด Loop **Closed** 🔁`,
   msg45: "หมดเวลา",
   msg46: "loop - สิ้นสุดแล้ว",
   msg47: 'บันทึก Playlist',
   msg48: "เพลงหยุดชั่วคราวแล้ว! ✅",
   msg49: `ปิงของข้อความ`,
   msg50: `เวลาในการตอบสนองของข้อความ`,
   msg51: `API Latency`,
   msg52: `ไม่มีเพลย์ลิสต์. ❌`,
   msg53: `คุณไม่ได้รับอนุญาตให้เล่นเพลย์ลิสต์นี้. ❌`,
   msg54: `คุณยังไม่มีเพลงที่ใช้ชื่อนี้. ❌`,
   msg55: `ไม่สามารถเข้าห้องนี้ได้. ❌`,
   msg56: `กำลังโหลด playlist... ✅`,
   msg57: `<@{interaction.member.id}>, เพิ่มเพลง **{music_filter.length}** ลงในคิวแล้ว. ✅`,
   msg58: `ไม่มีเพลย์ลิสต์ที่มีชื่อนี้. ❌`,
   msg59: `เขียนชื่อที่คุณต้องการค้นหา. ❌`,
   msg60: `ไม่พบ! ❌`,
   msg61: "กำลังคิดเพลงง... 🎧", //กำลังคิดเพลงง... 🎧
   msg62: "named list added to the playlist. ✅",
   msg63: `ไม่มีคิวแล้ว. ❌`,
   msg64: "Server Music List",
   msg65: "กำลังเล่น",
   msg66: "ขอจาก",
   msg67: "หน้า",
   msg68: `คำสั่งถูกยกเลิก. ✅`,
   msg69: `รายชื่อเพลงในเซิร์ฟเวอร์ - หมดเวลาแล้ว!`,
   msg70: `คุณหมดเวลาที่จะใช้คำสั่งนี้ คุณสามารถพิมพ์ \`/queue\` เพื่อใช้คำสั่งอีกครั้งได้.`,
   msg71: `Something went wrong. ❌ It's like you haven't stopped the music before.`,
   msg72: "ดำเนินการต่อแล้ว! ✅",
   msg73: `กรุณาป้อนชื่อเพลงที่ถูกต้อง. ❌`,
   msg74: `ไม่พบผลการค้นหา! ❌`,
   msg75: "ค้นหาเพลง",
   msg76: "เลือกเพลงจาก **1** ถึง **{maxTracks.length}** ⬇️",
   msg77: `ยกเลิกการค้นหาเพลง. ✅`,
   msg78: `กำลังคิด... 🎧`,
   msg79: "เพิ่มในคิวแล้ว. ✅🐕",
   msg80: `หมดเวลาค้นหาเพลงแล้ว ❌`,
   msg81: "ยกเลิก",
   msg82: `จำนวนที่คุณป้อนมากกว่าจำนวนเพลงในคิว. ❌`,
   msg83: "ข้ามเพลงแล้ว ✅",
   msg84: `🐕เพลงนี้กำลัง streaming อยู่, ไม่มีหมดเวลานะงับ. 🐕🎧`,
   msg85: `เพลงได้หยุดแล้ว. ไปละบุ้ย! ✅`,
   msg86: "Update",
   msg87: `ระดับเสียงปัจจุบัน : **{queue.volume}** 🔊\n**สามารถเปลี่ยนระดับเสียงตั้งแต่ \`1\` ถึง \`{maxVol}\` ได้.**`,
   msg88: `ระดับเสียงนี้ถูกใช้อยู่ขณะนี้ ❌`,
   msg89: `**เลือกพิมพ์ตัวเลขจาก \`1\` ถึง \`{maxVol}\` เพื่อเปลี่ยนระดับเสียง .** ❌`,
   msg90: "ปรับระดับเสียง :",
   msg91: `เขียนชื่อเพลย์ลิสต์ที่คุณต้องการจะสร้าง. ❌`,
   msg92: `มีเพลย์ลิสต์ที่ใช้ชื่อนี้อยู่แล้ว. ❌`, 
   msg93: `คุณไม่สามารถมีมากกว่า 30 เพลย์ลิสต์. ❌`,
   msg94: "กำลังสร้าง playlist... 🎧",
   msg95: "สร้าง Playlist แล้ว! 🎧",
   msg96: `คุณยังไม่มีเพลย์ลิสต์ที่ใช้ชื่อนี้. ❌`,
   msg97: "กำลังลบ playlist... 🎧",
   msg98: "ลบ Playlist แล้ว! 🎧",
   msg99: `เขียนชื่อแทร็กที่คุณต้องการค้นหา. ❌`,
   msg100: `เขียนชื่อเพลย์ลิสต์ที่คุณต้องการเพิ่มเพลงลงใน. ❌`,
   msg101: `คุณมีเพลงในเพลย์ลิสต์ได้ไม่เกิน {max_music} เพลง. ❌`,
   msg102: "กำลังคิดเพลง... 🎧",
   msg103: "เพิ่มเพลงทั้งหมดลงในเพลย์ลิสต์ของคุณแล้ว! 🎧",
   msg104: `เพลงนี้อยู่ในเพลย์ลิสต์นี้แล้ว. ❌`,
   msg105: "เพิ่มในเพลย์ลิสต์! 🎧",
   msg106: `เขียนชื่อเพลย์ลิสต์ที่คุณต้องการลบเพลง. ❌`,
   msg107: `คุณยังไม่มีเพลงที่ใช้ชื่อนี้. ❌`,
   msg108: "กำลังลบเพลง... 🎧",
   msg109: "ลบเพลงแล้ว! 🎧",
   msg110: "โปรดเขียนชื่อเพลย์ลิสต์ที่คุณต้องการค้นหา. ❌",
   msg111: `คุณไม่มีเพลงในเพลย์ลิสต์นี้. ❌`,
   msg112: "เพลย์ลิสต์ยอดนิยม",
   msg113: `หมดเวลาที่จะใช้คำสั่งนี้แล้ว คุณสามารถพิมพ์ \`/playlist top\` เพื่อใช้อีกครั้งได้.`,
   msg114: `นี่ไม่ใช่ public playlist ไม่สามารถเล่นได้. ❌`,
   msg115: "เพลย์ลิสต์ของคุณ",
   msg116: `musics`,
   msg117: `คุณไม่มีเพลย์ลิสต์เลย. ❌`,
   msg118: "เวลาของคุณหมดเวลาที่จะใช้คำสั่งนี้ คุณสามารถพิมพ์ \`/playlist list {name}\` เพื่อใช้คำสั่งอีกครั้ง.",
   msg119: "ใช้คำสั่ง **/play playlist <list-name>** เพื่อฟังเพลย์ลิสต์นี้งับ.\nType **/playlist list <list-name>** เพื่อดูเพลงในรายการ.",
   msg120: "โปรดระบุช่องข้อความ.",
   msg121: "<#{channel}> added to the command usage channel list, now bot command can be used only on the channels in the list.",
   msg122: "ไม่มีข้อมูลการลงทะเบียน.",
   msg123: "<#{channel}> deleted to the command usage channel list.",
   msg124: "ช่องนี้อยู่ในรายการช่องการใช้คำสั่งอยู่แล้ว.",
   msg125: "ช่องนี้ไม่ใช่ช่องข้อความ.",
   msg126: "❌ นี่คือรายการช่องที่คุณสามารถสั่งได้บนเซิร์ฟเวอร์นี้: {channel_filter}",
   msg127: "Command is not defined.",
   error7: "โปรดลองคำสั่งนี้อีกครั้งในภายหลัง ข้อผิดพลาดที่เป็นไปได้รายงานไปยังนักพัฒนาบอทแล้ว.",
   msg128: "คุณปิดไมค์ผมขณะที่เพลงกำลังเล่นอยู่ นั่นเป็นเหตุผลที่ผมหยุดเพลง ถ้าคุณยกเลิกการปิดเสียงให้ผม ผมจะเล่นเพลงต่อ. 😔",
   msg129: "plays",
   msg130: "Please write a valid number.",
   msg131: "in order to use the commands in the list, you need to vote for the bot.",
   msg132: "No music already paused.",
   msg133: "I messed up the order in the playlist.",
   msg134: "เจอเพลงแล้ว."

   }
   module.exports = language;