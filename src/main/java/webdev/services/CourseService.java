package webdev.services;

import java.util.Date;
import java.util.Optional;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;



import webdev.models.Course;
//import webdev.models.User;
import webdev.repositories.CourseRepository;

@RestController
@CrossOrigin(origins = "*", maxAge = 3600)
public class CourseService {
	
	@Autowired
	CourseRepository courseRepository;
	
	@GetMapping("/api/course")
	public Iterable<Course> findAllCourses() {
		return courseRepository.findAll();
	}
	
	@PostMapping("/api/course")
	public Course createCourse(@RequestBody Course course) {
		Date date = new Date();
		course.setModified(date);
		course.setCreated(date);
		return courseRepository.save(course);
	}
	
	
	@DeleteMapping("/api/course/{courseId}")
	public void deleteCourse(
	@PathVariable("courseId") int id) {
		courseRepository.deleteById(id);
	}
	
	@PutMapping("/api/course/updateCourse/{courseId}")
	public Course updateCourse(@RequestBody Course course, 
			HttpSession session, @PathVariable("courseId") int courseId) {
		Optional<Course> courseData = courseRepository.findById(courseId);
	
		if(courseData.isPresent()) {
			Course updateCourse = courseData.get();
			updateCourse.setTitle(updateCourse.getTitle());
			updateCourse.setModified(updateCourse.getModified());
			courseRepository.save(updateCourse);
			return updateCourse;
		}
		return null;
	}
	
	// Finds course by id. 
//		@GetMapping("/api/course/id/{courseId}")
//		public Course findCourseById(@PathVariable("courseId") int courseId) {
//			Optional<Course> data = courseRepository.findById(courseId);
//			if(data.isPresent()) {
//				return data.get();
//			}
//			return null;
//		}
	
	@GetMapping("/api/course/{courseId}")
	public Optional<Course> findCourseById(@PathVariable("courseId") int id) {
		return courseRepository.findById(id);
	}
		

	
	
}
