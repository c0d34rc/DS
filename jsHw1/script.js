//--------------------------
// 1. ZMIENNE I TYPY
//--------------------------

//a) zdefiniuj zmienne const z wartościami w następujących typach: boolean, number, string. Wyloguj w konsoli te zmienne oraz użyj typeof aby wyświetlić również typy danych
console.log('Zadanie 1. a) "zdefiniuj zmienne const z wartościami w następujących typach: boolean, number, string. Wyloguj w konsoli te zmienne oraz użyj typeof aby wyświetlić również typy danych" \n')

const polygraph = true
const age = 5
const name = "Ahmed"

console.log(polygraph, age, name)
console.log(`\nZmienna "polygraph" o wartości "${polygraph}" jest zmienną typu "${typeof polygraph}"`)
console.log(`Zmienna "age" o wartości "${age}" jest zmienną typu "${typeof age}"`)
console.log(`Zmienna "name" o wartości "${name}" jest zmienną typu "${typeof name}" \n`)

//b) użyj console log i wyświetl wyniki poniższych działań, dodatkowo wyjaśnij: jaki jest typ wyniku i z czego wynika.
// 2 + "2"
// 2 + 2
// 2 * "2"
// 2 * 2
// 1 == true
// 0 == false
// 0 == null
// null == undefined

console.log('Zadanie 1. b) "Użyj console log i wyświetl wyniki poniższych działań, dodatkowo wyjaśnij: jaki jest typ wyniku i z czego wynika." \n')
console.log('2 + "2" = ' + 2 + "2")
console.log(`Wynik jest typu string, ponieważ w przypadku "dodawania" danych typu number i string, number zostaje przekonwertowany na string i dwie dane typu string zostają połączone (string concatenation) \n`
)

console.log('2 + 2 = ' + 2 + 2)
console.log(`Obie zmienne są typu number więc zostaje wykonane działanie dodawania i wynik również jest typu number \n`)

console.log(2 * "2")
console.log(`Wynik będzie daną typu number, ponieważ przy użyciu operatorów arytmetycznych na wartościach liczbowych przedstawionych jako dana typu string, zachodzi automatycznie niejawna ich konwersja na dane typu number, aby wykonać działanie. Z wyjątkiem dodawania, gdzie dana typu number zostanie przekonwertowana na daną typu string, jak w pierwszym przykładzie. \n`)

console.log('2 * 2 = ' +  2 * 2)
console.log("Przy użyciu operatora arytmetycznego na danych typu number, zwrócony zostanie również typ number \n")

console.log(1 == true)
console.log('Zostanie zwrócona wartość true, typu boolean, zastosowany operator porównuje tylko wartość danych, bez porównania ich typu, a w przyapdku wartości number "0" i "1" mogą one zostać przekonwertowane na dane typu boolean o wartości "false" i "true" \n')

console.log(0 == false)
console.log('Zostanie zwrócona wartość true, typu boolean, analogicznie do wyjaśnienia w poprzednim przykładzie \n')

console.log(0 == null)
console.log('Wynik będzie daną false, typu boolean, ponieważ 0 oznacza dosłownie daną o wartości "0", a null oznacza brak wartości \n')

console.log(null == undefined)
console.log("W tym przypadku zostanie zwrócona wartość true, typu boolean, ponieważ undefined oznacza zadeklarowaną zmienną, lecz bez przypisanej wartości, a null oznacza brak wartości, zatem wartość, czy też jej brak w ich przypadku jest równy \n")

//napisz dodatkowo czym różnią się następujące zapisy: "=", "==", "==="

console.log('\nNapisz dodatkowo czym różnią się następujące zapisy: "=", "==", "===" \n=> \n')
console.log('"=" jest operatorem przypisania, uzywamy go aby przypisać wartość do zadeklarowanej zmiennej, \n"==" jest operatorem porównania wartości zmiennych, zwraca wynik typu boolean, true, gdy porównywane wartości są równe, false gdy nie są, \n"===" jest operatorem porównania wartości i typu zmiennych, również zwraca wynik daną typu boolean, true, gdy porównywane wartości są równe oraz są tego samego typu, false, gdy ich wartość lub typ, lub i wartość i typ są różne \n')

//c) napisz krótko czym różni się typ referencyjny od typu prostego, oraz podaj przykłady tych typów. Odpowiedź wyświetl w konsoli

console.log('Zadanie 1. c) napisz krótko czym różni się typ referencyjny od typu prostego, oraz podaj przykłady tych typów. Odpowiedź wyświetl w konsoli \n')
console.log('Typ prosty przechowuje wartość, typ referencyjny przechowuje referencję / adres do wartości. W przypadku przypisania wartości typu prostego (lub tzw. wartościowego - czyli typy: number, string, boolean, null, undefined, bigInt), z jednej zmiennej do drugiej, wartość ta jest kopiowana, natomiast typ referencyjny (tablice, funkcje, obiekty) są kopiowane poprzez ich referencję, adres, w którym przechowywana jest ich wartość. \n')

//d) spróbuj przekonwertować i wyświetlić w konsoli poniższe wartości:
// let val = 0 (przekonwertuj na typ Boolean)
// let num = "2137" (przekonwertuj na typ Number)
// let str = 007 (przekonwertuj na String)
// let und = undefined (przekonwertuj na Boolean)

console.log('Zadanie 1. d) spróbuj przekonwertować i wyświetlić w konsoli poniższe wartości: \n')
let val = 0
console.log(Boolean(val))

let num= "2137"
console.log(Number(num))

let str = 007
console.log(String(str))

let und = undefined
console.log(Boolean(und))

//e) stwórz pustą tablicę za pomocą new Array() i dodaj do niej 3 elementy za pomocą .push(), wyświetl wynik w konsoli

console.log('\n"Zadanie 1. e) stwórz pustą tablicę za pomocą new Array() i dodaj do niej 3 elementy za pomocą .push(), wyświetl wynik w konsoli" \n')

let arrayOfNumbers = new Array()
console.log(arrayOfNumbers)
arrayOfNumbers.push(1,2,3)
console.log(arrayOfNumbers)

//f) swtórz pusty obiekt za pomocą new Object() i dodaj do niego 3 klucze z wartościami, wyświetl wynik w konsoli

console.log('Zadanie 1. f) swtórz pusty obiekt za pomocą new Object() i dodaj do niego 3 klucze z wartościami, wyświetl wynik w konsoli \n')

let person = new Object()
person.name = "Alex"
person.age = 1
person.character = "nice"
console.log(person)


//g)* opisz krótko czym dokładnie jest typ NaN

console.log('\nZadanie 1. g)* opisz krótko czym dokładnie jest typ NaN. \n')
console.log('NaN = Not-a-Number - jest to dana typu number, która nie jest jednak liczbą, zwracana w przypadku np. niemożliwego do wykonania działania matematycznego. \n')

//h)** znajdź w sieci informacje o typie Symbol i opisz go krótko

console.log('Zadanie 1. h)** znajdź w sieci informacje o typie Symbol i opisz go krótko \n')
console.log('Typ Symbol został wprowadzony w ES6 i jest nowym typem prostym. Jego wartość jest zawsze unikatowa, przyjmowana zupełnie na nowo. Może być użyty jako unikalny klucz właściwości obiektów. \n')

//--------------------------
//2. FUNKCJE & WARUNKI
//--------------------------

//a) napisz funkcję która przyjmie trzy parametry i zwróci ich sumę. Wyświetl w konsoli wynik dodawania dowolnych trzech liczb

console.log('Zadanie 2. a) napisz funkcję która przyjmie trzy parametry i zwróci ich sumę. Wyświetl w konsoli wynik dodawania dowolnych trzech liczb \n')

const sumOfNumbers = (num1, num2, num3) => num1 + num2 + num3
console.log(sumOfNumbers(2, 4, 6))

//b) napisz funkcję która przymie dwa parametry, wysokość i podstawę trójkąta a następnie obliczy i zwróci pole trójkąta. Przekaż do funkcji dowolne wartości i wyświetl w konsoli wynik

console.log('\nZadanie 2. b) napisz funkcję która przyjmie dwa parametry, wysokość i podstawę trójkąta a następnie obliczy i zwróci pole trójkąta. Przekaż do funkcji dowolne wartości i wyświetl w konsoli wynik \n')

const triangleArea = (a, h) => a * h / 2
console.log(triangleArea(6, 2))

//c) napisz funkcję która przyjmie aktualny wiek i obliczy oraz zwróci informację ile lat minęło od 18 urodzin. Jeśli podany wiek będzie mniejszy niż 18, użyj if aby zwrócić taką informację

console.log('\nZadanie 2. c) napisz funkcję która przyjmie aktualny wiek i obliczy oraz zwróci informację ile lat minęło od 18 urodzin. Jeśli podany wiek będzie mniejszy niż 18, użyj if aby zwrócić taką informację \n')

const ageValidation = (age) => age < 18 ? 'Not 18 yet, cannot calculate.' : age-18
console.log(ageValidation(15))

//d) napisz funkcję która przyjmie tablicę z co najmniej 3 elementami i zwróci następujący komunikat: "Przekazana tablica ma X elementów a elementem numer 3 jest X" w miejscach oznaczonych jako X powinny wyświetlać się odpowienie wartości

console.log('\nZadanie 2. d) napisz funkcję która przyjmie tablicę z co najmniej 3 elementami i zwróci następujący komunikat: "Przekazana tablica ma X elementów a elementem numer 3 jest X" w miejscach oznaczonych jako X powinny wyświetlać się odpowienie wartości \n')

const arrayOfLetters = ['a', 'b', 'c', 'd', 'e']
function arrayAnalysis (array) {
	const length = array.length
	const element = array[2]
	return `Przekazana tablica ma ${length} elementów, a elementem numer 3 jest ${element}`
}
console.log(arrayAnalysis(arrayOfLetters))

//e) napisz funkcję która przyjmie obiekt testPerson i zwróci komunikat "Pan/i (imię) (nazwisko) ma (wiek) lat oraz (wzrost) cm wzrostu". Możesz zdefiniować inną osobę i użyc funkcji ponownie.

console.log('\nZadanie 2. //e) napisz funkcję która przyjmie obiekt testPerson i zwróci komunikat "Pan/i (imię) (nazwisko) ma (wiek) lat oraz (wzrost) cm wzrostu". Możesz zdefiniować inną osobę i użyc funkcji ponownie. \n')

let testPerson = {
	name: "Jan",
	surname: "Kowalski",
	age: 20,
	height: 180,
}

const personDescription = (personsData) => `Pan/i ${personsData.name} ${personsData.surname} ma ${personsData.age} lat oraz ${personsData.height} cm wzrostu.`

console.log(personDescription(testPerson))

//f) napisz funkcję która przyjmie obiekt testPerson oraz drugi parametr. Funkcja powinna zmienić wartośc jednego z klucza w obiekcie. Spróbuj zmodyfikować na przykład wiek.

console.log('\nZadanie 2. f) napisz funkcję która przyjmie obiekt testPerson oraz drugi parametr. Funkcja powinna zmienić wartośc jednego z klucza w obiekcie. Spróbuj zmodyfikować na przykład wiek. \n')

const modifyPerson = (person, age) => person.age = age
modifyPerson(testPerson, 15)
console.log(testPerson)

//g) napisz funkcję która przyjmie jeden parametr. Jeśli parametr nie jest typu Number, funkcja powinna zwrócić informację w konsoli, że przyjmowany jest tylko typ number. Jeśli przekazana wartość jest typu Number:
// - gdy cyfra jest podzielna przez 3 i 5, niech zwróci string "FizzBuzz"
// - gdy cyfra jest podzielna przez 3, niech zwróci string "Fizz"
// - gdy cyfra jest podzielna przez 5, niech zwróci string "Buzz"

console.log(`\nZadanie 2. g) napisz funkcję która przyjmie jeden parametr. Jeśli parametr nie jest typu Number, funkcja powinna zwrócić informację w konsoli, że przyjmowany jest tylko typ number. Jeśli przekazana wartość jest typu Number:
- gdy cyfra jest podzielna przez 3 i 5, niech zwróci string "FizzBuzz"
- gdy cyfra jest podzielna przez 3, niech zwróci string "Fizz"
- gdy cyfra jest podzielna przez 5, niech zwróci string "Buzz" \n`)

function checkNumber(num) {
	if (typeof num !== "number") {
		console.log("Wprowadzony parametr musi być typu number")
	}
	if (num % 3 === 0 && num % 5 === 0) {
		console.log("FizzBuzz") 
	} else if (num % 3 === 0) {
		console.log("Fizz")
	} else if (num % 5 === 0) {
		console.log("Buzz")
	}
}

checkNumber("żelki")
checkNumber(15)
checkNumber(6)
checkNumber(10)
checkNumber(7)

//h) napisz funkcję która przyjmie numer a następnie sprawdzi czy cyfra jest parzysta i zwróci informację. Użyj operatora trójargumentowego

console.log('\nZadanie 2. h) napisz funkcję która przyjmie numer a następnie sprawdzi czy cyfra jest parzysta i zwróci informację. Użyj operatora trójargumentowego \n')

const checkNumberIfEven = (num) => num % 2 === 0 ? 'Wprowadzona liczba jest parzysta' : 'Wprowadzona liczba nie jest parzysta'
console.log(checkNumberIfEven(6))
console.log(checkNumberIfEven(7))

//i)* napisz funkcję która wylosuje i zwróci liczbę od 1 do 10

console.log('\nZadanie 2. i)* napisz funkcję która wylosuje i zwróci liczbę od 1 do 10 \n')

const rng = () => Math.floor(Math.random() * 10)
console.log(rng())

//j)** napisz funkcję która przyjmie dwie liczby, a następnie wylosuje i zwróci liczbę z podanego zakresu

console.log('\nZadanie 2. j)** napisz funkcję która przyjmie dwie liczby, a następnie wylosuje i zwróci liczbę z podanego zakresu \n')

const rng2 = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min
console.log(rng2(20,40))

//k)*** wyszukaj w internecie metody Javascriptowe Math. i użyj trzech z nich aby napisać funkcje wykonujące działania według Twojego własnego pomysłu.

//--------------------------
// FUNKCJE & PĘTLE
//--------------------------

//uwaga! Możesz spróbować każdą z pętli napisać w funkcji

//a) napisz pętlę która odliczy od 1 do 9

console.log('\nZadanie 3.a) napisz pętlę która odliczy od 1 do 9 \n')

for (let i = 1; i <= 9; i++) {
	console.log(i)
}

//b) napisz pętlę która odliczy od 9 do 1

console.log('\nZadanie 3.b) napisz pętlę która odliczy od 9 do 1 \n')

for (let i = 9; i >= 1; i--) {
	console.log(i)
}

//c) napisz pętlę która odliczy od 5 do 15

console.log('\nZadanie 3.c) napisz pętlę która odliczy od 5 do 15 \n')

for (let i = 5; i <= 15; i++) {
	console.log(i)
}

//d) napisz pętlę która odliczy od 0 do -10

console.log('\nZadanie 3.d) napisz pętlę która odliczy od 0 do -10 \n') 

for (let i = 0; i >= -10; i--) {
	console.log(i)
}


//e) napisz pętlę która odliczy od 1 do 20, iteracja co 2

console.log('\nZadanie 3.e) napisz pętlę która odliczy od 1 do 20, iteracja co 2 \n')

for (i = 1; i <= 20; i+=2) {
	console.log(i)
}

//f) napisz pętlę która odliczy od 10 do -10, iteracja co 4

console.log('\nZadanie 3.f) napisz pętlę która odliczy od 10 do -10, iteracja co 4 \n')

for (i = 10; i>= -10; i-=4) {
	console.log(i)
}

//g)* napisz pętlę, ktora będzie odliczać od 1 do 100, ale iteracja z każdym wykonaniem będzie rosła dwukrotnie, czyli 1, 2, 4, 8...

console.log('\nZadanie 3.g)* napisz pętlę, ktora będzie odliczać od 1 do 100, ale iteracja z każdym wykonaniem będzie rosła dwukrotnie, czyli 1, 2, 4, 8... \n')

for (i = 1; i <= 100; i+=i) {
	console.log(i)
}

//h)* napisz pętlę która będzie odliczać od 1 do 10, ale wyświetli tylko nieparzyste wartości

console.log('\nZadanie 3.h)* napisz pętlę która będzie odliczać od 1 do 10, ale wyświetli tylko nieparzyste wartości \n')

for (i = 1; i <= 10; i++) {
	if (i % 2 != 0){
		console.log(i)
	}
}

//i)* napisz pętlę która odliczy od 1 do 10, i wyświetli w konsoli informację o tym czy wyświetlona cyfram jest parzysta czy nie, możesz użyć operatora trójargumentowego

console.log('\nZadanie 3.i)* napisz pętlę która odliczy od 1 do 10, i wyświetli w konsoli informację o tym czy wyświetlona cyfra jest parzysta czy nie, możesz użyć operatora trójargumentowego \n')

for (i = 1; i <= 10; i++) {
	i % 2 == 0 ? console.log(`Liczba ${i} jest parzysta`) : console.log(`Liczba ${i} nie jest parzysta`)
}

//Uwaga! kolejne pętle trzeba napisać w funkcji

//j) napisz funkcję, która przyjmie numer i w pętli odliczy od 1 do podanej wartości


console.log('\nZadanie 3. j) napisz funkcję, która przyjmie numer i w pętli odliczy od 1 do podanej wartości \n')

function loopToGivenNumber(num) {
	for (i = 1; i <= num; i++) {
		console.log(i)
	}
}

loopToGivenNumber(20)

//k) napisz funkcję, która przyjmie numer i w pętli odliczy od 1 do 50, ale iteracja będzie się odbywać co podaną wartość. (Jeśli argumentem przekazanym do funkcji jest 3, to pętla ma odliczać 3,6,9 itp.)

console.log('\nZadanie 3. k) napisz funkcję, która przyjmie numer i w pętli odliczy od 1 do 50, ale iteracja będzie się odbywać co podaną wartość. (Jeśli argumentem przekazanym do funkcji jest 3, to pętla ma odliczać 3,6,9 itp.) \n')

function loopEveryGivenNumber(num) {
	for (i = 1; i <= 50; i += num) {
		console.log(i)
	}
}

loopEveryGivenNumber(10)

//l) napisz funkcję która przyjmie tablicę arrNames i wyświetli w konsoli przywitanie dla każdej z osób

console.log('\nZadanie 3. l) napisz funkcję która przyjmie tablicę arrNames i wyświetli w konsoli przywitanie dla każdej z osób \n')

const arrNames = [
	"Ksawery",
	"Zenobiusz",
	"Klementyna",
	"Apolonia",
	"Jeremiasz",
	"Bernadetta",
]

function welcomeEveryone(arr) {
	for (i = 0; i < arr.length; i++) {
		console.log("Hello " + arr[i])
	}
}

welcomeEveryone(arrNames)

//ł) napisz funkcję która przymie tablicę arrObjects i wyświetli dla każdego obiektu informację "przed Tobą stoi (kolor) (marka)", np niebieski Mustang.

console.log('\nZadanie 3. ł) napisz funkcję która przymie tablicę arrObjects i wyświetli dla każdego obiektu informację "przed Tobą stoi (kolor) (marka)", np niebieski Mustang. \n')

const arrObjects = [
	{
		brand: "Mustang",
		color: "niebieski",
	},
	{
		brand: "Tesla",
		color: "czarna",
	},
	{
		brand: "Polonez",
		color: "żółty",
	},
	{
		brand: "Toyota",
		color: "fioletowa",
	},
]

function carRollCall(arr) {
	for (let object of arr) {
		console.log(`Przed Tobą stoi ${object.color} ${object.brand}`)
	}
}

carRollCall(arrObjects)

//m) napisz funkcję która przyjmie tablic arrNumbers i wyświetli w konsoli tylko przyste elementy tablicy

console.log("\nZadanie 3. m) napisz funkcję która przyjmie tablicę arrNumbers i wyświetli w konsoli tylko przyste elementy tablicy \n")

const arrNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function checkNumbers(array) {
	for (i = 0; i < array.length; i++) {
		if (array[i] % 2 === 0) {
			console.log (array[i])
		} else {
			continue;
		}
	}
}

checkNumbers(arrNumbers)

//n)* napisz funkcję, która przeiteruje po tablicy arrTypes i:
// - za pomocą push umieści elementy o typie innym niż number w tablicy arrOther
// - za pomocą push umieści elementy o typie number w tablicy arrNumbers
// - za pomocą push umieści numery parzyste w tablicy arrEven
// - na końcu zwróci obiekt z tymi trzema tablicami

console.log("\nZadanie 3. n)* (za długie polecenie :D) \n")

const arrTypes = [
	2,
	4,
	5,
	undefined,
	null,
	"val",
	NaN,
	7,
	10,
	333,
	"874",
	22,
	21,
	400,
	"400",
	"undefined",
]

const arrOther = []
const arrNubers = []
const arrEven = []

function arraySort (arr) {
	for (i = 0; i < arr.length; i++) {
		if (typeof arr[i] !== typeof 2) {
			arrOther.push(arr[i])
		} else if (arr[i] % 2 === 0) {
			arrEven.push(arr[i])
		} else arrNubers.push(arr[i])
		}
	}

arraySort(arrTypes)

console.log('arrOther', arrOther)
console.log('arrNubers', arrNubers)
console.log('arrEven', arrEven)

//--------------------------
// METODY
//--------------------------

//a) za pomocą metody map wyloguj przywitanie dla każdej osoby z tablicy names
console.log('\nZad. 4. a) za pomocą metody map wyloguj przywitanie dla każdej osoby z tablicy names \n')

const names = ["Seba", "Kari", "Mati", "Andżi"]
const sayHello = names.map((name) => {
	console.log(`Hello ${name} !`)
})

//b) za pomocą metody filter stwórz nową tablicę z tablicy array10 z parzystymi liczbami
console.log('\nZad 4. b) za pomocą metody filter stwórz nową tablicę z tablicy array10 z parzystymi liczbami \n')

const array10 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const filterNumbers = array10.filter((number) => number % 2 === 0)
console.log(filterNumbers)

//c) użyj filter na tablicy people aby zwrócić tablicę tylko z kobietami
console.log('\mZad 4. c) użyj filter na tablicy people aby zwrócić tablicę tylko z kobietami \n')

const people = [
	{
		name: "Tomasz",
		lastname: "Kowalski",
		gender: "male",
	},
	{
		name: "Karol",
		lastname: "Nowak",
		gender: "male",
	},
	{
		name: "Joanna",
		lastname: "Kowalska",
		gender: "female",
	},
	{
		name: "Anna",
		lastname: "Nowak",
		gender: "female",
	},
]

const peopleFiltered = people.filter(person => person.gender === 'female')
console.log(peopleFiltered)

//d) użyj metod takich jak split i sort aby zmienną shopping przekonwertować na tablicę z listą zakupów. Każde słowo powinno być osobną pozycją w tablicy. Ponad to posortuj wartości alfabetycznie. Spróbuj też ujednolicić wielkość liter aby lista była bardziej czytelna.

console.log('\nZad 4. d) użyj metod takich jak split i sort aby zmienną shopping przekonwertować na tablicę z listą zakupów. Każde słowo powinno być osobną pozycją w tablicy. Ponad to posortuj wartości alfabetycznie. Spróbuj też ujednolicić wielkość liter aby lista była bardziej czytelna. \n')

const shopping =
	"kawa MaSŁo chleb WODA ogórki jabłka Ziemniaki chipsy salcesoN wędLIna pieczarki Włoszczyzna heRBata truskawKi maliny"

const shoppingList = shopping.toLowerCase().split(' ').sort()
console.log(shoppingList)

//e) połącz litery alfabetu w tablicy alphabet w jeden string a następnie odwróć kolejność aby wynik wyglądał tak: "ZYXWV..."

const alphabet = [
	"A",
	"B",
	"C",
	"D",
	"E",
	"F",
	"G",
	"H",
	"I",
	"J",
	"K",
	"L",
	"M",
	"N",
	"O",
	"P",
	"Q",
	"R",
	"S",
	"T",
	"U",
	"V",
	"W",
	"X",
	"Y",
	"Z",
]

const alphabetReversed = alphabet.reverse()
const alphabetSum = alphabetReversed.reduce((acc, item) => acc + item)
console.log(alphabetSum)
