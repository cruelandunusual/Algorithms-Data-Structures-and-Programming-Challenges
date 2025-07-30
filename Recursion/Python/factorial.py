# I've used a string literal for multiline comments, which Python will ignore.
# Python really needs its own multiline comment syntax.
"""
run this factorial example with
> python factorial <number>
e.g.:> python factorial 5

"""

import sys

def factorial(n):
    if n <= 1:
        return n
    else:
        return n * factorial(n - 1)
    
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
    print(factorial(arg))
