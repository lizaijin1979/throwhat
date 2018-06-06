const DB = require('../tools/dbconfig')

module.exports = async ctx => {
  console.log(ctx.request.body.item);
  console.log(ctx.request.body.nickName);

  const record = await DB('cItemSignupManagement').where({ "nickName": ctx.request.body.nickName }).select('id', 'itemName', 'itemNum', 'signup_time');
  /*
    if (ctx.request.body.item != '全部' && ctx.request.body.datePicker != '全部')
    {
      const record = await DB('cItemReportManagement').where({ "report_date": ctx.request.body.datePicker, "itemName": ctx.request.body.item, "nickName": ctx.request.body.nickName }).select('id', 'itemName', 'itemNum', 'report_date', 'report_time');
    }
    else if (ctx.request.body.item == '全部' && ctx.request.body.datePicker != '全部')
    {
      const record = await DB('cItemReportManagement').where({ "report_date": ctx.request.body.datePicker, "nickName": ctx.request.body.nickName }).select('id', 'itemName', 'itemNum', 'report_date', 'report_time');
    }
    else if (ctx.request.body.item != '全部' && ctx.request.body.datePicker == '全部')
    {
      const record = await DB('cItemReportManagement').where({ "itemName": ctx.request.body.item, "nickName": ctx.request.body.nickName }).select('id', 'itemName', 'itemNum', 'report_date', 'report_time');
    }
    else
    {
      const record = await DB('cItemReportManagement').where({ "nickName": ctx.request.body.nickName }).select('id', 'itemName', 'itemNum',     'report_date', 'report_time');
    }
  */
  ctx.body = {
    record
  }
}
