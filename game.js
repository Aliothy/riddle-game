// they have to be 24 riddles
const riddles = [
    { riddle: "Per il primo gioco partiamo da qualcosa di semplice, voglio che tu ti affaccia dal pogiolo di casa e guardi il panorama, bello vero? Bhe un giorno potrebbe esserci qualcosa ad ostacolarlo, qualcosa che vi salva dall'esondazione dell'Adige.... cosa?", password: "vallotomo" },
    { riddle: "Sei uscita di casa?? Spero di sì, comunque siamo in via Valdiriva direzione centro, ad un certo punto vediamo un paletto blu della ciclabile con un numero sopra... quale?", password: "51" },
    { riddle: "Vai di fretta?? Goditi il panorama un attimo... come non detto, va bhe... \n sei davanti alla carrozzeria De Maio, qual è l'unico nome che non ho elencato tra quelli sul tabellone? ", password: "sikkens" },
    { riddle: "Siamo arrivati all'incrocio con lo STOP e come tutti gli incroci hai due strade davanti, destra o sinistra? \n Per scoprirlo dimmi il nome dell'edificio che si trova davanti a te ", password: "ecosystem" },
    { riddle: "Siamo ad un altro incrocio e di nuovo, destra o sinistra? Stavolta voglio farti un indovinello...Trenta bianchi cavalli su un colle rosso, mordono e battono, ma nessuno si è mosso. Cosa sono?", password: "denti" },
    { riddle: "La strada è lunga prima del prossimo incrocio quindi ti devo tenere compagnia.. facciamolo con un altro indovinello: \n Passa ma non saluta mai.. cos'è?", password: "tempo" },
    { riddle: "Sei arrivata alle striscie? Eh attraversa dai, mi devi dire il nome della via in cui camminerai, non pensavi mica che ti facessi camminare in tangenziale", password: "parteli" },
    { riddle: "Un altro incrocio?? E menomale che Rovereto aveva solo due corsi... tra l'altro come si chiama quello più piccolo dei due", password: "bettini" },
    { riddle: "Stavolta rotonda, tutta un'altra cosa...ma dove andremo adesso? Comunque ora ti chiedo... prima il loro numero era lo stesso della tua età attuale, ma dal 2006 sono uno in meno, cosa sono? (Suggerimento: vivi in uno di questi)", password: "pianeti" },
    { riddle: "Sei arrivata all'ITAS? Spero di sì, se no muoviti amore su! Adesso dimmi il nome della tua migliore amica e io forse ti dirò dove andare (Ricorda quanti anni hai in questo momento...) ", password: "nadege" },
    { riddle: "E adesso che si fa? Bhe, si va verso la pasticceria con un nome buonissimo! Quale?", password: "chantilly" },
    { riddle: "E siamo all'incrocio della palestra, più o meno quando hai iniziato tu no? Sui 12 anni... credo... comunque quanti ricordi... il tuo sport.. com'è che chiamavate la tua amica di lotta? Quella che adesso fa le foto a Svaicari??", password: "marra" },
    { riddle: "Te lo ricordi il parco alla tua destra? Ti ricordi chi abbiamo incontrato?", password: "anzaldi" },
    { riddle: "Bene, ti sta piacendo il giro? te la ricordavi così la tua città?\n Rimaniamo sui giardini, a chi sono intitolati?", password: "perlasca" },
    { riddle: "E siamo arrivati al MART! Il gioiello di Rovereto, entra e fatti un giro sotto la cupola...\n ti ricordi per quale esame abbiamo studiato qui?", password: "maturità" },
    { riddle: "E qui alla tua destra la celeberrima Università di Rovereto, cos'è che insegnano? Scienze?", password: "cognitive" },
    { riddle: "17! Finalmente! Avevi quest'età quando ci siamo conosciuti... e il fatto che io debba scrivere altri 8 indovinelli mi fa commuovere...\n ti ricordi i dolci che mi avevi fatto alla mia prima visita? (l'ho messo in dialetto trentino, plurale)", password: "spumini" },
    { riddle: "Piazza Rosmini! Che bellezza! Ti ricordi quando siamo andati lì al cinema, com'è che si chiama già?", password: "supercinema" },
    { riddle: "Un altro classico della cucina roveretana, la cotoletta, e chi la fa meglio del ...", password: "christian" },
    { riddle: "C'è un tipo in mezzo alla piazza, com'è già il suo nome in greco?", password: "poseidone" },
    { riddle: "Andiamo in via Rialto! Ti ricordi che una volta avevano appeso tantissimi .... tutti colorati", password: "ombrelli" },
    { riddle: "Il centro dei mercatini di Natale di Rovereto, la senti già l'aria natalizia... ripensandoci come si chiamano gli aiutanti di babbo natale??", password: "elfi" },
    { riddle: "Sei arrivata al mortaio? Li vicino ci sono una serie di nomi, uno ha il tuo cognome.. e il suo nome?", password: "remo" },
    { riddle: "Com'è che si chiama questo ponte??", password: "forbato" },
    // Add more riddles as needed
];

// just 23 explanations
const explanations = [
    { explanation: "Ma questa era facile dai, volevo solo cogliere l'occasione per iniziare dando uno sguardo alla valle... bene, ora mettiti le scarpe e copriti bene che si esce!" },
    { explanation: "Perfetto! Anche questa era facile ma era per scaldarci un attimo, nel frattempo continuiamo lungo la ciclabile, il nostro giro è appena cominciato..." },
    { explanation: "Starai dicendo, che noioso questo gioco, sono tutte facili, va bene... ma ci stiamo solo scaldando, poi so che ti stai già lamentando per il freddo... comunque torniamo a noi, continuiamo dritto, c'è tanto altro da scoprire" },
    { explanation: "Ma allora stai veramente giocando! Comunque prendiamo la strada a destra, l'altra è un po' troppo pericolosa e continuiamo a passeggiare... sempre dritto!!"},
    { explanation: "Probabilmente penserai che io sia impazzito, però questo gioco vuole essere anche un ricordo di alcuni momenti importanti della tua vita, a 5 anni per esempio iniziano a cadere i denti da latte e arriva il topolino per riempirti di soldi.... \n comunque continuiamo su via San Giorgio, direzione centro" },
    { explanation: "Carina questa vero? Comunque il tempo passa e tu non hai più 6 anni, sei cresciuta da quella bambina che faceva ginnastica artistica e guarda cosa sei diventata adesso!! Continua a camminare però!!"},
    { explanation: "Vabbè un'altra facile, ma il gioco è ancora lungo non ti preoccupare, ne hai tempo per bloccarti... continua dritto!" },
    { explanation: "Giriamo di nuovo a destra, hai 24 anni alla fine... me lo fai fare bello lungo questo gioco, quindi ti meriti una lunga passeggiata" },
    { explanation: "Ma sei anche un'esperta astronoma?? Comunque, continua su via Parteli, gira tutto a sinistra! E avanti!" },
    { explanation: "Brava, hai ancora 10 anni in questo momento! Comunque, continua dritto, non ti fermare!" },
    { explanation: "Ma quanto sono buoni gli chantilly! Me ne mangerei un vassoio adesso... \n non cincischiare!! Prosegui dritto!" },
    { explanation: "Bella questa eh! Comunque, prosegui prosegui, che in palestra ci vai sempre!"},
    { explanation: "Che robe guarda, uno non li vede mai e poi li becca a Rovereto! Comunque gira a destra va!" },
    { explanation: "Starai pensando: ma come fa a ricordarsi tutte queste cose? Ehhh mica scemo io, so tutto!! Comunque prosegui dritto ma non correre!" },
    { explanation: "Il primo vero esame della nostra vita, che ricordi... prosegui dritto su Corso Bettini amore, e se sei stanca, ricorda che non sono io che ho deciso di compiere 24 anni..." },
    { explanation: "Avresti dovuto scrivere 'delle merendine', ma cognitive va bene lo stesso... prosegui dritto!" },
    { explanation: "Quanti ricordi... che vergogna... che piccoli che eravamo... vabbè vai in piazza Rosmini amore mio" },
    { explanation: "Che spettacolo il supercinema!! Comunque continua su via Orefici!" },
    { explanation: "Ti fa anche la faccina sopra! Che uomo!! Prosegui dritto che andiamo al centro storico!" },
    { explanation: "Eccolo lì in tutta la sua bellezza, intanto ti ricordi dov'eri a vent'anni con il Covid che ci bloccava e ci separava? Ma abbiamo superato anche quella..." },
    { explanation: "Proprio come una capitale europea.... andiamo in piazza delle erbe... ci siamo quasi" },
    { explanation: "Gli elfi! Peccato che i mercatini non sono ancora aperti, sarebbe stato carino passarci in mezzo... comunque continua dritto fino al mortaio!"},
    { explanation: "Ci siamo quasi amore mio, ultimo sforzo... vai sul ponte del Leno" },
    // Add more explanations as needed
];

let currentLevel = 0;

// Load saved progress if available
function loadProgress() {
    const savedLevel = localStorage.getItem('currentLevel');
    if (savedLevel !== null) {
        currentLevel = parseInt(savedLevel, 10); // Convert savedLevel to an integer
    }
}

// Save current progress
function saveProgress() {
    localStorage.setItem('currentLevel', currentLevel);
}

function startGame() {
    // Hide the start screen and show the game screen
    document.getElementById('start-screen').style.display = 'none';
    document.getElementById('game-screen').style.display = 'block';

    // Display the first riddle
    displayRiddle();
}

function checkAccess() {
    const code = document.getElementById("access-code").value;
    const correctCode = "03022018";  // Replace with your actual secret code
    if (code === correctCode) {
        document.getElementById("access-screen").style.display = "none";
        document.getElementById("start-screen").style.display = "block";
    } else {
        document.getElementById("access-message").innerText = "Incorrect code, please try again.";
    }
}

function keepPlaying() {
    // Hide the start screen and show the game screen
    document.getElementById('explanation-screen').style.display = 'none';
    document.getElementById('game-screen').style.display = 'block';

    // Display the next riddle
    displayRiddle();
    document.getElementById('password').value = '';
}

function displayRiddle() {
    document.getElementById('riddle-title').innerText = " Indovinello " + (currentLevel + 1);
    document.getElementById('riddle').innerText = riddles[currentLevel].riddle;
}

function displayExplanation() {
    document.getElementById('game-screen').style.display = 'none';
    document.getElementById('explanation-screen').style.display = 'block';
    
    document.getElementById('explanation').innerText = explanations[currentLevel - 1].explanation;
    
}

function checkAnswer() {
    const userAnswer = document.getElementById('password').value.trim().toLowerCase();
    const feedback = document.getElementById('feedback');

    if (userAnswer === riddles[currentLevel].password) {
        currentLevel++;
        saveProgress();
        feedback.innerText = '';
        if (currentLevel < riddles.length) {
            displayExplanation();
            
        } else {
            // Hide the game screen and show the end screen
            document.getElementById('game-screen').style.display = 'none';
            document.getElementById('end-screen').style.display = 'block';
            localStorage.removeItem('currentLevel'); // Clear progress when game is complete
        }
    } else {
        feedback.innerText = 'No amore... è sbagliato... riprova!🔄';
    }
}

// Load progress when the page loads
window.onload = function () {
    loadProgress();
    if (currentLevel >= riddles.length) {
        // If the user had finished all riddles, show the end screen
        document.getElementById('start-screen').style.display = 'none';
        document.getElementById('game-screen').style.display = 'none';
        document.getElementById('end-screen').style.display = 'block';
    } else {
        // Show the start screen as usual
        displayRiddle();
    }
};