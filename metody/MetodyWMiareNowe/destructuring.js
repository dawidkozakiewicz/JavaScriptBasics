// W JavaScript, często masz cały obiekt przekazany do funkcji, gdy funkcja potrzebuje tylko kilku wartości.
// Destructuring pozwoli ci wyciągnąć własności z obiektów.
// Pozwoli ci też wyciągać przedmioty z tablic.
// Poniższy kod pokazuje, w jaki sposób można użyć destructuring, aby wyciągnąć właściwości z obiektu.
// Tworzy zmienne indywidualne dla właściwości obiektu, do których można uzyskać bezpośredni dostęp.
// Poniższy kod wykorzystuje także parametr rest ...other utworzy nowy obiekt ze wszystkimi właściwościami, które nie zostały zdestrukturyzowane.

const todo = {
	id: 'asdfpoijwermasdf',
	text: 'Pay the bills',
	completed: false
};

const { text: todoText, completed, details = 'No details provided', ...others } = todo;

console.log(todoText); // Will print: "Pay the bills"
console.log(completed); // Will print: false
console.log(details); // Will print: "No details provided"
console.log(others); // Will print: { id: "asdfpoijwermasdf" }

// Destructuring działa również z argumentami funkcji.
// Poniższa funkcja printTodo oczekuje argumentu obiektu. Zamiast nazywania argumentu todo i uzyskiwania właściwości z niego,
// jest on destrukturyzowany w argumentach funkcji w celu zapewnienia dostępu do 'text' i 'completed' właściwości jako zmiennych.

const todo = {
	id: 'asdfpoijwermasdf',
	text: 'Pay the bills',
	completed: false
};

const printTodo = ({ text, completed }) => {
	console.log(`${text}: ${completed}`);
};

printTodo(todo);

// Destrukturyzacja działa również z tablicami.
// Tablice mogą być destrukturyzowane samodzielnie lub jako argument funkcji.
// Poniższy kod demonstruje to przez pobranie pierwszej wartości tablicy i zapisanie jej w firstAge.
// Następnie używa parametru rest, aby pobrać pozostałe wartości i zapisać je w otherAges.

const age = [ 65, 0, 13 ];
const [ firstAge, ...otherAges ] = age;
console.log(firstAge); // Will print: 65
console.log(otherAges); // Will print: [0, 13]
