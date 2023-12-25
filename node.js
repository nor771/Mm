const express=require('express');
const app=express();
app.get('/api', (req,res)=>{
    res.send('تم ارسال الطلب بنجاح');
});
app.listen(3000,()=>{
    console.log('الخادم يعمل على البورت 3000');
});