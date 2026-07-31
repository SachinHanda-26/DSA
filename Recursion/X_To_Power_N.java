
public class X_To_Power_N {

    public static int power(int x, int n) {

        if (n == 0) {
            return 1;
        }

        int halfValue = power(x, n / 2);
        int halfValuePower = halfValue * halfValue;

        if (n % 2 != 0) {
            halfValuePower = x * halfValuePower;
        }

        return halfValuePower;

    }

    public static void main(String[] args) {
System.out.println(power(2, 0));
    }
}
