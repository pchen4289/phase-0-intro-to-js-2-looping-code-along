// Code your solutions in this file
const recipients = ["Guadalupe","Ollie","Aki"];
const event = 'surprise';
function writeCards(recipients, event) {
    let thankYouLetters = []
    for (let i = 0; i < recipients.length; i++) {
    thankYouLetters.push(`Thank you, ${recipients[i]}, for the wonderful ${event} gift!`);
    }
return thankYouLetters;
}

function countDown(numbers){
while (numbers >= 0){
    console.log(numbers);
    numbers--;}
}
