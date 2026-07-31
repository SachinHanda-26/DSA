
public class Question_Two {

    public static int rec(int n){
        if(n == 1){
            // System.out.print(1);
            return 1;
        }

        System.out.println(1);
        // System.out.print();
       
return (n - rec(n-1));
    }
    
    public static void main(String[] args) {
        System.out.println(rec(5));
    }
}
