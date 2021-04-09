package com.codingdojo.main;

public abstract class Drawing {
	int x, y;
	
	void move(int newX, int newY) {
		this.x = newX;
		this.y = newY;
	}
	
	abstract void draw();
}
