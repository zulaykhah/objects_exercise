// Question 1

function InstagramPost(handleOfAuthor,content,imageLink,numberOfViews,numberOfLikes) {
    this.handleOfAuthor = handleOfAuthor;
    this.content = content;
    this.imageLink = imageLink;
    this.numberOfViews = numberOfViews;
    this.numberOfLikes = numberOfLikes;
}

// Question 2

const ankaraLegendary = new InstagramPost('ankara_legendary', 'Me when am on diet', 'https://www.instagram.com/reel/Co9eA04jGBO/?utm_source=ig_web_copy_link',325, 80);
const bbcNewsYoruba = new InstagramPost('bbcnewsyoruba','kekere ni mo fi ba lagbaja tan','https://www.instagram.com/p/Co6ZH2FDw5p/?utm_source=ig_web_copy_link',325,125);

console.log(ankaraLegendary);
console.log(bbcNewsYoruba);

// Question 3

function createPerson(name, age, location) {
    return {
        name: name,
        age: age,
        location: location,
    };
}
const musa = createPerson('Musa', 19, 'From Lekki,Lagos State');
console.log(musa);

function createJambScores(eng, govt, lit, crk) {
    return {
        eng: eng,
        govt: govt,
        lit: lit,
        crk: crk,
    };
}
const musaJambScores = createJambScores(70, 85, 82, 94);
console.log(musaJambScores);

//  Add the object as a property to Musa object you created above in (a) above
createPerson.eng = 70;
createPerson.govt = 85;
createPerson.lit = 82;
createPerson.crk = 94;
console.log(createPerson);

// Question 4
// 1. Using Object.assign()
// example
const firstPen = {
    make: 'maker',
    color: 'blue',
    price: 200,
}
const secondPen = Object.assign({}, firstPen);
secondPen.make = 'permanent maker';
console.log(firstPen);
console.log(secondPen);

// 2. Using spread syntax ...
// example
const thirdPen = {...firstPen}
thirdPen.make = 'ballpoint pen';
console.log(thirdPen);

// Question 5
const presidentialCandidates = {
   AAC: 'Omoyele Sowore',
   ACCORD: 'Christopher Imumolen',
   APC: 'Bola Ahmed Tinubu',
   LP: 'Peter Obi',
   NNPP: 'Rabiu Kwankwaso',
   PDP: 'Atiku Abubakar',
};

for (const key in presidentialCandidates) {
    
    console.log(`${presidentialCandidates[key]} is the presidential canditate of ${key}`);
}






