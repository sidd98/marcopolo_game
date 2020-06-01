const game = async (req,res) => {
    let str = '';
    let k = 1;
    for(let i = req.query.numbers; i >= 1; i--) {
        if(k%4 == 0 && k%7 == 0) str = str.concat('marcopolo,');
        else if(k%4 == 0) str = str.concat('marco,');
        else if(k%7 == 0) str = str.concat('polo,');
        else str = str.concat(k+',');

        if(k%1000 == 0) {
            str = str.concat('\n');
        }
        k++;
    }
    res.status(200).send(str.substring(0,str.length -2));
};
module.exports =  game;
