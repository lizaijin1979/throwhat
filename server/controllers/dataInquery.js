// const DB = require('../tools/dbconfig')
const query = require('../tools/query.js')
const configs = require('../config')

var mysql = require('mysql');

module.exports = async ctx => {
  console.log(ctx.request.body.item);
  console.log(ctx.request.body.datePicker);
  console.log(ctx.request.body.nickName);

  if ((ctx.request.body.item == "全部" || ctx.request.body.item == "") && (ctx.request.body.datePicker == "全部" || ctx.request.body.datePicker == ""))
  {
    var sql = 'SELECT * FROM cItemReportManagement WHERE nickName =' + "'" + ctx.request.body.nickName +"';";
  }
  else if ((ctx.request.body.item == "全部" || ctx.request.body.item == "") && (ctx.request.body.datePicker != "全部" && ctx.request.body.datePicker != "")) 
  {
    var sql = 'SELECT * FROM cItemReportManagement WHERE nickName =' + "'" + ctx.request.body.nickName + "' " + 'AND report_date = ' + "'" + ctx.request.body.datePicker+"';";
  }
  else if ((ctx.request.body.item != "全部" && ctx.request.body.datePicker != "") && (ctx.request.body.item == "全部" || ctx.request.body.datePicker == "")) 
  {
    var sql = 'SELECT * FROM cItemReportManagement WHERE nickName =' + "'" + ctx.request.body.nickName + "' " + 'AND itemName = ' + "'" + ctx.request.body.item + "';";
  }
  else if ((ctx.request.body.item != "全部" && ctx.request.body.datePicker != "") && (ctx.request.body.item != "全部" && ctx.request.body.datePicker != ""))
  {
    var sql = 'SELECT * FROM cItemReportManagement WHERE nickName =' + "'" + ctx.request.body.nickName + "' "+ 'AND itemName =' + "'"+ ctx.request.body.item +"' " + 'AND report_date = ' + "'"+ ctx.request.body.datePicker +"';"; 
  }

  let rows = await query(sql)
  ctx.body = {
    data: rows
  }


  }



