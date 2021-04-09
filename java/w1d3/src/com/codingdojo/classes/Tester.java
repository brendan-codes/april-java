package com.codingdojo.classes;

public class Tester {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Mammal myMammal = new Mammal("Steve", 22);
		System.out.println(myMammal.getEnergyLevel());
		System.out.println("Hello world!");
		
		Gorilla myGorilla = new Gorilla("Other Gorilla", 30);
		System.out.println(myGorilla.getEnergyLevel());
	}

}
