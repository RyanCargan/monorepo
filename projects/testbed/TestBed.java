import static java.lang.System.out;

class TestBed {
	public static void main(String args[]){
		out.println("Argument count: " + args.length);
		for (int i = 0; i < args.length; i++) {
			out.println("Argument " + (i + 1) + ": " + args[i]);
		}

		PatternPrinter p = new PatternPrinter(args[0] + "!");
		out.println("\nInput is: " + p.s + "\n");

		p.printPatternOne();
	}
}
