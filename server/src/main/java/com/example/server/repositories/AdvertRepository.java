package com.example.server.repositories;

import com.example.server.models.Advert;
import com.example.server.models.Category;
import com.example.server.models.Seller;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface AdvertRepository extends JpaRepository<Advert, Long> {

    List<Advert> findAdvertBySellerId(Long sellerId);

    @Query("select a from Advert a join a.seller s where s.id <> :id and a.title like %:title% and a.category = :category")
    List<Advert> customSearch(@Param("id") Long id, @Param("title") String title, @Param("category") Category category);
}
