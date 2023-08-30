package com.gallery.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.gallery.backend.entity.CustomerCart;


public interface CustomerCartRepo extends JpaRepository<CustomerCart, Integer> {

}
