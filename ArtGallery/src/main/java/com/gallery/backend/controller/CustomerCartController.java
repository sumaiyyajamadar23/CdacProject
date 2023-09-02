package com.gallery.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.gallery.backend.entity.CustomerCart;
import com.gallery.backend.service.CustomerCartService;

@CrossOrigin
@RestController
@RequestMapping("/customer-cart")
public class CustomerCartController 
{
	@Autowired
	CustomerCartService customerCartService;
	
	@PostMapping("/add")
	public String regCustomer(@RequestBody CustomerCart cart) {
		String message = this.customerCartService.addItem(cart);
		
		return message;
	}
	
	
	@PostMapping("/remove")
	public String removeItem(@RequestBody CustomerCart cart) {
		String message = this.customerCartService.removeItem(cart);
		
		return message;
	}
	
}
