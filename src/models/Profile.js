export class Profile {
    constructor(data){
        this.id = data.id || data._id
        this.name = data.name
        this.picture = data.picture 
        this.bio = data.bio
        this.resume = data.resume 
        this.class = data.class 
        this.github = data.github
        this.coverImg = data.coverImg
        this.graduated = data.graduated 
        this.email = data.email

    }
}