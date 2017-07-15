const express    = require('express');
const bodyParser = require('body-parser');
const _          = require('lodash');
const cors       = require('cors');
const {ObjectID} = require('mongodb');

const {connected} = require('./db/mongodb-connect'); //Connection to mongodb
const {noteModel} = require('./models/notes/notes');

/**
 * Let's Go
 */

const port = process.env.PORT || 3000;
const app  = express();
app.use(bodyParser.json());
app.use(cors());

/**
 * Add note
 */
app.post('/notes',(req,res)=>{
    let body = _.pick(req.body,['name','description']);
    let noteInfo = noteModel(body);

    noteInfo.save().then((doc)=>{
        res.send(doc);
    }).catch((err)=>{
        res.status(400).send(err);
    });
});

/**
 * Get all notes
 */
app.get('/notes',(req,res)=>{
    noteModel.find().then((doc)=>{
        res.send(doc)
    }).catch((err)=>{
        res.status(400).send(err);
    });
});

/**
 * Get note by ID
 */
app.get('/note/:id',(req,res)=>{
    let id = req.params.id;

    if(!ObjectID.isValid(id)){
        return res.status(404).send();
    }

    noteModel.findById(id).then((doc)=>{
        if(!doc){
            return res.status(404).send();
        }
        res.send(doc);
    });
    
});


/**
 * Delete note by ID
 */
app.delete('/note/:id',(req,res)=>{
    let id = req.params.id;

    if(!ObjectID.isValid(id)){
        return res.status(404).send();
    }

    noteModel.findByIdAndRemove({"_id":id}).then((doc)=>{
        if(!doc){
            return res.status(404).send();
        }
        res.send(doc);
    }).catch((err)=>{
        res.status(400).send(err);
    });
    
});

/**
 * Update note by ID
 */
app.patch('/note/:id',(req,res)=>{
    let id = req.params.id;
    let body = _.pick(req.body,['name','description']);

    if(!ObjectID.isValid(id)){
        return res.status(404).send();
    }

    noteModel.findByIdAndUpdate(id,{$set:body},{new:true}).then((doc)=>{
        if(!doc){
            return res.status(404).send();
        }
        res.send(doc);
    }).catch((err)=>{
        res.status(400).send(err);
    });
    
});

app.listen(port,()=>{
    console.log(`Server running on port ${port}`);
})