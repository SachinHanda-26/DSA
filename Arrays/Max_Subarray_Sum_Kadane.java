

public class Max_Subarray_Sum_Kadane {

    public static void subArraySumKadane(int numbers[]){
int currSum = 0;
int maxSum = Integer.MIN_VALUE;

for(int i=0; i<numbers.length; i++){

    currSum = currSum+numbers[i];
    if(currSum < 0){
        currSum = 0;
    }

    if(currSum>maxSum){
        maxSum = currSum;
    }
}
System.out.println("The maximum subarray sum is: "+ maxSum);
    }
    public static void main(String[] args){
int numbers[] = {-2,-3,4,-1,-2,1,5,-3};
subArraySumKadane(numbers);
    }
}
