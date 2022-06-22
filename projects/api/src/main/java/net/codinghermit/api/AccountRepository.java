package net.codinghermit.api;

public interface AccountRepository {
	Integer create(String firstName, String lastName, String email, String password) throws ApiAuthException;

	Account findByEmail(String email, String password) throws ApiAuthException;

	Integer getCountByEmail(String email);

	Account findById(Integer id);
}
