class Editor{
    constructor(id,name,profilePic,bio,editorAccountId){
        this.id = id;
        this.name = name;
        this.profilePic = profilePic;
        this.bio = bio;
        this.foreignKeyAccountId = editorAccountId;

    }

    getId(){
        return this.id
    }
    getName(){
        return this.name
    }
    getProfilePic(){
        return this.profilePic
    }
    getBio(){
        return this.bio
    }
    getEditorAccountId(){
        return this.foreignKeyAccountId
    }
}

module.exports = Editor;
