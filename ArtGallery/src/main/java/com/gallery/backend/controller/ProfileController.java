package com.gallery.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.gallery.backend.entity.Customer;
import com.gallery.backend.entity.Artist;
import com.gallery.backend.repository.CustomerCartRepo;
import com.gallery.backend.repository.CustomerRepo;
import com.gallery.backend.repository.ArtistRepo;
import com.gallery.backend.repository.OrderRepo;
import com.gallery.backend.repository.ProductRepo;
import com.gallery.backend.service.ProfileService;

@CrossOrigin
@RestController
@RequestMapping("change-profile")
public class ProfileController 
{
	@Autowired
	ProfileService profileService ;
	
	
	
	@PostMapping("artist/{username}")
	public String updateArtistProfile(@PathVariable String username,@RequestBody Artist artist)
	{
		String message = this.profileService.updateArtistProfile(username,artist);
		
		return message;
	}
	
	@PostMapping("customer/{username}")
	public String updateCustomerProfile(@PathVariable String username,@RequestBody Customer customer)
	{
		String message = this.profileService.updateCustomerProfile(username,customer);
		
		return message;
	}
}
