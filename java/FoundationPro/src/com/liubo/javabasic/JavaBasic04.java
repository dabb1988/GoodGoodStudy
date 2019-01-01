package com.liubo.javabasic;
/**
 * switch case 支持的 6 种数据类型！
 * https://mp.weixin.qq.com/s?__biz=MzI3ODcxMzQzMw==&mid=2247485927&idx=2&sn=d1c4521b27d4b473aea09386b4794b64&scene=21#wechat_redirect
 * @author Zal
 *
 */
public class JavaBasic04 {
	
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
