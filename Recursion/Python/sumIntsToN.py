# I've used a string literal for multiline comments, which Python will ignore.
# Python really needs its own multiline comment syntax.
"""
run this sumIntsToN example with
> python sumIntsToN <number>
e.g.:> python sumIntsToN 5

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

def sumIntsToN(n):
    if n <= 1:
        return n
    else:
        return n + sumIntsToN(n - 1)
    
def showError():
    print("Please provide a positive integer argument [max 999].")


# check input has been provided
if len(sys.argv) < 2:
    showError()
    sys.exit(1)

# if the input isn't an int show a helpful message
try:
    arg = int(sys.argv[1]) # if arg isn't a valid int we'll catch the ValueError below
    if arg < 0 or arg > 999: # if arg is a valid int, check it's positive and not greater than 999
        showError()
        sys.exit(1)
except ValueError: # catch only ValueError for invalid integer conversion
    showError()
    sys.exit(1)
else:
    print(sumIntsToN(arg))
