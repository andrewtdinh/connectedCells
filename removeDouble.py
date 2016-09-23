#Remove all adjacent doubles in a string

def removeDoubles(s):
    oldString = s
    newString = ''
    while True:
        # print 'oldString: ' + oldString
        if not newString:
            newString = oldString
        else:
            oldString = newString
        searchLimit = len(newString) - 1
        for ch in newString:
            indx = newString.index(ch)
            if indx == searchLimit:
                break
            else:
                if ch == newString[indx + 1]:
                    if indx + 2 > searchLimit:
                        newString = newString[0:indx]
                        break
                    else:
                        newString = newString[0:indx] + newString[(indx + 2):]
                        break
        print newString
        if newString == oldString:
            break
    return newString


print (removeDoubles('aabcdcbffb'))
