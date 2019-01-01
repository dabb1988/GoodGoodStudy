package com.liubo.javabasic;
/**
 * Java中的基本数据类型转换（自动、强制、提升）
 * https://mp.weixin.qq.com/s?__biz=MzI3ODcxMzQzMw==&mid=2247486022&idx=1&sn=a42af9415d8b7124e7fec396c3a5163b&scene=21#wechat_redirect
 * @author Zal
 *
 */
public class JavaBasic02 {
	
	public static void fun01() {
		int a = 200;
		byte b = (byte)a;
		System.out.println(b);
	}
	
	public static void fun02() {
		long count = 100000000;
		int price = 1999;
		long totalPrice = price * count;
		System.out.println(totalPrice);
	}
	
	public static void main(String[] args) {
		fun02();
	}
}
