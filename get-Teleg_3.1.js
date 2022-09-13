const { Client } = require('tdl')
const { TDLib } = require('tdl-tdlib-addon')

// Teleg_3.1 +3547639838
// "/root/td/tdlib/lib/libtdjson.so" 

const client1 = new Client(new TDLib("/root/td/tdlib/lib/libtdjson.so"), {
    apiId: 16065000 , // Your api_id
    apiHash: "eabe6b5bc04868b39fcece8cd2b16b1d",
    databaseDirectory: "_td_databaseTeleg3.1",
    filesDirectory: "_td_filesTeleg3.1",
  });

client1.on('error', console.error)
async function chats(){
  await client1.connectAndLogin()

  const result = await client1.invoke({
    _: 'getChats',
    offset_order: '9223372036854775807',
    offset_chat_id: 0,
    limit: 100
  })
  
  console.log(result.chat_ids)

}
chats()
