
public class Four_Directions {

    public static double calAns(String str) {
        double x = 0;
        double y = 0;
        double res;

        for (int i = 0; i < str.length(); i++) {
            switch (str.charAt(i)) {
                case 'W' -> x = x - 1;
                case 'E' -> x = x + 1;
                case 'N' -> y = y + 1;
                default -> y = y - 1;
            }
        }
        res = Math.sqrt(((x*x) + (y*y)));

        return res;
    }

    public static void main(String[] args) {
String str = "WNEENESENNN";
System.out.println(calAns(str));
    }
}
