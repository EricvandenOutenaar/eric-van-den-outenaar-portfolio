# Notes

In this Readme file I will first give instructons about how to clone this project and set it up on your computer. Next, I will analyse the user experience and design decisions (the VG-question - this project was the final assignment in my course Publiceringsverktyg at Tuc Yrkershögskola in Linköping, Sweden). That second part will be in Swedish.   

### Setup instructions

When cloning this project you will need to run a npm install in both frontend and backend folders.

After cloning you need to delete the upload folder and its contents (strapi backend). Create a new folder upload under extensions. Make sure to add your personal cloudinary details in the settings.json file. In your frontend you need to change settings for the contact.js file. You need your personal fromspree-account. 

In the backend you run a npm run develop to run the backend server locally. After that you can run in the frontend a 'gatsby develop' in order to run your porfoliowebsite locally. 

Via the admin panel of strapi you can create your own portfolio content. Be aware to run a gatsby develop again in the frontend in order to show the updated portfolio content. 


### Analys och utvärdering av användarens upplevelse och motivering av val av design och funktionsmässiga alternativ vid utveckling

I följande artikel ska jag först ge en analys av användarens upplevelse, sedan ska jag motivera val av design och layout och sedan ska jag motivera funktionsmässiga alternativ.

### Analys och utvärdering av användarens upplevelse 

Jag har delat min sida med två personer för att få feedback från användaren. Den ena personen (jag kallar den användare 1) jobbar som HR-anställd vid en stor offentlig organisation och har utvärderat många CV's i sitt arbetsliv. Den andra personen jobbar på en financiell avdelning vid ett internationellt företag och har som teamledare sett många CV’s (jag kallar personen användare 2).

**Feedbank användare 1:**

Sidan upplevdes som 'konsistent' (som en enhet). Han fick en bra bild av mig som person och min 'added value'. Personen tyckte särskilt om Projekt i fokus. Det ser vackert ut och han sa att det var ett bra sätt att visa sina kunskaper. Jag fick dock också kritik. Han tyckte bilden skulle kunna vara bättre. Det kändes lite som en ’selfie’. Sedan sa han att mitt CV innehåller för mycket text. Som HR-person vill han bara snabbt scanna fakta. Jag frågade om han menade mitt cv som man får när man klickar på Fullständigt CV. Nej, sa han. Han menade texten man ser när man landar på Mitt CV-sidan. Det är faktiskt en introtext eller mitt personliga brev. Det var otydligt för att när man klickar på Mitt CV-fliken då förväntade han ett CV, inte ett personligt brev först. Han hade även missat Ladda ner knappen helt och hållet. 

Som HR-ansvarig som landar på sidan skulle han helst ha en Download CV-knapp direkt på hemsidan, allstå i Heron. Han ville ha den snabbaste vägen till mitt fullständiga CV och sedan kanske läsa mer om mig och mitt personligt brev. Först snabba fakta, sedan fördjupning. 

**Feedbank användare 2:**

Användare 2 tyckte att portfoliosidan såg professionellt ut och har ett bra färgschema. Bilden såg bra ut, tyckte hon. Hon tyckte med att det med innehållet på Mitt CV-sidan var förvirrande. Man förväntar sig ett CV, men då läser man mer en slags Om mig-innehållet först. Kanske är det bättre att hålla båda typer av information isär, sa hon. Sedan tyckte hon inte så mycket om de Kontakta mig-knapp i Hero. Att det står ’Kontakta mig’ i början innan det ens stått någon mer info om mig (särskilt på mobilversionen). Det gav intrycket att hon senare behövde gå tillbaka till hemsidan för att klicka på knappen ’Kontakta mig’. Sedan testade hon mobila versionen noggrant och upptäckte saker som hon tyckte är otydliga/störande. 

- Vid ’Projekt i Fokus’ är det lite otydligt just nu vilken bild som tillhör vilken text. Det beror bland annat på att det visas en bild först och sedan en förklarande text MED ett siffra. Effekten av siffran är att det verkar som om texten tillhör bilden till nästa projekt som följer direkt efter detta.

- Stackitems i ’Projekt fokus’ kändes som buttons, men när man klickar händer inget.

- Stackitems i ’Senaste artiklar’  ser också ut som buttons. Hon klickte på dem för att läsa hela artikeln.

- Hon skulle vilja ha en liten bild av mig också på mobil. Man läser Jag heter Eric, men ser ingen person.

- I dropdownmenyn skulle hon också helst ha en länk till sidan man står faktiskt på. Kanske vet man inte vilken sida man är på nu. Då är det bra att se alla menylänkar, tyckte hon.

**Utvärdering:**

Jag har upplevt samma problem med Mitt CV -sidan och håller med om kritiken från båda användare. Det är lite otydligt hur informationen har strukturerats. Det borde inte vara möjligt att missa ’Ladda ner CV’-knappen heller (som användaren 1 gjorde). Då är det något fel, rent UX-mässigt. Min ’Call to action’ har i det här fallet inte fungerat. Jag tyckte om idén att ge möjligheten att ha en Download CV-button i min Hero. Kanske kan jag göra så att jag bifogar knappen bredvid Kontakta mig knappen. 

Sedan ska jag antagligen i en nästa iteration skapa en ny flik i menyn och en ny sida som heter Mer om mig. Där ska jag placera mitt personliga brev och på sidan Mitt CV ska jag bara framställa mitt hela CV och göra en button som heter Download som pdf. Då blir allt kanske lite mer tydligt. Om man klickar på en sida som heter mitt CV att man då faktiskt direkt kan läsa mitt CV och som extra steg får den i pdf-form. 

Jat tycker också att användare 2 hade bra kritik när det gäller Projekt i Fokus och det med Stack items som verkar vara buttons (båda på mobila versionen). Hennes analys när det gäller relationen mellan bild och text är helt rätt. Hon föreslår att ändra ordningen (först text, sedan bild). Det ska jag kolla på, men kanske kan lösningen vara även enklare: att göra de till mer tydliga Cards (alltså ger dem ’shadow’), precis som jag har gjort med mina bloggartiklar. Då blir det lättare att hålla isär projekten. När det gäller Stack-items håller jag också med. Kanske ska jag ta bort dem helt och hållet på mobila versionen. Problemet med Stack-items i ett Blog-artikelkort är att jag bara har inkluderat en ’stackitem’ per kort. Då verkar det som att det faktiskt är knappen som man måste klicka på för att se artikeln. 

Jag tyckte att kritiken om Dropdown-menyn är intressant, för att jag diskuterade just kring detta med läraren. Vi hade ett funktionellt problem att när man klickade på Hem och man står på Hem att då laddas inte sidan om helt och hållet. Det har antagligen att göra med hur React Router (Link) fungerar i det här fallet. Vi löste problemet genom att ändra den funktionsmässiga designen. Att ta bort Hem-länken i dropwdown meny när man är på Hem. Då resonerade vi att man vet att man är på Hem. Alltså UX-mässigt behövde vi inte ha länken. Det är intressant att höra att en användare upplever det annorlunda. Innan jag gör ändringar ska jag först testa om flera användare upplever detta på samma sätt.  

När det gället bilden ska jag antagligen ersätta den med en liten mer proffesionell bild. Jag skulle kanske vilje inkludera en bild från en kontorsmiljö eller någon annan scen och då ha en hero bild som fyller hela skärmen. Det var dock bra att höra från båda användare att sidan såg proffesionell och bra ut. Nu är det bara att fortsätta och experimentera med ändringarna och låta testa sidan igen. 

### Motivering val av design i frontend

Här följer motiveringar kring min layout. Jag fokuserar på desktop-skärmen. När man landar på webbsidan då ser man en Nav-komponent och en Hero-komponent. Nav-komponenten finns uppe och inte nere på sidan för att den måste ge direkt, snabb tillgång till alla delar av webbsidan. En användare vill kunna navigera bekvämt och få snabba svar på sitt informationsfrågor. Man riskerar att en användare tappar intressen om den måste scrolla ner först för att kunna navigera.  
Heros syfte är att få uppmärksamhet direkt och ’lura’ besökaren att stanna på sidan, klickar vidare. I Hero-komponenten finns bland annat en bild. Jag har använt mig av en bild av mig för att webbsidan handlar om mig. Skulle det kunna ha varit en abstrakt bild istället eller en bild av en vacker solnedgång? Nej! Som Mary Lister, Amerikansk ’content writer’ och marketing strategist, skriver i en intressant bloggartikel om bästa tillvägagångsättet kring en Hero image:’It may not need to be said, but your hero image should accurately represent what you intend to sell.’ I det här fallet är det inte en soldengång som jag försöka sälja, men mig själv. 
Källa quote: https://www.wordstream.com/blog/ws/2016/06/07/hero-images-guide. 

Lister och andra experter beskriver också att man måste inte använda för mycket text i din Hero. Texten behöver komplementera bilden och vara ’to the point’. Detta princip implementerar jag med. Jag använder mig dessutom av mycket white space i Hero layouten för att ge mycket utrymme till det som jag vill kommunicera i ’headern’ och min intro text. 
Jag placerar all viktig information direkt på landningssidan: man behöver inte scrolla vidare för att få informationen. ’The best website layouts deliver critical information with very little visitor input’, säger till exempel UX-designer Rob Wells i sin blogg om den perfekta layouten. ‘All of this information entices visitors to read, learn, click, thus converting almost instantly upon landing.’ Det finns därför också en knapp på Hero för att direkt ’konvertera’ (Call to action). Källa: https://www.crazyegg.com/blog/best-website-layouts/

Allt som är ’above the fold’ (alltså innan man scrollar) är ’primary information’ och allt som är ’below the fold’ är ’secondary information’. Det sista är information som stöder eller komplementerar information som är ’above the fold’. Jag följer ett visst mönster som gäller som ett bra flöde i webbdesign och hjälper till att kommunicera budskapet bra. Alltså när man scrollar ser man först Tjänster-delen. I den där delen ger jag svaret på frågan vilka problem jag kan hjälpa att lösa – vad jag  konkret kan erbjuda. ’The goal is to convince and educate your visitors on what exactly they’ll get out of using your service or buying your products’, poängterar webdesigner Connie Wong I en bra artikeln om layoutmönster. Källa: https://www.websitebuilderexpert.com/designing-websites/awesome-home-page-design-layouts/ 

Sedan följer delar på min landningssida (under/efter Tjänster) det som Wong kallar för ’trust indicators’. Det är innehållet som skapar tillit. Jag gör det genom att först ha en sektion med ’highlights’ utifrån mitt CV, sedan en sektion med arbetsprov (Projekt i Fokus) och till slut en sektion med featured bloggartiklar. Bloggartiklar kan också vara ett bra sätt att skapa tillit. Man kan presentera sig som expert på sitt ämne. 
I layouten av själva sektionerna används olika designprinciper. I Tjänster-sektionen använder jag mig till exempel av något som man kan kalla för ’Gallery Layout’. Man delar upp information i ’content cards’ som man placerar bredvid och under varandra (om det finns fler än tre kort till exempel). Varje ’content card’ börjar med en liten visuell bild/ikon, sedan följer en headline och esedan en text. Det är visuellt skönt för användaren. Men leder ögonen från mer abstrakt till mer konkret info.  
Jag använder mig också av en slags ’Gallery Layout’ vid Senaste Artiklar. Istället för en ikon öppnas varje content card med en bild. Layouten passar bra vid den här typen av sida påstår också Veronica Raducan, som är Content Writer hos Extend Studios. I hennes artikel upptäckte jag termen Gallery Layout och läste om nästan 20 vanliga webbdesignlayoutmönster: 
https://colibriwp.com/blog/website-layout-design-ideas/

I min Erfarenhet-sektion (på desktop view) har jag placerat knapparna vertikalt på vänstersidan och headline och text högt upp på första linjerna. Man kan påstå att jag i det där fallet använder mig av ett mönster som kallas för en F-layout. Det har undersökts hur man scannar en webbsida med sina ögon och F-layouten baseras på detta. Ögonen följer ett F-mönster. Det betyder att man börjar längst upp på vänstersidan och följer en linje till höger, sedan går man ner ett steg och följer en linje till höger, men dock lite mindre långt. Sedan scannar man snabbt resten av sidan, ungefär en linje nere fokuserat på vänsterdelen en av sidan. I den här artikeln går webdesigner Brandon Jones på djupet inne på det här mönstret:
https://webdesign.tutsplus.com/articles/understanding-the-f-layout-in-web-design--webdesign-687#:~:text=The%20F%2DLayout%20relies%20upon,of%20the%20screen%20most...&text=Then%20they%20scan%20the%20top,subscription%2C%20search%2C%20etc.

När det gäller flödet i Projekt-sektionen följer jag en så kallad Zig-Zag-Layout, också ett mönster baserat på hur många användare scannar content på en webbsida (i ett zig-zag-mönster). Det kan du också läsa om i den tidigare nämnda artikeln av Veronica Raducan. Användarens ögon går först från vänster till höger, sedan från höger, diagonalt, ner till vänster och sedan till höger igen. Jag uttnytar det här beteendet genom av skapa ett flöde i min Projekt-sektion-layout där man först ser en ’content card’ på vänster sida, sedan en nästa content card som ligger, under den första, men på höger sida och sedan en content card som ligger på vänstersidan igen.    

Till slut har jag placerat min Footer komponenten längst ner på webbsidan. I min Footer presenterar jag lite kort allmän info – mitt namn, copyright disclaimer, social links. Footer är en komponent som finns på varje delsida (precis som Navbarren). Copyright är en viktig aspekt av att kommunicera och kanske även upprepa på varje sida, men man vill inte trötta en användare genom att skriva om detta redan i en Nav. En Footer är dock det perfekta stället för att kommunicera den typen av information. 

Kort några funderingar kring layout på mobil-view. I mobil view har jag valt att göra en enklare version av sidan, särskilt när det gäller Nav och Hero. Nav ersätter jag med en hamburger meny och i Hero har jag tagit bort min bild i min Hero. Resten av layouten (Services, Erfarenhet, Projekt i Focus, Senaste Artiklar) har jag organiserat i en column – full width. Jag placerar alla content vertical – som blocks - på varandra. På detta sätt kan man lätt scrolla genom content som finns på landningssidan.    

### Motivera val av funktionsmässiga alternativ

’Never leave it up to your visitors to guess or figure out what to do next’, skriver webbdesigner Connie Wong i den tidigare nämnda artikeln. Jag tycker att det är en bra utgångspunkt för att bestämma vilka typer av interaktion man skulle ha på sin webbsida.  Alla knappar och effekter måste hjälpa användaren vidare i webbsidans flöde och på ett tydligt sätt ge tydliga ’call to actions’. Precis av den anledningen har jag till exempel placerat en stor knapp med ’Kontakta mig’ direkt i den Hero-delen (efter att man har landat på min sida och fått en kort intro då kan du direkt kontakta mig). Det är en tydlig ’call to action’. Efter varje sektion (utom Services) placerar jag med samma tanke en knapp i mitten. Efter att man har scannat till exempel min Erfarenhet får man direkt en knapp att klicka på mitt hela CV, samma gäller för Projekt och Bloggartiklar. En användare får direkt ett alternativ för att gå vidare (till alla Projekt, alla Artiklar) och behöver inte själv tänka var ska jag trycka nu. Användaren behöver inte scrolla upp igen för att hitta menyknapparna för att gå till alla projekt eller alla artiklar. Jag försöker att hjälpa användaren på detta sätt. Jag har även gjort den Navbar ’sticky’ för att ge användaren möjligheten att snabbt kunna nå menyknapparna oberoende av var man befinner sig på webbsidan.

Jag använder mig också av hovereffekter för att hjälpa användaren navigera genom information. När en användare ’hover’ över en content card i Tjänster-delen då ändrar bakgrundsfärgen och bokstavsfärgen. På detta sätt försöker jag att hjälpa läsaren att fokusera på precis det där kortet. På mobil fungerar den effekten dock inte så bra är jag medveten om. Då fungerar hover effekten inte och man måste faktiskt klicka på en ’content card’ för att få den highlight-effekten. Man skulle kunna anse att det inte är direkt tydligt att man måste klicka. Jag skulle kanske ha tagit bort ’hover-effekten’ helt och hållet på mobil.   

I Erfarenhet-delen använder jag mig också av knappar för att navigera. Jag har givit aktiva knappen en ’highlight’. Jag har gjort första knappen ’by default’ till ’aktiv’. Då blir det förhoppningsvist direkt tydligt att det finns en relation mellan knappen och innehållet bredvid (till högersidan). Användaren vet direkt: det är knappar och jag måste klicka på knapparna för att få fram jobbinnehållet. 

I Projekt i Fokus använder jag mig också av en hover-effekt när man scrollar på ett projekt. Bilderna är suddiga, men när man ’hover’ över den med musknappen då blir det mer skarpt. Jag har medvetet gjort det så att hover-effekten uppstår när man ’hover’ över en content card (bild eller text) och inte bara över bilden. Först hade jag skrivit kod för att bara skapa effekten när man nådde bilden, men det tyckte jag var lite mer otydligt för användaren. Text och bild är en enhet. Jag vill att varenda gång man scrollar över ett projekt att detta blir skarpt. 

Jag har även valt att använda mig av en slags transform-effekt när man hover över en av Senaste- artiklarna. Jag skulle kunna ha jobbat med knappar (Läs mer) i varje content card. Det är kanske en bättre lösning på mobil (läs kommentarerna av användare 2 till exempel i min användareanalys). Att använda den här effekten på desktop-view är vad man dock ser på många bloggwebbsidor. Effekten ger en direkt och tydlig signal som säger till användaren att klicka vidare för att se innehållet. I en följande iteration av webbsidan tänker jag dock ta bort effekten på den mobila sidan. Där fungerar denna effekt som tidigare konstaterat inte så bra. Där ska jag experimentera med andra funktionsmässiga alternativ som en mer tydlig knapp.      




 