package com.gallery.backend.service.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gallery.backend.entity.Artist;
import com.gallery.backend.entity.Order;
import com.gallery.backend.entity.Product;
import com.gallery.backend.exceptions.ResourceNotFoundException;
import com.gallery.backend.repository.ArtistRepo;
import com.gallery.backend.repository.OrderRepo;
import com.gallery.backend.repository.ProductRepo;
import com.gallery.backend.service.ArtistService;

@Service
public class ArtistServiceImpl implements ArtistService{
	
	@Autowired
	ArtistRepo artistRepo;
	
	@Autowired
	OrderRepo orderRepo;
	
	@Autowired
	ProductRepo productRepo;

	@Override
	public Artist getArtist(String username) {
		
		//System.out.println("im here");
		
		int aid = artistRepo.findByName(username);
		
		Artist artist = artistRepo.findById(aid).orElseThrow(()-> new ResourceNotFoundException("artist", "Id", aid));
        
		return artist;
	}

	@Override
	public String forgotPassword(Artist artist) {
		String username = artist.getUser_name();
		String newpassword = artist.getPassword();
		
		artistRepo.updatePassword(newpassword,username);
		
		return "updated";
	}

	@Override
	public String regArtist(Artist artist) {
		System.out.println(artist.toString());
	     String email = artist.getEmail();
	     
	     EmailServiceImpl.sendMail(email);
	     
	     
	     artistRepo.save(artist);
		     
		return "register_success";
	}

	@Override
	public String loginUser(Artist artist) {
		System.out.println(artist.getUser_name());
		
		List<Artist> artistList = artistRepo.findAll();              
		
		String passMsg = "pass" ;
		String failMsg = "fail" ;
		
		for(Artist artistobj : artistList )
		{
			if(artistobj.getUser_name().equals(artist.getUser_name()) && artistobj.getPassword().equals(artist.getPassword()))
			{
				
				return passMsg ;
			}
		}
	
	    return failMsg;
	}

	@Override
	public List<Order> getDetailsByArtist(Artist artist) 
	{
		String uname = artist.getUser_name();
		
		int aid = artistRepo.findByName(uname);
		
		List<Order> orderList = orderRepo.findById(aid);  
		
		return orderList;
	}

	@Override
	public String addProduct(Product product) 
	{
		System.out.println(product.getArt());
		String uname = product.getArtist().getUser_name();
		
		int aid = artistRepo.findByName(uname);
		
		product.getArtist().setAid(aid);
		
		productRepo.save(product);
	     
	    return "register_success";
	}

	@Override
	public String getOrder(Order order) 
	{
		System.out.println(order.getOid());
		
		int oid = order.getOid();
		
		int aid = order.getArtist().getAid();
		
		String art = order.getArt_category();
		
		double quantityAvailable = productRepo.getQuantity(aid,art);
		
		double quatitytOrdered = order.getQuantity();
		
		double quantityRemains = (quantityAvailable)-(quatitytOrdered);
		
		if(quantityRemains == 0)
		{
			productRepo.deleteQuantityCompletly(aid,art);
		}
		else
		{
			productRepo.deductQuantity(aid,quantityRemains,art);
		}
				
		orderRepo.changeStatus(oid);
	     
	    return "approved successfully";
	}

}
