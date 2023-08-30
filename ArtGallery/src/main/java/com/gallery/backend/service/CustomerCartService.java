package com.gallery.backend.service;

import com.gallery.backend.entity.CustomerCart;

public interface CustomerCartService {
	
	String addItem(CustomerCart cart);
	
	String removeItem(CustomerCart cart);
	
	

}
