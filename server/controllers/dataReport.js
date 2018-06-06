const DB = require('../tools/dbconfig')

module.exports = async ctx => {
  console.log(ctx.request.body.item);
  console.log(ctx.request.body.datePicker);
  console.log(ctx.request.body.itemNum);
  console.log(ctx.request.body.nickName);
  //console.log(ctx.request.body.openId);
  console.log(ctx.request.body.datetime);

  var id = await DB('cItemSignupManagement').where({ "itemName": ctx.request.body.item, "nickname": ctx.request.body.nickName }).select('id');

  if(id != 0)
  {

    var id1 = await DB('cItemReportManagement').where({
      "itemName": ctx.request.body.item, "nickname": ctx.request.body.nickName,
      report_date: ctx.request.body.datePicker }).select('id');
    if(id1 == 0)
    {
        await DB('cItemReportManagement').insert({
        itemName: ctx.request.body.item,
        itemNum: ctx.request.body.itemNum,
        nickname: ctx.request.body.nickName,
        report_date: ctx.request.body.datePicker,
        report_time: ctx.request.body.datetime,
        })
    }
    else{
      await DB('cItemReportManagement').where({
        "itemName": ctx.request.body.item, "nickname": ctx.request.body.nickName,
        "report_date": ctx.request.body.datePicker
      }).update({
        itemNum: ctx.request.body.itemNum,
        report_time: ctx.request.body.datetime,
      })  
    }  
  }
}

