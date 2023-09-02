package com.gallery.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.gallery.backend.entity.Admin;


public interface AdminRepo extends JpaRepository<Admin, Integer>
{
	
}
