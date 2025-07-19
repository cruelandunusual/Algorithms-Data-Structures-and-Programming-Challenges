### Binary-Hex-Decimal  
 Various number conversion exercises originally from _**K&R**_, but I have implemented them in both `C` and `JavaScript`.
  * [Hexadecimal to Decimal integer](Binary-Hex-Decimal/C/CPROG_ex2-3_hex_to_integer.c) -- **C**
  * [Hexadecimal to Decimal integer v2](Binary-Hex-Decimal/C/hex_to_decimal.c) -- **C**
  * [Decimal to Binary integer](Binary-Hex-Decimal/C/decimal_to_binary.c) -- **C**
  * [Adding Binary numbers](Binary-Hex-Decimal/JavaScript/adding_binary_numbers.js) -- **JavaScript**
  * [Binary to Decimal (exported function definition)](Binary-Hex-Decimal/JavaScript/binary-to-decimal_function.js) -- **JavaScript**
  * [Binary to Decimal (function test)](Binary-Hex-Decimal/JavaScript/binary-to-decimal_test.js) -- **JavaScript**
  * [Binary to Decimal (split string method)](Binary-Hex-Decimal/JavaScript/binary-to-decimal_split_string_method.js) -- **JavaScript**
  * [Decimal to Binary](Binary-Hex-Decimal/JavaScript/decimal-to-binary.js) -- **JavaScript**
  * [Multiplying Binary numbers](Binary-Hex-Decimal/JavaScript/multiplying-binary-numbers.js) -- **JavaScript**

### Binary Search  
Binary search exercise from _**K&R**_. The exercise involves writing a slightly different algorithm and comparing the runtime against an earlier solution provided by the authors. *(In the source code my solution is the function called `PMS_binsearch`, the authors' is simply `binsearch`)*  
  * [binary search](Binary-Search/CPROG_ex3-1_PMS_binsearch.c) -- **C**

### Bit-Manipulation  
Various bitwise and bit-shifting exercises from _**K&R**_.
  * [any](Bit-Manipulation/CPROG_ex2-5_any.c) -- **C**
  * [setbits](Bit-Manipulation/CPROG_ex2-6_setbits.c) -- **C**
  * [invertbits](Bit-Manipulation/CPROG_ex2-7_invertbits.c) -- **C**
  * [rightrot](Bit-Manipulation/CPROG_ex2-8_rightrot.c) -- **C**
  * [faster bitcount](Bit-Manipulation/CPROG_ex2-9_faster_bitcount.c) -- **C**

### FizzBuzz  
The classic programming exercise; this version is from _**Eloquent JavaScript**_.
  * [FizzBuzz](Fizz-Buzz/FizzBuzz.js) -- **JavaScript**

### Grids and Histograms
Various exercises to print grids and histograms to the terminal.  
I first came across the histogram exercise in _**K&R**_ `(page number?)` and implemented it in `C`;  
since then I've re-implemented it in `C#` and `JavaScript`.  
It's simple enough to implement a horizontal solution; as the exercise in the book originally states, [a vertical orientation is more challenging](Grids-and-Histograms/CPROG_ex1-13_histogram_lengths_of_words.c#L4).

  * [histogram of word length](Grids-and-Histograms/C/CPROG_ex1-13_histogram_lengths_of_words.c) -- **C**
  * [histogram of char frequency](Grids-and-Histograms/C/CPROG_ex1-14_histogram_char_frequency.c) -- **C**
  * [vertical histogram](Grids-and-Histograms/CSharp/histogram.cs) -- **C#**
  * [vertical histogram](Grids-and-Histograms/JavaScript/js_histograms.js) -- **JavaScript**
  * [chess grids](Grids-and-Histograms/JavaScript/chess_grids.js) -- **JavaScript**

### Linked List Arithmetic
This is a self-assigned project, inspired by some of the problems in _**Think Like a Programmer**_.  
The idea was to use linked lists in `C++` to represent numbers, with each node of the list storing a single digit.  
This way arbitrarily large integers can be represented, with a new node added to the list to store each decimal digit. Number magnitude is therefore limited only by RAM storage, not by processor word size.  

  * This basic solution merely represents the numbers with no useful operations other than printing them to the screen
    * [linked list integers v1](Linked-List-Arithmetic/Double-Linked-List-Numbers/TLAP_double_linked_list_numbers.cpp) (doubly linked list solution) -- **C++**
  * Once I decided to implement addition and subtraction I realised I only needed to traverse the list in one direction, so the list node definition is singly linked from here.
    * [linked list integers v2 (with arithmetic operations)](Linked-List-Arithmetic/Linked-List-Numbers/TLAP_linked_list_numbers.cpp) -- **C++**
    * [linked list signed integers (with arithmetic operations)](Linked-List-Arithmetic/Linked-List-Numbers-Signed) -- **C++**

### Puzzles
These are problems picked at random from _**LeetCode**_.
  * [Two Sum](LeetCode/1_two_sum/1_two_sum.cs) -- **C#**
  * [Valid Parentheses](LeetCode/20_valid_parentheses/20_valid_parentheses.cs) -- **C#**
  * [Find Words Containing Character](LeetCode/2942_find_words_containing_character/2942_find_words_containing_character.cs) -- **C#**

