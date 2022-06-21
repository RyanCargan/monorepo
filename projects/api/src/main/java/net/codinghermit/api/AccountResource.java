package net.codinghermit.api;

import java.util.Map;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/accounts")
public class AccountResource {
	@PostMapping("/register")
	public String registerAccount(@RequestBody Map<String, Object> accountMap) {
		String fname = (String) accountMap.get("firstName");
		String lname = (String) accountMap.get("lastName");
		String email = (String) accountMap.get("email");
		String password = (String) accountMap.get("password");
		return fname + ", " + lname + ", " + email + ", " + password;
	}
}
