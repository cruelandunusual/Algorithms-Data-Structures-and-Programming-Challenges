"""
This example calculates the factorial of N, both recursively and in a standard iterative algorithm.

Usage:
    > python factorial.py <number>
    e.g.
    > python factorial.py 5

"""

import sys

# Recursive version of factorial algorithm
def factorial(n):
    if n <= 1:
        # base case
        return n
    else:
        # recursive case
        return n * factorial(n - 1)

# Iterative version of factorial algorithm
def factorialIter(n):
    result = 1
    for i in range(1, n + 1):
        result = result * i
    return result


# boilerplate function for showing help if input is incorrect
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
    print('iterative calculation for factorial(%s) = %s' % (arg, str(factorialIter(arg))))
    print('recursive calculation for factorial(%s) = %s' % (arg, str(factorial(arg))))


"""
The sequence of function calls below shows the
state of the function call stack when calling the recursive version of
factorial with a value of 3

factorial() ## stack frame pushed onto stack
number = 3
Returns:
3 * factorial(2)

factorial() ## stack frame pushed onto stack
number = 2
Returns:
2 * factorial(1)

factorial() ## stack frame pushed onto stack
number = 1   ## base case -- stack frame popped off stack
Returns:
1

factorial() ## stack frame popped off stack
number = 2
Returns:
2 * 1

factorial() ## stack frame popped off stack
number = 3
Returns:
3 * 2 ## final result

"""