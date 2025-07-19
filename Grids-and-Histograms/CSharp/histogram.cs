// This code is a simple demonstration of how to print a 2D array in both histogram and linear styles.
// It initializes a 2D array with sequential numbers and prints it in two different formats.

int[] histogram = new int[8] { 4, 3, 7, 10, 3, 9, 2, 1 }; // initialise a random array of integers

void printArray_HistogramStyle(int[] list)
{
    int histMax = 0;
    for (int i = 0; i < list.Length; i++)
    {
        if (list[i] > histMax)
        {
            histMax = list[i]; // store the largest number in the array
        }
    }

    string starStr = ""; // initialise a string for printing each line
    for (int x = histMax; x > 0; x--)
    {
        for (int y = 0; y < list.Length; y++)
        {
            if (list[y] < x)
            {
                starStr += "  "; // append space if current element is less than max
            }
            else
            {
                starStr += "* "; // else append a star
            }
        }
        Console.WriteLine(starStr);
        starStr = ""; // reset the string for the next line
    }

}

void printArray_LinearStyle(int[] list)
{
    for (int i = 0; i < list.Length; i++)
    {
        for (int j = 0; j < list[i]; j++)
        {
            Console.Write("* "); // print asterisks for each element in the array
        }
        Console.WriteLine(); // newline for each element
    }
    
}


Console.WriteLine("printing an array of random ints as a vertical histogram:");
printArray_HistogramStyle(histogram);
Console.WriteLine();
Console.WriteLine();
Console.WriteLine("printing the array as a linear histogram:");
printArray_LinearStyle(histogram);  

