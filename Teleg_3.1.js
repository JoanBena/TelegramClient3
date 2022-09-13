const { Client } = require("tdl");
const { TDLib } = require("tdl-tdlib-addon");
// request for server scheduling
const cron = require("node-cron");

//+3547639838

const client1 = new Client(new TDLib("/root/td/tdlib/lib/libtdjson.so"), {
  apiId: 16065000, // Your api_id
  apiHash: "eabe6b5bc04868b39fcece8cd2b16b1d",
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
  -1001227952965, -1001240297153, -1001462764689, -1001324709443,
  -1001112793580, -1001393277530,-1001200077077, -1001282795991,
  -1001294634113, -1001324502344,-1001478361643, -1001407136702,
  -1001278242024, -1001158622413,-1001171187505, -1001458905905,
  -1001214829860,     -742536170, -1001332790828, 1001220034761, 
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
