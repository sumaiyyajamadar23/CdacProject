package com.gallery.backend.service;

import java.util.List;
import java.util.Optional;

import org.springframework.web.bind.annotation.RequestBody;

import com.gallery.backend.entity.Artist;
import com.gallery.backend.entity.Order;
import com.gallery.backend.entity.Product;

public interface ArtistService {
	
	
	Artist getArtist(String username);
	
	String forgotPassword(Artist artist);
	
	String regArtist(Artist artist);
	
	String loginUser(Artist artist);
	
	List<Order> getDetailsByArtist(Artist artist);
	
	String addProduct(Product product);
	
	String getOrder(Order order);
	
	
	
	

}
