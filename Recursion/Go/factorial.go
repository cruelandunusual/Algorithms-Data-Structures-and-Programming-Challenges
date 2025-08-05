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
		input, err := reader.ReadString('\n')
		if err != nil {
			log.Fatal(err)
		}
		input = strings.TrimSpace(input)
		i, _ := strconv.ParseUint(input, 0, 64)
		fmt.Printf("the factorial of %d is %d\n", i, factorial(i))
	}
}
