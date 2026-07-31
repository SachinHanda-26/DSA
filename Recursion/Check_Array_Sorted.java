public class Check_Array_Sorted {

    // public static boolean checkArr(int [] arr){

    //     for(int i=0; i<arr.length; i++){
    //         if(i < arr.length-1 && arr[i] > arr[i+1]){
    //             return false;
    //         }
    //     }
    //     return true;
    // }

    // Using Recursion Method
    public static boolean checkArr2(int[] arr, int i){
       if(i == arr.length-1){
        return true;
       }

        if(arr[i] > arr[i+1]){
            return false;
        }

        return checkArr2(arr, i+1);
    }

    public static void main(String[] args) {
        int [] arr = {1,2,3,7,5,6};
        System.out.println(checkArr2(arr,0));
    }
}
