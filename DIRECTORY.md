### Binary-Hex-Decimal  
 Various number conversion exercises originally from _**K&R**_, but I have implemented them in both `C` and `JavaScript`.
  * [Hexadecimal to Decimal integer](Binary-Hex-Decimal/CPROG_ex2-3_hex_to_integer.c) (implemented in `C`)
  * [Hexadecimal to Decimal integer v2)](Binary-Hex-Decimal/hex_to_decimal.c) (implemented in `C`)
  * [Decimal to Binary)](Binary-Hex-Decimal/decimal_to_binary.c) (implemented in `C`)
  * [Decimal to Decimal integer)](Binary-Hex-Decimal/decimal_to_binary.js) (implemented in `JavaScript`)

### Bit-Manipulation  
Various bitwise and bit-shifting exercises from _**K&R**_; all implemented in `C`.
  * [any](Bit-Manipulation/CPROG_ex2-5_any.c)
  * [setbits](Bit-Manipulation/CPROG_ex2-6_setbits.c)
  * [invertbits](Bit-Manipulation/CPROG_ex2-7_invertbits.c)
  * [rightrot](Bit-Manipulation/CPROG_ex2-8_rightrot.c)
  * [faster bitcount](Bit-Manipulation/CPROG_ex2-9_faster_bitcount.c)

### Binary Search  
Binary search exercise from _**K&R**_. The exercise involves writing a slightly different algorithm and comparing the runtime against an earlier solution provided by the authors. *(In the source code my solution is the function called `PMS_binsearch`, the authors' is simply `binsearch`)*  
Implemented in `C`.
  * [binary search](Binary-Search/CPROG_ex3-1_PMS_binsearch.c)

### FizzBuzz  
The classic programming exercise; this version is from _**Eloquent JavaScript**_, implemented in `JavaScript`.
  * [FizzBuzz](Fizz-Buzz/FizzBuzz.js)

### Grids and Histograms
Various exercises to print grids and histograms to the terminal.  
I first came across the histogram exercise in _**K&R**_ and implemented it in `C`;  
since then I've re-implemented it in `C#` and `JavaScript`.
*(As the question in the book originally states, [a vertical orientation is more challenging](Grids-and-Histograms/CPROG_ex1-13_histogram_lengths_of_words.c#L4).)*
  * [histogram of word length](Grids-and-Histograms/CPROG_ex1-13_histogram_lengths_of_words.c) (implemented in **C**)
  * [histogram of char frequency](Grids-and-Histograms/CPROG_ex1-14_histogram_char_frequency.c) (implemented in **C**)
  * [vertical histogram](Grids-and-Histograms/js_histograms.js) (implemented in **JavaScript**)
  * [vertical histogram](Grids-and-Histograms/histogram.cs) (implemented in **C#**)
  * [chess grids](Grids-and-Histograms/chess_grids.js) (implemented in **JavaScript**)

### LeetCode problems
These are problems picked at random from _**LeetCode**_. Implemented in `C#`.
  * [Two Sum](LeetCode/1_two_sum/1_two_sum.cs)
  * [Valid Parentheses](LeetCode/20_valid_parentheses/20_valid_parentheses.cs)
  * [Find Words Containing Character](LeetCode/2942_find_words_containing_character/2942_find_words_containing_character.cs)

### Linked List Arithmetic
This is a self-assigned project, inspired by some of the problems in _**Think Like a Programmer**_.  
The idea was to use linked lists in `C++` to represent numbers, with each node of the list storing a single digit.  
This way arbitrarily large integers can be represented, with a new node added to the list to store each decimal digit. Number magnitude is therefore limited only by RAM storage, not by processor word size.  

  * This basic solution merely represents the numbers with no useful operations other than printing them to the screen
    * [linked list integers v1](Linked-List-Arithmetic/Double-Linked-List-Numbers/TLAP_double_linked_list_numbers.cpp) (doubly linked list solution)
  * Once I decided to implement addition and subtraction I realised I only needed to traverse the list in one direction, so the list node definition is singly linked from here.
    * [linked list integers v2 (with arithmetic operations)](Linked-List-Arithmetic/Linked-List-Numbers/TLAP_linked_list_numbers.cpp)
    * [linked list signed integers (with arithmetic operations)](Linked-List-Arithmetic/Linked-List-Numbers-Signed)
