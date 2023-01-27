const { default: test } = require('node:test');
const Employee = require('../lib/Employee')

describe('Employee role', () => {
    const testEmployee = {name: 'Rick James', id: '123', email: 'test@email.com', github: 'gitTest'};
    test('should build employee info', () => {
        expect(new Employee(testEmployee)).toBeDefined();
    });
    const newEmployee = new Employee(testEmployee)

    test('getName returns Rick James', () => {
        expect(newEmployee.getName()).toBe( testEmployee.name);
      });
    
      test('getId returns 123', () => {
        expect(newEmployee.getId()).toBe(testEmployee.id);
      });
    
      test('getEmail returns test@email.com', () => {
        expect(newEmployee.getEmail()).toBe(testEmployee.email);
      });
    
      test('getGithub returns gitTest', () => {
        expect(newEmployee.getGithub()).toBe(testEmployee.github);
      });
    
      test('getRole returns "Employee"', () => {
        expect(newEmployee.getRole()).toBe('Employee');
      });
})