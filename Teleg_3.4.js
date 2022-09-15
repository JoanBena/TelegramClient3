const { Client } = require("tdl");
const { TDLib } = require("tdl-tdlib-addon");
// request for server scheduling
const cron = require("node-cron");

//+3547689058

const client4 = new Client(new TDLib(), {
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

 const flag ="Nature, in the broadest sense, is the physical world or universe. \n\n";
 const motto = " Nature can refer to the phenomena of the physical world,  \n\n";
 const call ="and also to life in general. The study of nature is a large,\n\n";
 const driving = "if not the only, part of science. \n\n";
 const disc = "Although humans are part of nature, human activity is often \n\n\n";
 const location ="understood as a separate category from other natural phenomena.\n\n";

 const fullMessage =flag + motto + call + driving + disc + location;

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
            path: "natyre.jpg",
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
