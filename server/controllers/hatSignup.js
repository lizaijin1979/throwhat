const DB = require('../tools/dbconfig')

module.exports = async ctx => {
  console.log(ctx.request.body.item);
  console.log(ctx.request.body.itemNum);
  console.log(ctx.request.body.nickName);
 // console.log(ctx.request.body.openId);
  console.log(ctx.request.body.datetime);
  console.log("-------------");

var id = await DB('cItemSignupManagement').where({ "itemName": ctx.request.body.item, "nickname": ctx.request.body.nickName }).select('id');

console.log("---------" + id);

  if (id == 0)
  {
      await DB('cItemSignupManagement').insert({
        itemName: ctx.request.body.item,
        itemNum: ctx.request.body.itemNum,
        nickname: ctx.request.body.nickName,
        signup_time: ctx.request.body.datetime,
      })
  }
  else
  {
    await DB('cItemSignupManagement').where({
      "itemName": ctx.request.body.item, "nickname": ctx.request.body.nickName
       }).update({
         itemNum: ctx.request.body.itemNum,
         signup_time: ctx.request.body.datetime,
      })  

  }
}