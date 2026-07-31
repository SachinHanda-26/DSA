
public class Pairing_Friends {

    public static int pairFriends(int n) {
        // base condition
        if (n == 1 || n == 2) {
            return n;
        }

        // kaam
        // choices
        // single-single
        int fnm1 = pairFriends(n - 1);

        // pairing
        int fnm2 = pairFriends(n - 2);
        int pairWays = (n - 1) * fnm2;

        // total ways
        int totalWays = fnm1 + pairWays;

        return totalWays;
    }

    public static void main(String[] args) {
        System.out.println(pairFriends(3));
    }
}
