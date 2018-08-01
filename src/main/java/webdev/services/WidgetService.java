package webdev.services;

import java.util.ArrayList;
import java.util.List;
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

import webdev.models.Topic;
import webdev.models.Widget;
import webdev.repositories.WidgetRepository;

@RestController
@CrossOrigin(origins = "*")
public class WidgetService {
	
	@Autowired
	WidgetRepository widgetRepository;
	
	@GetMapping("/api/widget")
	public List<Widget> findAllWidgets() {
		return (List<Widget>) widgetRepository.findAll();
	}
	
	
	@PostMapping("/api/topic/{topicId}/widget")
	public List<Widget> saveWidgets(@RequestBody List<Widget> widgets) {
		List<Widget> savedWidgets =new ArrayList<Widget>();
		widgetRepository.deleteAll();
		for(Widget widget: widgets) {
			savedWidgets.add(widgetRepository.save(widget));
		}
		return savedWidgets;
	}
	
	
	
	@DeleteMapping("api/widget/{WID}")
	public void deleteWidget(@PathVariable("WID") int widgetId) {
		widgetRepository.deleteById(widgetId);
	}
	
	@PutMapping("api/widget/{WID}")
	public Widget updateWidget(@RequestBody Widget widget, @PathVariable("WID") int widgetId) {
		Optional<Widget> widgetData = widgetRepository.findById(widgetId);
		if (widgetData.isPresent()) {
			Widget updateWidget = widgetData.get();
			updateWidget.setName(widget.getName());
			updateWidget.setTitle(widget.getTitle());
			updateWidget.setWidgetType(widget.getWidgetType());
			updateWidget.setWidgetOrder(widget.getWidgetOrder());
			updateWidget.setText(widget.getText());
			updateWidget.setClassName(widget.getClassName());
			updateWidget.setStyle(widget.getStyle());
			updateWidget.setHeight(widget.getHeight());
			updateWidget.setWidth(widget.getWidth());
			updateWidget.setSize(widget.getSize());
			updateWidget.setHref(widget.getHref());
			updateWidget.setSrc(widget.getSrc());
			updateWidget.setListItems(widget.getListItems());
			return updateWidget;
		}
		return widget;
	}	
	
}
