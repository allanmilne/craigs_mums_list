package com.example.server.repositories;

import com.example.server.models.Advert;
import com.example.server.models.Seller;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface AdvertRepository extends JpaRepository<Advert, Long> {

    List<Advert> findAdvertBySellerId(Long sellerId);

}
