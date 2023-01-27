describe('Intern role', () => {
    const testIntern = {name: 'Timmy 2 Teeth', id: '123', email: 'test@email.com', school: 'UCF'};
    test('should build Intern info', () => {
        expect(new Intern(testIntern)).toBeDefined();
    });
    const newIntern = new Intern(testIntern)

    test('getName returns Timmy 2 Teeth', () => {
        expect(newIntern.getName()).toBe( testIntern.name);
      });
    
      test('getId returns 123', () => {
        expect(newIntern.getId()).toBe(testIntern.id);
      });
    
      test('getEmail returns test@email.com', () => {
        expect(newIntern.getEmail()).toBe(testIntern.email);
      });
    
      test('getSchool returns gitTest', () => {
        expect(newIntern.getSchool()).toBe(testIntern.school);
      });
    
      test('getRole returns "Intern"', () => {
        expect(newIntern.getRole()).toBe('Intern');
      });
})