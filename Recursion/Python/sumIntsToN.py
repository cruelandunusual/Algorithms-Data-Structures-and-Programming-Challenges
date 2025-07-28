import sys

if len(sys.argv) < 2:
    print("Please provide an integer argument.")
    sys.exit(1)

arg = int(sys.argv[1])

def sumIntsToN(n):
    if n <= 1:
        return n
    else:
        return n + sumIntsToN(n - 1)

print(sumIntsToN(arg))
