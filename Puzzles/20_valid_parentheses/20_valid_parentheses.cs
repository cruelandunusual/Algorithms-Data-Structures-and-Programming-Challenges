
/*
Some solutions to LeetCode problems. I've submitted them on LeetCode.com
but did all my work in Visual Studio so I'm saving this to GitHub for posterity.
*/

/*
20.Valid Parentheses
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:
1. Open brackets must be closed by the same type of brackets.
2. Open brackets must be closed in the correct order.
3. Every close bracket has a corresponding open bracket of the same type.


Example 1:
Input: s = "()"
Output: true

Example 2:
Input: s = "()[]{}"
Output: true

Example 3:
Input: s = "(]"
Output: false

Example 4:
Input: s = "([])"
Output: true

Constraints:

1 <= s.length <= 104
s consists of parentheses only '()[]{}'.
*/

/*
 * A 'matching pair' is defined as a match between opening and closing brackets.
 * 
 * First, a list of chars (a stack) is created, and the first element of
 * string s is pushed onto the stack.
 * Starting at element 1 of string s, a loop iterates over the string, comparing the current element of string s to
 * the topmost stack element. If there's a matching pair then the topmost stack element is popped
 * off the stack. If there's no match, then the current element of s is pushed onto the stack.
 * At the end of the loop if the stack is empty then we have a string with all matching pairs.
 * If the stack has one or more elements then the string has unmatched pair(s).
*/

using System.Collections.Generic;
static bool IsPair(char open, char close)
{
    bool isPair = false;
    if ((open == '(' && close == ')') || (open == '{' && close == '}') || (open == '[' && close == ']'))
    {
        isPair = true;
    }
    return isPair;
}

static bool IsValid(string s)
{
    if (s.Length % 2 == 1 || s.Length < 2) { return false; } // string s must be even length and greater than length 1
    List<char> charStack = []; // stack of chars to store comparison char
    charStack.Add(s[0]); // push the first char of string s onto the stack
    int charStackIndex = charStack.Count - 1; // increment stack index -- could use Count-1 throughout but charStackIndex feels neater
    for (int currChar = 1; currChar < s.Length; currChar++)
    {
        if (charStackIndex >= 0 && IsPair(charStack[charStackIndex], s[currChar]))
        {
            charStack.RemoveAt(charStackIndex); // pop last item from stack if match found
        }
        else
        {
            charStack.Add(s[currChar]); // add current item from string s to stack if no match found
        }
        charStackIndex = charStack.Count - 1;
    }
    bool isValid = false;
    if (charStack.Count == 0) // if stack empty string s is valid
    {
        isValid = true;
    }
    return isValid;
}

string myString1 = "[](){}[({})]"; // expected true
string myString2 = "{([])}"; // expected true
string myString3 = "{([])["; // expected false
string myString4 = "()[]{}"; // expected true
string myString5 = "({[)"; // expected false
string myString6 = "(}])"; // expected false
Console.WriteLine("It is " + IsValid(myString2) + " that the string " + myString2 + " has matching brackets.");


