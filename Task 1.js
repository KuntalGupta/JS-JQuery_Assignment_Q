//-------------------------------------------QUESTION1:----------------------------------------------------


// Given below is the speech to text output of a Call center conversation, in the paragraph
// format
// Task 1:- Extract the sentences from this paragraph and display only those which contain more than 3 words in it, along with the sentence
// number. 


// `Thank you so much for contacting us. Dreamland guest relations. You're speaking with Ronaldo. May I have your name, please? Yes, sure. My name is robin soleimani. What is your
// phone number? It is 9876535362 as mentioned in the book Diary. Thank you so much for providing the info!`

// Mask the personal vital data from the sentences ( if it is present) i.e replace the ‘9876535362’ with ‘XXXXXXXXXX’

//  Expected o/p:
// Thank you so much for contacting us.
// You're speaking with Ronaldo.
// May I have your name, please?
// My name is robin soleimani.
// What is your phone number?
// It is ‘XXXXXXXXXX’ as mentioned in the book
// Diary
// Thank you so much for providing the info!



const paragraph = `Thank you so much for contacting us. Dreamland guest relations. You're speaking with Ronaldo. May I have your name, please? Yes, sure. My name is robin soleimani. What is your phone number? It is 9876535362 as mentioned in the book Diary. Thank you so much for providing the info!`;
const lines = paragraph.match(/[^\.!\?]+[\.!\?]+/g);

let c = 1;

for (var line of lines){
    if (line.split(' ').length > 4){
        var finalarray = `${c}. ${line.replace(/[6-9]\d{9}/g, 'XXXXXXXXXX').trim()}`;
        console.log(finalarray);
        c++;
    }
}

//---------------------------------------------------------------------------------------------------------