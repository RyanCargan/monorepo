package net.codinghermit;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class State {
    private int id;
    private String name;
    @Setter(AccessLevel.PROTECTED)
    private String surname;
}

//public class State {
//    private int id;
//    private String name;
//    private String surname;
//
//    public int getId() {
//        return id;
//    }
//
//    public void setId(int id) {
//        this.id = id;
//    }
//
//    public String getName() {
//        return name;
//    }
//
//    public void setName(String name) {
//        this.name = name;
//    }
//
//    public String getSurname() {
//        return surname;
//    }
//
//    protected void setSurname(String surname) {
//        this.surname = surname;
//    }
//}
