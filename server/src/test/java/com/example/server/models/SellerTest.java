package com.example.server.models;

import org.junit.Before;
import org.junit.Test;

import java.util.Date;

import static org.junit.Assert.*;

public class SellerTest {
    private Seller seller;
    private Advert advert;

    @Before
    public void setUp() {
        seller = new Seller("Stevey", "Bobbins", "0123456789", "craigs@mum.com", "Edinburgh");
        advert = new Advert("www.google.com", "Ford Mustang", "Car", Category.AUTOMOBILES, 5000000, new Date(2323223232L),  false, seller);
    }

    @Test
    public void getFirstName() {
        assertEquals("Stevey", seller.getFirstName());
    }

    @Test
    public void getLastName() {
        assertEquals("Bobbins", seller.getLastName());
    }

    @Test
    public void getPhoneNumber() {
        assertEquals("0123456789", seller.getPhoneNumber());
    }

    @Test
    public void getEmailAddress() {
        assertEquals("craigs@mum.com", seller.getEmailAddress());
    }

    @Test
    public void getLocation() {
        assertEquals("Edinburgh", seller.getLocation());
    }

    @Test
    public void getAdverts() {
        assertEquals(0, seller.getAdverts().size());
    }

}