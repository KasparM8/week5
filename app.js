const userChoiceMenu = document.querySelector("#userChoice");
const playBtn = document.querySelector ('#playBtn');
const output = document.querySelector ('#output');





playBtn.addEventListener('click', () => {

    // 1 - kivi 2- paber 3 - kaarid

    const randomNum = Math.floor(Math.random() * 3) + 1 
    

    let cpuChoice = '';
    

    switch(randomNum) {

        case 1:
            cpuChoice = 'rock';
            break;

            case 2: 
            cpuChoice = 'paper';
            break;

            case 3:
                cpuChoice = 'scissors'
                break;
                
                default:
                    cpuChoice = 'rock';
                    break;



    }

    console.log(`cpuChoice: ${cpuChoice}`);

    const userChoice = userChoiceMenu.value;
    if(cpuChoice === userChoice) {

        output.innerHTML = `Tulemus on viik! Sina ja arvuti tegite sama valiku.`;
    } else if (cpuChoice === 'rock' && userChoice === 'paper') {

     output.innerHTML = 'Palju õnne, sa võitsid! Arvuti valis kivi. Paber katab kivi.';

    } else if (cpuChoice === 'rock' && userChoice === 'scissors') {

     output.innerHTML = 'Kahjuks sa kaotasid! Arvuti valis kivi. Kivi nürib kääre.';

    } else if (cpuChoice === 'paper' && userChoice === 'rock') {
     output.innerHTML = 'Kahjuks sa kaotasid! Arvuti valis paberi. Paber katab kivi.'; 

    }else if (cpuChoice === 'paper' && userChoice === 'scissors') {
 
     output.innerHTML = 'Palju õnne, sa võitsid! Arvuti valis paberi. Käärid lõikavad paberit.'; 
    
    }else if (cpuChoice === 'scissors' && userChoice === 'paper') {
     output.innerHTML = 'Kahjuks sa kaotasid! Arvuti valis käärid. Käärid lõikavad paberit.';

    }else if (cpuChoice === 'scissors' && userChoice === 'rock') {
     output.innerHTML = 'Palju õnne, sa võitsid! Arvuti valis käärid. Kivi nürib käärid.'; 
     }





});