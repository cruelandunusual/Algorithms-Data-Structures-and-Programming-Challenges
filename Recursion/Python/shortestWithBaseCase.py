def shortestWithBaseCase(makeRecursiveCall):
    print('shortestWithBaseCase(%s) called.' % makeRecursiveCall)
    if not makeRecursiveCall:
        # base case
        print('Returning from base case.')
        return
    else:
        # recursive case
        shortestWithBaseCase(False)
        print('Returning from recursive case.')
        return

print('Calling shortestWithBaseCase(False):')
shortestWithBaseCase(False)
print()
print('Calling shortestWithBaseCase(True):')
shortestWithBaseCase(True)
