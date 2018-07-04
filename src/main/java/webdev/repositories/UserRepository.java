package webdev.repositories;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import webdev.models.User;


// User Repository.
public interface UserRepository extends CrudRepository<User, Integer>{
	@Query("SELECT u FROM User u WHERE u.username=:username AND u.password=:password")
	public Iterable<User> findUserByCredentials(
		@Param("username") String username, 
		@Param("password") String password);
	
	// Finds user by username.
	@Query("SELECT u FROM User u WHERE u.username=:username")
	public User findByUsername(@Param("username") String username);
	
}
