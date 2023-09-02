package com.gallery.backend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import com.gallery.backend.entity.Product;

public interface ProductRepo extends JpaRepository<Product, Integer>
{
	@Query( nativeQuery = true,value="select * from products where art=:art")
	public List<Product> findProduct(@Param("art") String item);
	
	@Query( nativeQuery = true,value="select quantity from products where aid=:aid And art=:art")
	public double getQuantity(@Param("aid") int aid ,@Param("art") String art);
	
	@Modifying
	@Transactional
	@Query( nativeQuery = true,value="delete from products where aid=:aid And art=:art")
	public void deleteQuantityCompletly(@Param("aid") int aid  ,@Param("art") String art);
	
	@Modifying
	@Transactional
	@Query( nativeQuery = true,value="update products set quantity =:quantitRemains where aid=:aid And art=:art")
	public void deductQuantity(@Param("aid") int aid ,@Param("quantitRemains") double quantitRemains ,@Param("art") String art);
}
