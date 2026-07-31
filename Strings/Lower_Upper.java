public class Lower_Upper{

    public static void conStr(String str){
char [] chars = str.toCharArray();

for(int i=0; i<chars.length; i++){
   if(chars[i] >='a' && chars[i] <= 'z'){
    chars[i] = (char)(chars[i] - 32); 
   }
}

System.out.println(new String(chars));
    }

    public static void main(String[] args) {
        String str = "apple";
        conStr(str);
    }
}