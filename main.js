function recognize(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/qmoAXAs9l/model.json", modelLoaded);
}

function modelLoaded(){
    classifier.classify(gotResults);
}

function gotResults(error, results){
    if(error){
        console.error(error);
    }else{
        console.log(results);


        random_r=Math.floor(Math.random()*225)+1;
        random_g=Math.floor(Math.random()*225)+1;
        random_b=Math.floor(Math.random()*225)+1;

        document.getElementById("Confident").innerHTML='Accuracy-'+(results[0].confidence*100).toFixed(2)+"%";
        document.getElementById("Sound").innerHTML='I can hear-'+results[0].label;
        document.getElementById("Confident").style.color="rgb("+random_r+","+random_g+","+random_b+")";
        document.getElementById("Sound").style.color="rgb("+random_r+","+random_g+","+random_b+")";

        img=document.getElementById("character1-removebg-preview.png");
        img1=document.getElementById("Character2-removebg-preview.png");
        img2=documnet.getElementById("character3-removebg-preview.png");
        img3=document.getElementById("Character4-removebg-preview.png");

        if(results[0].label=="clap"){
        img.src="character1gif-unscreen.gif";
        img1.src="Character2-removebg-preview.png";
        img2.src="character3-removebg-preview.png";
        img3.src="Character4-removebg-preview.png";
        }else if(results[0].label=="bell"){

        img.src="character1-removebg-preview.png";
        img1.src="Character2gif-unscreen.gif";
        img2.src="character3-removebg-preview.png";
        img3.src="Character4-removebg-preview.png";
        }

        else if(results[0].label=="Background Noise"){

            img.src="character1-removebg-preview.png";
            img1.src="Character2-removebg-preview.png";
            img2.src="character3gif-unscreen.gif";
            img3.src="Character4-removebg-preview.png";
            }else if(results[0].label=="bark"){

                img.src="character1-removebg-preview.png";
                img1.src="Character2-removebg-preview.png";
                img2.src="character3-removebg-preview.png";
                img3.src="character4gif-unscreen.gif";
            }else{
                img.src="character1-removebg-preview.png";
                img1.src="Character2-removebg-preview.png";
                img2.src="character3-removebg-preview.png";
                img3.src="Character4-removebg-preview.png";

            }

    }
}