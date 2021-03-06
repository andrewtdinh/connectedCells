#Remove all adjacent doubles in a string

#This is not as elegant method
# def removeDoubles(s):
#     oldString = s
#     newString = ''
#     while True:
#         if not newString:
#             newString = oldString
#         else:
#             oldString = newString
#         searchLimit = len(newString) - 1
#         for indx in xrange(searchLimit):
#             if newString[indx] == newString[indx + 1]:
#                 if indx + 2 > searchLimit:
#                     newString = newString[0:indx]
#                     break
#                 else:
#                     newString = newString[0:indx] + newString[(indx + 2):]
#                     break
#         if newString == oldString:
#             break
#     return newString

#This is a smarter method
def removeDoubles(s):
    newString = s
    while True:
        oldString = newString
        charSet = set(''.join(newString.split()))
        for ch in charSet:
            while ch*2 in newString:
                indx = newString.find(ch*2)
                if indx + 2 >= len(newString):
                    newString = newString[:indx]
                else:
                    newString = newString[:indx] + newString[(indx + 2):]
        if oldString == newString:
            break
    return newString

print (removeDoubles('aabcdcbffbaa'))
print (removeDoubles('aabcddcbffbaa'))
print (removeDoubles('aabccbffaa'))
