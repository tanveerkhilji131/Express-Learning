const express = require("express")
let data = require("./MOCK_DATA.json")
const fs = require("fs")
const app = express()
const PORT = 3000
app.use(express.urlencoded({extended : false}))

app.get("/api/users",(req,res)=>{
   return res.json(data)
})
       

app.route("/api/users/:id")
.get((req,res)=>{
    const id = req.params.id
    console.log(id)
    let user = data.find((user)=> user.id == id);
    if(!user){
        return res.status(404).json({status : "ID NOT FOUND"})
    }
   

    return res.json(user)
})

.patch((req,res)=>{
    let id = +req.params.id;
    let check = data.some((user)=>{
        return user.id == id
    })
  
   if(!check){return res.status(404).json({status : "DATA NOT FIND"}) }
   
      let updateName = req.body.first_name
   let alldata = data.map((users)=>{
        if(users.id == +id){
             users.first_name = updateName
        }
        return users
      
    })
     data = alldata
   
 
    fs.writeFile("./MOCK_DATA.json",JSON.stringify(alldata),(err)=>{
        if(err){
             return res.status(500).json({
            status: "File update failed"
        });
        }else{
        return res.json({status : "data updated First_name update sucesful" })  

        }
    })
    

})
.put((req,res)=>{
    let userid = +req.params.id;
    const {first_name ,last_name,email,gender,job_title} = req.body
   let updataData = data.map((user)=>{
    if(user.id === userid){
        user.first_name = first_name
        user.last_name = last_name
        user.email = email
        user.gender = gender
        user.job_title = job_title
    }
    return user
   })
   data = updataData
   fs.writeFile("./MOCK_DATA.json",JSON.stringify(updataData),(err)=>{
    if(err){
         return res.status(500).json({
            status: "File update failed"
        });
    }
  return  res.json({status : "data replace succesfully"})
   })
    
})
.delete((req,res)=>{
    let dynamicId = +req.params.id;
       let index  =  data.findIndex(user => user.id == dynamicId)
       if(index == -1 ){
        return res.status(404).json({
            status : "User not found"
        })
       }
     data.splice(index,1)
    fs.writeFile("./MOCK_DATA.json",JSON.stringify(data),(err)=>{
        if(err){
             return res.status(500).json({
            status: "File delete failed"
        }); 
        }
  return  res.json({status : "deleted file sucessful",id : req.params.id})
    })
})



app.get("/users",(req,res)=>{
   let html = 
   `<ul>
        ${data.map((user)=> `<li>${user.first_name}</li>`).join("") }
   </ul>`
  res.send(html)
   
})

app.post("/api/users",(req,res)=>{
     const body = req.body
     console.log(body)
     data.push({id : data.length+1 , ...body})
     fs.writeFile("./MOCK_DATA.json",JSON.stringify(data,null,2),(err,data)=>{
  
    if(err){ console.log("Error",err)}
    return res.json({status : "Sucess"})
     })
     
})



app.listen(PORT,()=> console.log(`server started ${PORT}`))