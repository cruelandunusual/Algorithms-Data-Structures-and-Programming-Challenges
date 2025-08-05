package main

import (
	"bufio"
	"fmt"
	"os"
	"strconv"
	"strings"
)


func factorial(num uint64) uint64 {
	if num <= 1 {
		return num
	} else {
		return num * factorial(num - 1)
	}
} 


func main() {
	reader := bufio.NewReader(os.Stdin)

	for {
		fmt.Print("Enter an integer to factorialise: > ")
		input, err := reader.ReadString('\n')
		if err != nil {
			// fmt.Fprintln allows us to specify an output device, in this case Stderr
			fmt.Fprintln(os.Stderr, err)
		}
		
		input = strings.TrimSuffix(input, "\n")
		
		i, err := strconv.ParseUint(input, 0, 64)
		if err != nil {
			// ... handle error
			fmt.Fprintln(os.Stderr, err)
    	}
		fmt.Println(factorial(i))
	}
}
