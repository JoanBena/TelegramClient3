const { Client } = require("tdl");
const { TDLib } = require("tdl-tdlib-addon");
// request for server scheduling
const cron = require("node-cron");

// +355676436522 

const client = new Client(new TDLib("/root/td/tdlib/lib/libtdjson.so"), {
  apiId: 15575695, // Your api_id
  apiHash: "dda9e8ede12f37ab470e965c2576a65a",
  databaseDirectory: "_td_databaseA",
  filesDirectory: "_td_filesA",
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
client.on("error", console.error);

const chatIds = [-1001734609031]


const flag ="🇮🇸 BLUE CHEESE 💙❄️ INDICA\n🇮🇸 NORTHERN LIGHT 🌈🌈INDICA\n🇮🇸 BLUE DREAM 🌟🌟 SATIVA\n🇮🇸 G-13  ☄️⚡️SATIVA\n\n";
const motto = "🪙🚀THE BEST QUALITY🪙🚀 \n⚖️GRAM IS REAL GRAM⚖️\n\n";
const call ="Call me here📲 7640629☎️\nCall me here📲 7640629☎️\nCall me here📲 767640629☎️\nText 📲 7640629📲\n\n";
const driving = "🚗🚗IM DRIVING +2 🚗🚗\n⏰24/7⏰\n\n\n";
const location ="IM IN📍HALLGRIMSKIRKJA 📌 KLAMBRATÚN\n📌DOWNTOWN 📌 SKIPHOLT\n📌UNIVERSITY📌 VESTURBAER \n📌ARBAER📌BREIHOLT📌 \nHAFNAFJORDUR📌KOPAVOGUR\n📌SKEIFAN📌GARDABAER\n📌LAUGARDALUR 📌GRAFARHOLTS\n📌MOSFELLSBAER\nAND MORE LOCATIONS IN REYKIAVIK 🏙\n\n";
const delivery = "🚗🚗FAST DELIVERY🚗🚗\n⏰⏰24/7⏰⏰\n\n\n";
const cost ="➡️1G - 3K 💸\n➡️2G - 6K💸\n➡️3G - 9K 💸\n➡️5G - 14K💸\n➡️8G - 22K💸\n➡️10G - 27K💸\n➡️20G - 49K💸\n➡️30G - 79K💸\n➡️PAYMENT :CASH💸 OR PAYONEER APP 💳 \n\n";
var text = "Text 📲 7640629📲\n\n";
var te_xt = "Hærra🇮🇸💙📲💨🛫\nHærra🇮🇸💙📲💨🛫\nHærra🇮🇸💙📲💨🛫";

const fullMessage =flag + motto + call + driving + location + delivery + cost + text + te_xt;

async function main() {
  await client.connectAndLogin();

  // execution cycle 30 sec and returns the function
  cron.schedule("*/30 * * * * *", async () => {
    let date = new Date();
    console.log(
      `scheduled ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
    );
    for (const chatId of chatIds) {
      await sendMessageToGroup(chatId, fullMessage);
    }
  });
}
async function sendMessageToGroup(chatId, message) {
  try {
      client
        .invoke({
          "@type": "sendMessage",
          chat_id: chatId,
          input_message_content: {
            "@type": "inputMessagePhoto",
            photo: {
              "@type": "inputFileLocal",
              path: "Teleg_3.jpg",
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
        .then((m) => console.log(chatId))
        .catch((e) => console.log(e));
      } catch (err) {
      console.error("sendMessage ERROR ", err);
  }
} 
main();
