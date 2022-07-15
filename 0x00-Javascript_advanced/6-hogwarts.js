class studentHogwarts {
    constructor(privateScore = 0, name = null) {
        this._privateScore = privateScore;
        this.name = name;
    }
    
    changeScoreBy(points) {
        this._privateScore += points;
    }
    
    setName(newName) {
        this.name = newName;
    }
    
    rewardStudent() {
        this.changeScoreBy(1);
    }

    penalizeStudent() {
        this.changeScoreBy(-1);
    }

    getScore() {
        return `${this.name}: ${this._privateScore}`;
    }
}

let harry = new studentHogwarts();
harry.setName('Harry')
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();

let draco = new studentHogwarts();
draco.setName('draco');
draco.rewardStudent();
draco.penalizeStudent();
draco.penalizeStudent();
draco.penalizeStudent();

console.log(harry.getScore());
console.log(draco.getScore());
