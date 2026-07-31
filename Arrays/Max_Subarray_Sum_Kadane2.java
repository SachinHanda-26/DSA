public class Max_Subarray_Sum_Kadane2 {


    public static void subArraySumKadane(int numbers[]){
        int currSum = numbers[0];
        int maxSum = numbers[0];

        for(int i=0; i<numbers.length; i++){
            if(currSum + numbers[i] > numbers[i]){
                currSum = currSum + numbers[i];
            }
            else{
                currSum = numbers[i];
            }

            maxSum = Math.max(currSum, maxSum);

        }
        System.out.println("The max subarray sum is: "+ maxSum);
    }
    public static void main(String[] args){
int numbers[] = {-2, -3, 4, -1, -2, 1, 5, -3};
        subArraySumKadane(numbers);

        int negativeTest[] = {-4, -2, -7, -5};  // All-negative test case
        subArraySumKadane(negativeTest);
    }
}
