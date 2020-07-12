# api-lunaterra-app

API para obtener cartas del juego LEYENDS OF LUNATERRA.

https://api-lunaterra-app.herokuapp.com/

Envía una petición GET a "/carta" con los siguientes parámetros (todos opcionales y deben ser escritas como lo explico a continuación):

name="" ---> Nombre de la carta. Si quieres encontrar solo por su nombre, se ignorará el resto de los parámetros. Ej: Lucian, Braum, etc.

region="" ---> Región de las cartas: "Demacia", "Freljord", "Jonia", "Noxus", "Piltover y Zaun", "Islas de la Sombra".

type="" ---> Tipo de carta: "Unidad", "Hechizo".

rarity="" ---> Rareza de la carta: "COMÚN", "RARA", "ÉPICA", "Campeón".

cost="" ---> Coste de maná: "0" a "10" inclusive.

EJEMPLOS DEL QUERY:

/carta?name="Lucian"

/carta?region="Freljord"&type="Unidad"

/carta?rarity="COMÚN"&region="Demacia"&cost="3"
