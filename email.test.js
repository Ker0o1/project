const { validateEmail } = require('../email');





  test('valid email addresses', () => {
    expect(validateEmail('test@example.com')).toBe(true);
    expect(validateEmail('user.name+tag+sorting@example.com')).toBe(true);
  });

  
  test(' invalid email addresses', () => {
    expect(validateEmail('plainaddress')).toBe(false);
    expect(validateEmail('@missingusername.com')).toBe(false);
    expect(validateEmail('missingatdomain.com')).toBe(false);
    expect(validateEmail('username@.com')).toBe(false);
  });
  test('Non-string inputs', () => {
    expect(validateEmail('123')).toBe(false);
    expect(validateEmail('null')).toBe(false);
    expect(validateEmail('undefined')).toBe(false);
    expect(validateEmail('{}')).toBe(false);
  });

  
  
    
 