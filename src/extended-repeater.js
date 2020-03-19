module.exports = function repeater(str, options) {
    str = String(str);

    if(options.repeatTimes !== undefined) {
        repeatTimes = options.repeatTimes;
    } else {
        repeatTimes = 1;
    }

    if(options.separator !== undefined) {
        separator = options.separator;
    } else {
        separator = '+';
    }

    if(options.additionRepeatTimes != undefined) {
        additionRepeatTimes = options.additionRepeatTimes;
    } else {
        additionRepeatTimes = 1;
    }

    if(options.additionSeparator !== undefined) {
        additionSeparator = options.additionSeparator;
    } else {
        additionSeparator = '|';
    }

    if(options.addition !== undefined) {
        addition = String(options.addition);
        arrAdition = [];
        for(i = 0; i < additionRepeatTimes; i++) {
            arrAdition[i] = addition;
        }
        addition = arrAdition.join(additionSeparator);
    } else {
        addition = '';
    }

    // console.log('str = ' + str);
    // console.log('repeatTimes = ' + repeatTimes);
    // console.log('separator = ' + separator);
    // console.log('addition = ' + addition);
    // console.log('additionRepeatTimes = ' + additionRepeatTimes);
    // console.log('additionSeparator = ' + additionSeparator);

    arrStr = [];

    for(i = 0; i < repeatTimes; i++) {
        arrStr[i] = str + addition;
    }
    str = arrStr.join(separator);
    return str;
};
