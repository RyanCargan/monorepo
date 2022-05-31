#pragma once

#include "bits/stdc++.h"

// Miscellaneous utilities
namespace utils
{
    class Arithmetic
    {
    public:
        // Returns a + b
        static double Add(double a, double b);
        // Returns a - b
        static double Subtract(double a, double b);
        // Returns a * b
        static double Multiply(double a, double b);
        // Returns a / b
        static double Divide(double a, double b);
    };
}
// Algorithm utilities
namespace utils_algo
{
    void sliding_window(); 
    void binary_search();
    void dfs();
    void bfs();
    class recursion
    {
    public:
        void backtrack();
        void dp();
    };
    void merge_sort();
    void quick_sort();
    void linear_search();
    void bubble_sort();
}
// Data structure utilities
namespace utils_data
{
    // Either min-heap or max-heap
    class heap
    {
    public:
        // O(1)
        void top();
        // O(logn)
        void insert();
        // O(logn)
        void remove();
        // O(n)
        // Create heap data structure from binary tree
        void heapify();
    };
    class heap_alt
    {
    public:
        // O(1)
        // Get top/bottom
        void minmax();
        // O(logn)
        void insert();
        // O(logn)
        // Remove
        void pop();
        // O(n)
        // Create heap data structure from binary tree
        void heapify();
    };
    // Unordered data structure
    class hashmap
    {
    public:
        // O(1)
        void search();
        // O(1)
        void insert();
        // O(1)
        void remove();
    };
    // Contiguous array
    class array
    {
    public:
        // O(1)
        void insert_end();
        // O(1)
        void remove_end();
        // O(n)
        void insert_mid();
        // O(n)
        void remove_mid();
    };
    // Better time complexity but worse data locality than contiguous array
    class linked_list
    {
    public:
        // O(1)
        void insert_end();
        // O(1)
        void remove_end();
        // O(1)
        void insert_mid();
        // O(1)
        void remove_mid();
    };
    // Double-ended queue made with linked list usable as queue or stack
    class dequeue
    {
    public:
        // O(1)
        void push_front();
        // O(1)
        void pop_front();
        // O(1)
        void push_back();
        // O(1)
        void pop_back();
    };
    class binary_search_tree
    {
    public:
        // O(logn)
        void search();
        // O(logn)
        void insert();
        // O(logn)
        void remove();
    };
    // Prefix tree
    class trie
    {
    public:
        // O(n)
        void search();
        // O(n)
        void insert();
    };
    // General graph
    class graph
    {
    public:
        int *adj_list;
        int **adj_matrix;
    };
}
// Organization utilities
namespace utils_org
{}
