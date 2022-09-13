const { Client } = require("tdl");
const { TDLib } = require("tdl-tdlib-addon");
// request for server scheduling
const cron = require("node-cron");

//+3547689058

const client2 = new Client(new TDLib("/root/td/tdlib/lib/libtdjson.so"), {
  apiId: 18186238, // Your api_id
  apiHash: "334e1d3b364f0208e50527e736f16e0c",
  databaseDirectory: "_td_databaseTeleg3.2",
  filesDirectory: "_td_filesTeleg3.2",
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
client2.on("error", console.error);


const chatIds_2 = [
    -1001354447667, -1001227952965,-1001331855971, -1001488081229,
    -1001494134445, -1001324709443,-1001234757139, -1001197544098,
    -1001462764689, -1001112793580,-1001291747525, -1001393277530,
    -1001480392581, -1001440566769,-1001282795991, -1001303959083,
    -1001424435551, -1001412248161,-1001764832515, 1598053102, 
    -1001753749990,-1001403123849
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

  await client2.connectAndLogin();

  // execution cycle 30 sec and returns the function
  cron.schedule("*/30 * * * * *", async () => {
    let date = new Date();
    console.log(
        `scheduled_1 ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
      );
    for (const chat2 of chatIds_2) {
      await sendMessageToGroupTeleg3_2(chat2, fullMessage);
    }
  });
}



async function sendMessageToGroupTeleg3_2(chat2, message) {
  try {
    client2
      .invoke({
        "@type": "sendMessage",
        chat_id: chat2,
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
      .then((m) => console.log(chat2))
      .catch((e) => console.log(e));
  } catch (err) {
    console.error("sendMessage ERROR ", err);
  }
}
main();
