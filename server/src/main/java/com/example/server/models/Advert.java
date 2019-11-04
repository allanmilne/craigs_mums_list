package com.example.server.models;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name="adverts")
public class Advert {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name= "image")
    private String image;

    @Column(name = "description")
    private String description;

    @Column(name = "title")
    private String title;

    @Column(name = "category")
    private Category category;

    @Column(name = "price")
    private int price;

    @Column(name = "date_listed")
    private Date dateListed;

    @Column(name = "is_sold")
    private boolean isSold;

    @ManyToOne
    @JoinColumn(name = "seller_id")
    private Seller seller;

    public Advert(String image, String description, String title, Category category, int price, Date dateListed, boolean isSold, Seller seller) {
        this.image = image;
        this.description = description;
        this.title = title;
        this.category = category;
        this.price = price;
        this.dateListed = dateListed;
        this.isSold = isSold;
        this.seller = seller;
    }

    public Advert() {

    }

    public Long getId() {
        return id;
    }

    public String getImage() {
        return image;
    }

    public String getDescription() {
        return description;
    }

    public String getTitle() {
        return title;
    }

    public Category getCategory() {
        return category;
    }

    public int getPrice() {
        return price;
    }

    public Date getDateListed() {
        return dateListed;
    }

    public boolean isSold() {
        return isSold;
    }

    public Seller getSeller() {
        return seller;
    }
}
