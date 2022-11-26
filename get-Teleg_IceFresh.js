const { Client } = require('tdl')
const { TDLib } = require('tdl-tdlib-addon')

// +3547639834
// "/root/td/tdlib/lib/libtdjson.so" 

const client3 = new Client(new TDLib("/root/td/tdlib/lib/libtdjson.so"), {
    apiId: 19328339 , // Your api_id
    apiHash: "118ea64e68d1b50f360d23f1a5226640",
    databaseDirectory: "_td_databaseTeleg3.3",
    filesDirectory: "_td_filesTeleg3.3",
  });

client3.on('error', console.error)
async function chats(){
  await client3.connectAndLogin()

  const result = await client3.invoke({
    _: 'getChats',
    offset_order: '9223372036854775807',
    offset_chat_id: 0,
    limit: 100
  })
  
  console.log(result.chat_ids)

}
chats()
