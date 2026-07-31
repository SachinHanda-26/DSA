
import java.util.Arrays;


public class Three_Sum {

    public static int[] sum(int arr[]) {
for(int i=0; i<arr.length; i++){
    for(int j=i+1; j<arr.length; j++){
for(int k=j+1; k<arr.length; k++){
    if(arr[i]+arr[j]+arr[k] == 0){
        return new int[]{arr[i],arr[j],arr[j]};
    }
}
    }
}
return new int[]{};
    }

    public static void main(String[] args) {
        int arr[] = {-1, 0, 1, 2, -1, -4};
        System.out.println("The sum is: "+ Arrays.toString(sum(arr)));
    }
}
