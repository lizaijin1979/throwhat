const {createMysqlClient} = require('./mysqlModel.js')

function mysqlQueryModel({sql}) {
  return new Promise((resolve, rej)=>{
    const mysqlClient = createMysqlClient();
    const sqlStr = sql;
    mysqlClient.connect();
    mysqlClient.query(sqlStr, (err, resp)=>{
      if(err){
        console.log(sqlStr);
        rej(err);
      }else{
        resolve(JSON.parse(JSON.stringify(resp)));
      }
      mysqlClient.end();
    })
  })
}