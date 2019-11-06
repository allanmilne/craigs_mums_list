package com.example.server.repositories;

import com.example.server.models.Advert;
import com.example.server.models.Category;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface AdvertRepository extends JpaRepository<Advert, Long> {

    List<Advert> findAdvertBySellerId(Long sellerId);

    @Query(value = "select a from Advert a join a.seller s WHERE lower(a.title) like lower(concat('%', :title, '%')) and a.category = :category")
    List<Advert> customSearchIgnoreCase(@Param("title") String title, @Param("category") Category category);
}