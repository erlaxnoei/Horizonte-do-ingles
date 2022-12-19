//definindo variáveis
var Xbuttons=209, Xbuttonsize=200, Ybuttonsize=50;
var Yplay=170, Yinstructions=230, Ycredits=290;
var personX=300, personY=360
var img_menu;
var tela = 0;
var countdownEffect = 6.28
var words = ['absolutely', 'absolute', 'accept', 'accident', 'academic', 'acess', 'adult', 'advanced','advantage','adventure', 'carry', 'cash', 'cat', 'carefully', 'carefull', 'celebrity', 'crisis', 'creature','funny', 'fun', 'future', 'health', 'healthy', 'hear', 'hearing', 'message', 'massage', 'method', 'milk', 'mine']
var palavras = ['absolutamente', 'absoluto', 'aceitar', 'acidente', 'acadêmico', 'acessar', 'adulto', 'avançado','vantagem','aventura', 'carregar', 'dinheiro', 'gato', 'cuidadoso', 'cuidado', 'celebridade', 'crise', 'criatura', 'engraçado', 'divertido', 'futuro', 'saúde', 'saudável', 'escutar', 'audição', 'mensagem', 'massagem', 'método', 'leite', 'meu']
var quantasPalavras = parseInt(words.length);
var game = parseInt(0)
var once = 0
var life = 3
var life1 = life
var count = 0
var doorsY = 30
var countdown = 5
var movement=0
var bracoL = 0;
var bracoR = 0;
var xcreditsBar = 50;
var rollUp=400

//braços do personagem


//definindo a função para o upload do arquivo de mídia antes que a função setup seja realizada
function preload(){
img_menu = loadImage("img_game_menu.png")
img_game = loadImage("horizon-img.jpg")
img_instrucao=loadImage("intrucao_img.png")
}

//definindo tamanho inicial como tamanho de tela
function setup() {
  createCanvas(600, 400);
  frameRate(60);
}

function draw(){
  if(tela===0){
    //computando aleatoriedade antecipadamente par o inicio do jogo
    countdown=5;
    background(img_menu);
    rectMode(CORNER)
    //Título
    textSize(30);
    textStyle(ITALIC);
    textAlign(LEFT);
    fill(0,0,0);
    noStroke()
    text("Horizonte",209,80);
    text("do",290,120);
    text("Inglês",330,150);
    console.log(quantasPalavras+ " palavras nos vetores words e palavras")


    //Botão PLAY ou JOGAR com mudança de cor e tamanho
    stroke(0)
    if((mouseX>Xbuttons && mouseX<Xbuttons+Xbuttonsize) && (mouseY>Yplay && mouseY<Yplay+Ybuttonsize)){
      fill(0,200,255,255)
      rect(Xbuttons-4,Yplay-3,Xbuttonsize+8,Ybuttonsize+6,10)
      if(mouseIsPressed){
        tela=1;
      }
    }
    else{
      fill(221,221,221,255)
      rect(Xbuttons,Yplay,Xbuttonsize,Ybuttonsize,10)
    }


    //Botão OPTIONS ou OPÇÕES com mudança de cor e tamanho
    if((mouseX>Xbuttons && mouseX<Xbuttons+Xbuttonsize) && (mouseY>Yinstructions && mouseY<Yinstructions+Ybuttonsize)){
      fill(0,200,255,255)
      rect(Xbuttons-4,Yinstructions-3,Xbuttonsize+8,Ybuttonsize+6,10)
      if(mouseIsPressed){
        tela=2;
      }
    }
    else{
      fill(221,221,221,255)
      rect(Xbuttons,Yinstructions,Xbuttonsize,Ybuttonsize,10)
    }


    //Botão CREDITS ou CRÉDITOS com mudança de cor
    if((mouseX>Xbuttons && mouseX<Xbuttons+Xbuttonsize) && (mouseY>Ycredits && mouseY<Ycredits+Ybuttonsize)){
      fill(0,200,255,255)
      rect(Xbuttons-4,Ycredits-3,Xbuttonsize+8,Ybuttonsize+6,10)
      if(mouseIsPressed){
        tela=3;
      }
    }
    else{
      fill(221,221,221,255)
      rect(Xbuttons,Ycredits,Xbuttonsize,Ybuttonsize,10)
    }


    //palavras escritas nos botões
    textSize(25);
    textStyle(NORMAL);
    textAlign(CENTER);
    fill(0,0,0);
    noStroke()
    text("JOGAR",309,205);
    text("INSTRUÇÕES",309,264);
    text("CRÉDITOS",309,324);

    //cursor do mouse que possui mudança de cor quando clicado
    stroke(0)
    if(mouseIsPressed){
      fill(0,255,50)
    }
    else{fill(255,255,255)}
    ellipse(mouseX, mouseY, 10, 10);
  }
  //--------------------------------------------------------------------
  
  
  
  
  
  
  
  //--------------------------------------------------------------------
  //Tela de jogo
  if(tela==1){
    background(img_game)
    
    //contagem regressiva para inicio do jogo
    if(frameCount%60===0 && countdown>0){
      countdown--
    }
    //controlador para a que a tela de contagem seja substituida apos a contagem acabar
    if(countdown!==0){
      
      frameRate(60)
      noFill(0)
      strokeWeight(4)
      stroke(0)
      arc(300,180,100,100,0,countdownEffect)
      countdownEffect=countdownEffect-0.023
      strokeWeight(1)
      fill(200,80,180)
      noStroke()
      textSize(70)
      text(countdown, 300,205)
      //instrução rápida
      textAlign(CENTER)
      textSize(20)
      fill(0,0,0)
      noStroke()
      text("use WASD para se movimentar",300,390)
    }
    
    //quando o contador desaparecer, os elementos do jogo irão aparecer e o jogo começará
    if(countdown===0){
      //tela de ação de jogo
      rectMode(CENTER);
      fill(200);
      rect(300,200,500,500)
      
      //personagem
      //braços
      if(bracoL>-18 && movement===0){
        bracoL--
        bracoR++
      }
      else{movement=1}
      if(bracoL<15 && movement==1){
        bracoL++
        bracoR--
      }
      else{movement=0}
      rectMode(CENTER)
      stroke(0)
      fill(219,167,116);
      rect(personX-36,personY+bracoL,25,30,15);
      rect(personX+36,personY+bracoR,25,30,15);
      
      //pernas
      fill(0,0,0)
      rect(personX-15,personY+bracoR,25,40,15);
      rect(personX+15,personY+bracoL,25,40,15);
      
      //peito e cabeça com cabelo
      rectMode(CENTER);
      fill(200,80,180);
      rect(personX,personY,100,30,15);
      fill(219,167,116);
      ellipse(personX,personY,40);
      fill(109,53,26);
      ellipse(personX,personY,30);
      arc(personX,personY,40,40,0-QUARTER_PI,PI+QUARTER_PI);
      
      //recebimento de teclas apertadas
      if(keyIsDown(65) && (keyCode!=87||keyIsDown(83)==false) && personX>100){
        personX=personX-2
      }
      if(keyIsDown(68) && (keyCode!=87||keyCode!=83) && personX<500){
        personX=personX+2
      }
      if(keyIsDown(87) && (keyCode!=65||keyCode!=68) && personY>20){
        personY=personY-2
      }
      if(keyIsDown(83) && (keyCode!=65||keyCode!=68) && personY<380){
        personY=personY+2
      }
      
      //portas e interação com o personagem
      //computando aleatoriedade de palavras e suas posições antes de uma nova coluna de "portas" ser criada
      if(game===0){
        doorsY = 30
        if(once===0){
          r=parseInt(random(0,quantasPalavras-1));
          r1=r;
          r=words[r];
          r1=palavras[r1];
          once=once+1;
        }
        pos=parseInt(random(1,4));
        wrongR1=parseInt(random(0,quantasPalavras-1));
        wrongR2=parseInt(random(0,quantasPalavras-1));
        wrongR3=parseInt(random(0,quantasPalavras-1));
        wrongR1=words[wrongR1];
        wrongR2=words[wrongR2];
        wrongR3=words[wrongR3];
        text(r,100,100);
        if(r!=wrongR1 && r!=wrongR2 && r!=wrongR3){
          if(pos==1){
            posDef=110;
            pos1=237;
            pos2=364;
            pos3=490;
            game=1;
          }
          if(pos==2){
            posDef=237;
            pos1=110;
            pos2=364;
            pos3=490;
            game=1;
          }
          if(pos==3){
            posDef=364;
            pos1=110;
            pos2=237;
            pos3=490;
            game=1
          }
          if(pos==4){
            posDef=490;
            pos1=110;
            pos2=237;
            pos3=364;
            game=1;
          }
        }
      }
      //gameplay ativa
      if(game===1){
        life1=life
        doorsY= doorsY+1
        fill(255,100,0);
        rectMode(CENTER);
        rect(110,doorsY,120,15);
        rect(237,doorsY,120,15);
        rect(364,doorsY,120,15);
        rect(490,doorsY,120,15);
        fill(255,41,0);
        text(r,posDef,doorsY-10);
        text(wrongR1,pos1,doorsY-10);
        text(wrongR2,pos2,doorsY-10);
        text(wrongR3,pos3,doorsY-10);
        fill(0,200,255,255);
        noStroke();
        arc(300,0,200,60,0,PI);
        stroke(0);
        fill(0);
        textSize(20);
        text("lifes:"+ life1,520,400);
        text(r1,300,20);
        if(doorsY>400){
          doorsY=30
        }
        if((personX>posDef+59 || personX<posDef-59) && doorsY+30>personY){
          if((personX>posDef+59 || personX<posDef-59) && doorsY+10>personY){
            doorsY=30
            game=0
            once=0
            life=life-1
          }
          fill(255,0,0);
          rect(300,100,40,100,10);
          ellipse(300,180,40);
          text("OUCH",personX+50, personY+50)
        }
        if(personX>posDef-60 && personX<posDef+60 && doorsY+30>personY){
          if(personX>posDef-60 && personX<posDef+60 && doorsY+10>personY){
            doorsY=30
            game=0
            once=0
            count=count+1
          }
          fill(0,255,0);
          rect(300,100,40,100,10);
          ellipse(300,180,40);
          text("NICE",personX+50, personY+50);
        }
        if(life1===0){
          game=2
        }
      }
      //cena de game over
      if(game==2){
        fill(0)
        noStroke()
        textSize(50)
        text("GAME OVER",300,200)
        textSize(20)
        text("acertos: " + count,300,300)
        stroke(0)
        if(mouseX>=200 && mouseX<=400 && mouseY>=220 && mouseY<=260){
          fill(0,200,255,255)
          if(mouseIsPressed){
            tela=4
          }
        }
        else{fill(160,0,0)}
        rect(300,240,200,40)
        fill(0)
        noStroke()
        text("RETRY",300,250)
      }
    }
    
    //botão retornar
    noStroke()
    if((mouseX>2 && mouseX<20)&&(mouseY>2 && mouseY<22)){
        fill(100,0,0)
      if(mouseIsPressed){tela=0}
    }
    else{fill(200,200,200)}
    triangle(2,12,20,2,20,22)
    
    
    //cursor da tela de jogo
    stroke(0)
    if(mouseIsPressed){
      fill(0,255,50)
    }
    else{fill(255,255,255)}
    ellipse(mouseX, mouseY, 10, 10);
  }
  //--------------------------------------------------------------------
  
  
  
  
  
  
  
  //--------------------------------------------------------------------
  //Tela de Instruções
  if(tela==2){
    background(img_instrucao)
    
   //botão retornar
    noStroke()
    if((mouseX>2 && mouseX<20)&&(mouseY>2 && mouseY<22)){
      fill(100,0,0)
      noStroke()
      if(mouseIsPressed){
        tela=0
      }
    }
    else{
      fill(200,200,200)
    }
    triangle(2,12,20,2,20,22)
    
    //cursor da tela de Opções
    stroke(0)
    if(mouseIsPressed){
      fill(0,255,50)
    }
    else{fill(255,255,255)}
    ellipse(mouseX, mouseY, 10, 10);
  }
  //--------------------------------------------------------------------
  
  
  //--------------------------------------------------------------------
  //Tela de Créditos
  if(tela==3){
    background(0)
    
    
    noStroke()
    fill(100,150,0)
    triangle(0,0,xcreditsBar,0, 0,200)
    
    fill(139,0,139)
    triangle(xcreditsBar,0,0,200,xcreditsBar,400)
    
    fill(255,79,0)
    triangle(0,400,xcreditsBar,400, 0,200)
     
    fill(100,150,0)
    triangle(600,0,xcreditsBar +500,0,600,200)
    
    fill(139,0,139)
    triangle(xcreditsBar +500,0,600,200,xcreditsBar +500,400)
    
    fill(255,79,0)
    triangle(600,400,xcreditsBar +500,400, 600,200)
    
    fill(255,255,255)
    textAlign(LEFT)
    textSize(12)
    text("::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::" + "::::::::::::::::::::::::::::::::::::::::::::\n:=======================================================================\n::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::", 50,rollUp);

    
    fill(255,255,255)
    textAlign(LEFT)
    textSize(12)
    text("Imagem de menu CC0 feita por: Pixabay \n postado em : pexels.com \n encontrado no link: https://www.pexels.com/photo/blank-book-pages-desk-green-531844/ \n encontrado na data: 16/11/2022", 60,rollUp + 70)
    
    fill(255,255,255)
    textAlign(LEFT)
    textSize(12)
    text("Imagem de background da tela de jogo CC0 feita por: Pixabay \n postado em : pexels.com \n encontrado no link: https://www.pexels.com/photo/mountain-near-lake-509246/ \n encontrado na data: 17/12/2022", 60,rollUp +140)
    
    fill(255,255,255)
    textAlign(LEFT)
    textSize(12)
    text("Jogo produzido durante as aulas de LOP \n com o auxilio do professor:Orivaldo Vieira de Santana Junior \n feito por aluno: Paulo Alexandre Cruz Carvalho Filho \n data de publicação:19/12/2022", 60,rollUp + 210)
    
    text("::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::" + "::::::::::::::::::::::::::::::::::::::::::::\n=======================================================================:\n::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::", 50,rollUp+280);
    
    //rolagem de créditos
    if(rollUp>-340){
      rollUp=rollUp-0.5
    }
    else{
      rollUp=450
    }
    //botão de retorno ao menu
    noStroke()
    if((mouseX>2 && mouseX<20)&&(mouseY>2 && mouseY<22)){
      fill(100,0,0)
      if(mouseIsPressed){
        tela=0
      }
    }
    else{
      fill(200,200,200)
    }
    triangle(2,12,20,2,20,22)
    
    //cursor da tela de Créditos
    stroke(0)
    if(mouseIsPressed){
      fill(0,255,50)
    }
    else{fill(255,255,255)}
    ellipse(mouseX, mouseY, 10, 10);
  }
  //retorno de game over
  if(tela==4){
    life=3
    life1=3
    count=0
    game=0
    countdown=5
    tela=1
  }
}
