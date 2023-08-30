package com.gallery.backend.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import com.gallery.backend.entity.Customer;

public interface CustomerRepo extends JpaRepository<Customer, Integer>
{
	@Query( nativeQuery = true,value="select cid from customers where user_name=:user_name")
	public int findByName(@Param("user_name") String user_name);
	
	
	@Modifying
	@Transactional
	@Query( nativeQuery = true,value="update customers set firstname=:firstname where user_name=:user_name")
	public void updateFirstName(@Param("firstname") String firstname,@Param("user_name") String user_name );
	
	@Modifying
	@Transactional
	@Query( nativeQuery = true,value="update customers set lastname =:lastname where user_name=:user_name")
	public void updateLastName(@Param("lastname") String lastname,@Param("user_name") String user_name );
	
	@Modifying
	@Transactional
	@Query( nativeQuery = true,value="update customers set  email =:email  where user_name=:user_name")
	public void updateEmail(@Param("email") String email,@Param("user_name") String user_name );
	
	@Modifying
	@Transactional
	@Query( nativeQuery = true,value="update customers set  contact =:contact  where user_name=:user_name")
	public void updateContact(@Param("contact") String contact,@Param("user_name") String user_name );
	
	@Modifying
	@Transactional
	@Query( nativeQuery = true,value="update customers set password=:password  where user_name=:user_name")
	public void updatePassword(@Param("password") String password,@Param("user_name") String user_name );
	
	@Modifying
	@Transactional
	@Query( nativeQuery = true,value="update customers set  address =:address  where user_name=:user_name")
	public void updateAddress(@Param("address") String address,@Param("user_name") String user_name );
	
}
