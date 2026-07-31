public class Remove_Duplicates {

    public static int evenSum(int [] arr){
    int n = arr.length;
    int newLength = 0;
    

        for(int i=0; i<n; i++){
            boolean isDuplicate = false;
            for(int j=0; j<newLength; j++){
                if(arr[i] == arr[j]){
                    isDuplicate = true;
                    break;
                }
            }

            if(!isDuplicate){
                arr[newLength] = arr[i];
                newLength++;
            }
        }

        int [] uniqueArray = new int[newLength];

        for(int i=0; i<newLength; i++){
            uniqueArray[i] = arr[i];
        }

        int sum = 0;

        for(int i=0; i<uniqueArray.length; i++){
            if(uniqueArray[i] % 2 == 0){
                sum += uniqueArray[i];
            }
        }
        return sum;
    }
    public static void main(String[] args) {
        int [] arr = {4,2,4,5,2,3,3};
        System.out.println("The Sum is: "+ evenSum(arr));
    }
}
