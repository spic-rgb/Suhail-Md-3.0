const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "true" ;  
global.video= "true" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false"  
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md-3";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website =process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "Made With LOVE!" 


global.devs = "" // Developer Contacts
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" //"https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";

global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_23_01_05_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAxNjQsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTk3LFxuICAgICAgICAxOTcsXG4gICAgICAgIDExNixcbiAgICAgICAgMTEyLFxuICAgICAgICAyMTcsXG4gICAgICAgIDYsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjAsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMTQsXG4gICAgICAgIDIsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNDEsXG4gICAgICAgIDE3NixcbiAgICAgICAgMixcbiAgICAgICAgMTEyLFxuICAgICAgICAyMTEsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMzIsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTE5LFxuICAgICAgICA1NSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMTAsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTQyLFxuICAgICAgICA3NCxcbiAgICAgICAgNjZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY3LFxuICAgICAgICAyNDQsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTQsXG4gICAgICAgIDksXG4gICAgICAgIDE0MyxcbiAgICAgICAgOTEsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMyxcbiAgICAgICAgNzcsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTgzLFxuICAgICAgICA5NyxcbiAgICAgICAgNjUsXG4gICAgICAgIDYyLFxuICAgICAgICAzMixcbiAgICAgICAgMTM5LFxuICAgICAgICAzOCxcbiAgICAgICAgNzcsXG4gICAgICAgIDgwLFxuICAgICAgICAyNTIsXG4gICAgICAgIDY1LFxuICAgICAgICA0NSxcbiAgICAgICAgOTMsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMTIsXG4gICAgICAgIDc2LFxuICAgICAgICA0MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAxMTYsXG4gICAgICAgIDE3LFxuICAgICAgICAxODgsXG4gICAgICAgIDcwLFxuICAgICAgICAyMjEsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTc1LFxuICAgICAgICA0MixcbiAgICAgICAgMTg1LFxuICAgICAgICAyMjAsXG4gICAgICAgIDEwLFxuICAgICAgICAyMDMsXG4gICAgICAgIDEsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTA2LFxuICAgICAgICA2LFxuICAgICAgICAxNDgsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNjUsXG4gICAgICAgIDU1LFxuICAgICAgICAxNTYsXG4gICAgICAgIDU1LFxuICAgICAgICAyMjUsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTE4LFxuICAgICAgICA5MCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTAxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyNSxcbiAgICAgICAgOTYsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMDksXG4gICAgICAgIDI0NixcbiAgICAgICAgMTgxLFxuICAgICAgICAxMjIsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjIsXG4gICAgICAgIDEzLFxuICAgICAgICA2LFxuICAgICAgICAyNTIsXG4gICAgICAgIDU4LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTU1LFxuICAgICAgICAxNzIsXG4gICAgICAgIDExOSxcbiAgICAgICAgNTgsXG4gICAgICAgIDk1LFxuICAgICAgICAyMTIsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTQ4LFxuICAgICAgICA0LFxuICAgICAgICA1NixcbiAgICAgICAgMixcbiAgICAgICAgOSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMjgsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTE5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNjgsXG4gICAgICAgIDk3LFxuICAgICAgICAyMjEsXG4gICAgICAgIDY1LFxuICAgICAgICA3NCxcbiAgICAgICAgNTcsXG4gICAgICAgIDI0NCxcbiAgICAgICAgOSxcbiAgICAgICAgMTg5LFxuICAgICAgICA4MSxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMTQsXG4gICAgICAgIDU0LFxuICAgICAgICAxODMsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMDcsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMTgsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjEzLFxuICAgICAgICAyMzQsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTk3LFxuICAgICAgICAyNDcsXG4gICAgICAgIDgyLFxuICAgICAgICAyMDUsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTI3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4MyxcbiAgICAgICAgNSxcbiAgICAgICAgMTM2LFxuICAgICAgICA1MCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMDEsXG4gICAgICAgIDc1LFxuICAgICAgICAyMzEsXG4gICAgICAgIDI5LFxuICAgICAgICAyNDQsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTM1LFxuICAgICAgICA3MyxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMDEsXG4gICAgICAgIDEyLFxuICAgICAgICAyMTgsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjQ0LFxuICAgICAgICA5NixcbiAgICAgICAgMTAwLFxuICAgICAgICAxMjUsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTgzLFxuICAgICAgICAyNDMsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjMxLFxuICAgICAgICAzOCxcbiAgICAgICAgOTcsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTgyLFxuICAgICAgICA4NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgODRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDEwM1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMyxcbiAgICAgICAgMTAyLFxuICAgICAgICA5NCxcbiAgICAgICAgMjE2LFxuICAgICAgICAxODUsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjUyLFxuICAgICAgICAyMTksXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMDgsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTkxLFxuICAgICAgICA2MixcbiAgICAgICAgMTQyLFxuICAgICAgICAyMTQsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjMxLFxuICAgICAgICA1LFxuICAgICAgICAyMCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMDYsXG4gICAgICAgIDY0LFxuICAgICAgICAxMjQsXG4gICAgICAgIDc3LFxuICAgICAgICAxNDcsXG4gICAgICAgIDEzLFxuICAgICAgICAxODcsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNDAsXG4gICAgICAgIDE2LFxuICAgICAgICAzNCxcbiAgICAgICAgMTcyLFxuICAgICAgICA2OCxcbiAgICAgICAgOTIsXG4gICAgICAgIDYzLFxuICAgICAgICA0MCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxOTksXG4gICAgICAgIDEzNixcbiAgICAgICAgMjM0LFxuICAgICAgICAxNDgsXG4gICAgICAgIDEzLFxuICAgICAgICA0MyxcbiAgICAgICAgODIsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTQzLFxuICAgICAgICA1MyxcbiAgICAgICAgMjE4LFxuICAgICAgICAzOSxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNTQsXG4gICAgICAgIDM5LFxuICAgICAgICAyNTEsXG4gICAgICAgIDU1LFxuICAgICAgICAyMDUsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxLFxuICAgICAgICAzMyxcbiAgICAgICAgMTMzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMzQsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiQUQ5RU1JUkRWc3JpUmRmLzI0WVpSVTRoaFpicU4xWmo3eGVvVk5jc2pRRT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNjM3MTk0OTUwNjdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkY4Qjk3NkNBQ0IyM0IxRDNDQUQxRDAwMkU3NDZDQjYyXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTc0NjY1ODg2OFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJDdnZFUXVfclFCcTE1aThjRU1RbVZnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjVkYzFkMGZmLWQ1MmYtNDkwNC05NTMwLWZjYjEzNTkyNmE2MVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA1MSxcbiAgICAgIDEzMyxcbiAgICAgIDgzLFxuICAgICAgMTk1LFxuICAgICAgMjA1LFxuICAgICAgMjUwLFxuICAgICAgMTI3LFxuICAgICAgODAsXG4gICAgICAxNDAsXG4gICAgICAxNTEsXG4gICAgICAyMjMsXG4gICAgICAxMzAsXG4gICAgICAzNyxcbiAgICAgIDIzNyxcbiAgICAgIDE1OCxcbiAgICAgIDExMyxcbiAgICAgIDIwMixcbiAgICAgIDIwNCxcbiAgICAgIDI1MSxcbiAgICAgIDE5N1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNCxcbiAgICAgIDE4OSxcbiAgICAgIDIzMixcbiAgICAgIDkxLFxuICAgICAgNjQsXG4gICAgICAxNjcsXG4gICAgICAyMTIsXG4gICAgICAwLFxuICAgICAgNzMsXG4gICAgICAxLFxuICAgICAgNzUsXG4gICAgICAyMDEsXG4gICAgICAzNCxcbiAgICAgIDE2MixcbiAgICAgIDksXG4gICAgICAyMjMsXG4gICAgICAyMzcsXG4gICAgICAyMDMsXG4gICAgICAyMjUsXG4gICAgICA5MVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJZUjdGNFNKUlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjYzNzE5NDk1MDY3OjgzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI4MDI1NjMxMjU4NjI4NDo4M0BsaWRcIixcbiAgICBcIm5hbWVcIjogXCLgvIbLouG1mOG1lsqz4bWJ4bWQ4bWJIOG2nMqw4bWDy6LgvIZcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKUDIwdm9IRUt6TTc4QUdHQWNnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInhjWlkrQ1Axb3NzWXF1QWZnTDQ3UnpGNFhycGh1Sm1RNWltOWdtbE4rSEU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiSUd5T3paM2xiTVZUd1NwTXBUWkFWUXhzb084UmVsOERXQkxQYzl1UlJkaTU1azZON2IyRUhzUVlMb0lhazVpWmJEMzF5Wk9JK1lEd1Z4OEFKRjMwQVE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiWHZ3M2NScEduU0RWamx6eWgzVnFXSW9FTFE5dUE5UTh3S2pSdHhMdmEzVmhCRC9BRVhCSTdpdWFwWDV1WEFSSnZBOHZpRkttMTNtSDBEUjh2U3lLaUE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjYzNzE5NDk1MDY3OjgzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxMTNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTc0NjY1ODg2NCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUs3dVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSzd1Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiZSt5S05kRDZkbU9zb20yN1VKRzE1RnVqaGhTVFhyQk4wWm9NVEpwMG9hTT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyMTM2MjU5MzQ3LFwiY3VycmVudEluZGV4XCI6NCxcImRldmljZUluZGV4ZXNcIjpbMCwyLDMsNF19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "3.0.1-developement",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-MD",
  ownername:process.env.OWNER_NAME|| "Suhail:Shy<3",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
