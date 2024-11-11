class Harry {

    constructor(title, releaseDate, mainActor,) {
        this.title = title,
        this.releaseDate = releaseDate,
        this.mainActor = mainActor



    }
    movieInformation(){
       return "The " + this.title + " movie was released in " + this.releaseDate + " and starred " + this.mainActor + " in the title role"


    }

}

var movie = new Harry("Red Stone", 2001, "Daniel Radcliffe")
console.log(movie.movieInformation())