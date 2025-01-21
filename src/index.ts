import { program } from 'commander'

async function main (){
    program.option('--config <path>');
    program.parse();

    const options = program.opts();
    console.log(options);
}

main();