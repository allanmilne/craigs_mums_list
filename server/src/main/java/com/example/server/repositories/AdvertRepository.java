package com.example.server.repositories;

import com.example.server.models.Advert;
import com.example.server.models.Category;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;

@RepositoryRestResource
public interface AdvertRepository extends JpaRepository<Advert, Long> {

    List<Advert> findAdvertBySellerId(Long sellerId);

//    @Query
//    List<Advert> customSearch(String title, Category category, int price);

}
