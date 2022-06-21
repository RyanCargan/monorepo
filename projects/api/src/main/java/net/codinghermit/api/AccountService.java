package net.codinghermit.api;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.beans.factory.annotation.Autowired;

import org.jooq.DSLContext;
import net.codinghermit.api.model.Tables;
import net.codinghermit.api.model.tables.pojos.Account;

@Service
public class AccountService {
    @Autowired
    DSLContext context;

    @Transactional
    public List<Account> getAccounts(){
       return context
                .selectFrom(Tables.ACCOUNT)
                .fetchInto(Account.class);
    }
    // public List<Account> getAccounts(){
    //     return context
    //              .selectFrom(Tables.ACCOUNT)
    //              .where(Tables.ACCOUNT.NAME.eq("Ryan"))
    //              .fetchInto(Account.class);
    //  }
    @Transactional
    public void insertAccount(Account account){
        context
                .insertInto(Tables.ACCOUNT, Tables.ACCOUNT.NAME,
                            Tables.ACCOUNT.NAME)
                .values(account.getName(), account.getPass())
                .execute();
    }
}
