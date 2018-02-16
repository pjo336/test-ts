describe('app', () => {
  const bar = {
    foo: () => 1,
  };

  it('asserts 1 === 1', () => {
    const stub = sandbox.stub(bar, 'foo').returns(3);
    const result = bar.foo();
    expect(result).to.eq(3);
    expect(stub).to.have.callCount(1);
    expect(1).to.eq(1);
  });

  it('tests stubs reset', () => {
    expect(bar.foo()).to.eq(1);
  });

});