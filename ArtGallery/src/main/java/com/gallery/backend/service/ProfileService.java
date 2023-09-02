package com.gallery.backend.service;

import com.gallery.backend.entity.Customer;
import com.gallery.backend.entity.Artist;

public interface ProfileService {
	
	String updateArtistProfile(String username,Artist artist);
	
	String updateCustomerProfile(String username,Customer customer);

}
