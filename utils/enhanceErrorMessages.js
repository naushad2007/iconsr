const program = require('commander');
const { chalk } = require('.');

module.exports = (methodName, log) => {
  program.Command.prototype[methodName] = function enhanceErrorMessages (...args) {
    if (methodName === 'unknownOption' && this._allowUnknownOption) {
      return;
    }

    this.outputHelp();
    console.log('  ' + chalk.red(log(...args)));
    console.log();

    process.exit(1);
  };
};