const mongoose = require('mongoose');  
const Chat = require('./models/chat.js')

 
main().then(() => {
    console.log('Connected to MongoDB')})
.catch(err => console.error(err));
async function main(){
    await mongoose.connect('mongodb://localhost:27017/whatsapp')

}

let allchats =[
    {
        from:'Nikhil',
    to:'Hansika',
    message:'Hello',
    created_at: new Date()
},
{
    from:'Hansika',
    to:'Nikhil',
    message:'Hi',
    created_at: new Date()
},
    {    from:'Nikhil',
    to:'Hansika',
    message:'How are you?',
    created_at: new Date()
},
{    from:'Hansika',
    to:'Nikhil',
    message:'I am fine, thank you!',
    created_at: new Date()
},
{    from:'Nikhil',
    to:'Hansika',
    message:'What about you?',
    created_at: new Date()
},
{    from:'Hansika',
    to:'Nikhil',
    message:'I am doing well, thanks for asking!',
    created_at: new Date()
}
]

Chat.insertMany(allchats) 

//  Chat.insertMany([{
//     from:'Nikhil',
//     to:'Hansika',
//     message:'Hello',
//     created_at: new Date()
//  }] )

