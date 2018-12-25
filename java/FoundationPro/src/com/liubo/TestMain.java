package com.liubo;

import java.sql.Timestamp;
import java.util.Calendar;

public class TestMain {
	public static void main(String[] args) {
		Timestamp time3 = new Timestamp(Calendar.getInstance().getTimeInMillis());  
		System.out.println(time3);
	}
}
