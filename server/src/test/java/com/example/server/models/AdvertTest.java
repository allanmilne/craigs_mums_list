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
        advert = new Advert("www.google.com", "Great item.", "Chocolate", 5000, new Date(2323223232L),  false, seller);
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
    public void isSold() {
        assertEquals(false, advert.isSold());
    }

    @Test
    public void getSeller() {
        assertEquals(seller, advert.getSeller());
    }
}