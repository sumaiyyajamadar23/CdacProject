package com.gallery.backend.entity;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
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
	
	@Column(name="quantity")
	private int quantity;
	
//	@NotEmpty
//	@Column(name="artistname")
//	private String artistname;
	
	@ManyToOne
	@JoinColumn(name="cid")
	private Customer customer;
	
	@OneToOne
	@JoinColumn(name="pid")
	private Product product;
	
	
}
