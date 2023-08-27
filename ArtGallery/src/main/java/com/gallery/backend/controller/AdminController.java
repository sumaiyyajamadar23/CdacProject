package com.gallery.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.security.access.annotation.Secured;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.gallery.backend.entity.Admin;
import com.gallery.backend.entity.Artist;
import com.gallery.backend.entity.Customer;
import com.gallery.backend.entity.Order;
import com.gallery.backend.entity.Product;
import com.gallery.backend.service.AdminService;


@CrossOrigin
@RestController
@RequestMapping("/admin")
public class AdminController 
{
	@Autowired
	AdminService adminservice;
	
	
	@PostMapping("/login")
	//@Secured("admin")
	public String loginUser(@RequestBody Admin admin) {
		
	  String message = this.adminservice.adminLogin(admin);
	  
	  return message;
	}
	
	
	@GetMapping("/customer-list")
	public List<Customer> getCustomers() {
	        
		List<Customer> customerList = this.adminservice.getAllCustomers();

		return customerList;
	}
	
	@GetMapping("/artist-list")
	public List<Artist> getArtists() {
	        
		
		List<Artist> artistList = this.adminservice.getAllArtists();              
			
		return artistList;
	}
	
	@GetMapping("/Orders")
	public List<Order> getOrders() {
	        
		
		List<Order> orderList = this.adminservice.getAllOrders();              
			
		return orderList;
	}
	
	@GetMapping("/Product")
	public List<Product> getProduct() {
	        
		List<Product> productList = this.adminservice.getAllProducts();              
			
		return productList;
	}
	
	@DeleteMapping("/delArtist/{id}")
	public String deleteArtist(@PathVariable Integer id)
	{
		adminservice.deleteArtistByid(id);
		return "artist deleted ";
	}
	
	@DeleteMapping("/delCustomer/{id}")
	public  String deleteCustomer(@PathVariable Integer id)
	{
		adminservice.deleteCustomerByid(id);
		return "customer deleted ";
	}	
}
