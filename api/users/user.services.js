const connection =require('../../config/database')


module.exports={
    create:(data,callback)=>{
        
        connection.query(`insert into users(id,username,pref_language,stdin,source_code,output,output_status,date) value(?,?,?,?,?,?,?,?)`,
        [data.id,data.username,data.language,data.input,data.code,data.stdout,data.status,new Date()],
        (error,results,fields)=>{
            if(error){
                return callback(error)
            }
            return callback(null,results)
        }
        )
    },
    fetchUser:(callback)=>{
        connection.query(`select * from users`,[],(error,results,fields)=>{
            if(error){
                return callback(error)
            }
            return callback(null,results)
        })
    }
}
