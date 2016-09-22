from checkPalindromeStr import isPalindrome

# The functions below will check if an integer is a Palindrome by converting first to string:

def strPalindromeCheck(num):
    return isPalindrome(str(num))

# print strPalindromeCheck(24)
# print strPalindromeCheck(242)
def intPalindromeCheck(num):
    oldNum = num
    newNum = 0
    while num > 0:
        

print intPalindromeCheck(24)
print intPalindromeCheck(2442)
