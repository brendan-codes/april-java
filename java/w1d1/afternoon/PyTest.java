import java.util.Random;
import java.util.ArrayList;

public class PyTest {
    public static void main(String[] args){
        Pythagorean myPy = new Pythagorean();
        Random myRando = new Random();

        double example1 = myPy.calculateHypotenuse(3, 7);
        double example2 = myPy.calculateHypotenuse(1, 1);
        double example3 = myPy.calculateHypotenuse(11, 55);

        System.out.println(example1);
        System.out.println(example2);
        System.out.println(example3);


        // System.out.println(myRando.nextInt(8));

        // array
        // length is fixed
        char[] letters = {'a','b','c','d','e','f','g'};

        System.out.println(letters[myRando.nextInt(8)]);


        ArrayList<Integer> list = new ArrayList<Integer>();
        list.add(1);
        list.add(2);
        list.add(3);

        System.out.println(list);
        System.out.println(letters);
        // letters.push('h');
        // .nextInt()
        // inclusive of zero
        // exclusive of given int


        // push pop sort functional
    }
}