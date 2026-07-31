public class N_Queens_Rows {

    public static void queens(char boards[][], int row){

if(row == boards.length){
    printVals(boards);
    return;
}

        for(int j=0; j<boards.length; j++){
            boards[row][j] = 'Q';
            queens(boards, row+1);
            boards[row][j] = '.';
        }
    }

    public static void printVals(char boards[][]){

        System.out.println("------------ChessBoard------------");

        for(int i=0; i<boards.length; i++){
            for(int j=0; j<boards.length;j++){
                System.out.print(boards[i][j] + " ");
            }
            System.out.println();
        }
    }


    public static void main(String [] args){
        int n = 2;
        char boards[][] = new char[n][n];

        for(int i=0; i<n; i++){
            for(int j=0; j<n; j++){
                boards[i][j] = '.';
            }
        }

        queens(boards, 0);

    }
}
