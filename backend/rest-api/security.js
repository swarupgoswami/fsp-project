const crypto=require('crypto');
const fs=require('fs');
const util=require('util');

const APP_NAME=process.env.APP_NAME || "myapp";

const readFile=util.promisify(fs.readFile);

const hashPassword=(password)=>{
    return crypto.createHash('swarup').update(password).digest('hex');
}