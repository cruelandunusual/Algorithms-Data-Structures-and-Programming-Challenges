"""
This example calculates the summation of all the ints up to and
including N, both recursively and in a standard iterative algorithm.

Usage:
    > python sumIntsToN.py <number>
    e.g.
    > python sumIntsToN.py 5

Fun fact: in maths this is known as triangular numbers, given by the formula

S(n)=n(n+1)/2

The result of the summation can be referred to as the n-th triangular number. 
The triangular numbers form a sequence where each number represents a triangle with dots. For example:

    S(1)=1
    S(2)=1+2=3
    S(3)=1+2+3=6
    S(4)=1+2+3+4=10

However, this isn't nearly as well known as, for example, factorial, so I've called the function sumIntsToN.

"""

import sys

# Recursive version of sumIntsToN algorithm
def sumIntsToN(n):
    if n <= 1:
        # base case
        return n
    else:
        # recursive case
        return n + sumIntsToN(n - 1)

# Iterative version of sumIntsToN algorithm
def sumIntsToNIter(n):
    result = 0
    for i in range(1, n + 1):
        result = result + i
    return result
    
def showError():
    print("Please provide a positive integer argument [max 999].")


# check input has been provided
if len(sys.argv) < 2:
    showError()
    sys.exit(1)

# if the input isn't an int show a helpful message and exit; nicer than a Python Traceback message
try:
    arg = int(sys.argv[1]) # if arg isn't a valid int we'll catch the ValueError below
    if arg < 0 or arg > 999: # if arg is a valid int, check it's positive and not greater than 999
        showError()
        sys.exit(1)
except ValueError: # catch only ValueError for invalid integer conversion
    showError()
    sys.exit(1)
else:
    print('iterative calculation for sumIntsToN(%s) = %s' % (arg, str(sumIntsToNIter(arg))))
    print('recursive calculation for sumIntsToN(%s) = %s' % (arg, str(sumIntsToN(arg))))


"""
The sequence of function calls below shows the
state of the function call stack when calling the recursive version of
sumIntsToN with a value of 3

sumIntsToN() ## stack frame pushed onto stack
number = 3
Returns:
3 + sumIntsToN(2)

sumIntsToN() ## stack frame pushed onto stack
number = 2
Returns:
2 + sumIntsToN(1)

sumIntsToN() ## stack frame pushed onto stack
number = 1   ## base case -- stack frame popped off stack
Returns:
1

sumIntsToN() ## stack frame popped off stack
number = 2
Returns:
2 + 1

sumIntsToN() ## stack frame popped off stack
number = 3
Returns:
3 + 3 ## final result

"""