'use strict'

var Crawler = require("crawler");
var url = require('url');
const _=require('lodash')

var c = new Crawler({
    maxConnections : 10,
    jQuery: 'cheerio',
    // This will be called for each crawled page
    onDrain:function(){
        console.log('done')
    }
});

// Queue just one URL, with default callback
c.queue([
    {
        url:'http://www.dianping.com/',
        callback: function(error, result, $){

            let links=Array.from($('a'));
            // console.log(links)
            links = links.filter((ele) =>{

                    if(ele&& ele.attribs&&ele.attribs.href && /\d/.test(ele.attribs.href))
                    return true;
        });
var filer=links.map((ele)=>{
        return ele.attribs.href
    });
console.log(filer);


}


}]);
