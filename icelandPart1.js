const { Client } = require("tdl");
const { TDLib } = require("tdl-tdlib-addon");
// request for server scheduling
const cron = require("node-cron");

const iceland1 = new Client(new TDLib(), {
  apiId: 15683058 , // Your api_id
  apiHash: "b5a41f567cc799b2b56c09ac303a3496",
    databaseDirectory: "iceland_db1",
    filesDirectory: "iceland_file1",
    tdlibParameters: {
      use_message_database: false,
      use_secret_chats: true,
      system_language_code: 'en',
      application_version: '1.0',
      device_model: 'Unknown device',
      system_version: 'Unknown',
      enable_storage_optimizer: true
    }
});
// phone number: +3547686985


iceland1.on("error", console.error);

const chatIds_1 = [ 
  -1001354447667, -1001449041382, -1001197544098, -1001234757139,
  -1001303959083, -1001291747525, -1001324709443, -1001192385192,
  -1001764832515, -1001112793580, -1001294634113, -1001444428717,
  -1001491830790, -1001433247452, -1001285168721, -1001618105662,
  -1001214829860, -1001403123849, -1001218554026, -742536170, 
];


const flag ="🌋🌋 G-13 🌋🌋 SATIVA\n⚡️⚡️NORTHERN LIGHT 🌌\nINDICA\n\n";
const motto = "🪙🚀THE BEST QUALITY🪙🚀 \n⚖️GRAM IS REAL GRAM⚖️\n\n";
const call ="Call me here📲 7686918☎️\nCall me here📲 7686918☎️\nCall me here📲 7686918☎️\nText 📲 7686918📲\n\n";
const driving = "🚗🚗IM DRIVING +2 🚗🚗\nDRIVING TIME 🕔05:00-00:00🕛\n\n\n";
const location ="IM IN📍HALLGRIMSKIRKJA 📌 KLAMBRATÚN\n📌DOWNTOWN 📌 SKIPHOLT\n📌UNIVERSITY📌 VESTURBAER \n📌ARBAER📌BREIHOLT📌 \nHAFNAFJORDUR📌KOPAVOGUR\n📌SKEIFAN📌GARDABAER\n📌LAUGARDALUR GRAFARHOLTS\n📌MOSFELLSBAER\nAND MORE LOCATIONS IN REYKIAVIK 🏙\n\n";
const delivery = "🚗🚗FAST DELIVERY🚗🚗\n💯PROFESSIONAL SERVICE💯\n📈BEST RATES AROUND📈\n\n\n";
const cost ="➡️1G - 3K 💸\n➡️2G - 6K💸\n➡️3G - 9K 💸\n➡️5G - 14K💸\n➡️8G - 22K💸\n➡️10G - 27K💸\n➡️20G - 49K💸\n➡️30G - 79K💸\n➡️PAYMENT :CASH💸 \n\n";
var text = "Text 📲 7686918📲\n\n";
var te_xt = "Hærra🇮🇸💙📲💨🛫\nHærra🇮🇸💙📲💨🛫\nHærra🇮🇸💙📲💨🛫";

const fullMessage =flag + motto + call + driving + location + delivery + cost + text + te_xt;

async function main() {
  await iceland1.connectAndLogin();

  // execution cycle 30 sec and returns the function
  cron.schedule("*/30 * * * * *", async () => {
    let date = new Date();
    console.log(
      `scheduled ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
    );
    for (const chat of chatIds_1) {
      await sendMessageToGroupICE1(chat, fullMessage);
    }
  });
}

async function sendMessageToGroupICE1(chat, message) {
    try {
        iceland1
          .invoke({
            "@type": "sendMessage",
            chat_id: chat,
            input_message_content: {
              "@type": "inputMessagePhoto",
              photo: {
                "@type": "inputFileLocal",
                path: "poster_telegram3.jpg",
              },
              caption: {
                "@type": "formattedText",
                text: message,
              },
            },
            options: {
              _: "messageSendOptions",
              from_background: true,
            },
          })
          .then((m) => console.log(chat))
          .catch((e) => console.log(e));
        } catch (err) {
        console.error("sendMessage ERROR ", err);
    }
} 

main();
