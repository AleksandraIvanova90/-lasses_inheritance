
export default class Character {
    
    constructor(name, type, health, level, attack, defence) {
        if (typeof name == 'number' || name.length < 2 || name.length > 4) {
            throw new Error("Кол-во символов в name от 2 до 4!")
        }
        if (!['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'].includes(type)) {
            throw new Error("Данные введены некорректно!")
        }
        this.name = name;
        this.type = type;
        this.health = health;
        this.level = level;
        this.attack = attack;
        this.defence = defence;

        // switch (type) {
        //     case 'Bowman':
        //         this.attack = 25;
        //         this.defence = 25;
        //         break
        //     case 'Swordsman':
        //         this.attack = 40;
        //         this.defence = 10;
        //         break
        //     case 'Magician':
        //         this.attack = 10;
        //         this.defence = 40;
        //         break
        //     case 'Daemon':
        //         this.attack = 10;
        //         this.defence = 40;
        //         break
        //     case 'Undead':
        //         this.attack = 25;
        //         this.defence = 25;
        //         break
        //     case 'Zombie':
        //         this.attack = 40;
        //         this.defence = 10;
        //         break
        // }
    }
}
