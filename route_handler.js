import ach from "./schema/./schama.js"

export async function data(req,res){
    let {username,email,phone,profile,hobbi} = req.body
    let result = await ach.create({
        username,
        email,
        phone,
        hobbi,
        profile,
    })
    res.send("success")
}