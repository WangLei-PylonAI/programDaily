class leetcode415:
    def addStrings(self, num1: str, num2: str) -> str:
        i, j = len(num1) - 1, len(num2) - 1
        carry = 0
        ans = []

        while i >= 0 or j >= 0 or carry:
            x = int(num1[i]) if i >= 0 else 0
            y = int(num2[j]) if j >= 0 else 0
            total = x + y + carry
            ans.append(str(total % 10))
            carry = total // 10
            i -= 1
            j -= 1

        return ''.join(reversed(ans))

if __name__ == "__main__":
    solution = leetcode415()
    print(solution.addStrings("11", "123"))
    print(solution.addStrings("456", "77"))
    print(solution.addStrings("0", "0"))
