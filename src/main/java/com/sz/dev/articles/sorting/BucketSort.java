package com.sz.dev.articles.sorting;

public class BucketSort {


    static int getMax(int a[]) {
        int n = a.length;
        int max = a[0];
        for (int i = 1; i < n; i++)
            if (a[i] > max)
                max = a[i];
        return max;
    }

    public static void sort(int a[]) // function to implement bucket sort
    {
        int n = a.length;
        int max = getMax(a); //max is the maximum element of array
        int bucket[] = new int[max + 1];
        for (int i = 0; i <= max; i++) {
            bucket[i] = 0;
        }
        for (int k : a) {
            bucket[k]++;
        }
        for (int i = 0, j = 0; i <= max; i++) {
            while (bucket[i] > 0) {
                a[j++] = i;
                bucket[i]--;
            }
        }
    }
}
