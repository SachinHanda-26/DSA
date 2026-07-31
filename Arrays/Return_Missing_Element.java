
import java.util.Arrays;

public class Return_Missing_Element {
    public static int misRet(int[] arr){
        Arrays.sort(arr);
int ele = 0;

for(int i=0; i<arr.length-1; i++){
    if(arr[i]+1 != arr[i+1]){
     ele = arr[i] + 1;
    }
}


return ele;
    }

    public static void main(String[] args) {
        int [] arr = {1, 2, 5, 3};
        System.out.println(misRet(arr));
    }
}
