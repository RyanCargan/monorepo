package net.codinghermit.api;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class RouteController {
	@RequestMapping("/")
	public String getGreeting() {
		return "Hi from Spring.";
	}
}
