import java.util.Random;
import java.util.ArrayList;

public class Basics {
    public int giveTen(){
        return 10;
    }

    public int randomNumber(int low, int high){
        Random rand = new Random();
        return rand.nextInt(high - low) + low;
    }

    public int[] randomNumbersArray(int length, int low, int high){
        int[] numbers = new int[length];

        for(int i = 0; i < length; i++){
            numbers[i] = this.randomNumber(low, high);
        }

        return numbers;
    }

    public ArrayList<Integer> randomNumbersArrayList(int length, int low, int high){
        ArrayList<Integer> list = new ArrayList<Integer>();

        for(int i = 0; i < length; i++){
            list.add(this.randomNumber(low, high));
        }

        return list;
    }

    public void printSum(){
        System.out.println("Information!");

        int sum = 0;
        String str;

        for(int i = 0; i < 256; i++){
            sum += i;
            str = String.format("New number: %d Sum: %s", i, sum);
            System.out.println(str);
        }
    }

    public void readArray(int[] arr){
        for(int i = 0; i < arr.length; i++){
            System.out.println(arr[i]);
        }
    }
}