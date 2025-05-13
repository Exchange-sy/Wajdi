const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static('public')); // لتقديم ملفات HTML وCSS وJS

app.post('/log', (req, res) => {
    const visitorData = `IP الزائر: ${req.body.ip}, تاريخ الزيارة: ${new Date().toISOString()}\n`;
    fs.appendFile('wajdi.txt', visitorData, (err) => {
        if (err) {
            console.error('حدث خطأ أثناء كتابة البيانات:', err);
            return res.status(500).send('خطأ في الخادم');
        }
        res.send('تم تسجيل البيانات بنجاح');
    });
});

app.listen(port, () => {
    console.log(`الخادم يعمل على http://localhost:${port}`);
});
