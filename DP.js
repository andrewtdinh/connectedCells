// DON'T USE RECURSION THIS IS ALL DP.
// 1. Find the minimum edit distance from one arbitrary string to another.
// Vaguely, on purpose.
//console.log(editDistance("Carthorse","Orchestra")) //8
//console.log(editDistance("abc","def")); //3 (all substitutes)
//console.log(editDistance("asdf","adsf")); //2 delete/insert or double sub
//console.log(editDistance("The lazy brown fox", "The hazy round fx")); //5
// console.log(editDistance("", "The hazy")); //8
// console.log(editDistance("abcd", "abcd")); //0
//Fake Mike Soln:
function editDistance(from,to) {
    //compare string "to" to an empty string
    var D = [0];
    var i;
    for (i = 1; i <= to.length; i++) {
        D.push(i);
    }
    for (i = 1; i <= from.length; i++){
        //start at the 2nd row (the first is initialized already)
        var subOrNone = D[0]
        D[0] = i; //Column 0 is a trivial derivation since it is equivalent to converting the "from" string to an empty string
        for (var j = 1; j <= to.length; j++) {
            var del = D[j];
            var ins = D[j - 1];

            D[j] = from[i - 1] === to[j - 1] ? subOrNone :
                1 + Math.min(subOrNone, del, ins);
            subOrNone = del; //advance to (i-1,j) so the next iteration it becomes (i-1, j-1)

        }
    }
    return D[to.length]
}


"use strict";

var editDistance = function(str1, str2)
{
    return getMinEdit(str1, str2, 0, 0);
}

var getMinEdit = function(str1, str2, idx1, idx2)
{
    //console.log(str1.length +  " - " + str2.length + " // " + idx1 + " - " + idx2);

    if(idx1 == str1.length)
        return str2.length - idx2;

    if(idx2 == str2.length)
        return str1.length - idx1;

    if(str1[idx1] === str2[idx2])
        return getMinEdit(str1, str2, idx1 + 1, idx2 + 1);
    else
        return 1 + Math.min(getMinEdit(str1, str2, idx1 + 1, idx2 + 1),
                                Math.min(getMinEdit(str1, str2, idx1 + 1, idx2)), getMinEdit(str1, str2, idx1, idx2 + 1));
}

console.log(editDistance("Carthorse","Orchestra")) //8
console.log(editDistance("abc","def")); //3 (all substitutes)
console.log(editDistance("asdf","adsf")); //2 delete/insert or double sub
console.log(editDistance("", "The hazy")); //8
console.log(editDistance("abcd", "abcd")); //0
console.log(editDistance("The lazy fox", "The hazy")); //5



//Find a longest subsequence between 2 strings.
//For example: "ACBEA" and "ADCA" will output "ACA" since A, C, and A appear in increasing order in both strings.
//"AGCAT" and "GAC" could output "GA" or "AC" or "GC" -- you don't need to output all of them (you can if you'd like though if it is easier)
