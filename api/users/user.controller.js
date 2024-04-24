const {create,fetchUser} =require('./user.services')

module.exports={
    createUser:(req,res)=>{
        const body=req.body
        create(body,(error,result)=>{
            if(error){
                console.log(error)
                return res.status(500).json({
                    success:0,
                    message:"database connection error"
                })
            }
            return res.status(200).json({
                success:1,
                data:result
            })

        })
    },
    getUser:(req,res)=>{
        fetchUser((error,result)=>{
            if(error){
                console.log(error)
                return res.status(500).json({
                    success:0,
                    message:"database connection error",
                    
                    
                })
            }
            return res.status(200).json(
                result
            )

        })
    }
}