# This will test if a string is a palindrome

def isPalindrome(aStr):
    aStr = aStr.lower()
    return aStr[::-1] == aStr


isPalindrome('abc')
isPalindrome('abccbA')
