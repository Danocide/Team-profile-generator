describe('Engineer role', () => {
    const testEngineer = {name: 'Tony 2 Toes', id: '123', email: 'test@email.com', github: 'gitTest'};
    test('should build employee info', () => {
        expect(new Engineer(testEngineer)).toBeDefined();
    });
    const newEngineer = new Engineer(testEngineer)

    test('getName returns Tony 2 Toes', () => {
        expect(newEngineer.getName()).toBe( testEngineer.name);
      });
    
      test('getId returns 123', () => {
        expect(newEngineer.getId()).toBe(testEngineer.id);
      });
    
      test('getEmail returns test@email.com', () => {
        expect(newEngineer.getEmail()).toBe(testEngineer.email);
      });
    
      test('getGithub returns gitTest', () => {
        expect(newEngineer.getGithub()).toBe(testEngineer.github);
      });
    
      test('getRole returns "Engineer"', () => {
        expect(newEngineer.getRole()).toBe('Engineer');
      });
})