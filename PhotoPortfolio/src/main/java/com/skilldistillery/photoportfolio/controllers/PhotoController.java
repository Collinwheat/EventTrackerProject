package com.skilldistillery.photoportfolio.controllers;

import java.util.List;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.photoportfolio.entities.Photo;
import com.skilldistillery.photoportfolio.services.PhotoService;

@RestController
@RequestMapping("api")
@CrossOrigin({ "*", "http://localhost/" })
public class PhotoController {
	
	@Autowired
	private PhotoService photoServ;
	
	@GetMapping("photographs")
	public List<Photo> findAll(){
		return photoServ.viewAll();
	}
	
	@GetMapping("photographs/{id}")
	public Photo getPhotoById(@PathVariable Integer id, HttpServletResponse res) {
		Photo photo = photoServ.getById(id);
		if(photo == null) {
			res.setStatus(404);
		}else {
			res.setStatus(200);
		}
		return photo;
	}
	
	@PostMapping("photographs")
	public Photo createPhoto(@RequestBody Photo photo) {
		return photoServ.createPhoto(photo);
	}
	
	@PostMapping("updatePhoto/{id}")
	public Photo updatePhoto(@RequestBody Photo photo, @PathVariable Integer id) {
		return photoServ.updatePhoto(id, photo);
	}
	
	@DeleteMapping("delete/{id}")
	public boolean deletePhoto(@PathVariable Integer id, HttpServletResponse res) {
		try {
			if (photoServ.deletePhoto(id)) {
				res.setStatus(204);
			}
			else {
				res.setStatus(404);
				return false;
			}
		} catch (Exception e) {
			e.printStackTrace();
			res.setStatus(400);
		}
		return true;
		
	}

}
