public class ReverseStr {

    public static String strReverse(String str) {

        char[] chars = str.toCharArray();

        int start = 0;
        int end = str.length()-1;

        while (start < end) {
            char temp = chars[start];
            chars[start] = chars[end];
            chars[end] = temp;

            start++;
            end--;
        }

        return new String(chars);
    }

    public static void main(String[] args) {
        String str = "sachin";
        System.out.println(strReverse(str));
    }
}
