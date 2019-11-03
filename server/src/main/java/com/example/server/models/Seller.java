package com.example.server.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "sellers")
public class Seller {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "first_name")
    private String firstName;

    @Column(name = "last_name")
    private String lastName;

    @Column(name = "phone_number")
    private String phoneNumber;

    @Column(name = "email_address")
    private String emailAddress;

    @Column(name = "location")
    private String location;

    @JsonIgnoreProperties("seller")
    @OneToMany(mappedBy = "seller", fetch = FetchType.LAZY)
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

    public void addAdvertToAddList(Advert advert) {
        this.adverts.add(advert);
    }
}
