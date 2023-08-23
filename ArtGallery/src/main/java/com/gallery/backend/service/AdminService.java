package com.gallery.backend.service;

import java.util.List;

import com.gallery.backend.entity.Admin;
import com.gallery.backend.entity.Customer;
import com.gallery.backend.entity.Artist;
import com.gallery.backend.entity.Order;
import com.gallery.backend.entity.Product;

public interface AdminService {
	
	String adminLogin(Admin admin);
	
	List<Customer>getAllCustomers();
	
	List<Artist>getAllArtists();
	
	List<Order>getAllOrders();
	
	List<Product>getAllProducts();
	
	void deleteCustomerByid(Integer id);
	
	void deleteArtistByid(Integer id);

	
}
