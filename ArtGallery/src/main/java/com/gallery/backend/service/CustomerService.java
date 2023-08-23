package com.gallery.backend.service;

import java.util.List;
import java.util.Optional;

import com.gallery.backend.entity.Customer;
import com.gallery.backend.entity.CustomerCart;
import com.gallery.backend.entity.Order;
import com.gallery.backend.entity.Product;

public interface CustomerService {
	
	String customerLogin(Customer customer);
	
	String registerCustomer(Customer customer);
	
	List<Product> getProductByArt(Product prod);
	
	List<Product>getAllProducts();
	
	List<CustomerCart>getCustomerCart();
	
	List<Order>ConfirmOrders(Customer customer);
	
	String addOrder(Order order);
	
	Customer getCustomers(String username);

}
