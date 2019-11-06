package com.example.server.controllers;

import com.example.server.models.Advert;
import com.example.server.models.Category;
import com.example.server.repositories.AdvertRepository;
import com.example.server.repositories.SellerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(value = "/adverts")
public class AdvertController {

    @Autowired
    AdvertRepository advertRepository;

    @Autowired
    SellerRepository sellerRepository;

    @GetMapping(value = "/custom-search")
    public List<Advert> getCustomSearchResults(@RequestParam Long id, @RequestParam String title, @RequestParam Category category) {
        return advertRepository.customSearch(id, title, category);
    }
}
