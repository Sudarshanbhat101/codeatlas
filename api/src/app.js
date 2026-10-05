import express from 'express';
const app = express();
app.disable('x-powered-by');
app.get('/health',(req,res) =>{
    res.json({
        status: 'ok',
        uptime: process.uptime(),
        timestamp:new Date().toISOString(),

    });
});
export default app;