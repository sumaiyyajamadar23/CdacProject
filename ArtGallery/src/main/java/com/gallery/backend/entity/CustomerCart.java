package com.gallery.backend.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotEmpty;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name="customercart")
@Getter
@Setter
@NoArgsConstructor 
@AllArgsConstructor
public class CustomerCart 
{
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="cartid")
	private int cartid;
	
	@NotEmpty
	@Column(name="customer_username")
	private String customerusername;
	
	@NotEmpty
	@Column(name="art")
	private String art;
	
	
	@Column(name="quantity")
	private double quantity;
	
	
	@Column(name="expectedprice")
	private double expectedprice;
	
	@NotEmpty
	@Column(name="artistname")
	private String artistname;
	
	
	
}
