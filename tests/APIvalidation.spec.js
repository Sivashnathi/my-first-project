
const {test,expect} = require('../Fixtures/baseFixture');


test('UI+API validation',async({page,request,homepage,loginpage})=>{
    const email = `siva12${Date.now()}@gmail.com`;
    const pass = 'Siva123';

    const response = await request.post('https://automationexercise.com/api/createAccount',
        {
            form: {
                name:'siva',
                email:email,
                password: pass,
                title: 'Mr',
                birth_date: '10',
                birth_month: '5',
                birth_year: '1995',
                firstname: 'Siva',
                lastname: 'Shanthi',
                company: 'ABC',
                address1: 'Hyderabad',
                address2: 'India',
                country: 'India',
                zipcode: '500001',
                state: 'Telangana',
                city: 'Hyderabad',
                mobile_number: '9876543210'
            }
        }
    );
    expect(response.status()).toBe(200);
    const data = JSON.parse(await response.text());
    console.log(data);
    console.log('Email:', email);
    console.log('Password:', pass);

    expect (data.responseCode).toBe(201);
    expect (data.message).toContain('User created!');
    await page.goto(process.env.BASE_URL);

    await homepage.navigatetosignuplogin();
    await loginpage.login(email,pass);
    await expect(page.getByText('Logged in as')).toBeVisible();



    




})