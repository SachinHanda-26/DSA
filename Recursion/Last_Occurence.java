public class Last_Occurence {

//     public static int findLast(int[] arr, int target) {
//     int lastIndex = -1; // stores the last found index
    
//     for (int i = 0; i < arr.length; i++) {
//         if (arr[i] == target) {
//             lastIndex = i; // update whenever we find target
//         }
//     }
    
//     return lastIndex; // will be -1 if not found
// }

public static int findLast2(int [] arr, int target, int i){
   if(i == arr.length){
    return -1;
   }

    int isFound = findLast2(arr, target, i+1);

    if(isFound!= -1){
        return isFound;
    }
   
    if(arr[i] == target){
    return i;
    }

    return -1;

}

    public static void main(String[] args) {
        int [] arr = {1,2,3,5,3,6,5};
System.out.println(findLast2(arr, 5,0));
    }
}
