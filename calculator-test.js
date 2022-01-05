
it('should calculate the monthly rate correctly', function () {
    // ...
    const values = {
        amount: 10000,
        years: 8,
        rate: 5.8
    };
    expect(calculateMonthlyPayment(values)).toEqual('130.44')
});


it("should return a result with 2 decimal places", function () {
    // ..
    const values = {
        amount: 3000,
        years: 5,
        rate: 4.5
    };
    expect(calculateMonthlyPayment(values)).toEqual('55.93');
});

  /// etc