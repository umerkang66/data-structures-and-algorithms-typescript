const merge = (
    data: number[],
    start: number,
    mid: number,
    end: number
): void => {
    // Build the temporary array to avoid modifying the original content
    const newData = [];
    let i = start,
        j = mid + 1,
        k = 0;

    // While both subarray have values, then merge them in sorted order
    while (i <= mid && j <= end) {
        if (data[i] < data[j]) {
            newData[k] = data[i];
            i++;
            k++;
        } else {
            newData[k] = data[j];
            j++;
            k++;
        }
    }

    // VALUES THAT ARE ALREADY SORTED
    // Add the rest of the values from the left sub-array, into the new data array
    while (i <= mid) {
        newData[k] = data[i];
        i++;
        k++;
    }

    // Add the rest of the values from the right sub-array, into the new data array
    while (j <= end) {
        newData[k] = data[j];
        j++;
        k++;
    }

    // Adding the values from newData array into the data array that was passed into the function, basically add the subarray
    // EXPLANATION: If the start is at 12 so we will add the i - start i.e. 12 - 12 = 0, so we will add the value of newData index at 0 into data at 12th index, similarly it goes on and on, then the i will become 13 in the next iteration of for loop then in the 13th index of data array, i - start i.e. 13 - 12 = 1, 1th value of newData array.
    for (i = start; i <= end; i++) {
        data[i] = newData[i - start];
    }
};

const mergeSort = (data: number[], start: number, end: number): void => {
    if (start < end) {
        const mid = Math.floor((start + end) / 2);
        mergeSort(data, start, mid);
        mergeSort(data, mid + 1, end);
        merge(data, start, mid, end);
    }
};
