describe('Unit Test', () => {
    it('Should return 1', () => {
        const mockFunction = () => {
            return 1;
        };

        const result = mockFunction();
        expect(result).toBe(1);
    });

    it('Should throw error', () => {
        const mockFunction = () => {
            throw new Error('Function Error');
        };

        expect(mockFunction).toThrow('Function Error');
    });
});
