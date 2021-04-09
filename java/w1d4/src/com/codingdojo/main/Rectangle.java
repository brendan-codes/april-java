package com.codingdojo.main;

public class Rectangle extends Drawing implements AreaInterface {
	
	private int h, w;

	public Rectangle(int h, int w) {
		this.setH(h);
		this.setW(w);
		// TODO Auto-generated constructor stub
	}

	@Override
	void draw() {
		// TODO Auto-generated method stub

	}

	public int getH() {
		return h;
	}

	public void setH(int h) {
		this.h = h;
	}

	public int getW() {
		return w;
	}

	public void setW(int w) {
		this.w = w;
	}

	@Override
	public double getArea() {
		// TODO Auto-generated method stub
		return this.getH() * this.getW();
 	}
}
