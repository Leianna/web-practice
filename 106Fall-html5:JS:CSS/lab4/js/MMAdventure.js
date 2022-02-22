/*
        MMAdventure.js
*/

/* 
    writeStory()
    
    (1) Accept input from the page.  And convert it to lowercase.
    (2) Based on that input build the next part of the story; change the image; change the audio; change some css values.
    (3) Clear the form input.
    (4) Write the new story to the page.
*/

function writeStory() {

    // ---------------------------------------------------------------
    // (1) Accept input from the page.  And convert it to lowercase.

    // get the form input 
    var choice = document.getElementById('choice').value;

    // convert the input to lowercase 
    choice = choice.toLowerCase();
    //write the value to the console log for debugging
    console.log("choice = " + choice);


    // ---------------------------------------------------------------
    // (2) based on the input, build and change the next step in the story 

    // setup a variable to hold the next step in the story
    var nextStep;

    // ---------------------------------
    // "choice 1" choice
    if (choice == "Aries" || choice == "aries") {

        // set the next step in the story.
        nextStep = "<H2><img src=\"images/Aries.png\" width=40px><font color=#0000CD>Aries: Courage</font></H2><center><img src=\"images/aries1.png\" width=300px><br></center><HR><p><font color=#1E90FF>Every Aries person has the courage to do something in the process of growing up, even if it is not successful, Aries will feel that this matter he did his best to do nothing regret. But when things fail, they leave a big psychological shadow for Aries. Until one day, Aries people found that they did not dare to try many things easily. Without the courage and hard work of the original, it might be a courageous contusion that would have a negative impact on them!</font></p><hr><br>You can choose anothor constellation by enter the name:<br><center><table><tr><td><font class=\"red\" size=5 px>Aries</font></td><td><font class=\"red\" size=5 px>Taurus</font></td><td><font class=\"red\" size=5 px>Gemini</font></td><td><font class=\"red\" size=5 px>Cancer</font></td></tr><tr><td><font class=\"red\" size=5 px>Leo</font></td><td><font class=\"red\" size=5 px>Virgo</font></td><td><font class=\"red\" size=5 px>Libra</font></td><td><font class=\"red\" size=5 px>Scorpio</font></td></tr><tr><td><font class=\"red\" size=5 px>Sagittarius</font></td><td><font class=\"red\" size=5 px>Capricorn</font></td><td><font class=\"red\" size=5 px>Aquarius</font></td><td><font class=\"red\" size=5 px>Pisces</font></td></tr></table><hr><br><br><br>";

        //change the image
        document.getElementById('story-image').src = "";
        document.getElementById('story-image').alt = "";
        document.getElementById("story-image").className = "";
        document.getElementById('story-image').height = "";

        //change containers bg-color 
        document.getElementById("container").className = "bg-white";

        //change the audio to blank which stops the audio
        document.getElementById('story-audio').src = "";

    }
    // ---------------------------------
    // "choice 2" choice
    else if (choice == "Taurus" || choice == "taurus") {

        // set the next step in the story.
        nextStep = "<H2><img src=\"images/Taurus.png\" width=40px><font color=#DC143C>Taurus: The day without money</font></H2><center><img src=\"images/taurus1.png\" width=300px><br></center><hr><p><font color=#ff6600>The Taurus people are probably the constellation of the most incompetent days, which will have a very bad influence on their psychology. Some people say that Taurus is a very awkward constellation. It is true that in the early days, Taurus people experienced a day without money, and naturally, they will have a very deep psychological impression. The Taurus people are not all extraordinarily material, but the things they like are not available, and they must be the most memorable for Taurus!</font></p><hr><br>You can choose anothor constellation by enter the name:<br><center><table><tr><td><font class=\"red\" size=5 px>Aries</font></td><td><font class=\"red\" size=5 px>Taurus</font></td><td><font class=\"red\" size=5 px>Gemini</font></td><td><font class=\"red\" size=5 px>Cancer</font></td></tr><tr><td><font class=\"red\" size=5 px>Leo</font></td><td><font class=\"red\" size=5 px>Virgo</font></td><td><font class=\"red\" size=5 px>Libr</font></td><td><font class=\"red\" size=5 px>Scorpio</font></td></tr><tr><td><font class=\"red\" size=5 px>Sagittarius</font></td><td><font class=\"red\" size=5 px>Capricorn</font></td><td><font class=\"red\" size=5 px>Aquarius</font></td><td><font class=\"red\" size=5 px>Pisces</font></td></tr></table><hr><br><br><br>";

        //change the image
        document.getElementById('story-image').src = "";
        document.getElementById('story-image').alt = "";
        document.getElementById("story-image").className = "";
        document.getElementById('story-image').height = "";

        //change containers bg-color 
        document.getElementById("container").className = "bg-white";

        //change the audio to blank which stops the audio
        document.getElementById('story-audio').src = "";

    }
    // ---------------------------------
    // "choice 3" choice
    else if (choice == "Gemini" || choice == "gemini") {

        // set the next step in the story.
        nextStep = "<H2><img src=\"images/Gemini.png\" width=40px><font color=#9900ff>Gemini: contempt form friends</font></H2></H2><center><img src=\"images/gemini1.png\" width=300px><br></center><hr><p><font color=#cc33cc>The most indispensable group of people in the growth of Gemini is friends. Most Geminis have many friends around them, and the contempt and disapproval of friends are also the most unacceptable for Gemini. Gemini people trust their friends very much, and they also like to pass on information. Generally, they will tell friends to discuss things. The contempt of friends and the disappointment of Gemini people make them feel inferior. In order to maintain a meager relationship, Gemini is painstaking.</font></p><hr><br>You can choose anothor constellation by enter the name:<br><center><table><tr><td><font class=\"red\" size=5 px>Aries</font></td><td><font class=\"red\" size=5 px>Taurus</font></td><td><font class=\"red\" size=5 px>Gemini</font></td><td><font class=\"red\" size=5 px>Cancer</font></td></tr><tr><td><font class=\"red\" size=5 px>Leo</font></td><td><font class=\"red\" size=5 px>Virgo</font></td><td><font class=\"red\" size=5 px>Libra</font></td><td><font class=\"red\" size=5 px>Scorpio</font></td></tr><tr><td><font class=\"red\" size=5 px>Sagittarius</font></td><td><font class=\"red\" size=5 px>Capricorn</font></td><td><font class=\"red\" size=5 px>Aquarius</font></td><td><font class=\"red\" size=5 px>Pisces</font></td></tr></table><hr><br><br><br>";

        //change the image
        document.getElementById('story-image').src = "";
        document.getElementById('story-image').alt = "";
        document.getElementById("story-image").className = "";
        document.getElementById('story-image').height = "";

        //change containers bg-color 
        document.getElementById("container").className = "bg-white";

        //change the audio to blank which stops the audio
        document.getElementById('story-audio').src = "";

    }
    // ---------------------------------
    // "choice 4" choice
    else if (choice == "Cancer" || choice == "cancer") {

        // set the next step in the story.
        nextStep = "<H2><img src=\"images/Cancer.png\" width=40px><font color=#666699>Cancer: the lack of family warmth</font></H2><center><img src=\"images/cancer1.png\" width=300px><br></center><hr><p><font color=#996699>A very crucial period on the growth path of Cancer is childhood. When children in Cancer did not get the care of their families and felt the warmth of the family, they would have a very sad side on their growth path. The people in Cancer are very sensitive. Especially when they are young, they need to be cared for and accompanied by the family. It is precisely at this time that the family does not give the Cancer people what they want. It must cause them to have negative emotions in their hearts and develop into Negative impact!</font></p><hr><br><br>You can choose anothor constellation by enter the name:<br><center><table><tr><td><font class=\"red\" size=5 px>Aries</font></td><td><font class=\"red\" size=5 px>Taurus</font></td><td><font class=\"red\" size=5 px>Gemini</font></td><td><font class=\"red\" size=5 px>Cancer</font></td></tr><tr><td><font class=\"red\" size=5 px>Leo</font></td><td><font class=\"red\" size=5 px>Virgo</font></td><td><font class=\"red\" size=5 px>Libra</font></td><td><font class=\"red\" size=5 px>Scorpio</font></td></tr><tr><td><font class=\"red\" size=5 px>Sagittarius</font></td><td><font class=\"red\" size=5 px>Capricorn</font></td><td><font class=\"red\" size=5 px>Aquarius</font></td><td><font class=\"red\" size=5 px>Pisces</font></td></tr></table><hr><br><br><br>";

        //change the image
        document.getElementById('story-image').src = "";
        document.getElementById('story-image').alt = "";
        document.getElementById("story-image").className = "";
        document.getElementById('story-image').height = "";

        //change containers bg-color 
        document.getElementById("container").className = "bg-white";

        //change the audio to blank which stops the audio
        document.getElementById('story-audio').src = "";

    }
    // ---------------------------------
    // "choice 5" choice
    else if (choice == "Leo" || choice == "leo") {

        // set the next step in the story.
        nextStep = "<H2><img src=\"images/Leo.png\" width=40px><font color=#CC0099>Leo: not recognized</font></H2><center><img src=\"images/leo1.png\" width=300px><br></center><hr><p><font color=#FF0099>Leo is a relatively strong leader, but it is a pain for him to be recognized. Leo people want to have the opportunity to lead others, but if he is always behind, he is not recognized. It must be something that makes the Leo people feel frustrated, and the Leo people themselves are also a group of people with very strong self-respect. Naturally, there will be negative emotions. Over time, this suppressed desire will become negative. Influence, accompanying the whole life.</font></p><hr><br>You can choose anothor constellation by enter the name:<br><center><table><tr><td><font class=\"red\" size=5 px>Aries</font></td><td><font class=\"red\" size=5 px>Taurus</font></td><td><font class=\"red\" size=5 px>Gemini</font></td><td><font class=\"red\" size=5 px>Cancer</font></td></tr><tr><td><font class=\"red\" size=5 px>Leo</font></td><td><font class=\"red\" size=5 px>Virgo</font></td><td><font class=\"red\" size=5 px>Libra</font></td><td><font class=\"red\" size=5 px>Scorpio</font></td></tr><tr><td><font class=\"red\" size=5 px>Sagittarius</font></td><td><font class=\"red\" size=5 px>Capricorn</font></td><td><font class=\"red\" size=5 px>Aquarius</font></td><td><font class=\"red\" size=5 px>Pisces</font></td></tr></table><hr><br><br><br>";

        //change the image
        document.getElementById('story-image').src = "";
        document.getElementById('story-image').alt = "";
        document.getElementById("story-image").className = "";
        document.getElementById('story-image').height = "";

        //change containers bg-color 
        document.getElementById("container").className = "bg-white";

        //change the audio to blank which stops the audio
        document.getElementById('story-audio').src = "";

    }

    // ---------------------------------
    // "choice 6" choice
    else if (choice == "Virgo" || choice == "virgo") {

        // set the next step in the story.
        nextStep = "<H2><img src=\"images/Virgo.png\" width=40px><font color=#660099>Virgo: Being picked up</font></H2><center><img src=\"images/virgo1.png\" width=300px><br></center><hr><p><font color=#FF0099>The Virgo is a perfectionist! Frequently being looked for by a person will make the Virgo person feel very inferior. Virgo is a person of the earth sign, with a relatively strong pessimistic factor, and there are many things that are denied in life and experience. Virgo will have a skeptical attitude towards himself. Virgo is not very positive and optimistic in life. On the contrary, it is suspicious. It is suspected by others. He even doubts his ability!</font></p><hr><br>You can choose anothor constellation by enter the name:<br><center><table><tr><td><font class=\"red\" size=5 px>Aries</font></td><td><font class=\"red\" size=5 px>Taurus</font></td><td><font class=\"red\" size=5 px>Gemini</font></td><td><font class=\"red\" size=5 px>Cancer</font></td></tr><tr><td><font class=\"red\" size=5 px>Leo</font></td><td><font class=\"red\" size=5 px>Virgo</font></td><td><font class=\"red\" size=5 px>Libra</font></td><td><font class=\"red\" size=5 px>Scorpio</font></td></tr><tr><td><font class=\"red\" size=5 px>Sagittarius</font></td><td><font class=\"red\" size=5 px>Capricorn</font></td><td><font class=\"red\" size=5 px>Aquarius</font></td><td><font class=\"red\" size=5 px>Pisces</font></td></tr></table><hr><br><br><br>";

        //change the image
        document.getElementById('story-image').src = "";
        document.getElementById('story-image').alt = "";
        document.getElementById("story-image").className = "";
        document.getElementById('story-image').height = "";

        //change containers bg-color 
        document.getElementById("container").className = "bg-white";

        //change the audio to blank which stops the audio
        document.getElementById('story-audio').src = "";

    }
    // ---------------------------------
    // "choice 7" choice
    else if (choice == "Libra" || choice == "libra") {

        // set the next step in the story.
        nextStep = "<H2><img src=\"images/Libra.png\" width=40px><font color=#336699>Libra: I feel that I am ugly</image></H2><center><img src=\"images/libra1.png\" width=300px><br></center><hr><p><font color=#6666CC>It’s ugly, it’s the thing that makes Libra feel less confident. The appearance is, of course, important, but it does not mean all! For Libra people, looks are too important. There is no such beauty in appearance. In fact, you can increase your inner beauty by reading more books or traveling, etc., so that you seem to be a well-educated person. Libra can not have a negative impact on your mind because of your looks! This is not worth it!</p></font></p><hr><br>You can choose anothor constellation by enter the name:<br><center><table><tr><td><font class=\"red\" size=5 px>Aries</font></td><td><font class=\"red\" size=5 px>Taurus</font></td><td><font class=\"red\" size=5 px>Gemini</font></td><td><font class=\"red\" size=5 px>Cancer</font></td></tr><tr><td><font class=\"red\" size=5 px>Leo</font></td><td><font class=\"red\" size=5 px>Virgo</font></td><td><font class=\"red\" size=5 px>Libra</font></td><td><font class=\"red\" size=5 px>Scorpio</font></td></tr><tr><td><font class=\"red\" size=5 px>Sagittarius</font></td><td><font class=\"red\" size=5 px>Capricorn</font></td><td><font class=\"red\" size=5 px>Aquarius</font></td><td><font class=\"red\" size=5 px>Pisces</font></td></tr></table><hr><br><br><br>";

        //change the image
        document.getElementById('story-image').src = "";
        document.getElementById('story-image').alt = "";
        document.getElementById("story-image").className = "";
        document.getElementById('story-image').height = "";

        //change containers bg-color 
        document.getElementById("container").className = "bg-white";

        //change the audio to blank which stops the audio
        document.getElementById('story-audio').src = "";

    }
    // ---------------------------------
    // "choice 8" choice
    else if (choice == "Scorpio" || choice == "scorpio") {

        // set the next step in the story.
        nextStep = "<H2><img src=\"images/Scorpio.png\" width=40px><font color=#339999>Scorpio: Betrayal of lovers</H2><center><img src=\"images/scorpio1.png\" width=300px><br></center><hr><p><font color=#669999>Everyone\'s growth path will encounter a few scums, but I am afraid that Scorpio is the least scum who knows how to get out. Scorpio people treat their friends and lovers in their lives with full power. For the betrayal of lovers and friends, Scorpio people can not walk out and feel the sadness of life. In fact, everyoness life will encounter such a thing, but Scorpio look too heavy!</font></p><hr><br>You can choose anothor constellation by enter the name:<br><center><table><tr><td><font class=\"red\" size=5 px>Aries</font></td><td><font class=\"red\" size=5 px>Taurus</font></td><td><font class=\"red\" size=5 px>Gemini</font></td><td><font class=\"red\" size=5 px>Cancer</font></td></tr><tr><td><font class=\"red\" size=5 px>Leo</font></td><td><font class=\"red\" size=5 px>Virgo</font></td><td><font class=\"red\" size=5 px>Libra</font></td><td><font class=\"red\" size=5 px>Scorpio</font></td></tr><tr><td><font class=\"red\" size=5 px>Sagittarius</font></td><td><font class=\"red\" size=5 px>Capricorn</font></td><td><font class=\"red\" size=5 px>Aquarius</font></td><td><font class=\"red\" size=5 px>Pisces</font></td></tr></table><hr><br><br><br>";

        //change the image
        document.getElementById('story-image').src = "";
        document.getElementById('story-image').alt = "";
        document.getElementById("story-image").className = "";
        document.getElementById('story-image').height = "";

        //change containers bg-color 
        document.getElementById("container").className = "bg-white";

        //change the audio to blank which stops the audio
        document.getElementById('story-audio').src = "";

    }
    // ---------------------------------
    // "choice 9" choice
    else if (choice == "Sagittarius" || choice == "sagittarius") {

        // set the next step in the story.
        nextStep = "<H2><img src=\"images/Sagittarius.png\" width=40px><font color=#993366>Sagittarius: When you are alone</H2><center><img src=\"images/sagittarius1.png\" width=300px><br></center><hr><p><font color=#CC3366>Sagittarius people are optimistic and cheerful, and there are really few negative emotions. But the Sagittarius is very afraid of being alone. When you are alone or when you are doing something, there will be negative emotions and negative effects. Most Sagittarius people are exogenous autistic patients, obviously, people who do not seem to care about the world at all, but when they are alone, they feel sad!</font></p><hr><br>You can choose anothor constellation by enter the name:<br><center><table><tr><td><font class=\"red\" size=5 px>Aries</font></td><td><font class=\"red\" size=5 px>Taurus</font></td><td><font class=\"red\" size=5 px>Gemini</font></td><td><font class=\"red\" size=5 px>Cancer</font></td></tr><tr><td><font class=\"red\" size=5 px>Leo</font></td><td><font class=\"red\" size=5 px>Virgo</font></td><td><font class=\"red\" size=5 px>Libra</font></td><td><font class=\"red\" size=5 px>Scorpio</font></td></tr><tr><td><font class=\"red\" size=5 px>Sagittarius</font></td><td><font class=\"red\" size=5 px>Capricorn</font></td><td><font class=\"red\" size=5 px>Aquarius</font></td><td><font class=\"red\" size=5 px>Pisces</font></td></tr></table><hr><br><br><br>";

        //change the image
        document.getElementById('story-image').src = "";
        document.getElementById('story-image').alt = "";
        document.getElementById("story-image").className = "";
        document.getElementById('story-image').height = "";

        //change containers bg-color 
        document.getElementById("container").className = "bg-white";

        //change the audio to blank which stops the audio
        document.getElementById('story-audio').src = "";

    }
    // ---------------------------------
    // "choice 10" choice
    else if (choice == "Capricorn" || choice == "capricorn") {

        // set the next step in the story.
        nextStep = "<H2><img src=\"images/Capricorn.png\" width=40px><font color=#663333>Capricorn: When the business is lost</H2><center><img src=\"images/capricorn1.png\" width=300px><br></center><hr><p><font color=#996633>The saddest thing for Capricorn is probably the failure of the business! The Capricorn people have a very strong career. Most of the Capricorn people\'s economic conditions and their working environment are not satisfactory when they are young. This has inspired the Capricorn people\'s fighting spirit, to work hard, to be proactive, to be able to climb the peak of life and the highest level of career. However, the road to success is often tortuous, roundabout, without failure, how can it be successful! So don\'t be too frustrated when Capricorn fails!</p><hr><br>You can choose anothor constellation by enter the name:<br><center><table><tr><td><font class=\"red\" size=5 px>Aries</font></td><td><font class=\"red\" size=5 px>Taurus</font></td><td><font class=\"red\" size=5 px>Gemini</font></td><td><font class=\"red\" size=5 px>Cancer</font></td></tr><tr><td><font class=\"red\" size=5 px>Leo</font></td><td><font class=\"red\" size=5 px>Virgo</font></td><td><font class=\"red\" size=5 px>Libra</font></td><td><font class=\"red\" size=5 px>Scorpio</font></td></tr><tr><td><font class=\"red\" size=5 px>Sagittarius</font></td><td><font class=\"red\" size=5 px>Capricorn</font></td><td><font class=\"red\" size=5 px>Aquarius</font></td><td><font class=\"red\" size=5 px>Pisces</font></td></tr></table><hr><br><br>";

        //change the image
        document.getElementById('story-image').src = "";
        document.getElementById('story-image').alt = "";
        document.getElementById("story-image").className = "";
        document.getElementById('story-image').height = "";

        //change containers bg-color 
        document.getElementById("container").className = "bg-white";

        //change the audio to blank which stops the audio
        document.getElementById('story-audio').src = "";

    }
    // ---------------------------------
    // "choice 11" choice
    else if (choice == "Aquarius" || choice == "aquarius") {

        // set the next step in the story.
        nextStep = "<H2><img src=\"images/Aquarius.png\" width=40px><font color=#6633CC>Aquarius: When being treated as a freak</H2><center><img src=\"images/aquarius1.png\" width=300px><br></center><hr><p><font color=#993399>Aquarius people are born with the feeling that \"everyone is drunk and I am awake\", can see a lot of things, and the thinking of Aquarius people is also very good, people can not think of things, Aquarius people can always be aware of the first time To the essence of things, only when Aquarius people discuss these esoteric topics with others, they are always treated as freaks. Aquarius is clearly capable of having a detached character, but it is not understood. Who knows this kind of loneliness?</font></p><hr><br>You can choose anothor constellation by enter the name:<br><center><table><tr><td><font class=\"red\" size=5 px>Aries</font></td><td><font class=\"red\" size=5 px>Taurus</font></td><td><font class=\"red\" size=5 px>Gemini</font></td><td><font class=\"red\" size=5 px>Cancer</font></td></tr><tr><td><font class=\"red\" size=5 px>Leo</font></td><td><font class=\"red\" size=5 px>Virgo</font></td><td><font class=\"red\" size=5 px>Libra</font></td><td><font class=\"red\" size=5 px>Scorpio</font></td></tr><tr><td><font class=\"red\" size=5 px>Sagittarius</font></td><td><font class=\"red\" size=5 px>Capricorn</font></td><td><font class=\"red\" size=5 px>Aquarius</font></td><td><font class=\"red\" size=5 px>Pisces</font></td></tr></table><hr><br><br><br>";

        //change the image
        document.getElementById('story-image').src = "";
        document.getElementById('story-image').alt = "";
        document.getElementById("story-image").className = "";
        document.getElementById('story-image').height = "";

        //change containers bg-color 
        document.getElementById("container").className = "bg-white";

        //change the audio to blank which stops the audio
        document.getElementById('story-audio').src = "";

    }
    // ---------------------------------
    // "choice 12" choice
    else if (choice == "Pisces" || choice == "pisces") {

        // set the next step in the story.
        nextStep = "<H2><img src=\"images/Pisces.png\" width=40px><font color=#006699>Pisces: too much love</H2><center><img src=\"images/pisces1.png\" width=300px><br></center><hr><p><font color=#666699>The most sad thing for Pisces is the loss of love, and the pain of overlapping love and tears is really unimaginable. Pisces people are negative emotions and negative effects caused by too many love stories. Pisces, you can naturally relax your feelings, do not care so much, right and wrong, but very helpless, Pisces people are sexy, and it is easy to be emotional.</font></p><hr><br>You can choose anothor constellation by enter the name:<br><center><table><tr><td><font class=\"red\" size=5 px>Aries</font></td><td><font class=\"red\" size=5 px>Taurus</font></td><td><font class=\"red\" size=5 px>Gemini</font></td><td><font class=\"red\" size=5 px>Cancer</font></td></tr><tr><td><font class=\"red\" size=5 px>Leo</font></td><td><font class=\"red\" size=5 px>Virgo</font></td><td><font class=\"red\" size=5 px>Libra</font></td><td><font class=\"red\" size=5 px>Scorpio</font></td></tr><tr><td><font class=\"red\" size=5 px>Sagittarius</font></td><td><font class=\"red\" size=5 px>Capricorn</font></td><td><font class=\"red\" size=5 px>Aquarius</font></td><td><font class=\"red\" size=5 px>Pisces</font></td></tr></table><hr><br><br><br>";

        //change the image
        document.getElementById('story-image').src = "";
        document.getElementById('story-image').alt = "";
        document.getElementById("story-image").className = "";
        document.getElementById('story-image').height = "";

        //change containers bg-color 
        document.getElementById("container").className = "bg-white";

        //change the audio to blank which stops the audio
        document.getElementById('story-audio').src = "";

    }
    // ---------------------------------
    // invalid choice
    else {

        // set the next step in the story.
        nextStep = "<H2><font=\"red\">Wrong</font><H2><P><br><br> Please choose your constellation by enter the name:<br><center><table><tr><td><img src=\"images/Aries.png\" width=40px><font class=\"red\" size=5 px>Aries</font></td><td><img src=\"images/Taurus.png\" width=40px><font class=\"red\" size=5 px>Taurus</font></td><td><img src=\"images/Gemini.png\" width=40px><font class=\"red\" size=5 px>Gemini</font></td><td><img src=\"images/Cancer.png\" width=40px><font class=\"red\" size=5 px>Cancer</font></td></tr><tr><td><img src=\"images/Leo.png\" width=40px><font class=\"red\" size=5 px>Leo</font></td><td><img src=\"images/Virgo.png\" width=40px><font class=\"red\" size=5 px>Virgo</font></td><td><img src=\"images/Libra.png\" width=40px><font class=\"red\" size=5 px>Libra</font></td><td><img src=\"images/Scorpio.png\" width=40px><font class=\"red\" size=5 px>Scorpio</font></td></tr><tr><td><img src=\"images/Sagittarius.png\" width=40px><font class=\"red\" size=5 px>Sagittarius</font></td><td><img src=\"images/Capricorn.png\" width=40px><font class=\"red\" size=5 px>Capricorn</font></td><td><img src=\"images/Aquarius.png\" width=40px><font class=\"red\" size=5 px>Aquarius</font></td><td><img src=\"images/Pisces.png\" width=40px><font class=\"red\" size=5 px>Pisces</font></td></tr></table><div id=\"choice-input\"><center><form><input id=\"choice\" type=\"text\" name=\"choice\"><button type=\"button\" onclick=\"writeStory()\">Next</button></form><br></center></div>";

        // hide the choice selection area (since this is an end point)
        document.getElementById('choice-input').style.display = "none";
    }

    // ---------------------------------------------------------------
    // (3) Clear the form input.
    document.getElementById('choice').value = "";

    // ---------------------------------------------------------------
    //(4) Write the new story to the page.
    document.getElementById("story-text").innerHTML = nextStep;

} // writeStory()
