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
        advert = new Advert("www.google.com", "Great item.", "Chocolate", 5000, new Date(2323223232L), "The Weeg", false, seller);
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

    @Test
    public void canSetFirstName() {
        seller.setFirstName("steve");
        assertEquals("steve", seller.getFirstName());
    }

    @Test
    public void canSetLastName() {
        seller.setLastName("Jones");
        assertEquals("Jones", seller.getLastName());
    }

    @Test
    public void canSetPhoneNumber() {
        seller.setPhoneNumber("999");
        assertEquals("999", seller.getPhoneNumber());
    }

    @Test
    public void canSetEmailAddress() {
        seller.setEmailAddress("different@email.address");
        assertEquals("different@email.address", seller.getEmailAddress());
    }

    @Test
    public void canSetLocation() {
        seller.setLocation("Mars");
        assertEquals("Mars", seller.getLocation());
    }

    @Test
    public void
}