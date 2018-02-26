interface AnimalInterface{
	name: string;
	eat(portions: number): string;
}

class Animal implements AnimalInterface{
	privat name: string;
	
	constructor(animalName: string){
		this.name = animalName;
	}

	eat(portions: number = 1): string {
		
		return this.name + " eats " + portions + " portions"
	};	
}

let first = new Animal("Dog");
console.log(first.eat(12))
let second = new Animal("Cat")
console.log(second.eat())