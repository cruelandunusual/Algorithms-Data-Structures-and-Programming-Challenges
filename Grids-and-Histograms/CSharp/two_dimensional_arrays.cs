// This code is a simple demonstration of how to print a 2D array in both histogram and linear styles.
// It initializes a 2D array with sequential numbers and prints it in two different formats.

Random rand = new Random();

int width = 3, height = 2;
int[,] table = new int[width, height];

int counter = 0;
for (int j = 0; j < table.GetLength(0); j++)
{
    for (int k = 0; k < table.GetLength(1); k++)
    {
        table[j, k] = ++counter;
    }
}
Console.WriteLine("printing each dimension of a 2D array separately");
printArray_HistogramStyle(table);
Console.WriteLine("\n");
Console.WriteLine("printing 2D array linearly");
printArray_LinearStyle(table);
Console.WriteLine("\n");

void printArray_HistogramStyle(int[,] t)
{
    for (int k = 0; k < t.GetLength(1); k++)
    {
        for (int j = 0; j < t.GetLength(0); j++)
        {
            Console.Write(t[j, k] + " ");
        }
        Console.WriteLine();
    }

}

void printArray_LinearStyle(int[,] t)
{
    for (int j = 0; j < t.GetLength(0); j++)
    {
        for (int k = 0; k < t.GetLength(1); k++)
        {
            Console.Write(t[j, k] + " ");
        }
        //Console.WriteLine();
    }
}



// print a 10x10 grid of asterisks
Console.WriteLine("printing a 10x10 grid of asterisks");
List<String> myList = []; //abbreviated version of new List<String>()
while (myList.Count < 50)
{
    myList.Add("*");
}

for (int i = 0; i < myList.Count; i++)
{
    if (i % 10 == 0) { Console.WriteLine(); }
    Console.Write(myList[i]);
}
