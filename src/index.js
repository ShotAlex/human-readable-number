module.exports = function toReadable (num) {
    var obj = {
        0: "zero",
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",
        20: "twenty",
        30: "thirty",
        40: "forty",
        50: "fifty",
        60: "sixty",
        70: "seventy",
        80: "eighty",
        90: "ninety",
        // 999: " hundred"
    }

    // if (obj[num]) return obj[num];

    let answer = '';
    let arr = num.toString().split('');    
    
    if (obj[num]) return obj[num];
    if (num > 19 && num < 100) answer = obj[arr[0] * 10] + ' ' + obj[arr[1]];
    if (num > 99 && num < 1000) {
        answer = obj[arr[0]] + " hundred " + obj[arr[1] * 10] + ' ' + obj[arr[2]];    
        if (arr[2] == 0) answer = obj[arr[0]] + " hundred " + obj[arr[1] * 10];
        if (arr[1] == 0) answer = obj[arr[0]] + " hundred " + obj[arr[2]];
        if (arr[1] == 0 && arr[2] == 0) answer = obj[arr[0]] + " hundred";
        if (arr[1] == 1) answer = obj[arr[0]] + " hundred " + obj[arr[1] + arr[2]];
    }

    return answer;
}
