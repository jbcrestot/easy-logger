/**
 * Module dependencies.
 */
var clc = require('cli-color');
var orange = clc.xterm(208);
var prepend = '';


function EasyLogger(prepend) {

    this.setPrepend(prepend);
    //this.prepend = prepend;
}

/**
 * @param strToPrepend
 */
EasyLogger.prototype.setPrepend = function (strToPrepend) {
    this.prepend = strToPrepend.trim() + ' ';
};

EasyLogger.prototype.success = function (message) {
    write(clc.green(this.prepareMessage(message)));
};

EasyLogger.prototype.notice = function (message) {
    write(clc.blue(this.prepareMessage(message)));
};

EasyLogger.prototype.warning = function (message) {

    write(orange(this.prepareMessage(message)));
};

EasyLogger.prototype.critical = function (message) {

    write(clc.red(this.prepareMessage(message)));
};

EasyLogger.prototype.prepareMessage = function (message) {

    if (typeof message == "object") {
        console.log(message);

        return this.prepend;
    } else {
        return this.prepend + message;
    }
};

var write = function (formattedMessage) {
    console.log(formattedMessage);
};

module.exports = EasyLogger;