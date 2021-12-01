import calculate from '../../logic/calculate';

describe('testing for calculate funtion' , () =>{
    const num ={ total: null, next: null, operation: null };
    test('for addition', () =>{
        let result = calculate(num, '9');
        result = calculate(result, '+');
        result = calculate(result, '7');
        result = calculate(result, '=');
        expect(result.total).toBe('16');
    });
});