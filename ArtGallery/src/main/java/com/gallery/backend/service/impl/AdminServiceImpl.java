package com.gallery.backend.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gallery.backend.entity.Admin;
import com.gallery.backend.entity.Customer;
import com.gallery.backend.entity.Artist;
import com.gallery.backend.entity.Order;
import com.gallery.backend.entity.Product;
import com.gallery.backend.repository.AdminRepo;
import com.gallery.backend.repository.CustomerRepo;
import com.gallery.backend.repository.ArtistRepo;
import com.gallery.backend.repository.OrderRepo;
import com.gallery.backend.repository.ProductRepo;
import com.gallery.backend.service.AdminService;

@Service
public class AdminServiceImpl implements AdminService{
	
	
	@Autowired
	AdminRepo adminRepo;
	
	@Autowired
	CustomerRepo customerRepo;
	
	@Autowired
	OrderRepo orderRepo;
	
	@Autowired
	ProductRepo productRepo;
	
	@Autowired
	ArtistRepo artistRepo;

	@Override
	public String adminLogin(Admin admin) {
		//System.out.println(admin.getPassword());
		//System.out.println(admin.getUser_name());
		
		List<Admin> adminList = adminRepo.findAll();              
		
		String passMsg = "pass" ;
		String failMsg = "fail" ;
		
		for(Admin adminobj : adminList )
		{
		if(adminobj.getUser_name().equals(admin.getUser_name()) && adminobj.getPassword().equals(admin.getPassword()))
			{
				
				return passMsg ;
			}
		}
	
	return failMsg;
	}
	

	@Override
	public List<Customer> getAllCustomers() {
		List<Customer> customerList = customerRepo.findAll();
		return customerList;
	}
	

	@Override
	public List<Artist> getAllArtists() {
		List<Artist> artistList = artistRepo.findAll();              
		return artistList;
	}
	

	@Override
	public List<Order> getAllOrders() {
		List<Order> artistList = orderRepo.findAll();              
		
		return artistList;
	}

	
	@Override
	public List<Product> getAllProducts() {
		List<Product> productList = productRepo.findAll();              
		
		return productList;
	}
	
	@Override
	public void deleteCustomerByid(Integer id)
	{
		customerRepo.deleteById(id);
	}
	
	@Override
	public void deleteArtistByid(Integer id)
	{
		artistRepo.deleteById(id);
	}


}
