package net.codinghermit.api;

record InitialState(double length, double width) { }
//    This concise declaration of a rectangle is equivalent to the following normal class:

//public final class InitialState {
//    private final double length;
//    private final double width;
//    public InitialState(double length, double width) {
//        this.length = length;
//        this.width = width;
//    }
//    double length() { return this.length; }
//    double width() { return this.width; }
//    // Implementation of equals() and hashCode(), which specify
//    // that two record objects are equal if they
//    // are of the same type and contain equal field values.
//    public boolean equals...
//    public int hashCode...
//    // An implementation of toString() that returns a string
//    // representation of all the record class's fields,
//    // including their names.
//    public String toString() {...}
//}
