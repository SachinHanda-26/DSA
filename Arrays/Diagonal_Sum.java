
public class Diagonal_Sum {

    public static void diaSum(int matrix[][]) {

        int sum = 0;

        // The Time Complexity of this brute force approach is O(n2).
        // for(int i=0; i<matrix.length; i++){
        //     for(int j=0; j<matrix[0].length; j++){
        //     if(i == j){
        //         sum += matrix[i][j];    
        //     }
        //     else if(i+j == matrix.length-1){
        //         sum += matrix[i][j];
        //     }
        //     }
        // }
// Now, Optimal Solution. Time Complexity of this approach will be O(n).
        for (int i = 0; i < matrix.length; i++) {
            // primary sum 
            sum += matrix[i][i];

            // secondary sum
            if (i != matrix.length - 1 - i) {
                sum += matrix[i][matrix.length - 1 - i];
            }
        }

        System.out.println("Sum is: " + sum);
    }

    public static void main(String[] args) {
        // int matrix[][] = {{1,2,3,4},{5,6,7,8},{9,10,11,12},{13,14,15,16}};
        int matrix[][] = {{0, 1, 2}, {3, 4, 5}, {6, 7, 8}};
        diaSum(matrix);
    }
}
