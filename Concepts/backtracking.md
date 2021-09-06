# Backtracking Algorithm

Backtracking is an algorithmic-technique for solving problems recursively by trying to build a solution incrementally, one piece at a time, removing those solutions that fail to satisfy the constraints of the problem at any point of time (by time, here, is referred to the time elapsed till reaching any level of the search tree).

Backtracking is an algorithmic technique where the goal is to get all solutions to a problem using the brute force approach. It consists of building a set of all the solutions incrementally. Since a problem would have constraints, the solutions that fail to satisfy them will be removed.

It uses recursive calling to find a solution set by building a solution step by step, increasing levels with time. In order to find these solutions, a search tree named state-space tree is used. In a state-space tree, each branch is a variable, and each level represents a solution.

A backtracking algorithm uses the depth-first search method. When it starts exploring the solutions, a bounding function is applied so that the algorithm can check if the so-far built solution satisfies the constraints. If it does, it continues searching. If it doesn’t, the branch would be eliminated, and the algorithm goes back to the level before.


## When to Use Backtracking Algo?

The backtracking algorithm is applied to some specific types of problems. For instance, we can use it to find a feasible solution to a decision problem. It was also found to be very effective for optimization problems.

For some cases, a backtracking algorithm is used for the enumeration problem in order to find the set of all feasible solutions for the problem.

On the other hand, backtracking is not considered an optimized technique to solve a problem. It finds its application when the solution needed for a problem is not time-bounded.


Resources
- https://www.geeksforgeeks.org/backtracking-algorithms/
- https://www.baeldung.com/cs/backtracking-algorithms