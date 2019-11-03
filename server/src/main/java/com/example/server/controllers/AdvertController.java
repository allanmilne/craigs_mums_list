package com.example.server.controllers;

import com.example.server.repositories.AdvertRepository;
import com.example.server.repositories.SellerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/adverts")
public class AdvertController {

    @Autowired
    AdvertRepository advertRepository;

    @Autowired
    SellerRepository sellerRepository;

}
