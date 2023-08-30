package com.gallery.backend.repository;


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import com.gallery.backend.entity.Artist;



public interface ArtistRepo  extends JpaRepository<Artist, Integer>
{
	

//	@Modifying
//	@Query(name="changePassword",nativeQuery=true,value="update table_emp set password=:pwd where username=:uname")
//	@Transactional
//	public void changePassword(@Param("uname") String userName,@Param("pwd") String password);
	
	@Query( nativeQuery = true,value="select aid from artists where user_name=:user_name")
	public int findByName(@Param("user_name") String user_name);
	
	@Query( nativeQuery = true,value="select aid from artists where firstname=:name")
	public int findByAid(@Param("name") String name);
	
	@Modifying
	@Transactional
	@Query( nativeQuery = true,value="update artists set firstname=:firstname where user_name=:user_name")
	public void updateFirstName(@Param("firstname") String firstname,@Param("user_name") String user_name );
	
	@Modifying
	@Transactional
	@Query( nativeQuery = true,value="update artists set lastname =:lastname where user_name=:user_name")
	public void updateLastName(@Param("lastname") String lastname,@Param("user_name") String user_name );
	
	@Modifying
	@Transactional
	@Query( nativeQuery = true,value="update artists set  email =:email  where user_name=:user_name")
	public void updateEmail(@Param("email") String email,@Param("user_name") String user_name );
	
	@Modifying
	@Transactional
	@Query( nativeQuery = true,value="update artists set  contact =:contact  where user_name=:user_name")
	public void updateContact(@Param("contact") String contact,@Param("user_name") String user_name );
	
	@Modifying
	@Transactional
	@Query( nativeQuery = true,value="update artists set password=:password  where user_name=:user_name")
	public void updatePassword(@Param("password") String password,@Param("user_name") String user_name );
	
	@Modifying
	@Transactional
	@Query( nativeQuery = true,value="update artists set  address =:address  where user_name=:user_name")
	public void updateAddress(@Param("address") String address,@Param("user_name") String user_name );
	
	
	
	
}
