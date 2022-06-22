package net.codinghermit.api;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.UNAUTHORIZED)
public class ApiAuthException extends RuntimeException {

	public ApiAuthException(String message) {
		super(message);
	}
}
