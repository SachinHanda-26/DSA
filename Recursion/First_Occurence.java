
public class First_Occurence {

    // public static int findFirst(int[] arr, int target) {

    //     for (int i = 0; i < arr.length; i++) {
    //         if (target == arr[i]) {
    //             return i;
    //         }
    //     }
    //     return -1;
    // }
    

    // Using Recursion.
    public static int findFirst2(int[] arr,int i, int target){

        if(i == arr.length){
            return -1;
        }

        if(arr[i] == target){
            return i;
        }

        return findFirst2(arr, i+1, target);
    }

    public static void main(String[] args) {
        int[] arr = {2, 3, 4, 6, 5, 7, 5};
        System.out.println(findFirst2(arr,0, 5));
    }
}
