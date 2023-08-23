package com.gallery.backend.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gallery.backend.entity.Customer;
import com.gallery.backend.entity.Artist;
import com.gallery.backend.repository.CustomerRepo;
import com.gallery.backend.repository.ArtistRepo;
import com.gallery.backend.service.ProfileService;

@Service
public class ProfileServiceImpl implements ProfileService {
	
	@Autowired
	ArtistRepo artistRepo ;
	
	@Autowired
	CustomerRepo customerRepo;

	@Override
	public String updateArtistProfile(String username, Artist artist) {
		System.out.println(username);
		
		System.out.println(artist.getAddress());
		if(artist.getFirstname()!= "")
		{
			artistRepo.updateFirstName(artist.getFirstname(),username);
		}
		if(artist.getLastname()!= "")
		{
			artistRepo.updateLastName(artist.getLastname(), username);
		}
		if(artist.getContact()!="")
		{
			artistRepo.updateContact(artist.getContact(), username);
		}
		if(artist.getEmail()!= "")
		{
			artistRepo.updateEmail(artist.getEmail(), username);
		}
		if(artist.getAddress()!= "")
		{
			artistRepo.updateAddress(artist.getAddress(), username);
		}
		if(artist.getPassword()!= "")
		{
			artistRepo.updatePassword(artist.getPassword(), username);
		}
		
		return "updated";
	}

	@Override
	public String updateCustomerProfile(String username, Customer customer) {
		System.out.println(username);
		
		System.out.println(customer.getAddress());
		if(customer.getFirstname()!= "")
		{
			customerRepo.updateFirstName(customer.getFirstname(),username);
		}
		if(customer.getLastname()!= "")
		{
			customerRepo.updateLastName(customer.getLastname(), username);
		}
		if(customer.getContact()!="")
		{
			customerRepo.updateContact(customer.getContact(), username);
		}
		if(customer.getEmail()!= "")
		{
			customerRepo.updateEmail(customer.getEmail(), username);
		}
		if(customer.getAddress()!= "")
		{
			customerRepo.updateAddress(customer.getAddress(), username);
		}
		if(customer.getPassword()!= "")
		{
			customerRepo.updatePassword(customer.getPassword(), username);
		}
		
		return "updated";
	}

}
