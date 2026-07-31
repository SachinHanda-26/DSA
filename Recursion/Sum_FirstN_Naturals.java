public class Sum_FirstN_Naturals {

    public static int sumNat(int n){
        if(n == 0){
            return 0;
            // return;
        }
        return n + sumNat(n-1);
    }
    public static void main(String[] args) {
        System.out.println(sumNat(5));
    }
}
