import Character from "../class/Character";


test('should throw an error if name length is less than 2', () => {
    expect(() => {
        new Character('B', 'Bowman', 100, 1, 25, 25);
    }).toThrow('Кол-во символов в name от 2 до 4!');
});

test('should throw an error if name length is more than 4', () => {
    expect(() => {
        new Character('Bobbi', 'Bowman', 100, 1, 25, 25);
    }).toThrow('Кол-во символов в name от 2 до 4!');
});

test('should throw an error if type is not valid', () => {
    expect(() => {
        new Character('Bob', 'Warrior', 100, 1, 25, 25);
    }).toThrow('Данные введены некорректно!');
});
