package com.sz.dev.dto.playground.service;

import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.Random;

@Service
public class ListGenerator {

    public int[] getNew(int length) {
        Random random = new Random();
        int[] localArray = new int[length];

        for (int i = 0; i < localArray.length; i++) {
            localArray[i] = random.nextInt(localArray.length) + 1;
        }

        return localArray;
    }

    public static void printArray(int[] array) {
        System.out.println(String.join(",", Arrays.toString(array)));
    }

}
