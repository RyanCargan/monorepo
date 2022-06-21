// package net.codinghermit.jwt;

// import java.io.IOException;

// import javax.servlet.http.HttpServletRequest;
// import javax.servlet.http.HttpServletResponse;

// import org.springframework.security.authentication.AuthenticationManager;
// import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
// import org.springframework.security.core.Authentication;
// import org.springframework.security.core.AuthenticationException;
// import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

// import com.fasterxml.jackson.databind.ObjectMapper;

// public class JwtAuthFilter extends UsernamePasswordAuthenticationFilter {

// 	private final AuthenticationManager authenticationManager;

// 	public JwtAuthFilter(AuthenticationManager authenticationManager) {
// 		this.authenticationManager = authenticationManager;
// 	}

// 	@Override
// 	public Authentication attemptAuthentication(HttpServletRequest request, HttpServletResponse response) throws AuthenticationException {
// 		try {
// 			NameAndPassAuthRequest authRequest = new ObjectMapper()
// 			.readValue(request
// 			.getInputStream(), NameAndPassAuthRequest.class);

// 			Authentication authentication = new UsernamePasswordAuthenticationToken(
// 				authRequest.getName(),
// 				authRequest.getPass()
// 			);

// 			authenticationManager.authenticate(authentication);
// 		} catch (IOException e) {
// 			e.printStackTrace();
// 			throw new RuntimeException(e);
// 		}
// 		return super.attemptAuthentication(request, response);
// 	}
// }
