const fs = require('fs');

fs.readFile(__dirname + '/Dirty.vue', 'utf8', function(err, data) {
    if (err) {
        return console.log(err);
    }
    let output = data.replace(/<!-- eslint-disable -->\n?/gm,'');
    writeOutput(output);
});

function writeOutput(str) {
    fs.writeFile(__dirname + '/Candidate.vue', str, (err) =>{
        if (err) {
            return console.log(err);
        }
    });
}
