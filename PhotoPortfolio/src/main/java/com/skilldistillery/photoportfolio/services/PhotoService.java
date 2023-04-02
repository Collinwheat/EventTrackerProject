package com.skilldistillery.photoportfolio.services;

import java.util.List;

import com.skilldistillery.photoportfolio.entities.Photo;

public interface PhotoService {
	
	List<Photo> viewAll();
	Photo getById(int id);
	Photo createPhoto(Photo photo);
	Photo updatePhoto(int id, Photo photo);
	boolean deletePhoto(int id);

}
