package com.skilldistillery.photoportfolio.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.photoportfolio.entities.Photo;

public interface PhotoRepository extends JpaRepository<Photo, Integer> {

}
