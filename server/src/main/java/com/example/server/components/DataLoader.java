package com.example.server.components;

import com.example.server.models.Advert;
import com.example.server.models.Category;
import com.example.server.models.Seller;
import com.example.server.repositories.AdvertRepository;
import com.example.server.repositories.SellerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

import java.util.Date;

@Component
public class DataLoader implements ApplicationRunner {

    @Autowired
    AdvertRepository advertRepository;

    @Autowired
    SellerRepository sellerRepository;

    public DataLoader() {

    }


    public void run(ApplicationArguments args) {
        Seller seller1 = new Seller("Shauna", "Starbuck", "0123456789", "example@shaunasWork.com", "Musselborough");
        sellerRepository.save(seller1);

    Advert advert1 = new Advert("google.com", "iPhone 6 with 64gb memory", "iPhone 6", Category.ELECTRONICS, 10000, new Date(2323223232L), false, seller1);
        advertRepository.save(advert1);
        Seller seller2 = new Seller("Jim", "Bob", "01592876789", "jimbob@work.com", "New Town");
        sellerRepository.save(seller2);

        Advert advert2 = new Advert("google.com", "Rusty hammer", "Hammer", Category.HOME, 1000, new Date(2323223232L), false, seller2);
        advertRepository.save(advert2);
    }
}
