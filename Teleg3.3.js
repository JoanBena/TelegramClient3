const { Client } = require("tdl");
const { TDLib } = require("tdl-tdlib-addon");
// request for server scheduling
const cron = require("node-cron");

//+3547639834

const client3 = new Client(new TDLib("/root/td/tdlib/lib/libtdjson.so"), {
  apiId: 19328339, // Your api_id
  apiHash: "118ea64e68d1b50f360d23f1a5226640",
  databaseDirectory: "_td_databaseTeleg3.3",
  filesDirectory: "_td_filesTeleg3.3",
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
client3.on("error", console.error);


const chatIds_3 = [
    -1001240297153, -1001491830790,-1001294634113, -1001226436898,
    -1001573469414, -1001618105662,-1001386173203, -1001444428717,
    -1001665570303, -1001595987025,-1001224476835, -1001775187832,
    -1001538385044, -1001433247452,-1001285168721,     -363430547,
    -1001733642935, -1001192385192,-1001306941134, -1001218554026,
    1598053102
];
 

const flag ="🇮🇸 NORTHERN LIGHT 🌈🌈INDICA\n🇮🇸 BLUE DREAM 🌟🌟 SATIVA\n\n";
const motto = "🪙🚀THE BEST QUALITY🪙🚀 \n\n";
const call ="Call me here📲 7640629☎️\nCall me here📲 7640629☎️\nCall me here📲 7640629☎️\nText 📲 7640629📲\n\n";
const driving = "🚗🚗IM DRIVING +2 🚗🚗\n⏰24/7⏰\n\n";
const disc = "👉PICK UP FOR DISCOUNT 👈\n\n\n";
const location ="IM IN📍HALLGRIMSKIRKJA 📌 KLAMBRATÚN\n📌DOWNTOWN 📌 SKIPHOLT\n📌UNIVERSITY📌 VESTURBAER \n📌ARBAER📌BREIHOLT📌 \nHAFNAFJORDUR📌KOPAVOGUR\n📌SKEIFAN📌GARDABAER\n📌LAUGARDALUR 📌GRAFARHOLTS\n📌MOSFELLSBAER\nAND MORE LOCATIONS IN REYKIAVIK 🏙\n\n";
const delivery = "🚗🚗FAST DELIVERY🚗🚗\n⏰⏰24/7⏰⏰\n\n\n";
const cost ="➡️1G - 3K 💸\n➡️2G - 6K💸\n➡️3G - 9K 💸\n➡️5G - 14K💸\n➡️8G - 22K💸\n➡️10G - 27K💸\n➡️20G - 49K💸\n➡️30G - 79K💸\n➡️PAYMENT :CASH💸 \n\n";
var text = "Text 📲 7640629📲\n\n";
var te_xt = "🇮🇸💙📲💨🛫\n🇮🇸💙📲💨🛫\n🇮🇸💙📲💨🛫";

const fullMessage =flag + motto + call + driving + disc + location + delivery + cost + text + te_xt;

async function main() {

  await client3.connectAndLogin();

  // execution cycle 30 sec and returns the function
  cron.schedule("*/30 * * * * *", async () => {
    let date = new Date();
    console.log(
        `scheduled_1 ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
      );
    for (const chat3 of chatIds_3) {
      await sendMessageToGroupTeleg3_3(chat3, fullMessage);
    }
  });
}



async function sendMessageToGroupTeleg3_3(chat3, message) {
  try {
    client3
      .invoke({
        "@type": "sendMessage",
        chat_id: chat3,
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
      .then((m) => console.log(chat3))
      .catch((e) => console.log(e));
  } catch (err) {
    console.error("sendMessage ERROR ", err);
  }
}
main();
