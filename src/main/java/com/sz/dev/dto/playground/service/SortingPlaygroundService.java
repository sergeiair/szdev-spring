package com.sz.dev.dto.playground.service;

import com.sz.dev.articles.sorting.*;
import com.sz.dev.dto.playground.MeasureResultDto;
import com.sz.dev.dto.playground.SortingRequestDto;
import com.sz.dev.dto.playground.SortingResultDto;
import com.sz.dev.dto.playground.utls.MeasureUtil;
import org.springframework.stereotype.Service;

@Service
public class SortingPlaygroundService {

    public SortingResultDto sort(SortingRequestDto sortingRequestDto) {
        int[] array = sortingRequestDto.getArray().clone();

        MeasureUtil measureService = new MeasureUtil();
        measureService.startMeasure();

        switch (sortingRequestDto.getName()) {
            case "insertion":
                InsertionSort.sort(array);
                break;
            case "merge":
                MergeSort.sort(array, 0, array.length - 1);
                break;
            case "quick":
                QuickSort.sort(array, 0, array.length - 1);
                break;
            case "heap":
                HeapSort.sort(array);
                break;
            case "tim":
                TimSort.sort(array, array.length);
                break;
            case "shell":
                ShellSort.sort(array);
                break;
            case "bucket":
                BucketSort.sort(array);
                break;
            case "radix":
                RadixSort.sort(array, array.length);
                break;
            case "counting":
                CountingSort.sort(array, array.length);
                break;
            case "cube":
                CubeSort.sort(array, 0, array.length - 1);
                break;
            case "tree":
                TreeSort.sort(array);
                break;
            case "selection":
                SelectionSort.sort(array);
                break;
            case "bubble":
                BubbleSort.sort(array, array.length);
                break;
            default:
                return SortingResultDto
                        .builder()
                        .name(sortingRequestDto.getName())
                        .array(new int[] {})
                        .result(new MeasureResultDto())
                        .build();
        }


        MeasureResultDto resultDto = measureService.endMeasure();

        return SortingResultDto
                .builder()
                .name(sortingRequestDto.getName())
                .array(array)
                .result(resultDto)
                .build();
    }
}
