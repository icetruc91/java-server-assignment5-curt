package com.example.myapp.repositories;

import org.springframework.data.repository.CrudRepository;

import com.example.myapp.models.User;

public interface UserRepository extends CrudRepository<User, Integer>{
//	@Query("SELECT u FROM User u WHERE u.username=:username AND u.password=:password")
//	Iterable<User> findUserByCredentials(
//		@Param("username") String username, 
//		@Param("password") String password);
	

}
