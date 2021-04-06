import java.util.Arrays;
import java.util.ArrayList;

public class Tester {
    public static void main(String[] args){
        Basics basics = new Basics();
        // basics.printSum();

        // int number = basics.giveTen();
        // System.out.println(number);

        int[] numbs = {1, 3, 9, 22, 75};
        // basics.readArray(numbs);

        int[] moreNumbs = basics.randomNumbersArray(10, 10, 201);
        // System.out.println(Arrays.toString(moreNumbs));
        // System.out.println(moreNumbs);

        ArrayList<Integer> yetMoreNumb = basics.randomNumbersArrayList(10, 2, 9);
        // System.out.println(yetMoreNumb);

        ArrayList<Object> myList = new ArrayList<Object>();
        myList.add("13");
        myList.add("Hello world");
        myList.add(42);
        myList.add("another stirng");

        for(int i = 0; i < myList.size(); i++){
            try {
                Integer castedValue = (Integer) myList.get(i);
                System.out.println(castedValue);
            } catch (ClassCastException exception){
                System.out.println("Error cannot cast item to int");
            }
        }

        System.out.println("extremely important code that must run or the world ends");

        // try {

        // } catch () {

        // }
    }
}