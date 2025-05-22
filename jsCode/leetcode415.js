class leetcode415 {
    addStrings(num1, num2) {
        let i = num1.length - 1;
        let j = num2.length - 1;
        let carry = 0;
        let result = [];

        while (i >= 0 || j >= 0 || carry !== 0) {
            let x = i >= 0 ? parseInt(num1[i]) : 0;
            let y = j >= 0 ? parseInt(num2[j]) : 0;
            let sum = x + y + carry;
            result.push(sum % 10);
            carry = Math.floor(sum / 10);
            i--;
            j--;
        }

        return result.reverse().join('');
    }
}

// 测试代码
const solution = new leetcode415();
console.log(solution.addStrings("11", "123"));
console.log(solution.addStrings("456", "77"));
console.log(solution.addStrings("0", "0"));
