// package net.codinghermit.api;

// import java.util.Arrays;
// import java.util.List;

// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.web.bind.annotation.GetMapping;
// import org.springframework.web.bind.annotation.PathVariable;
// import org.springframework.web.bind.annotation.PostMapping;
// import org.springframework.web.bind.annotation.RequestBody;
// import org.springframework.web.bind.annotation.RequestMapping;
// import org.springframework.web.bind.annotation.RestController;

// import net.codinghermit.api.model.tables.pojos.Account;

// @RestController
// @RequestMapping("/accounts")
// public class AccountController {
//     @Autowired
//     AccountService accountService;

//     @GetMapping(value = "/accountlist")
//     public List<Account> getAccounts(){
//         return this.accountService.getAccounts();
//     }
//     @PostMapping
//     public void postAccount(@RequestBody Account account){
//         this.accountService.insertAccount(account);
//     }

//     public static final List<User> USERS = Arrays.asList(
//         new User(1, "Ryan"),
//         new User(2, "Bill"),
//         new User(3, "Smith")
//     );

//     @GetMapping(path = "/{userId}")
//     public User getUser(@PathVariable("userId") Integer userId) {
//         return USERS.stream()
//         .filter(user -> userId.equals(user.getUserId()))
//         .findFirst()
//         .orElseThrow(() -> new IllegalStateException("Student " + userId + " does not exist!"));
//     }
// }
