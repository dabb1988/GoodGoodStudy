package com.liubo.mytomcat;

import java.util.ArrayList;
import java.util.List;

public class ServletMappingConfig {
	
	public static List<ServletMapping> servletMappingList = new ArrayList<ServletMapping>();
	
	static {
		servletMappingList.add(new ServletMapping("findGirl", "/girl","com.liubo.mytomcat.FindGirlServlet"));
		servletMappingList.add(new ServletMapping("helloWorld", "/world","com.liubo.mytomcat.HelloWorldServlet"));
	}
}
