package com.example.server.controllers;

import com.example.server.models.Advert;
import com.example.server.repositories.AdvertRepository;
import com.example.server.repositories.SellerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping(value = "/adverts")
public class AdvertController {

    @Autowired
    AdvertRepository advertRepository;

    @Autowired
    SellerRepository sellerRepository;

    @GetMapping(value = "/custom-search")
    @ResponseBody
    public String getCustomSearchResults() {
        return "I'm hungry and tired !";
    }

    //    public List<Advert> getCustomSearchResults(@RequestParam String title, @RequestParam String category, @RequestParam int price){
//        return "I'm hungry and tired !";
//    }

}
