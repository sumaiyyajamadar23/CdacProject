package com.gallery.backend.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name="customers")
@Getter
@Setter
@NoArgsConstructor 
@AllArgsConstructor
public class Customer
{
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="cid")
	private int cid ;
	
	@NotEmpty
	@Column(name="firstname")
	private String firstname ;
	
	@NotEmpty
	@Column(name="lastname")
	private String lastname ;
	
	@NotEmpty
	@Column(name="contact")
	@Size(max=11, message="Please Enter 10 digit mobile Number")
	private String contact ;
	
	@NotEmpty
	@Column(name="email")
	private String email ;
	
	@NotEmpty
	@Column(name="user_name")
	private String user_name ;
	
	@NotEmpty
	@Column(name="password")
	private String password ;
	
	@NotEmpty
	@Column(name="address")
	private String address ;
	
	
	
	
}
