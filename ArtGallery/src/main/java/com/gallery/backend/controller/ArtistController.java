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

import com.gallery.backend.entity.Artist;
import com.gallery.backend.entity.Order;
import com.gallery.backend.entity.Product;
import com.gallery.backend.repository.ArtistRepo;
import com.gallery.backend.repository.OrderRepo;
import com.gallery.backend.repository.ProductRepo;
import com.gallery.backend.service.ArtistService;

@CrossOrigin
@RestController
@RequestMapping("/artist")
public class ArtistController 
{
	@Autowired
	ArtistService artistService;
	
	@GetMapping("/profile/{username}")
	public Artist getArtist(@PathVariable String username) {
		
		Artist artist = this.artistService.getArtist(username);
		
		return artist;    
	}
	
	
	@PostMapping("/forgot-password")
	public String forgotPassword(@RequestBody Artist artist)
	{
		String message = this.artistService.forgotPassword(artist);
		
		return message;
	}
	
	
	
	@PostMapping("/Registration")
	public String regArtist(@Valid @RequestBody Artist artist) {

		String message = this.artistService.regArtist(artist);
		  
		return message;
	}
	
	
	@PostMapping("/login")
	public String loginUser(@RequestBody Artist artist) {
	     
		String message = this.artistService.loginUser(artist);
			
		return message;
	}
	
	
	@PostMapping("/orders")
	public List<Order> getDetails(@RequestBody Artist artist)
	{
		List<Order> orderList =this.artistService.getDetailsByArtist(artist);
		
		return orderList;
		
	}
	
	
	
	@PostMapping("/add-product")
	public String addProducts(@RequestBody Product product)
	{
		String message = this.artistService.addProduct(product);
		
		return message;
		
	}
	
	@PostMapping("/orders/change-status")
	public String getOrder(@RequestBody Order order)
	{
		System.out.println("I'm here");
		String message = this.artistService.getOrder(order);
		
		return message;
		
	}
	
}
