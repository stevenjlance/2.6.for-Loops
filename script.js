// DO NOW: Complete the problems below using the array and object provided
const highestGrossingMovies = ["Avatar", "Avengers: Endgame",	"Titanic","Star Wars: Episode VII - The Force Awakens", "Avengers: Infinity War",	"Jurassic World",	"The Lion King", "The Avengers", "Furious 7", "Frozen II"]

//a. Print out the 7th highest grossing movie of all time (The Lion King)
console.log(highestGrossingMovies[8])

// b. Add "Black Panther", the the 12th highest grossing movie of all time to the list. Make sure it is on the end.
highestGrossingMovies.push("Black Panter")
console.log(highestGrossingMovies)

// c. Remove Avatar from the list
highestGrossingMovies.shift()

console.log(highestGrossingMovies)


const superheroes = {
  "steven": "Wonder Woman",
  "taylor": "Jessica Jones",
  "danny": "Ms. Marvel",
  "gabe": "Supergirl",
  "sara": "The Hulk",
  "shana": "Black Panther"
} 
// d. Print out taylor's favorite super hero
console.log(superheroes.taylor)

// e. Add your favorite superhero to the object
superheroes.lance = "Iron Man"

// f. Delete steven's favorite superhero
delete superheroes.steven
console.log(superheroes)

// =============== FOR LOOPS ====================
// 1. CODE-ALONG: Log out every number from 1-20
for(let i = 0; i < 21; i ++){
	console.log(i)
}

// 2. Log out every number from 50-100
for(let i = 50; i < 101; i ++){
	console.log(i)
}

// 3. Log out every even number up to 100
for(let i = 0; i < 101; i += 2){
	console.log(i)
}

// 4. Log out every multiple of 2 and every multiple of 3 up to 100
for(let i = 0; i < 101; i++)
{
	if(i % 2 == 0)
	{
		console.log(i)
	}
	else if(i % 3 == 0)
	{
		console.log(i)
	}
}

// 5. Log out the sum of every number under 1000
let total = 0
for(let i = 0; i < 1000; i++)
{
	total += i
}
console.log(total)

// 6. Log out the first 10 digits of the fibbonacci series.



// ======= TRAVERSING ARRAYS WITH FOR LOOPS ===========
const names = ["Yadira", "Kadiatou", "Isaiah", "Fancisco", "Darius"]
const nicknames = ["Deary", "Kadi-B", "Izzy", "Paco", "DRock"]
const ages = [22, 28, 27, 33, 29]
const favAnimals = ["Cat", "Ferret", "Dog", "Sloth", "Zebra"]
const birthLocations = ["Queens", "Bronx", "Manhattan", "Bronx", "Brooklyn"]

// 7. CODE-ALONG: Print our all of the names in the list
for(let i = 0; i < names.length; i++){
	console.log(names[i])
}


// 8. CODE-ALONG: Print out "________ was born in _________" for each individual
for(let i = 0; i < names.length; i++){
	console.log(`${names[i]} was born in ${birthLocations[i]}`)
}



// 9. Print out "_________ goes by the name _______ and is ________ years old"
for(let i = 0; i < names.length; i++){
	console.log(`${names[i]} goes by the name ${nicknames[i]}`)
}


/* 10. Print out info for each person. For example, it may look like:
Name: Yadira
Nickname: "Deary"
Age: 22
Favorite Animal: Cat
Birth Location: Queens
*/ 
for(let i = 0; i < names.length; i++){
	console.log(`NAME: ${names[i]}`)
	console.log(`NICKNAME: ${nicknames[i]}`)
	console.log(`AGE: ${ages[i]}`)
	console.log(`FAVORITE ANIMAL: ${favAnimals[i]}`)
	console.log(`BIRTH PLACE: ${birthLocations[i]}`)
} 


// =========== NESTED DATA & FOR LOOPS =============
// 11. The current data would make sense much more as an object rather than individual arrays. Use a for loop to update the people array with objects for each person.

const people = []

for(let i = 0; i < names.length; i++)
{
  const person = {}
  person.name = names[i]
  person.age = ages[i]
  person.nickname = nicknames[i]
  person["Favorite Animal"] = favAnimals[i]
  person["Birth Place"] = birthLocations[i]
  people.push(person)
}
console.log(people)



// 12. Using the new people array you created and a for loop, print out "_________'s nickname is _______" for each person.
for(let i = 0; i < people.length; i++)
{
  console.log(`${people[i].name}'s nickname is ${people[i].nickname}`)
}



// 13. Using the new people array you created and a for loop, print out "_________'s favorite animal is _______" for each person.
for(let i = 0; i < people.length; i++)
{
  console.log(`${people[i].name}'s favorite Animal is a ${people[i]["Favorite Animal"]}`)
}



/*14. STRETCH: Can you make each object an HTML list? For example, one may look like:
<ul>
<li>Name: Yadira</li>
<li>Nickname: "Deary"</li>
<li>Age: 22</li>
<li>Favorite Animal: Cat</li>
<li>Birth Location: Queens</li>
</ul>
*/

const peopleHTML = []
for(let i = 0; i < people.length; i++)
{
  let html = `<ul>`
  html += `<li>Name: ${people[i].name}</li>`
  html += `<li>Nickname: ${people[i].nickname}</li>`
  html += `<li>Age: ${people[i].age}</li>`
  html += `<li>Favorite Animal: ${people[i]["Favorite Animal"]}</li>`
  html += `<li>Birth Location: ${people[i]["Birth Place"]}</li>`
  html += `</ul>`
  peopleHTML.push(html)
}
console.log(peopleHTML)
