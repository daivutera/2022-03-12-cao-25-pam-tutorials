Susikuriame lenteles:

users (id, email, password, reg_timestamp);
tutorials (id, user_id, title, content, private: boolean). 2. Sukuriame route’us:

Auth: POST /login
Auth: POST /register
Auth: GET /users (paduoda skaičių vartotojų - t.y. COUNT users įrašus)
Tutorials: GET /user-tutorials/:id (tik prisijungusiems - paduoda visus tutorialus, kurie priklauso specifiniam vartotojui pagal jo ID)
Tutorials: GET /tutorials (paduoda visus tutorialus, jei vartotojas auth - paduoda visus; jei neprisijungęs, tik tuos, kur private = 0)
Tutorials: POST /tutorials (tik prisijungusiems vartotojams, sukuria naują įrašą - user_id paima iš token)

3. Sukuriame frontend'ą, kuriame būtų galima prisiregistruoti, prisijungti ir pamatyti sukurtus įrašus iš tutorials lentelės.
