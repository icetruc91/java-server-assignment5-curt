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
import webdev.models.Topic;
import webdev.repositories.LessonRepository;
import webdev.repositories.TopicRepository;


@RestController
@CrossOrigin(origins = "*", maxAge = 3600)
public class TopicService {

	@Autowired
	LessonRepository lessonRepository;
	
	@Autowired
	TopicRepository topicRepository;
	
	@PostMapping("/api/course/CID/module/MID/lesson/{LID}/topic")
	public Topic createTopic(
			@PathVariable("LID") int lessonId,
			@RequestBody Topic newTopic) {
		Optional<Lesson> data = lessonRepository.findById(lessonId);
		if (data.isPresent()) {
			Lesson lesson = data.get();
			newTopic.setLesson(lesson);
			return topicRepository.save(newTopic);
		}
		return null;
	}
	
	@DeleteMapping("api/topic/{TID}")
	public void deleteTopic(@PathVariable("TID") int topicId) {
		topicRepository.deleteById(topicId);
	}
	
	@GetMapping("/api/topic/")
	public Iterable<Topic> findAllTopics() {
		return topicRepository.findAll();
	}
	
	@GetMapping("/api/topic/{TID}")
	public Topic findTopicById(@PathVariable("TID") int topicId) {
		Optional<Topic> data = topicRepository.findById(topicId);
		if (data.isPresent()) {
			return (Topic) data.get();
		}
		return null;
	}
	
	
	
	@GetMapping("/api/course/CID/module/MID/lesson/{LID}/topic")
	Iterable<Topic> findAllTopicsForLesson(@PathVariable("LID") int lessonId) {
		Optional<Lesson> data = lessonRepository.findById(lessonId);
		if (data.isPresent()) {
			Lesson lesson = data.get();
			return lesson.getTopics();
		}
		return null;
	}

	
	@PutMapping("api/topic/{TID}")
	public Topic updateTopic(@RequestBody Topic topic, @PathVariable("TID") int topicId) {
		Optional<Topic> topicData = topicRepository.findById(topicId);
		if (topicData.isPresent()) {
			Topic updateTopic = topicData.get();
			updateTopic.setLesson(topic.getLesson());
			updateTopic.setId(topic.getId());
			updateTopic.setTitle(topic.getTitle());
			topicRepository.save(updateTopic);
			return updateTopic;
		}
		return topic;
	}
	
	
}
