package com.example.server.controllers;

import com.example.server.models.Seller;
import com.example.server.repositories.AdvertRepository;
import com.example.server.repositories.SellerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@RestController
@RequestMapping(value = "/sellers")
public class SellerController {

    @Autowired
    AdvertRepository advertRepository;

    @Autowired
    SellerRepository sellerRepository;

    @GetMapping(value = "/{id}")
    public Optional<Seller> getSeller(@PathVariable Long id){
        return sellerRepository.findById(id);
    }

}
