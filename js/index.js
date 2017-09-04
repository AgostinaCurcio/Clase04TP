function Peliculas (tituloPelicula, anoPelicula, descripPelicula, actoresPelicula, directorPelicula){
	ID = 00812
	this.nombre = tituloPelicula
	this.anno = anoPelicula
	this.descripcion = descripPelicula
	this.actores = actoresPelicula
	this.director = directorPelicula
}


var elPadrino = new Peliculas("ElPadrino", 1980, "Mafia", ["Marlon Brando", "Andy García"], "Coppola")

var titanic = new Peliculas("Titanic", 1996, "Amor y Drama", ["Leonardo Di Caprio", "Kate Winslet"], "Cameron")
