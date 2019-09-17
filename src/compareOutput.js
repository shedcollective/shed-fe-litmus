const fc = require('filecompare');
const chalk = require('chalk');

fc (__dirname + '/Candidate.vue', __dirname + '/Clean.vue', (isEqual) => {
    if (isEqual) {
        console.log('\n' + chalk.bold.bgGreen.white(' ✅ PASS ᕙ(°□°‶)ᕗ ') + chalk.white(' --- Yay, your linter is configured as expected') + '\n');
    } else {
        console.log('\n' + chalk.bold.bgRed.white(' 🚨 FAIL (╯°□°）╯︵ ┻━┻ ') + chalk.white(' --- Aw snap, theres an issue with your linter setup') + '\n');
    }
});
