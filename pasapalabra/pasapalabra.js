let userName = {
    name: '',
    points: '',
};

userName.name = prompt('Please enter your name: ')
userName.name ? console.log(`Hello, ${userName.name}!`) : console.log('Hello!');

const questions = [

    { letter: "a", answer: "abducir", status: 0, question: "CON LA A. Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien"},

    { letter: "b", answer: "bingo", status: 0, question: "CON LA B. Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso"},

    { letter: "c", answer: "churumbel", status: 0, question: "CON LA C. Niño, crío, bebé"},

    { letter: "d", answer: "diarrea", status: 0, question: "CON LA D. Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida"},

    { letter: "e", answer: "ectoplasma", status: 0, question: "CON LA E. Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación"},

    { letter: "f", answer: "facil", status: 0, question: "CON LA F. Que no requiere gran esfuerzo, capacidad o dificultad"},

    { letter: "g", answer: "galaxia", status: 0, question: "CON LA G. Conjunto enorme de estrellas, polvo interestelar, gases y partículas"},

    { letter: "h", answer: "harakiri", status: 0, question: "CON LA H. Suicidio ritual japonés por desentrañamiento"},

    { letter: "i", answer: "iglesia", status: 0, question: "CON LA I. Templo cristiano"},

    { letter: "j", answer: "jabali", status: 0, question: "CON LA J. Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba"},

 
    { letter: "k", answer: "kamikaze", status: 0, question: "CON LA K. Persona que se juega la vida realizando una acción temeraria"},

    { letter: "l", answer: "licantropo", status: 0, question: "CON LA L. Hombre lobo"},

    { letter: "m", answer: "misantropo", status: 0, question: "CON LA M. Persona que huye del trato con otras personas o siente gran aversión hacia ellas"},

    { letter: "n", answer: "necedad", status: 0, question: "CON LA N. Demostración de poca inteligencia"},

    { letter: "ñ", answer: "señal", status: 0, question: "CONTIENE LA Ñ. Indicio que permite deducir algo de lo que no se tiene un conocimiento directo."},

    { letter: "o", answer: "orco", status: 0, question: "CON LA O. Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien"},

    { letter: "p", answer: "protoss", status: 0, question: "CON LA P. Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft"},

    { letter: "q", answer: "queso", status: 0, question: "CON LA Q. Producto obtenido por la maduración de la cuajada de la leche"},

    { letter: "r", answer: "raton", status: 0, question: "CON LA R. Roedor"},

    { letter: "s", answer: "stackoverflow", status: 0, question: "CON LA S. Comunidad salvadora de todo desarrollador informático"},

    { letter: "t", answer: "terminator", status: 0, question: "CON LA T. Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984"},

    { letter: "u", answer: "unamuno", status: 0, question: "CON LA U. Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914"},

    { letter: "v", answer: "vikingos", status: 0, question: "CON LA V. Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa"},

    { letter: "w", answer: "sandwich", status: 0, question: "CONTIENE LA W. Emparedado hecho con dos rebanadas de pan entre las cuales se coloca jamón y queso"},

    { letter: "x", answer: "botox", status: 0, question: "CONTIENE LA X. Toxina bacteriana utilizada en cirujía estética"},

    { letter: "y", answer: "peyote", status: 0, question: "CONTIENE LA Y. Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal por indígenas americanos"},

    { letter: "z", answer: "zen", status: 0, question: "CON LA Z. Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional"}, ]

newQuestions = [];
class Questions {
        status = 0;
        constructor(letter, answer, question){
            this.letter = letter;
            this.answer = answer;
            this.question = question;
            newQuestions.push(this)
        }
    }
    
    const questA = new Questions ('a', 'abecedario', 'CON LA A. Serie ordenada de las letras de un idioma.')
    const questB = new Questions ('b', 'banco', 'CON LA B. Asiento, con respaldo o sin él, en que pueden sentarse dos o más personas.')
    const questC = new Questions ('c', 'coronavirus', 'CON LA C. Virus que produce diversas enfermedades respiratorias en los seres humanos, desde el catarro a la neumonía o la COVID.')
    const questD = new Questions ('d', 'diligencia', 'CON LA D. Disposición para resolver con rapidez e interés lo que ha de hacerse.' )
    const questE = new Questions ('e', 'escasez', 'CON LA E. Poquedad o mengua de algo.')
    const questF = new Questions ('f', 'fomentar', 'CON LA F. Excitar, promover, impulsar o proteger algo.')
    const questG = new Questions ('g', 'grato', 'CON LA G. Gustoso, agradable.')
    const questH = new Questions ('h', 'hincapié', 'CON LA H. Acción de afirmar el pie para sostenerse o para hacer fuerza.')
    const questI = new Questions ('i', 'incitar', 'CON LA I. Estimular a una persona o a un animal para que haga una cosa.')
    const questJ = new Questions ('j', 'jovial', 'CON LA J. Que está normalmente contento y lo exterioriza.' )
    const questK = new Questions ('k', 'kermés', 'CON LA AN K. Fiesta con bailes, rifas y concursos celebrada al aire libre con fines benéficos.')
    const questL = new Questions ('l', 'lúdico', 'CON LA L. Del juego o que tiene relación con él.')
    const questM = new Questions ('m', 'mordaz', 'CON LA M. Que critica a las personas y a las cosas de manera cruel e irónica.')
    const questN = new Questions ('n', 'nupcias', 'CON LA N. Casamiento o boda.')
    const questÑ = new Questions ('ñ', 'ñandú', 'CON LA Ñ.  Ave semejante al avestruz pero con tres dedos en cada pie, de menor tamaño y con plumaje gris poco fino.')
    const questO = new Questions ('o', 'ostentar', 'CON LA O. Hacer una persona gala de importancia o lujo' )
    const questP = new Questions ('p', 'perenne', 'CON LA AN P. Continuo, incesante, que no tiene intermisión.')
    const questQ = new Questions ('q', 'quebrantar', 'CON LA Q. Romper, separar con violencia.')
    const questR = new Questions ('r', 'redimir', 'CON LA R. Librar a una persona de una obligación o dificultad.')
    const questS = new Questions ('s', 'susceptible', 'CON LA S.  Que puede experimentar una modificación.')
    const questT = new Questions ('t', 'tenaz', 'CON LA T. Que se pega, ase o prende a una cosa, y es dificultoso de separar.')
    const questU = new Questions ('u', 'ufano', 'CON LA U. Arrogante, presuntuoso, engreído.' )
    const questV = new Questions ('v', 'venerar', 'CON LA AN V. Sentir o mostrar una persona mucho respeto por una persona o una cosa.')
    const questW = new Questions ('w', 'wok', 'CON LA W. Sartén ancha y profunda, generalmente con una o dos asas, originaria de la cocina oriental y que se usa para saltear.')
    const questX = new Questions ('x', 'xenofilia', 'CON LA X. Simpatía hacia todo lo extranjero.')
    const questY = new Questions ('y', 'yacer', 'CON LA Y. Dicho de una persona: Estar echada o tendida.')
    const questZ = new Questions ('z', 'zarcillo', 'CON LA Z. Pendiente o arete.')
    
let wrongAnswers = 0; 
userName.points = 0; 

let randomChoiceQuestions = Math.floor(Math.random()*2);
switch(randomChoiceQuestions){
    case 0: 
    randomChoiceQuestions = questions; 
    break;
    case 1: 
    randomChoiceQuestions = newQuestions;
    break; 
    case 2: 
    randomChoiceQuestions = questions
    default: 
    randomChoiceQuestions = newQuestions;
    break;
}

const pasapalabraGame = () =>  { 
    alert("Let's begin the first round of PASAPALABRA!")
let askQuestions;
for (let i = 0; i < randomChoiceQuestions.length; i ++) {
    
    do{
        askQuestions = prompt(`Question ${randomChoiceQuestions[i].question}.`)
    }while(!askQuestions);

    if (randomChoiceQuestions[i].answer === askQuestions.toLowerCase()) {
        userName.points = userName.points + 1
        console.log(`Correct, you have ${userName.points} Point(s).`);
    } else if (askQuestions.toLowerCase() === 'pasapalabra'){
        randomChoiceQuestions[i].status = 1;
        console.log('Okay, we will leave this question for another round.')
    } else if (askQuestions.toLowerCase() === 'end'){
        console.log(`Thank you for playing with us. You have guessed ${userName.points} letter(s). And you have ${wrongAnswers} wrong answer(s).`)
        alert('The game is over.');
        break;
    } else if (askQuestions === '' || askQuestions.toLowerCase() !== randomChoiceQuestions[i].answer){
        wrongAnswers = wrongAnswers + 1
        alert(`Wrong!The answer is ${randomChoiceQuestions[i].answer} .`)
    }
    
}
}

const nextRound = () => {
    alert('Attention!The new round begins!')
    for (let i = 0; i < randomChoiceQuestions.length; i ++){
        let askQuestions;
        if (randomChoiceQuestions[i].status === 1){
            askQuestions = prompt( `Question ${randomChoiceQuestions[i].question} .`)

            if (randomChoiceQuestions[i].answer === askQuestions.toLowerCase()) {
                userName.points = userName.points + 1
                console.log(`Correct, you have ${userName.points} Point(s).`);
                randomChoiceQuestions[i].status = 0;
            } else if (askQuestions.toLowerCase() === 'pasapalabra'){
                randomChoiceQuestions[i].status = 1;
                console.log('Okay, we will leave this question for another round.')
            }else if (askQuestions.toLowerCase() === 'end'){
                console.log(`Thank you for playing with us. You have guessed ${userName.points} letter(s). And you have ${wrongAnswers} wrong answer(s).`)
                alert('The game is over.');
                break;
            } else if (askQuestions === null || askQuestions.toLowerCase() !== randomChoiceQuestions[i].answer){
                wrongAnswers = wrongAnswers + 1
                randomChoiceQuestions[i].status = 0
                alert(`Wrong!The answer is ${randomChoiceQuestions[i].answer} .`)
            }  
        }
    }

}
const playerslistFunction = () =>{

    let playersList = [
    { name: 'Chewbacca', points: 21 },
    { name: 'Darth', points: 17 },
    { name: 'Luke', points: 10 },
    { name: 'Leia', points: 12 },
    { name: 'Padmé', points: 13 },
    { name: 'Han', points: 11 }
  ];
  playersList.push(userName); 
  playersList.sort(function (a, b) {
    if (a.points < b.points) {
      return 1;
    }
    if (a.points > b.points) {
      return -1;
    }
    return 0;
  });
  console.log(playersList);
}


function pasapalabraEntire(){
pasapalabraGame();
alert('The first round is over. Please prepare for the next round.')
 for (let i = 0; i < randomChoiceQuestions.length; i ++){
    if (randomChoiceQuestions[i].status === 1) {
         nextRound();
        }
    }

alert('There are no more questions. Now you can see the rankings.')  
playerslistFunction();
}

pasapalabraEntire();

if (confirm("Would you like to play again?") == true) {
    pasapalabraEntire();
  } else {
    console.log("Bye!")
  }
