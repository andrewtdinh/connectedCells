#Remove all adjacent doubles in a string

def removeDoubles(s):
    oldString = s
    newString = ''
    while True:
        print 'oldString: ' + oldString
        print 'newString: ' + newString
        if not newString:
            newString = oldString
        else:
            oldString = newString
        searchLimit = len(newString) - 1
        for ch in newString:
            indx = newString.index(ch)      #This is where a bug is introduced
            print 'index: ' + str(indx)
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
