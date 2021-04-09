package com.codingdojo.main;

public class Circle extends Drawing implements AreaInterface {
	
	private int r;

	public Circle(int r) {
		this.setR(r);
		// TODO Auto-generated constructor stub
	}

	@Override
	void draw() {
		// TODO Auto-generated method stub

	}

	public int getR() {
		return r;
	}

	public void setR(int r) {
		this.r = r;
	}

	@Override
	public double getArea() {
		// TODO Auto-generated method stub
		return Math.sqrt(Math.PI * r);
	}
}
