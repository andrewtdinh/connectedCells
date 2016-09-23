#Remove all adjacent doubles in a string

def removeDoubles(s):
    oldString = s
    newString = ''
    while newString != oldString:
        oldString = newString
        searchLimit = len(oldString) - 1
        for ch in oldString:
            if oldString.index(ch) == searchLimit:
                break
            else:
                
