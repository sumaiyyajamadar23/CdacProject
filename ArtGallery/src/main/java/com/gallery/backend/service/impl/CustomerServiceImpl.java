package com.gallery.backend.service.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gallery.backend.entity.Customer;
import com.gallery.backend.entity.CustomerCart;
import com.gallery.backend.entity.Order;
import com.gallery.backend.entity.Product;
import com.gallery.backend.exceptions.ResourceNotFoundException;
import com.gallery.backend.repository.CustomerCartRepo;
import com.gallery.backend.repository.CustomerRepo;
import com.gallery.backend.repository.ArtistRepo;
import com.gallery.backend.repository.OrderRepo;
import com.gallery.backend.repository.ProductRepo;
import com.gallery.backend.service.CustomerService;

@Service
public class CustomerServiceImpl implements CustomerService {
	
	@Autowired
	CustomerRepo customerRepo;
	
	@Autowired
	OrderRepo orderRepo;
	
	@Autowired
	ProductRepo productRepo;
	
	@Autowired
	CustomerCartRepo customercartRepo;
	
	@Autowired
	ArtistRepo artistRepo;

	@Override
	public String customerLogin(Customer customer) {
		
		//System.out.println(buyer.getPassword());
		//System.out.println(buyer.getUser_name());
		List<Customer> customerList = customerRepo.findAll();              
		
		String passMsg = "pass" ;
		String failMsg = "fail" ;
		
		for(Customer customerobj : customerList )
		{
		if(customerobj.getUser_name().equals(customer.getUser_name()) && customerobj.getPassword().equals(customer.getPassword()))
			{
				
				return passMsg ;
			}
		}
	
	     return failMsg;
	}
	

	@Override
	public String registerCustomer(Customer customer) {
		 
		customerRepo.save(customer);
		String  email = customer.getEmail();
		EmailServiceImpl.sendMail(email);
	     
		return "register_success";
	}

	@Override
	public List<Product> getProductByArt(Product prod) {
		
		String item = prod.getArt();
		List<Product> productList = productRepo.findProduct(item);              
	
		return productList;
	}

	@Override
	public List<Product> getAllProducts() {
		
		List<Product> productList = productRepo.findAll();              
		
		return productList;
	}

	@Override
	public List<CustomerCart> getCustomerCart() {
		
		List<CustomerCart> cartlist = customercartRepo.findAll();              
		
		return cartlist;
	}

	@Override
	public List<Order> ConfirmOrders(Customer customer) {
		
		//System.out.println(buyer.getUser_name());
		String uname = customer.getUser_name();
		
		int cid = customerRepo.findByName(uname);
		
		List<Order> orderList = orderRepo.findByCId(cid);  
		
		return orderList;
	}

	@Override
	public String addOrder(Order order) {
		
		String customeruname = order.getCustomer().getUser_name();
		
		//System.out.println(customeruname);
		
		int cid = customerRepo.findByName(customeruname);
		order.getCustomer().setCid(cid);
			
		String artistname = order.getArtist().getFirstname();
		
		//System.out.println(artistname);
		
		int aid = artistRepo.findByAid(artistname);
		order.getArtist().setAid(aid);
		orderRepo.save(order);
		     
		return "added";
	}

	@Override
	public Customer getCustomers(String username) {
		//System.out.println("im here");
		
		int cid = customerRepo.findByName(username);
        
		Customer customer =customerRepo.findById(cid).orElseThrow(()-> new ResourceNotFoundException("customer", "Id", cid));
		
		return customer;
	}

}
