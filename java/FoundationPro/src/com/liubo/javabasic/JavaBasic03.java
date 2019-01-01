package com.liubo.javabasic;
/**
 * Java父类强制转换子类原则
 * https://mp.weixin.qq.com/s?__biz=MzI3ODcxMzQzMw==&mid=2247485018&idx=1&sn=0de3f573d3e0b5ffe9cd263e73fd341e&scene=21#wechat_redirect
 * @author Zal
 *
 */
public class JavaBasic03 {
	
	static class Fruit {
		
	}
	
	static class Apple extends Fruit {
		
	}
	
	public static void fun01() {
		Fruit fruit = new Apple();
		Apple apple = new Apple();
		apple = (Apple)fruit;
	}
	
	public static void fun02() {
		Fruit fruit = new Fruit();
		Apple apple = new Apple();
		try {
			apple = (Apple)fruit; // java.lang.ClassCastException
		} catch (Exception e) {
			System.out.println(e);
		}
	}
	
	public static void main(String[] args) {
		fun01();
		fun02();
	}
}
