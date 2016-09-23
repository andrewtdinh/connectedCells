#Remove all adjacent doubles in a string

def removeDoubles(s):
    oldString = s
    newString = ''
    while newString != oldString:
        oldString = newString
        searchLimit = len(oldString) - 1
        for ch in oldString:
            indx = oldString.index(ch)
            if indx == searchLimit:
                break
            else:
                if ch == oldString[indx + 1]:
                    if indx + 2 > searchLimit:
                        newString = oldString[0:indx]
                        break
                    else:
                        newString = oldString[0:indx] + oldString[(indx + 2):]
                        break
    return newString


print (removeDoubles('aabcdcbffb'))
