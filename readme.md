# Alogorithm

an algorithm should be machine and language independent, and different algorithms work well under different constraints , either time or space

The absolute run time of an algorithm cannot be predicted as it depends on some factors

1. the computer the program is running on
2. the programming language being used
3. the number of tasks running at the same time
4. the operating system

the performance pf an algorithm is evaluated as a function of its input size, and this evaluation is of two types

1. Time complexity : is the amount of time taking by an algorithm to run as a function of its input size
2. space complexity : is the amount of space or memory taken by an algorithm to run as a function of its input size

# HOW TO REPRESENT THE COMPLEXITY OF AN ALGORITHM

This can be done using asymtotic notations, which are mathematical tools for representing time and space complexity, we have main asymthotic notations

1. Big O notaton (O-notation) for worst case complexity
2. Omega notation for best case complexity
3. Theta notation for average case complexity

the most important is the big O which measures the worst case complexity

# Big O notation

this describes the worst case complexity of an algorithm in algebraic terms, it has two characteristics

1. it is expressed in terms of input size
2. it focuses on the bigger picture

# N/B, since we cannot calculate the absolute running time of an algorithm, rather we count the number of times a statement runs based on input size

# TIME COMPLEXITY

1. Linear Time complexity O(n): for loops, the time complexity is linear, O(n), which means as the size of the input increases (n), the time complexity also increases
2. Constant Time complexity O(1): this is independent on the input size
3. Quadratic O(n)^2 : this happens when there are two nested loops
4. Cubic Time complexity: occurs when there are three nested loops
5. Logarithmic O(logn) : when the input size decreases by half every iteration

# SPACE COMPLEXITY

1. Linear Time complexity O(n): for loops, the time complexity is linear, O(n), which means as the size of the input increases (n), the time complexity also increases
2. Constant Time complexity O(1): this is independent on the input size, example is the sorting array
3. Quadratic O(n)^2 : this happens when there are two nested loops
4. Cubic Time complexity: occurs when there are three nested loops
5. Logarithmic O(logn) : when the input size decreases by half every iteration

# note: O(n), O(logn) and O(1) are the best complexities

# Big O of objects

object is a collection of key value pairs , if you want to remove or insert a property from an object, the time complexity is constant 0(1), to access a value, time complexity is also constant, why to search for a property in an object, the time complexity is linear 0(n)

object.keys, object.values and object.enteries, all have a linear time complexity 0(n)

# Arrays

if you insert or remove a property from the end of an array, the time complexity is constant 0(1), because it does not affect the order of the array
but when you insert or remove from the begining of an array, the time complexity is linear 0(n), because you have to reset the entire index of the array elements
accessing an element in an array is constant, as fetching the first element is same as that of position 1000
searching an element is linear 0(n)

# array methods

push / pop are constant 0(1)
shift / unshift / splice / slice / concate are linear 0(n)
forEach / map / reduce / filter are linear 0(n)

note, when using either forEach, map, reduce and filter , this are methods used to loop through an array, when the callback contains another for loop or any loop, the time complexity is 0(logn) which is very costly and the interveiwer might not be happy

# RECURSION

This is a techninque where a solution depends on solutions to smaller instances of same problem, it is simply a function calling itself

# properties of recursion

1. every recursion needs to have a base case, or a condition to terminate the recursion, else you have in infinite loop which can crash your program, it is necesary when you want to have repeatiive tasks from a function
2. A recursive solution may be far worst than an interative solution - it is not always the best solution
