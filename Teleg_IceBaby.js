const { Client } = require("tdl");
const { TDLib } = require("tdl-tdlib-addon");
// request for server scheduling
const cron = require("node-cron");

//+3547689058 Ice Baby

const client4 = new Client(new TDLib("/root/td/tdlib/lib/libtdjson.so"), {
  apiId: 17784015, // Your api_id
  apiHash: "f5a0c8ced83c0975b9ccc4066e2ce51e",
  databaseDirectory: "_td_databaseTeleg3.4",
  filesDirectory: "_td_filesTeleg3.4",
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
client4.on("error", console.error);


const chatIds_4 = [
    
 -1001480392581, -1001294634113,-1001444428717, -1001494134445,
  -1001462764689, -1001282795991,-1001158622413, -1001295690800,
  -1001538385044, -1001573469414,-1001278242024, -1001595987025,
  -1001665570303, -1001733642935,-1001433247452, -1001775187832,
  -1001478361643, -1001332790828, -1001628224002, -1001587534117, 
  -1001488081229,-227003856  
];

const flag ="🇮🌠🌠BLUE DREAM 🌠🌠\n💙🧀BLUE CHEESE 🧀💙\n⚡️⚡️NORTHERN LIGHT⚡️⚡️\n\n";
const xxxxxx = "👉PICK UP & GET DISSCOUNT\n\n";
const motto ="🪙🚀THE BEST QUALITY🪙🚀\n⚖️GRAM IS REAL GRAM⚖️\n\n";
const call ="Call me here📲 7648627 ☎️\nCall me here📲 7648627☎️\nCall me here📲 7648627☎️\nText 📲 7648627📲\nWhats up me 📲7648627 ☎️\n\n\n";
const driving = "🚗🚗IM DRIVING +2 🚗🚗\nDRIVING  🕔24h\n\n";
const location ="IM IN📍HALLGRIMSKIRKJA 📌 KLAMBRATÚN\n📌DOWNTOWN 📌 SKIPHOLT \n📌UNIVERSITY📌 VESTURBAER 📌ARBAER📌BREIHOLT 📌 HAFNAFJORDUR 📌KOPAVOGUR 📌 SKEIFAN 📌 GARDABAER\n📌LAUGARDALUR GRAFARHOLTS\n📌MOSFELLSBAER\nAND MORE LOCATIONS IN REYKIAVIK AND ICELAND 🏙\n\n";
const delivery = "🚗🚗FAST DELIVERY🚗🚗\n💯PROFESSIONAL SERVICE💯\n📈BEST RATES AROUND📈\n\n\n";
const cost ="➡️1G - 3K 💸\n➡️2G - 6K💸\n➡️3G - 9K 💸\n➡️5G - 14K💸\n➡️8G - 22K💸\n➡️10G - 27K💸\n➡️20G - 49K💸\n➡️30G - 79K💸\n➡️PAYMENT :ONLY CASH💸 \n\n";
var text = "Text 📲 7648627📲\n\n";
var te_xt = "Hærra🇮🇸💙📲💨🛫\nHærra🇮🇸💙📲💨🛫\nHærra🇮🇸💙📲💨🛫";

const fullMessage =flag + xxxxxx + motto + call + driving + location + delivery + cost + text + te_xt;

async function main() {

  await client4.connectAndLogin();

  // execution cycle 30 sec and returns the function
  cron.schedule("*/30 * * * * *", async () => {
    let date = new Date();
    console.log(
        `scheduled_1 ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
      );
    for (const chat4 of chatIds_4) {
      await sendMessageToGroupTeleg3_4(chat4, fullMessage);
    }
  });
}



async function sendMessageToGroupTeleg3_4(chat4, message) {
  try {
    client4
      .invoke({
        "@type": "sendMessage",
        chat_id: chat4,
        input_message_content: {
          "@type": "inputMessagePhoto",
          photo: {
            "@type": "inputFileLocal",
            path: "telegramImageUpdate.jpg
",
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
      .then((m) => console.log(chat4))
      .catch((e) => console.log(e));
  } catch (err) {
    console.error("sendMessage ERROR ", err);
  }
}
main();
