const { Client } = require('tdl')
const { TDLib } = require('tdl-tdlib-addon')

// Teleg_3.2 +3547689058
// "/root/td/tdlib/lib/libtdjson.so" 

const client2 = new Client(new TDLib("/root/td/tdlib/lib/libtdjson.so"), {
    apiId: 18186238 , // Your api_id
    apiHash: "334e1d3b364f0208e50527e736f16e0c",
    databaseDirectory: "_td_databaseTeleg3.2",
    filesDirectory: "_td_filesTeleg3.2",
  });

client2.on('error', console.error)
async function chats(){
  await client2.connectAndLogin()

  const result = await client2.invoke({
    _: 'getChats',
    offset_order: '9223372036854775807',
    offset_chat_id: 0,
    limit: 100
  })
  
  console.log(result.chat_ids)

}
chats()
