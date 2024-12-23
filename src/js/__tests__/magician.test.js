import Magician from "../class/Magician";

test('Правильно создается объект', () => {
    const magician = new Magician('Mag');
    const correct = {
        name: 'Mag',
        type: 'Magician',
        health: 100,
        level: 1,
        attack: 10,
        defence: 40
    };
    expect(magician).toEqual(correct);
})