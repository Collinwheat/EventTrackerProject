package com.skilldistillery.photoportfolio.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.photoportfolio.entities.Photo;
import com.skilldistillery.photoportfolio.repositories.PhotoRepository;

@Service
public class PhotoServiceImpl implements PhotoService {
	
	@Autowired
	private PhotoRepository photoRepo;

	@Override
	public List<Photo> viewAll() {
		return photoRepo.findAll();
	}

	@Override
	public Photo getById(int id) {
		return photoRepo.findById(id).get();
	}

	@Override
	public Photo createPhoto(Photo photo) {
		photoRepo.save(photo);
		return photo;
	}

	@Override
	public Photo updatePhoto(int id, Photo photo) {
		Photo photoToUpdate = photoRepo.findById(id).get();
		photoToUpdate.setLocation(photo.getLocation());
		photoToUpdate.setImageUrl(photo.getImageUrl());
		photoToUpdate.setDateTaken(photo.getDateTaken());
		photoToUpdate.setCamera(photo.getCamera());
		photoToUpdate.setDescription(photo.getDescription());
		photoRepo.delete(photo);
		photoRepo.save(photoToUpdate);
		return photoToUpdate;
	}

	@Override
	public boolean deletePhoto(int id) {
		boolean deleted = false;
		Photo photoToDelete = photoRepo.findById(id).get();
		if(photoToDelete != null) {
			photoRepo.delete(photoToDelete);
			deleted = true;
		}
		return deleted;
	}

}
