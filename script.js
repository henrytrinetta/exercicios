const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const cloud = document.querySelector('.cloud');
const chao = document.querySelector('.chao'); 

const gameOver = document.querySelector('.game-over');
const restartButton = document.querySelector('.restart');
var pontos = document.getElementById('dpontos');

const imagens = [
    'assets/imgs/pipe.png',
    'assets/imgs/pipecor.jpg',
    'assets/imgs/pipepalmeiras.png',
    'assets/imgs/pipesaopaulo.png'
];

// Função para mudar a imagem ao reiniciar a animação
pipe.addEventListener('animationiteration', () => {
    const indiceAleatorio = Math.floor(Math.random() * imagens.length);
    pipe.src = imagens[indiceAleatorio];
});


const jump = () => {

    mario.classList.add('jump');

    setTimeout(() => {

        mario.classList.remove('jump');

    }, 500);
}

const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft;
    
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    const cloudPosition = +window.getComputedStyle(cloud).left.replace('px', '');
    const chaoPosition = +window.getComputedStyle(chao).left.replace('px', '');

    if (pipePosition <= 90 && pipePosition > 0 && marioPosition < 60) {

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = 'assets/imgs/game-over.png';
        mario.style.width = '70px';
        mario.style.marginLeft = '35px';

        cloud.style.animation = 'cloud 20s infinite linear';
        cloud.style.left = `${cloudPosition}px`;

        chao.style.animation = 'none';

        gameOver.style.visibility = 'visible';

        clearInterval(loop);
    }
}, 10);

const restart = () => {
    

    gameOver.style.visibility = 'hidden';
    
    pipePosition = pipe.offsetLeft;
    pipe.style.animation = 'pipe-animations 1.5s infinite linear';
    pipe.style.left = ``;
    
    

    chao.style.animation =  'chao-animation 0.7s linear infinite';

    mario.src = 'assets/imgs/mario.gif';
    mario.style.width = '100px';
    mario.style.bottom = '0px';
    mario.style.marginLeft = '';
    mario.style.animation = '';

    cloud.style.left = ``;

    if (gameOver.style.visibility !== 'visible') {
        i = 0; // Inicialize i com zero
        const interval = setInterval(() => {
            i += 10;
            if(i > 100000000){
                pontos.style.width = '400px';
            }
            document.getElementById('dpontos').textContent = ' PONTOS: ' + i;
            if (gameOver.style.visibility === 'visible') {
                clearInterval(interval); // Pare o loop quando o gameOver é visível
                
            }
        }, 200);
    }


    const loop = setInterval(() => {

        const pipePosition = pipe.offsetLeft;
        const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
        const cloudPosition = +window.getComputedStyle(cloud).left.replace('px', '');
        

        
        
    
        if (pipePosition <= 100 && pipePosition > 0 && marioPosition < 60) {

            
    
            pipe.style.animation = 'none';
            pipe.style.left = `${pipePosition}px`;
    
            mario.style.animation = 'none';
            mario.style.bottom = `${marioPosition}px`;


          
                const imagemAtual = pipe.src;
            
                if (imagemAtual.includes('pipe.png')) {
                    mario.src = 'assets/imgs/game-over.png';
                } if (imagemAtual.includes('pipecor.jpg')) {
                    mario.src = 'assets/imgs/maeocor.jpeg';
                } if (imagemAtual.includes('pipepalmeiras.png')) {
                    mario.src = 'assets/imgs/gameopal.webp';
                } if (imagemAtual.includes('pipesaopaulo.png')) {
                    mario.src = 'assets/imgs/gamesao.webp';
                    
                } 
            
    
           
            mario.style.width = '70px';
            mario.style.marginLeft = '35px';
    
            cloud.style.animation = 'cloud 20s infinite linear';
            cloud.style.left = `${cloudPosition}px`;

            chao.style.animation = 'none';

            gameOver.style.visibility = 'visible';
            
            
    
            clearInterval(loop);
        }
    }, 10);
    if (gameOver.style.visibility !== 'visible') {
        i = 0; // Inicialize i com zero
        const interval = setInterval(() => {
            i += 10;
          
            if(i == 100){
                pipe.style.animation = 'pipe-animations 1.45s infinite linear';
                chao.style.animation = 'chao-animation 0.66s linear infinite';
                
               

            }
            if(i === 900){
                pipe.style.animation = 'none';
                
            }
            if(i >= 1000){
                pipe.style.animation = 'pipe-animations 1.25s infinite linear';
                chao.style.animation = 'chao-animation 0.66s linear infinite';

            }
            if(i === 9800){
                pipe.style.animation = 'none';
                
            }
            if(i >= 10000){
                pipe.style.animation = 'pipe-animations 1s infinite linear';
                chao.style.animation = 'chao-animation 0.55s linear infinite';
            }
            if(i === 99500){
                pipe.style.animation = 'none';
                
            }
            if(i >= 100000){
                pipe.style.animation = 'pipe-animations 0.8s infinite linear';
                chao.style.animation = 'chao-animation 0.46s linear infinite';
            }
            if(i === 999000){
                pipe.style.animation = 'none';
                
            }
            if(i >= 1000000){
                pipe.style.animation = 'pipe-animations 0.7s infinite linear';
                chao.style.animation = 'chao-animation 0.40s linear infinite';
            }
            if(i === 9999000){
                pipe.style.animation = 'none';
                
            }
            if(i >= 10000000){
                pipe.style.animation = 'pipe-animations 0.6s infinite linear';
                chao.style.animation = 'chao-animation 0.36s linear infinite';
            }
            if(i === 99999000){
                pipe.style.animation = 'none';
                
            }
            if(i >= 100000000){
                pipe.style.animation = 'pipe-animations 0.5s infinite linear';
                chao.style.animation = 'chao-animation 0.30s linear infinite';
            }
            if(i === 99999900){
                pipe.style.animation = 'none';
                
            }
            if(i >= 1000000000){
                pipe.style.animation = 'pipe-animations 0.4s infinite linear';
                chao.style.animation = 'chao-animation 0.16s linear infinite';
            }
            if(i === 9999999000){
                pipe.style.animation = 'none';
                
            }
            if(i >= 10000000000){
                pipe.style.animation = 'pipe-animations 0.3s infinite linear';
                chao.style.animation = 'chao-animation 0.10s linear infinite';
            }
            if(i > 100000000){
                pontos.style.width = '400px';
            }
            document.getElementById('dpontos').textContent = ' PONTOS: ' + i;
            if (gameOver.style.visibility === 'visible') {
                clearInterval(interval); // Pare o loop quando o gameOver é visível
            }
        }, 200);
    }
}

document.addEventListener('keydown', jump);
document.addEventListener('touchstart', jump);

restartButton.addEventListener('click', restart);

    
        if (gameOver.style.visibility !== 'visible') {
            i = 0; // Inicialize i com zero
            const interval = setInterval(() => {
                i += 10;
                if(i === 90){
                    pipe.style.animation = 'none';
                    
                    
                }
                if(i >= 100){
                    pipe.style.animation = 'pipe-animations 1.45s infinite linear';
                    chao.style.animation = 'chao-animation 0.66s linear infinite';

                }
                
                if(i === 900){
                    pipe.style.animation = 'none';
                    
                }
                if(i >= 1000){
                    pipe.style.animation = 'pipe-animations 1.25s infinite linear';
                    chao.style.animation = 'chao-animation 0.66s linear infinite';

                }
                if(i === 9800){
                    pipe.style.animation = 'none';
                    
                }
                if(i >= 10000){
                    pipe.style.animation = 'pipe-animations 1s infinite linear';
                    chao.style.animation = 'chao-animation 0.55s linear infinite';
                }
                if(i === 99500){
                    pipe.style.animation = 'none';
                    
                }
                if(i >= 100000){
                    pipe.style.animation = 'pipe-animations 0.8s infinite linear';
                    chao.style.animation = 'chao-animation 0.46s linear infinite';
                }
                if(i === 999000){
                    pipe.style.animation = 'none';
                    
                }
                if(i >= 1000000){
                    pipe.style.animation = 'pipe-animations 0.7s infinite linear';
                    chao.style.animation = 'chao-animation 0.40s linear infinite';
                }
                if(i === 9999000){
                    pipe.style.animation = 'none';
                    
                }
                if(i >= 10000000){
                    pipe.style.animation = 'pipe-animations 0.6s infinite linear';
                    chao.style.animation = 'chao-animation 0.36s linear infinite';
                }
                if(i === 99999000){
                    pipe.style.animation = 'none';
                    
                }
                if(i >= 100000000){
                    pipe.style.animation = 'pipe-animations 0.5s infinite linear';
                    chao.style.animation = 'chao-animation 0.30s linear infinite';
                }
                if(i === 99999900){
                    pipe.style.animation = 'none';
                    
                }
                if(i >= 1000000000){
                    pipe.style.animation = 'pipe-animations 0.4s infinite linear';
                    chao.style.animation = 'chao-animation 0.16s linear infinite';
                }
                if(i === 9999999000){
                    pipe.style.animation = 'none';
                    
                }
                if(i >= 10000000000){
                    pipe.style.animation = 'pipe-animations 0.3s infinite linear';
                    chao.style.animation = 'chao-animation 0.10s linear infinite';
                }
                if(i > 100000000){
                    pontos.style.width = '400px';
                }
                document.getElementById('dpontos').textContent = ' PONTOS: ' + i;
                if (gameOver.style.visibility === 'visible') {
                    clearInterval(interval); // Pare o loop quando o gameOver é visível
                }
            }, 200);
        }
    
        

document.getElementById("restartButton").addEventListener("click", function() {
    this.classList.add("clicked");

    setTimeout(() => {
        this.classList.remove("clicked");
    }, 1000);
    
});

