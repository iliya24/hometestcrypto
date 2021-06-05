const errors=require('../utils/errors');
const {URL} = require('url');
const { parse: parseQuery } = require('querystring');
const request = require('request');


module.exports={
getRate :  async (req, res, next) => {
    try {
        var url = new URL(req.protocol + '://' + req.get('host') + req.originalUrl);
        const query = parseQuery(url.search.substr(1));

        if (query.asset!=null) {           
             
            request('https://min-api.cryptocompare.com/data/price?fsym='+query.asset+'&tsyms=USD', { json: true }, (err, res2, body) => {
            
        if (err) { 
            res.status(errors.NotFound).send();    
        }
        else
        {
            res.status(errors.Ok).json({
                 
                data: body
            }).send();
        }
        });
           
        }
        else
        {
            res.status(errors.NotFound).send();
       
    }
    } catch (error) {
        res.status(errors.InternalServerError).send("InternalServerError");
    }
},

getRateIntime :  async (req, res, next) => {
    try {
        var url = new URL(req.protocol + '://' + req.get('host') + req.originalUrl);
        const query = parseQuery(url.search.substr(1));

        if (query.time!=null) {           
            var unixTimestamp = Math.floor(new Date(query.time).getTime()/1000);

            request('https://min-api.cryptocompare.com/data/pricehistorical?fsym=BTC&tsyms=USD&ts='+unixTimestamp, { json: true }, (err, res2, body) => {
            
        if (err) { 
            res.status(errors.NotFound).send();    
        }
        else
        {
            res.status(errors.Ok).json({
                 
                data: body
            }).send();
        }
        });
           
        }
        else
        {
            res.status(errors.NotFound).send();
       
    }
    } catch (error) {
        res.status(errors.InternalServerError).send("InternalServerError");
    }
}


};
