package com.example.server.models;

import org.junit.Before;
import org.junit.Test;

import java.util.Date;

import static org.junit.Assert.assertEquals;

public class AdvertTest {
    private Advert advert;
    private Seller seller;

    @Before
    public void setUp() {
        seller = new Seller("Stevey", "Bobbins", "0123456789", "craigs@mum.com", "Edinburgh");
        advert = new Advert("www.google.com", "Great item.", "Chocolate", 5000, new Date(2323223232L), "The Weeg", false, seller);
    }

    @Test
    public void setImage() {
        advert.setImage("test");
        assertEquals("test", advert.getImage());
    }

    @Test
    public void setDescription() {
        advert.setDescription("test");
        assertEquals("test", advert.getDescription());

    }

    @Test
    public void setTitle() {
        advert.setTitle("test");
        assertEquals("test", advert.getTitle());
    }

    @Test
    public void setPrice() {
        advert.setPrice(100);
        assertEquals(100, advert.getPrice());
    }

    @Test
    public void setLocation() {
        advert.setLocation("test");
        assertEquals("test", advert.getLocation());
    }

    @Test
    public void setSold() {
        advert.setSold(true);
        assertEquals(true, advert.isSold());
    }

    @Test
    public void getId() {
    }

    @Test
    public void getImage() {
        assertEquals("www.google.com", advert.getImage());
    }

    @Test
    public void getDescription() {
        assertEquals("Great item.", advert.getDescription());
    }

    @Test
    public void getTitle() {
        assertEquals("Chocolate", advert.getTitle());
    }

    @Test
    public void getPrice() {
        assertEquals(5000, advert.getPrice());
    }

    @Test
    public void getDateListed() {
        assertEquals(new Date(2323223232L), advert.getDateListed());

    }

    @Test
    public void getLocation() {
        assertEquals("The Weeg", advert.getLocation());
    }

    @Test
    public void isSold() {
        assertEquals(false, advert.isSold());
    }

    @Test
    public void getSeller() {
        assertEquals(seller, advert.getSeller());
    }
}