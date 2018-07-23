package webdev.services;



import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


import webdev.models.Lesson;
import webdev.models.Module;
import webdev.repositories.ModuleRepository;
import webdev.repositories.CourseRepository;
import webdev.repositories.LessonRepository;

@RestController
@CrossOrigin(origins = "*", maxAge = 3600)
public class LessonService {

	@Autowired
	CourseRepository courseRepository;
	
	@Autowired
	ModuleRepository moduleRepository;

	@Autowired
	LessonRepository lessonRepository;

	@PostMapping("/api/course/CID/module/{MID}/lesson")
	public Lesson createLesson(
			@PathVariable("MID") int moduleId, 
			@RequestBody Lesson newLesson) {
		
		Optional<Module> moduleData = moduleRepository.findById(moduleId);
		if (moduleData.isPresent()) {
			Module module = moduleData.get();
			newLesson.setModule(module);
			return lessonRepository.save(newLesson);
		}
		return null;
	}

	@DeleteMapping("/api/lesson/{LID}")
	public void deleteLesson(@PathVariable("LID") int lessonId) {
		lessonRepository.deleteById(lessonId);
	}

	@GetMapping("/api/lesson")
	public Iterable<Lesson> findAllLessons() {
		return lessonRepository.findAll();
	}

	@GetMapping("/api/lesson/{LID}")
	public Lesson findLessonById(@PathVariable("LID") int lessonId) {
		Optional<Lesson> data = lessonRepository.findById(lessonId);
		if (data.isPresent()) {
			return (Lesson) data.get();
		}
		return null;
	}
	
	
	@GetMapping("/api/course/CID/module/{MID}/lesson")
	Iterable<Lesson> findAllLessonsForModule(@PathVariable("MID") int moduleId) {
		Optional<Module> data = moduleRepository.findById(moduleId);
		if (data.isPresent()) {
			Module module = data.get();
			return module.getLessons();
		}
		return null;
	}
	

	@PutMapping("/api/lesson/{id}")
	public Lesson updateLesson(@RequestBody Lesson lesson, @PathVariable("id") int lessonId) {
		Optional<Lesson> lessonData = lessonRepository.findById(lessonId);
		if (lessonData.isPresent()) {
			Lesson updateLesson = lessonData.get();
			updateLesson.setModule(lesson.getModule());
			updateLesson.setId(lesson.getId());
			updateLesson.setTitle(lesson.getTitle());
			lessonRepository.save(updateLesson);
			return updateLesson;
		}
		return lesson;
	}
	
	
}
