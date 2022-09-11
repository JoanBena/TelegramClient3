const { Client } = require("tdl");
const { TDLib } = require("tdl-tdlib-addon");
// request for server scheduling
const cron = require("node-cron");

//+3547640625

const client1 = new Client(new TDLib(), {
  apiId: 17784015, // Your api_id
  apiHash: "f5a0c8ced83c0975b9ccc4066e2ce51e",
  databaseDirectory: "_td_databaseTeleg3.1",
  filesDirectory: "_td_filesTeleg3.1",
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
client1.on("error", console.error);


const chatIds_1 = [
    -1001488081229, -1001494134445,-1001462764689, -1001480392581,
    -1001294634113, -1001775187832,-1001665570303, -1001538385044,
    -1001433247452, -1001573469414,-1001158622413, -1001278242024, 
    -1001733642935, -1001643751939, -1001295690800, -1001587534117, 
    -1001628224002, -1001332790828, -1001478361643, -227003856,
    -1001595987025, -1001444428717, -1001282795991,
];


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

  await client1.connectAndLogin();

  // execution cycle 30 sec and returns the function
  cron.schedule("*/30 * * * * *", async () => {
    let date = new Date();
    console.log(
        `scheduled_1 ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
      );
    for (const chat1 of chatIds_1) {
      await sendMessageToGroupTeleg3_1(chat1, fullMessage);
    }
  });
}



async function sendMessageToGroupTeleg3_1(chat1, message) {
  try {
    client1
      .invoke({
        "@type": "sendMessage",
        chat_id: chat1,
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
      .then((m) => console.log(chat1))
      .catch((e) => console.log(e));
  } catch (err) {
    console.error("sendMessage ERROR ", err);
  }
}
main();
