## Notes
I've used many sources throughout my time as a programmer - both as a hobbyist and in my earlier professional career.  
Some noteworthy sources are:

<div align="center">

![LeetCode][leetcode]
![The C Programming Language][k&r]
![Think Like A Programmer][tlap]
![Eloquent JavaScript][ejs]
<br>
![Computation and Programming in Python][cppy]
![2D Graphics Programming for Games][2dgpg]
![Programming Challenges Training Manual][pctm]
![Learning C# by Programming Games][lcpg]

</div>

## Linked List Arithmetic 
## [Linked List Arithmetic](Linked-List-Arithmetic/README.md)

This is a self-assigned project, inspired by some of the problems in _**Think Like a Programmer**_.  
The idea was to use linked lists in `C++` to represent numbers, with each node of the list storing a single digit.  
This way arbitrarily large integers can be represented, with a new node added to the list to store each decimal digit. Number magnitude is therefore limited only by RAM storage, not by processor word size.  

  * This basic solution merely represents the numbers with no useful operations other than printing them to the screen
    * [linked list integers v1](Linked-List-Arithmetic/Double-Linked-List-Numbers/TLAP_double_linked_list_numbers.cpp) (doubly linked list solution) -- **C++**
  * Once I decided to implement addition and subtraction I realised I only needed to traverse the list in one direction, so the list node definition is singly linked from here.
    * [linked list integers v2 (with arithmetic operations)](Linked-List-Arithmetic/Linked-List-Numbers/TLAP_linked_list_numbers.cpp) -- **C++**
    * [linked list signed integers (with arithmetic operations)](Linked-List-Arithmetic/Linked-List-Numbers-Signed) -- **C++**



<!-- link shortcuts -->


[leetcode]: .assets/leetcode_alpha.png
[k&r]: .assets/K&R_cover_small.png
[ejs]: .assets/EloquentJavaScript_cover_small.jpg
[tlap]: .assets/think-like-a-programmer_cover_small.png
[2dgpg]: .assets/2d-graphics-programming.jpg
[pctm]: .assets/programming-challenges-training-manual.jpg
[lcpg]: .assets/learning-csharp-programming-games.jpg
[cppy]: .assets/computation-and-programming-python.jpg
