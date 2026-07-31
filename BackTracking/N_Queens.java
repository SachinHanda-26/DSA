
public class N_Queens {

    public static boolean isSafe(char boards[][], int row, int col) {
        // vertical up
    for(int i=row-1; i>=0; i--){
        if(boards[i][col] == 'Q'){
    return false;
        }
    }

   // diag left up
   for(int i = row-1, j = col-1; i>=0 && j>=0; i--, j--){
    if(boards[i][j] == 'Q'){
        return false;
    }
   }

   // diag right up
   for(int i = row-1, j = col+1; i>=0 && j<boards.length; i--, j++){
    if(boards[i][j] == 'Q'){
        return false;
    }
   }   

   return true;
    }

    public static void queens(char boards[][], int row) {

        if (row == boards.length) {
            printVals(boards);
            return;
        }

        

            for (int j = 0; j < boards.length; j++) {
                if (isSafe(boards, row, j)) {
                boards[row][j] = 'Q';
                queens(boards, row + 1);
                boards[row][j] = 'x';
            }
        }

    }

    public static void printVals(char boards[][]) {

        System.out.println("------------ChessBoard------------");

        for (int i = 0; i < boards.length; i++) {
            for (int j = 0; j < boards.length; j++) {
                System.out.print(boards[i][j] + " ");
            }
            System.out.println();
        }
    }

    public static void main(String[] args) {
        int n = 4;
        char boards[][] = new char[n][n];

        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                boards[i][j] = 'x';
            }
        }

        queens(boards, 0);

    }
}
