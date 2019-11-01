package com.example.server.models;

import java.util.ArrayList;
import java.util.List;

public class Seller {
    private Long id;
    private String firstName;
    private String lastName;
    private String phoneNumber;
    private String emailAddress;
    private String location;
    private List<Advert> adverts = new ArrayList<>();

    public Seller(String firstName, String lastName, String phoneNumber, String emailAddress, String location) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.phoneNumber = phoneNumber;
        this.emailAddress = emailAddress;
        this.location = location;
    }

    public Long getId() {
        return id;
    }

    public String getFirstName() {
        return firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public String getEmailAddress() {
        return emailAddress;
    }

    public String getLocation() {
        return location;
    }

    public List<Advert> getAdverts() {
        return adverts;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public void setEmailAddress(String emailAddress) {
        this.emailAddress = emailAddress;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public void addAdvertToAddList(Advert advert) {
        this.adverts.add(advert);
    }
}
