#!/usr/bin/env node

let fs = require('fs');
let wxParser = require('wx-parser');

// var result=wxParser.parseStart('<div>good</div>')
// fs.writeFile('test.js',result,err=>{
//     err & console.log(err);
// })


// fs.readFile('test.html','utf-8', (err, data) => {
//   if (err) throw err;
//   console.log(wxParser.parseStart(data));
// });


let program = require('commander');


program
    .version('1.0.1')
    // .usage('')

program
    .command('parse <readPath>')
    .option('-o, --output <output>', '写入路径')
    .description('将html字符串解析成虚拟DOM')
    .action(function (path) {
        console.log('parsing "%s"', path);
        fs.readFile(path, 'utf-8', (err, data) => {
            if (err) throw err
            fs.writeFile(this.output||path+'.json', JSON.stringify(wxParser.parseStart(data)), (err) => {
                if (err) throw err
                console.log('ok');
            })
        })
    });

program.parse(process.argv);