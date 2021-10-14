const personne = require('./personne');
// test age et name
test('Majeur', () => {
    const pers = new personne('John', 21);
    expect(pers.name).toContain('');
    expect(pers.age).toBeGreaterThanOrEqual(18);
});

    test('Minor', () => {
        const pers = new personne('achouak', 17);
        //expect(pers.name).toMatch(new RegExp('/^(([A-Za-z]+[\-\']?)*([A-Za-z]+)?\s)+([A-Za-z]+[\-\']?)*([A-Za-z]+)?$/'));
       // expect(pers.name).toMatch(new RegExp('/^(([A-Za-z]+[\-\']?)*([A-Za-z]+)?\s)+([A-Za-z]+[\-\']?)*([A-Za-z]+)?$/'));


        expect(pers.name).toMatch(/achouak/);
    expect(pers.name).toMatch(new RegExp('achouak'));

        expect(pers.age).toBeLessThan(18);
    });
   
       
   

