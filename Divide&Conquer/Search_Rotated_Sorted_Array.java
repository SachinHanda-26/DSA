public class Search_Rotated_Sorted_Array {

    public static int search(int[] arr, int tar, int si, int ei){
    
        // base condition
    
        if(si>ei){
            return -1;
        }


       // kaam
       int mid = si + (ei-si)/2;
  
    if(arr[mid] == tar){
        return mid;
    }

    if(arr[si] <= arr[mid]){  // ele on L1

        if(arr[si] <= tar && tar <= arr[mid])  // ele at left side of L1
        {
          return search(arr, tar, si, mid-1);
        }
        else // ele at right side of L1(mid)
        {
    return search(arr, tar, mid+1, ei);
        }
    }
    

    else{  // ele on L2

 if(arr[mid] <= tar && tar <= arr[ei]) // ele at right side of L2
 {
return search(arr, tar, mid+1, ei);
 }

 else{ // ele at left side of L2(mid)
    return search(arr, tar, si, mid-1);
 }

    }

    }

    public static void main(String[] args) {
        int [] arr = {4, 5, 6, 7, 0, 1, 2};
        int tarIdx = search(arr, 2, 0, arr.length-1);
        System.out.println(tarIdx);
    }
}
