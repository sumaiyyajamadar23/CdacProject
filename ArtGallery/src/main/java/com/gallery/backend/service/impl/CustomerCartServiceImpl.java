package com.gallery.backend.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gallery.backend.entity.CustomerCart;
import com.gallery.backend.repository.CustomerCartRepo;
import com.gallery.backend.repository.ProductRepo;
import com.gallery.backend.service.CustomerCartService;

@Service
public class CustomerCartServiceImpl implements CustomerCartService {
	
	@Autowired
	CustomerCartRepo customercartRepo ;
	
	@Autowired
	ProductRepo productRepo;

	@Override
	public String addItem(CustomerCart cart) {
		customercartRepo.save(cart);
		return  "added_successfully";
	}

	@Override
	public String removeItem(CustomerCart cart) {
		 customercartRepo.deleteById(cart.getCartid());
		 return  "deleted_successfully"; 
	}

}
