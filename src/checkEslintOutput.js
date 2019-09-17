const chalk = require('chalk');

var stdin = process.openStdin();
var expected = `/Users/shaun/Sites/GitRepos/shed-fe-litmus/src/Candidate.vue: line 20, col 9, Error - Prop 'fooProp' requires default value to be set. (vue/require-default-prop)
/Users/shaun/Sites/GitRepos/shed-fe-litmus/src/Candidate.vue: line 23, col 9, Error - Prop 'barProp' requires default value to be set. (vue/require-default-prop)

2 problems
`;
var data = '';

stdin.on('data', function(chunk) {
    data += chunk;
});

stdin.on('end', function() {
    console.log(data);
    if (data === expected) {
        console.log('\n' + chalk.green(' ✅ ESLint picking up unfixable errors - continue ᕕ( ᐛ )ᕗ '));
    } else {
        console.log('\n' + chalk.bold.bgRed.white(' 🚨 ESLINT FAIL (╯°□°）╯︵ ┻━┻ ') + chalk.white(' --- Aw snap, theres an issue with your linter setup') + '\n');
        process.exit(666);
    }
});
