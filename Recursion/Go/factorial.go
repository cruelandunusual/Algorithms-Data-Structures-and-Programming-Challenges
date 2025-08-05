package main

import (
	"fmt"
	"log"
)

func factorial(num uint64) uint64 {
	if num <= 1 {
		return num
	} else {
		return num * factorial(num-1)
	}
}

func main() {
	var number uint64
	for {
		fmt.Print("Enter an integer to factorialise: > ")

		_, err := fmt.Scanf("%d", &number)
		if err != nil {
			log.Fatal(err)
		}

		fmt.Printf("the factorial of %d is: %d\n", number, factorial(number))
	}
}
