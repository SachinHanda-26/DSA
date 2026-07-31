
public class Tiling_Problem {

    public static int tileSetUp(int n) {
        // base condition

        if (n == 0 || n == 1) {
            return 1;
        }

        // Kaam
        // vertical choice
        int fnm1 = tileSetUp(n - 1);

        // horizontal choice
        int fnm2 = tileSetUp(n - 2);

        int totWays = fnm1 + fnm2;

        return totWays;
    }

    public static void main(String[] args) {
        System.out.println(tileSetUp(2));
    }
}
