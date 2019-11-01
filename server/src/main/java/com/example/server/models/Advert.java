package com.example.server.models;

import java.util.Date;

public class Advert {
    private Long id;
    private String image;
    private String description;
    private String title;
    private int price;
    private Date dateListed;
    private String location;
    private boolean isSold;
    private Seller seller;

    public Advert(String image, String description, String title, int price, Date dateListed, String location, boolean isSold, Seller seller) {
        this.image = image;
        this.description = description;
        this.title = title;
        this.price = price;
        this.dateListed = dateListed;
        this.location = location;
        this.isSold = isSold;
        this.seller = seller;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public void setSold(boolean sold) {
        isSold = sold;
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

    public int getPrice() {
        return price;
    }

    public Date getDateListed() {
        return dateListed;
    }

    public String getLocation() {
        return location;
    }

    public boolean isSold() {
        return isSold;
    }

    public Seller getSeller() {
        return seller;
    }
}
