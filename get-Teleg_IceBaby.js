const { Client } = require('tdl')
const { TDLib } = require('tdl-tdlib-addon')


//+3547640625 Ice Baby

// "/root/td/tdlib/lib/libtdjson.so" 

const client4 = new Client(new TDLib("/root/td/tdlib/lib/libtdjson.so"), {
    apiId: 17784015 , // Your api_id
    apiHash: "f5a0c8ced83c0975b9ccc4066e2ce51e",
    databaseDirectory: "_td_databaseTeleg3.4",
    filesDirectory: "_td_filesTeleg3.4",
  });

client4.on('error', console.error)
async function chats(){
  await client4.connectAndLogin()

  const result = await client4.invoke({
    _: 'getChats',
    offset_order: '9223372036854775807',
    offset_chat_id: 0,
    limit: 100
  })
  
  console.log(result.chat_ids)

}
chats()

