describe('Manager role', () => {
    const testManager = {name: 'Tickle me Toby', id: '123', email: 'test@email.com', officePhone: '123456789'};
    test('should build Manager info', () => {
        expect(new Employee(testManager)).toBeDefined();
    });
    const newEmployee = new Employee(testEmployee)

    test('getName returns Tickle me Toby', () => {
        expect(newManager.getName()).toBe(testManager.name);
      });
    
      test('getId returns 123', () => {
        expect(newManager.getId()).toBe(testManager.id);
      });
    
      test('getEmail returns test@email.com', () => {
        expect(newManager.getEmail()).toBe(testManager.email);
      });
    
      test('getPhone returns gitTest', () => {
        expect(newManager.getPhone()).toBe(testManager.officePhone);
      });
    
      test('getRole returns "Manager"', () => {
        expect(newManager.getRole()).toBe('Manager');
      });
})