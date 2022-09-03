const { Client } = require('tdl')
const { TDLib } = require('tdl-tdlib-addon')

const tdlib = new TDLib();
const client = new Client(new TDLib(), {
    apiId: 15575695, // Your api_id
    apiHash: "dda9e8ede12f37ab470e965c2576a65a",
    databaseDirectory: "_td_databaseA",
    filesDirectory: "_td_filesA",
  });

client.on('error', console.error)
async function chats(){
  await client.connectAndLogin()

  const result = await client.invoke({
    _: 'getChats',
    offset_order: '9223372036854775807',
    offset_chat_id: 0,
    limit: 100
  })
  
  console.log(result.chat_ids)

}
chats()

