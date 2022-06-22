package net.codinghermit.api;

public class AccountRepositoryImpl implements AccountRepository	{

    @Override
    public Integer create(String firstName, String lastName, String email, String password) throws ApiAuthException {
        return null;
    }

    @Override
    public Account findByEmail(String email, String password) throws ApiAuthException {
        return null;
    }

    @Override
    public Integer getCountByEmail(String email) {
        return null;
    }

    @Override
    public Account findById(Integer id) {
        return null;
    }
}
