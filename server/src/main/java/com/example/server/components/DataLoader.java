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
        Seller seller1 = new Seller("Shauna", "Starbuck", "0123456789", "example@shaunasWork.com", "Edinburgh");
        sellerRepository.save(seller1);

        Seller seller2 = new Seller("Jim", "Bob", "01592876789", "jimbob@work.com", "New Town");
        sellerRepository.save(seller2);

        Advert advert1 = new Advert("buzz.png", "Buzz Lightyear - he's not been to infinity yet", "To Infinity And Beyond", Category.TOYS, 50, new Date(), false, seller1);
        advertRepository.save(advert1);

        Advert advert2 = new Advert("fridge.png", "This fridge is cold", "Modern Fridge", Category.APPLIANCES, 100, new Date(), false, seller1);
        advertRepository.save(advert2);

        Advert advert7 = new Advert("hammer.png", "Rusty hammer", "Hammer", Category.HOME, 1000, new Date(2323223232L), false, seller2);
        advertRepository.save(advert7);

        Advert advert3 = new Advert("car.png", "The car is really fast and nice", "Fast car", Category.AUTOMOBILES, 50000, new Date(), false, seller1);
        advertRepository.save(advert3);

        Advert advert4 = new Advert("hammer.png", "Rusty hammer", "Hammer", Category.HOME, 1000, new Date(2323223232L), false, seller1);
        advertRepository.save(advert4);

        Advert advert5 = new Advert("table.png", "Lovely table complete with legs", "Magic Table", Category.FREEBIES, 0, new Date(), false, seller1);
        advertRepository.save(advert5);

        Advert advert6 = new Advert("iphone6.png", "iPhone 6 with 64gb memory, minor scratches", "iPhone 6 - great condition", Category.ELECTRONICS, 90, new Date(), false, seller1);
        advertRepository.save(advert6);

    }


}
