package com.codingdojo.classes;

public class Gorilla extends Mammal {

	public Gorilla(String name, int age) {
		super(name, age);
		this.setEnergyLevel(150);
		System.out.println("A gorilla was created!");
	}

}
