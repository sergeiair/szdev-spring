package com.sz.dev.articles.sorting;

public class CubeSort {
    public static void sort(int[] arr, int low, int high)
    {
        if (low < high)
        {
            // Choose a pivot element
            int pivot = arr[(low + high) / 2];

            // Partition the array
            int i = low;
            int j = high;
            while (i <= j)
            {
                while (arr[i] < pivot)
                    i++;

                while (arr[j] > pivot)
                    j--;

                if (i <= j)
                {
                    int temp = arr[i];
                    arr[i] = arr[j];
                    arr[j] = temp;
                    i++;
                    j--;
                }
            }

            // Sort the sub-arrays
            sort(arr, low, j);
            sort(arr, i, high);
        }
    }
}
