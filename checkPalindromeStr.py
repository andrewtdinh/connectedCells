# This will test if a string is a palindrome

def isPalindrome(aStr):
    # If the string is empty
    if not aStr:
        return False
    aStr = aStr.lower()
    return aStr[::-1] == aStr


# print isPalindrome('abc')
# print isPalindrome('abccbA')
