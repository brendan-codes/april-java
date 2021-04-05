public class Pythagorean {
    // public - access modifier
    // class - class keyword
    // Pythagorean - identifier
    public double calculateHypotenuse(int legA, int legB) {
        // public - access modifier
        // double - return type

        double hypotenuse = Math.sqrt(Math.pow(legA, 2) + Math.pow(legB, 2));

        return hypotenuse;

        // the hypotenuse is the side across from the right angle.
        // calculate the value of c given legA and legB
    }
}

// 1. a function call is equal to whatever that function returns
//      x = doStuff();

// 2. all functions in java must have a return type
