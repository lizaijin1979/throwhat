const DB = require('../tools/dbconfig')
const query = require('../tools/query.js')

module.exports = async ctx => {
  console.log(ctx.request.body.item);
  console.log(ctx.request.body.nickName);

    if (ctx.request.body.item != '全部')
    {
      var sql = 'SELECT * FROM cItemSignupManagement WHERE nickName =' + "'" + ctx.request.body.nickName + "' " + 'AND itemName = ' + "'" + ctx.request.body.item + "';";

    }
    else if (ctx.request.body.item == '全部')
    {
      var sql = 'SELECT * FROM cItemSignupManagement WHERE nickName =' + "'" + ctx.request.body.nickName + "';";
    }
    else
    {
      console.log('-----the input para is error');
    }

    console.log(sql);

    let rows = await query(sql);
    let temp = JSON.parse(JSON.stringify(rows));
    console.log(temp);
    ctx.body = {
      data: temp
    }
}
