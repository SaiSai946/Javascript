class Personnage {
  constructor(pseudo, classe, sante, attaque){
    this.pseudo  = pseudo;
    this.classe  = classe;
    this.sante   = sante;
    this.attaque = attaque;
    this.niveau  = 1;
  }

 get informations() {
    return this.pseudo + "(" + this.classe + ")" + " a " + this.sante + " points de vie et est au niveau " + this.niveau + "." 
  }

  evoluer() {
    this.niveau ++;
    console.log(this.pseudo + " passe au niveau " + this.niveau);
  }

  verifierSante() {
    if(this.sante <= 0) {
      this.sante = 0;
      console.log(this.pseudo +" a perdu !");
    }
  }

 
}

class Magicien extends Personnage {
  constructor (pseudo){
    super(pseudo, "Magicien", 170, 90);
  }

  attaquer(Personnage) {
    Personnage.sante -= this.attaque;
    console.log(this.pseudo + " attaque " + Personnage.pseudo + " en lancant un sort (" + this.attaque + " dégats).");
    this.evoluer();
    Personnage.verifierSante();
  }

  coupSpecial(Personnage) {
    Personnage.sante -= this.attaque * 5;
    console.log(this.pseudo + " attaque avec son coup spéciale puissance des arcanes " + Personnage.pseudo + " (" + this.attaque * 5 + " dégats).");
    this.evoluer();
    Personnage.verifierSante();
  }
}

class Guerrier extends Personnage {
  constructor (pseudo){
    super(pseudo, "Guerrier", 350, 50);
  }

  attaquer(Personnage) {
    Personnage.sante -= this.attaque;
    console.log(this.pseudo + " attaque " + Personnage.pseudo + " avec son épée (" + this.attaque + " dégats).");
    this.evoluer();
    Personnage.verifierSante();
  }

  coupSpecial(Personnage) {
    Personnage.sante -= this.attaque * 5;
    console.log(this.pseudo + " attaque avec son coup spéciale haches de guerre " + Personnage.pseudo + " (" + this.attaque * 5 + " dégats).");
    this.evoluer();
    Personnage.verifierSante();
  }
}





var said = new Magicien("Said");
var erwan = new Guerrier("Erwan")
console.log(erwan.informations);
console.log(said.informations);
said.attaquer(erwan);
console.log(erwan.informations);
erwan.attaquer(said);
console.log(erwan.informations);
said.coupSpecial(erwan);