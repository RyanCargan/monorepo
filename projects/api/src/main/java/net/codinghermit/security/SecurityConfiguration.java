package net.codinghermit.security;

// import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
// import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
public class SecurityConfiguration extends WebSecurityConfigurerAdapter {
	@Override
	protected void configure(HttpSecurity http) throws Exception {
		http
				.authorizeRequests()
				.anyRequest()
				.authenticated()
				.and()
				.httpBasic();
	}
	// @Bean
    // public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
	// 	http
	// 			.authorizeRequests()
	// 			.anyRequest()
	// 			.authenticated()
	// 			.and()
	// 			.httpBasic();
	// 		return http.build();
    // }
}
