package com.gallery.backend.controller;

import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.gallery.backend.entity.Customer;
import com.gallery.backend.entity.CustomerCart;
import com.gallery.backend.entity.Artist;
import com.gallery.backend.entity.Order;
import com.gallery.backend.entity.Product;
import com.gallery.backend.repository.CustomerCartRepo;
import com.gallery.backend.repository.CustomerRepo;
import com.gallery.backend.repository.ArtistRepo;
import com.gallery.backend.repository.OrderRepo;
import com.gallery.backend.repository.ProductRepo;
import com.gallery.backend.service.CustomerService;

@CrossOrigin
@RestController
@RequestMapping("/customer")
public class CustomerController {

	@Autowired
	CustomerService customerService;
	
	
	@PostMapping("/login")
	public String loginUser(@RequestBody Customer customer) {
	        
		String message = this.customerService.customerLogin(customer);
			
		return message;
	}
	
	
	
	@PostMapping("/Registration")
	public String regCustomer(@Valid @RequestBody Customer customer) {
		
		String message = this.customerService.registerCustomer(customer);
		     
		return message;  
		    
	}
	
	@PostMapping("/search")
	public List<Product> searchProduct(@RequestBody Product prod) {
	        
		List<Product> productList = this.customerService.getProductByArt(prod);              
		
		return productList;
	}
	
	
	
	@PostMapping("/allsearch")
	public List<Product> searchProduct() {
	        	
		List<Product> productList = this.customerService.getAllProducts();              
		
		return productList;
	}
	
	
	@PostMapping("/myCart")
	public List<CustomerCart> customerCart() {
	        
		List<CustomerCart> cartlist = this.customerService.getCustomerCart();              
		
		return cartlist;
	}
	
	
	
	//http://localhost:9099/buyer/confirmed-orders
		
	@PostMapping("/confirmed-orders")
	public List<Order> customerCart(@RequestBody Customer customer) {
	        
		List<Order> orderList = this.customerService.ConfirmOrders(customer);  
			
		return orderList;
		
	}
		
	@PostMapping("/addOrder")
	public String addOrders(@RequestBody Order order) {
				
		String message = this.customerService.addOrder(order);	
		
		return message;
	}
		
	
	@GetMapping("/profile/{username}")
	public Customer getCustomer(@PathVariable String username) {
			
		Customer customer =this.customerService.getCustomers(username);
				          
		return customer;
			    
	}
		
}
