
public class Max_Subarray_Sum_Prefix {

    public static void subArraySumPrefix(int numbers[]) {
        int ans = 0;
        int res = Integer.MIN_VALUE;

        int prefix[] = new int[numbers.length];
        prefix[0] = numbers[0];

        for (int i = 1; i < prefix.length; i++) {
            prefix[i] = prefix[i - 1] + numbers[i];
        }

        for (int i = 0; i < numbers.length; i++) {
            int start = i;

            for (int j = 1; j < numbers.length; j++) {
                int end = j;

                ans = start == 0 ? prefix[end] : prefix[end] - prefix[start - 1];

                if (ans > res) {
                    res = ans;
                }
            }
        }
        System.out.println("The Max Subarray Sum using prefix array is: " + res);
    }

    public static void main(String[] args) {
        int numbers[] = {1, -2, 6, -1, 3};
        subArraySumPrefix(numbers);
    }
}
