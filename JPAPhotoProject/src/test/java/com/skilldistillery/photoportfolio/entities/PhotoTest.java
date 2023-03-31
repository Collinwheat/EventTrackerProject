package com.skilldistillery.photoportfolio.entities;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

class PhotoTest {
	
	private static EntityManagerFactory emf;
	private EntityManager em;
	private Photo photo;

	@BeforeAll
	static void setUpBeforeClass() throws Exception {
		emf = Persistence.createEntityManagerFactory("JPAPhotoProject");
	}

	@AfterAll
	static void tearDownAfterClass() throws Exception {
		emf.close();
	}

	@BeforeEach
	void setUp() throws Exception {
		em = emf.createEntityManager();
		photo = em.find(Photo.class, 1);
	}

	@AfterEach
	void tearDown() throws Exception {
		em.close();
		photo = null;
	}

	@Test
	void test_Photo_Entity_Mapping() {
		assertNotNull(photo);
		assertEquals("Atlanta", photo.getLocation());
	}

}
