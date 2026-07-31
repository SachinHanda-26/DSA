
public class Max_Subarray_Sum {

    public static int printSubArraySub(int numbers[]) {
        int res = Integer.MIN_VALUE;

        for (int i = 0; i < numbers.length; i++) {
            int start = i;
            for (int j = i; j < numbers.length; j++) {
                int end = j;
                int ans = 0;
                for (int k = start; k <= end; k++) {
                    // System.out.print(numbers[k] + " ");
                    ans = ans + numbers[k];
                }

                if (ans > res) {
                    res = ans;
                }

            }

        }
        // System.out.println("Total arrays: " + ts);
        return res;
    }

    public static void main(String[] args) {
        int numbers[] = {1, -2, 6, -1, 3};
        int result = printSubArraySub(numbers);
        System.out.println("The Max Subarray Sum is: " + result);
    }
}
