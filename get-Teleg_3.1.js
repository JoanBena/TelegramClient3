const { Client } = require('tdl')
const { TDLib } = require('tdl-tdlib-addon')
const tdlib = new TDLib();

// Teleg_3.1 +3547640625 
// "/root/td/tdlib/lib/libtdjson.so" 

const client1 = new Client(new TDLib(), {
    apiId: 17784015 , // Your api_id
    apiHash: "f5a0c8ced83c0975b9ccc4066e2ce51e",
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

