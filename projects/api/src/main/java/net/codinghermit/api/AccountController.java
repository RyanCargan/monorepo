package net.codinghermit.api;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import net.codinghermit.api.model.tables.pojos.Account;

@RestController
public class AccountController {
    @Autowired
    AccountService accountService;

    @GetMapping(value = "/accounts")
    public List<Account> getAccounts(){
        return this.accountService.getAccounts();
    }
    @PostMapping
    public void postAccount(@RequestBody Account account){
        this.accountService.insertAccount(account);
    }
}
