package main

import (
	"bufio"
	"fmt"
	"log"
	"os"
	"strconv"
	"strings"
)

func factorial(num uint64) uint64 {
	if num <= 1 {
		return num
	} else {
		return num * factorial(num-1)
	}
}

func main() {
	reader := bufio.NewReader(os.Stdin)

	for {
		fmt.Print("Enter an integer to factorialise: > ")
		// read until new line reached
		input, err := reader.ReadString('\n')
		if err != nil {
			// log any read errors
			log.Fatal(err)
		}
		// TrimSpace seems to work better than TrimSuffix(\n)
		input = strings.TrimSpace(input)
		// force the int conversion to unsigned in 64 to give a few more bits to play with in large numbers
		// factorial 65 seems to be the limit
		i, _ := strconv.ParseUint(input, 0, 64)

		fmt.Printf("the factorial of %d is %d\n", i, factorial(i))
	}
}
