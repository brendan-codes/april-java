package com.codingdojo.classes;

public class Mammal {
	private int energyLevel = 100;
	private String name;
	private int age;
	
	public Mammal(String name, int age) {
		this.setName(name);
		this.setAge(age);
		System.out.println("Hello a mammal was created!");
	}
	
	

	public String getName() {
		return name;
	}



	public void setName(String name) {
		this.name = name;
	}



	public int getAge() {
		return age;
	}



	public void setAge(int age) {
		this.age = age;
	}



	public int getEnergyLevel() {
		return energyLevel;
	}

	public void setEnergyLevel(int energyLevel) {
		this.energyLevel = energyLevel;
	}	
}
