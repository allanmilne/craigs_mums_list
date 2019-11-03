package com.example.server.repositories;

import com.example.server.models.Advert;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AdvertRepository extends JpaRepository<Advert, Long> {


}
