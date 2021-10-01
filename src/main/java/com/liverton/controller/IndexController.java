package com.liverton.controller;

import java.util.Date;
import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import com.liverton.bean.User;
import com.liverton.consumingrest.ConsumingRestUtil;
import com.liverton.consumingrest.Market;

@RestController
@RequestMapping(value = "/")
public class IndexController {

	@Autowired
	private RestTemplate restTemplate;

	@RequestMapping
	public String index() {
		return "hello world";
	}

	@RequestMapping(value = "/maps", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public List<Market> getMaps() {
		try {
			return ConsumingRestUtil.getMarkets(restTemplate).getMarkets();
		} catch (Exception e) {

			e.printStackTrace();
			return null;
		}
	}
}
