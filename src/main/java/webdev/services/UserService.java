package webdev.services;

//import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import javax.servlet.http.HttpSession;

//import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import webdev.models.User;
import webdev.repositories.UserRepository;

@RestController
public class UserService {
	@Autowired
	UserRepository repository;
	
	@PostMapping("/api/login")
	public User login(	@RequestBody User credentials,
	HttpSession session) {
	List<User> users = (List<User>) repository.findAll();
	 for (User user : users) {
	  if( user.getUsername().equals(credentials.getUsername()) &&
	      user.getPassword().equals(credentials.getPassword())) {
	   session.setAttribute("currentUser", user);
	   return user;
	  }
	 }
	 return null;
	}

	

	@GetMapping("/api/profile")
	public User profile(HttpSession session) {
	User currentUser = (User)
	session.getAttribute("currentUser");	
	return currentUser;
	}
	
	
	@PostMapping("/api/logout")
	public void logout
	(HttpSession session) {
		session.invalidate();
	}


	
	
	@DeleteMapping("/api/user/{userId}")
	public void deleteUser(@PathVariable("userId") int id) {
		repository.deleteById(id);
	}
	
	@PostMapping("/api/user")
	public User createUser(@RequestBody User user) {
		return repository.save(user);
	}
	
	@GetMapping("/api/user")
	public List<User> findAllUsers() {
		return (List<User>) repository.findAll();
	}
	
	@PutMapping("/api/user/{userId}")
	public User updateUser(@PathVariable("userId") int userId, @RequestBody User newUser) {
		Optional<User> data = repository.findById(userId);
		if(data.isPresent()) {
			User user = data.get();
			user.setFirstName(newUser.getFirstName());
			user.setLastName(newUser.getLastName());
			user.setPassword(newUser.getPassword());
			user.setUsername(newUser.getUsername());
			user.setRole(newUser.getRole());
			repository.save(user);
			return user;
		}
		return null;
	}
	
	@GetMapping("/api/user/id/{userId}")
	public User findUserById(@PathVariable("userId") int userId) {
		Optional<User> data = repository.findById(userId);
		if(data.isPresent()) {
			return data.get();
		}
		return null;
	}
	
	
	@GetMapping("/api/user/username/{username}")
	public User findUserByUsername(@PathVariable("username") String username) {
		return  repository.findByUsername(username);
	}
	
	
	@PostMapping("/api/register")
	public User register(@RequestBody User user,
	HttpSession session) {
		
		User actualUser = repository.save(user);
		session.setAttribute("currentUser", actualUser);
		return actualUser;
	}
	
	@GetMapping("/api/session/invalidate")
	public String invalidateSession(
	HttpSession session) {
		session.invalidate();
	return "session invalidated";
	}


	
}
	
	
