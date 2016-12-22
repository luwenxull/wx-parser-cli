#!/usr/bin/env node

var fs=require('fs');
var userArgv = process.argv.slice(2);
var wxParser=require('wx-parser');

var result=wxParser.parseStart('<div>good</div>')
fs.writeFile('test.js',result,err=>{
    err & console.log(err);
})