#Remove all adjacent doubles in a string

def removeDoubles(s):
    oldString = s
    newString = ''
    while True:
        if not newString:
            newString = oldString
        else:
            oldString = newString
        searchLimit = len(newString) - 1
        for indx in xrange(searchLimit):
            if newString[indx] == newString[indx + 1]:
                if indx + 2 > searchLimit:
                    newString = newString[0:indx]
                    break
                else:
                    newString = newString[0:indx] + newString[(indx + 2):]
                    break
        if newString == oldString:
            break
    return newString

print (removeDoubles('aabcdcbffbaa'))
