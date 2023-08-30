package com.gallery.backend.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotEmpty;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name="orders")
@Getter
@Setter
@NoArgsConstructor 
@AllArgsConstructor
public class Order 
{
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="oid")
	private int oid;
	
	@ManyToOne
	@JoinColumn(name="aid")
	private Artist artist;
	
	@NotEmpty
	@Column(name= "art_category")
	private String art_category;
	
	
	@Column(name ="quantity")
	private double quantity;
	
	
	@Column(name="total_amount")
	private double total_amount;
	
	@NotEmpty
	@Column(name="status")
	private String status;
	

	@ManyToOne
	@JoinColumn(name="cid")
	private Customer customer;


	
	
}
