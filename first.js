const mysql=require("mysql2");
const express=require("express");
var app=express();
const parser=require("body-parser");
app.use(parser.json());
const cors=require('cors');

app.use(cors({
    origin:"*",
}))
var connection=mysql.createConnection(
    {
        host:'localhost',
        user:"root",
        password:"adithkkn@9960",
        database:"CUCS"
    }
);

connection.connect((err)=>
{
    if(!err)
    {console.log("DB connected");}
    else
    {console.log("Error");}


});
app.listen(5500,()=>console.log("Server started.."));
app.get('/blossoms',(req,res)=>
{
    connection.query("select * from blossoms",(err,rows,fields)=>{
        if(!err)
        res.send(rows);
        else
        console.log("error");
    });
});

app.get('/blossoms/:S_regno',(req,res)=>
{
    connection.query("select * from blossoms where S_regno=?",[req.params.S_regno],(err,rows,fields)=>
    {
        if(!err){res.send(rows);}
        else {console.log("error");}
    });
});
app.get('/add',(req,res)=>
{
    var sql="insert into blossoms SET ?";
    
    var  query=connection.query(sql,data,(err,result)=>
    {
        if(err) throw error;
        res.send("Inserted rows....");
    });

});
app.get('/update/:S_regno/:S_name',(req,res)=>
{
    var sql=`update blossoms set name='${req.params.name}'where S_regno=${req.params.S_regno}`;
    var quary=connection.query(sql,(err,result)=>
    {
        if(err) throw err;
        res.send("updated the table......");
    });

});

app.get('/delete/:S_regno',(req,res)=>
{
    var sql=`delete from blossoms where S_regno=${req.params.S_regno}`;
    var quary=connection.query(sql,(err,result)=>
    {
        if(err) throw err;
        res.send("deleted from the table...");
    });
});
app.get('/add/:no/:name/:class/:event/:team',(req,res)=>
{
    var sql="insert into blossoms SET ?";
    var data={S_regno:[req.params.S_regno],S_name:req.params.S_name,S_class:req.params.S_class,S_event:req.params.S_event,S_team:req.params.S_team};
    var  query=connection.query(sql,data,(err,result)=>
    {
        if(err) throw err;
        res.send("Inserted new rows....");
    });

})