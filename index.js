const express = require('express');
const app = express();
const mongoose = require('mongoose');  
const path = require('path'); 
const Chat = require('./models/chat.js')
const methodOveride = require('method-override');

app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs' ); 
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(methodOveride('_method'));


app.listen(8080,()=>{
    console.log('Server is running on port 8080');
})

main().then(() => {
    console.log('Connected to MongoDB')})
.catch(err => console.error(err));
async function main(){
    await mongoose.connect('mongodb://localhost:27017/whatsapp')
}

//Index Route
app.get('/chats', async(req,res)=>{
     let chats = await Chat.find().sort({ created_at: -1 });

     console.log(chats)
    //res.send('Chats fetched successfully');
    res.render('index.ejs',{chats})
})

//New Route
app.get('/chats/new',(req,res)=>{
    res.render('newchat.ejs')
})

 //Create Route
app.post('/chats', async(req,res)=>{
     let{from, to ,message} = req.body;
    let newchat = new Chat({
    from,
    to,
    message,
    created_at: new Date() 
});
     newchat
     .save()
     .then((res)=>{
        console.log('Chat saved:', res)
     })
     .catch(err =>{
            console.log('Error saving chat:', err);
        })
        res.redirect('/chats');
    })



    //Edit Route

app.get("/chats/:id/edit", async (req,res)=>{
    let{id} = req.params;
    let chat =  await Chat.findById(id);
    res.render('edit.ejs',{chat});
})

app.put('/chats/:id', async (req, res) => {
    let { id } = req.params;
    let {message: newmessage} = req.body;
    let chatUpdated = await Chat.findByIdAndUpdate(id, {message: newmessage}, {runValidators: true, new: true});
    //console.log(chatUpdated);
    res.redirect('/chats'); 
})



//Delete Route

app.delete('/chats/:id', async (req, res) => {
    let { id } = req.params;
   let deletedChat = await Chat.findByIdAndDelete(id);
   console.log('Chat deleted:', deletedChat);
    res.redirect('/chats');
})

app.get('/',(req,res)=>{ 
    res.send('Checking Response')
})